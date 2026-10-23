import { useEffect, useRef } from "react";
import { useCatalog } from "./Catalog.context";

function isInsideHorizontalScroller(target) {
  for (let element = target; element && element !== document.body; element = element.parentElement) {
    const overflowX = window.getComputedStyle(element).overflowX;
    if (
      (overflowX === "auto" || overflowX === "scroll") &&
      element.scrollWidth > element.clientWidth
    ) {
      return true;
    }
  }
  return false;
}

export default function DragController({ swipeThreshold = 50, verticalThreshold = 30 }) {
  const { paging } = useCatalog();
  const gesture = useRef(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      gesture.current = null;
      if (e.touches.length !== 1 || !(e.target instanceof Element)) return;
      if (e.target.closest(".drag-prevent") || isInsideHorizontalScroller(e.target)) return;

      gesture.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchEnd = (e) => {
      const start = gesture.current;
      gesture.current = null;
      if (!start || e.changedTouches.length !== 1) return;

      const horizontalDistance = start.x - e.changedTouches[0].clientX;
      const verticalDistance = start.y - e.changedTouches[0].clientY;

      if (Math.abs(verticalDistance) >= verticalThreshold) return;
      if (horizontalDistance > swipeThreshold) paging("next");
      else if (horizontalDistance < -swipeThreshold) paging("prev");
    };

    const handleTouchCancel = () => {
      gesture.current = null;
    };

    document.body.addEventListener("touchstart", handleTouchStart);
    document.body.addEventListener("touchend", handleTouchEnd);
    document.body.addEventListener("touchcancel", handleTouchCancel);

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchend", handleTouchEnd);
      document.body.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [paging, swipeThreshold, verticalThreshold]);

  return null;
}
