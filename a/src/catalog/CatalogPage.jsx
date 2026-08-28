import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useCatalog } from "./Catalog.context";
import { useEffect } from "react";

// 개별 페이지 컴포넌트
export function CatalogPage({ children, className, pageInfo, ...props }) {
  const { isResponsive, setActivePageInfo } = useCatalog();

  const effect = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  useEffect(() => {
    setActivePageInfo(pageInfo);
  }, []);

  return (
    <motion.main
      variants={effect}
      initial="initial"
      animate="animate"
      className={twMerge("relative h-full w-full", isResponsive && "min-h-screen", className)}
      {...props}
    >
      {children}
    </motion.main>
  );
}
