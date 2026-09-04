import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

function buildGlassMask(titleEl) {
  const width = titleEl.offsetWidth;
  const height = titleEl.offsetHeight;
  if (!width || !height) return null;

  const style = getComputedStyle(titleEl);
  const fontSize = parseFloat(style.fontSize);
  const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(width * dpr);
  canvas.height = Math.ceil(height * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "middle";
  ctx.font = `${style.fontWeight} ${fontSize}px ${style.fontFamily}`;

  titleEl.querySelectorAll("[data-glass-line]").forEach((lineEl) => {
    const words = lineEl.textContent.trim().split(/\s+/);
    const left = lineEl.offsetLeft;
    const top = lineEl.offsetTop;
    const boxWidth = lineEl.offsetWidth;
    const boxHeight = lineEl.offsetHeight;
    const rowCount = Math.max(1, Math.round(boxHeight / lineHeight));

    if (rowCount <= 1) {
      ctx.fillText(lineEl.textContent, left, top + boxHeight / 2);
      return;
    }

    const rows = [];
    let current = "";
    words.forEach((word) => {
      const attempt = current ? `${current} ${word}` : word;
      if (current && rows.length < rowCount - 1 && ctx.measureText(attempt).width > boxWidth) {
        rows.push(current);
        current = word;
      } else {
        current = attempt;
      }
    });
    if (current) rows.push(current);

    rows.forEach((row, rowIndex) => {
      ctx.fillText(row, left, top + lineHeight * (rowIndex + 0.5));
    });
  });

  return canvas.toDataURL("image/png");
}

export default function IntroHeroTextLayer() {
  const { pageSlug1 } = useParams();
  const isIndex = pageSlug1 === "index";
  const titleRef = useRef(null);
  const [maskImage, setMaskImage] = useState(null);

  useEffect(() => {
    if (!isIndex) return undefined;
    const titleEl = titleRef.current;
    if (!titleEl) return undefined;

    let cancelled = false;
    const rebuild = () => {
      const dataUrl = buildGlassMask(titleEl);
      if (!cancelled && dataUrl) setMaskImage(dataUrl);
    };

    rebuild();
    document.fonts?.ready?.then(rebuild);

    const observer = new ResizeObserver(rebuild);
    observer.observe(titleEl);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [isIndex]);

  if (!isIndex) return null;

  return (
    <div className="intro-hero-text-layer" style={{ top: "50%", left: 136, transform: "translateY(-50%)" }}>
      <h1
        ref={titleRef}
        className="intro-hero-title"
        data-glass={maskImage ? "true" : undefined}
      >
        <span data-glass-line>Reference Material</span>
        <br />
        <span data-glass-line>Professional Producer</span>
        <span
          className="intro-hero-title-glass"
          aria-hidden="true"
          style={maskImage ? { WebkitMaskImage: `url(${maskImage})`, maskImage: `url(${maskImage})` } : undefined}
        />
      </h1>
    </div>
  );
}
