import { twMerge } from "tailwind-merge";
import { useCatalog } from "./Catalog.context";
import { useLayoutEffect, useState } from "react";

export default function CatalogContainer({ children }) {
  const { isResponsive } = useCatalog();
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div
      className={twMerge(
        "relative flex w-full items-center justify-center overflow-hidden bg-black",
        isResponsive && "block overflow-y-auto overflow-x-hidden bg-white",
      )}
      style={{
        height: isResponsive ? "auto" : `${height}px`,
        minHeight: `${height}px`,
      }}
    >
      {children}
    </div>
  );
}
