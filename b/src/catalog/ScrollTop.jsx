import { useEffect } from "react";
import { useCatalog } from "./Catalog.context";
import { useLocation } from "react-router-dom";


// 스크롤 최상단 이동 기능
export default function ScrollTop() {
  const { isResponsive } = useCatalog();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isResponsive) {
      window.scrollTo(0, 0);
    }
  }, [pathname, isResponsive]);

  return null;
}
