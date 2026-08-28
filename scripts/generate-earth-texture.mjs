/**
 * Dense small-dot equirectangular earth for RIGAS globe.
 * Usage: node scripts/generate-earth-texture.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GEOJSON = path.join(__dirname, "ne_110m_land.geojson");
const OUT = path.join(ROOT, "public/images/company/earth-stylized.png");

const WIDTH = 4096;
const HEIGHT = 2048;
const OCEAN = "#FFFFFF";
const DOT = "#B5B5B5";

/** Small + dense. */
const STEP = 9;
const RADIUS = 2.4;

function pointInRing(lng, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const intersect =
      yi > lat !== yj > lat &&
      lng < ((xj - xi) * (lat - yi)) / (yj - yi + 1e-12) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function pointInPolygon(lng, lat, polygon) {
  if (!pointInRing(lng, lat, polygon[0])) return false;
  for (let h = 1; h < polygon.length; h++) {
    if (pointInRing(lng, lat, polygon[h])) return false;
  }
  return true;
}

function pointOnLand(lng, lat, features) {
  for (const feature of features) {
    const g = feature.geometry;
    if (!g) continue;
    if (g.type === "Polygon") {
      if (pointInPolygon(lng, lat, g.coordinates)) return true;
    } else if (g.type === "MultiPolygon") {
      for (const poly of g.coordinates) {
        if (pointInPolygon(lng, lat, poly)) return true;
      }
    }
  }
  return false;
}

function xyToLngLat(x, y) {
  const lng = (x / WIDTH) * 360 - 180;
  const lat = 90 - (y / HEIGHT) * 180;
  return [lng, lat];
}

function buildSvg(geojson) {
  const features = geojson.features;
  const circles = [];

  for (let row = 0, y = STEP / 2; y < HEIGHT; row++, y += STEP) {
    const xOffset = row % 2 === 0 ? 0 : STEP / 2;
    for (let x = STEP / 2 + xOffset; x < WIDTH; x += STEP) {
      const [lng, lat] = xyToLngLat(x, y);
      if (lat < -82 || lat > 84) continue;
      if (!pointOnLand(lng, lat, features)) continue;
      circles.push(
        `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${RADIUS}" fill="${DOT}"/>`,
      );
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="100%" height="100%" fill="${OCEAN}"/>
  ${circles.join("\n  ")}
</svg>`;
}

async function main() {
  const geojson = JSON.parse(fs.readFileSync(GEOJSON, "utf8"));
  const svg = buildSvg(geojson);

  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(OUT);

  const count = (svg.match(/<circle /g) || []).length;
  console.log(`Wrote ${OUT} (${fs.statSync(OUT).size} bytes, ${count} dots)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
