import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { IMG_URL } from "configs";

const REGIONS = [
  { id: "korea", label: "Korea", lat: 36.5, lng: 128.2 },
  { id: "southeast-asia", label: "Southeast Asia", lat: 13.7563, lng: 100.5018 },
  { id: "china", label: "China", lat: 35.0, lng: 105.0 },
  { id: "middle-east", label: "Middle East", lat: 25.2048, lng: 55.2708 },
  { id: "europe", label: "Europe", lat: 48.8566, lng: 2.3522 },
];

const ROTATE_DURATION = 1600;
const HOLD_DURATION = 2800;

const OCEAN_RGB = [255, 255, 255];
const LAND_RGB = [190, 190, 190];
const TEXTURE_W = 4096;
const TEXTURE_H = 2048;

/** Fixed pin anchor — must match .global-network-marker left/top in CSS. */
const PIN_LEFT = 0.36;
const PIN_TOP = 0.28;

/**
 * SphereGeometry UV mapping (equirectangular, lng -180 at u=0).
 */
function latLngToVector3(lat, lng, radius = 1) {
  const u = (lng + 180) / 360;
  const v = (90 - lat) / 180;
  const phi = u * Math.PI * 2;
  const theta = v * Math.PI;
  return new THREE.Vector3(
    -radius * Math.cos(phi) * Math.sin(theta),
    radius * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function quaternionForRegion(lat, lng, activeDir) {
  const point = latLngToVector3(lat, lng).normalize();
  return new THREE.Quaternion().setFromUnitVectors(point, activeDir);
}

/** Raycast from fixed pin % → sphere surface direction for globe rotation. */
function activeDirFromPin(container, camera, target) {
  const ndcX = PIN_LEFT * 2 - 1;
  const ndcY = -(PIN_TOP * 2 - 1);

  camera.updateMatrixWorld();
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
  const hit = new THREE.Vector3();
  if (raycaster.ray.intersectSphere(new THREE.Sphere(new THREE.Vector3(0, 0, 0), 1), hit)) {
    return target.copy(hit).normalize();
  }
  return target.set(-0.38, 0.42, 0.82).normalize();
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function loadEarthTexture(url, maxAnisotropy = 4) {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.anisotropy = Math.max(maxAnisotropy, 8);
        texture.needsUpdate = true;
        resolve(texture);
      },
      undefined,
      reject,
    );
  });
}

export default function GlobeNetwork({ className }) {
  const globeRef = useRef(null);
  const mountRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const globeEl = globeRef.current;
    const mount = mountRef.current;
    if (!globeEl || !mount) return;

    let disposed = false;
    let frameId = 0;
    let resizeObserver;
    let earthTexture;

    const scene = new THREE.Scene();
    // Keep the full sphere inside the view frustum (padding) so canvas never square-clips it.
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 3.7);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.background = "transparent";
    mount.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // BasicMaterial keeps ocean pure white (Standard + lights turned white into gray).
    const earthMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      toneMapped: false,
    });
    const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 192, 192), earthMat);
    globeGroup.add(earth);

    // Pin is fixed in CSS — derive rotation anchor from its on-screen dot.
    const activeDir = new THREE.Vector3();
    const fromQuat = new THREE.Quaternion();
    const toQuat = new THREE.Quaternion();
    const currentQuat = new THREE.Quaternion();

    let regionIndex = 0;
    let nextIndex = 0;
    let phase = "hold";
    let phaseStart = performance.now();

    const syncActiveDir = () => {
      activeDirFromPin(globeEl, camera, activeDir);
    };

    const applyRegionPose = (index) => {
      syncActiveDir();
      const region = REGIONS[index];
      currentQuat.copy(quaternionForRegion(region.lat, region.lng, activeDir));
      globeGroup.quaternion.copy(currentQuat);
    };

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      if (phase === "hold") applyRegionPose(regionIndex);
    };

    applyRegionPose(0);
    resize();
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(globeEl);

    const animate = (ts) => {
      if (disposed) return;
      frameId = requestAnimationFrame(animate);
      const elapsed = ts - phaseStart;

      if (phase === "hold") {
        if (elapsed >= HOLD_DURATION) {
          nextIndex = (regionIndex + 1) % REGIONS.length;
          syncActiveDir();
          fromQuat.copy(globeGroup.quaternion);
          toQuat.copy(quaternionForRegion(REGIONS[nextIndex].lat, REGIONS[nextIndex].lng, activeDir));
          phase = "rotate";
          phaseStart = ts;
          setActiveIndex(nextIndex);
          setIsActive(false);
        }
      } else if (phase === "rotate") {
        const t = Math.min(elapsed / ROTATE_DURATION, 1);
        currentQuat.copy(fromQuat).slerp(toQuat, easeInOutCubic(t));
        globeGroup.quaternion.copy(currentQuat);
        if (t >= 1) {
          regionIndex = nextIndex;
          phase = "hold";
          phaseStart = ts;
          setIsActive(true);
        }
      }

      renderer.render(scene, camera);
    };

    (async () => {
      try {
        earthTexture = await loadEarthTexture(
          `${IMG_URL}/company/earth-stylized.png`,
          renderer.capabilities.getMaxAnisotropy(),
        );
        if (disposed) {
          earthTexture.dispose();
          return;
        }
        earthMat.map = earthTexture;
        earthMat.needsUpdate = true;
      } catch {
        // keep solid white
      }

      if (!disposed) {
        syncActiveDir();
        applyRegionPose(regionIndex);
        frameId = requestAnimationFrame(animate);
      }
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
      renderer.dispose();
      earth.geometry.dispose();
      earthMat.dispose();
      earthTexture?.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const activeRegion = REGIONS[activeIndex];

  return (
    <div ref={globeRef} className={className}>
      <div ref={mountRef} className="global-network-canvas" />
      <div className={`global-network-marker${isActive ? " is-active" : ""}`}>
        <span className="global-network-marker-label">{activeRegion.label}</span>
        <span className="global-network-marker-line" aria-hidden="true" />
        <span className="global-network-marker-dot" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
  );
}

export { REGIONS };
