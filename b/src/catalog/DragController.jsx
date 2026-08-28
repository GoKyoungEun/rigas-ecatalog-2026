import { useState, useEffect } from "react";
import { useCatalog } from "./Catalog.context";

export default function DragController({ swipeThreshold = 50, verticalThreshold = 30 }) {
  const { paging } = useCatalog();

  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endY, setEndY] = useState(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.target.closest(".drag-prevent")) return;
      setStartX(e.touches[0].clientX);
      setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (e.target.closest(".drag-prevent")) return;
      setEndX(e.touches[0].clientX);
      setEndY(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      if (startX !== null && endX !== null && startY !== null && endY !== null) {
        const horizontalDistance = startX - endX;
        const verticalDistance = startY - endY;

        if (Math.abs(verticalDistance) < verticalThreshold) {
          if (horizontalDistance > swipeThreshold) {
            paging("next");
          } else if (horizontalDistance < -swipeThreshold) {
            paging("prev");
          }
        }
      }
      setStartX(null);
      setEndX(null);
      setStartY(null);
      setEndY(null);
    };

    document.body.addEventListener("touchstart", handleTouchStart);
    document.body.addEventListener("touchmove", handleTouchMove);
    document.body.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.body.removeEventListener("touchstart", handleTouchStart);
      document.body.removeEventListener("touchmove", handleTouchMove);
      document.body.removeEventListener("touchend", handleTouchEnd);
    };
  }, [startX, endX, startY, endY, paging]);

  return null;
}
