import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useCatalog } from "./Catalog.context";
import { useEffect } from "react";

// 개별 페이지 컴포넌트
export function CatalogPage({ children, className, pageInfo, ...props }) {
  const { isResponsive, setActivePageInfo } = useCatalog();

  const skipFade = pageInfo?.depth1 === "index";

  useEffect(() => {
    setActivePageInfo(pageInfo);
  }, []);

  return (
    <motion.main
      initial={skipFade ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: skipFade ? 0 : 0.5 }}
      className={twMerge("relative h-full w-full", isResponsive && "min-h-screen", className)}
      {...props}
    >
      {children}
    </motion.main>
  );
}
