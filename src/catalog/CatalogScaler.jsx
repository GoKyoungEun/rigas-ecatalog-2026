import { useEffect, useState } from "react";
import { useCatalog } from "./Catalog.context";
import { twMerge } from "tailwind-merge";

// 반응형 스케일링 처리
export default function CatalogScaler({ children, className }) {
  const { configs, isResponsive } = useCatalog();
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!configs) return;

    const body = document.querySelector("body");
    body.style.overflow = isResponsive ? "auto" : "hidden";

    const resizeHandler = () => {
      setStyle(
        getStyle(
          configs.width,
          configs.height,
          getScale(configs.width, configs.height),
          isResponsive,
        ),
      );
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [configs, isResponsive]);

  return (
    <div
      style={style}
      className={twMerge(
        "relative h-[var(--height)] w-[var(--width)] flex-shrink-0 overflow-hidden bg-white",
        isResponsive && "h-auto min-h-screen overflow-y-auto overflow-x-hidden bg-white",
      )}
    >
      {children}
    </div>
  );
}

function getScale(width, height) {
  const deltaRatio = width / height;
  const windowRatio = window.innerWidth / window.innerHeight;
  return windowRatio <= deltaRatio ? window.innerWidth / width : window.innerHeight / height;
}

function getStyle(width, height, scaleRatio, isResponsive) {
  let style = {
    "--width": `${width || 1920}px`,
    "--height": `${height || 1080}px`,
    transform: `scale(${scaleRatio})`,
  };

  if (isResponsive) {
    style = {
      transform: "none",
      width: "100%",
      height: "auto",
    };
  }

  return style;
}
