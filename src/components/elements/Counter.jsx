import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

const formatNumber = (num, decimals) => {
  const parts = num.toFixed(decimals).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export default function Counter({
  value,
  direction = "up",
  className,
  delay = 0,
  decimals,
  springOptions = {
    damping: 100,
    stiffness: 200,
  },
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, springOptions);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      motionValue.set(direction === "down" ? 0 : value);
    }, delay * 1000);
    return () => clearTimeout(timeoutId);
  }, [motionValue, delay]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = formatNumber(Number(latest), decimals);
        }
      }),
    [springValue, decimals],
  );

  return (
    <span ref={ref} className={className}>
      00
    </span>
  );
}
