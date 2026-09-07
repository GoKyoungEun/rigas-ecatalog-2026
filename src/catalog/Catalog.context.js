import {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { catalogConfigs as configs } from "configs";

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { lang, pageSlug1, pageSlug2, pageSlug3 } = useParams();
  const { langSet, pageMap, breakpoint } = configs;

  const pageFlatMap = useMemo(() => flattenPages(pageMap), [pageMap]);
  const defaultPath = `/${lang || langSet[0]}/${pageFlatMap[0]}`;
  
  // 경로 파싱 개선
  let curPagePath;
  if (lang) {
    const pathParts = pathname.split(`/${lang}/`);
    curPagePath = pathParts.length > 1 ? pathParts[1] : pathname.replace(`/${lang}`, '');
  } else {
    // lang이 없으면 pathname에서 직접 추출
    curPagePath = pathname.startsWith('/') ? pathname.substring(1) : pathname;
  }
  
  // pageSlug1을 사용한 간단한 방법
  const pageMapIndex = pageMap.findIndex(page => {
    const pageName = typeof page === 'string' ? page : page.name;
    return pageName === pageSlug1;
  });
  
  // pageFlatMap에서의 실제 인덱스 찾기
  const pageIndex = pageFlatMap.findIndex(path => {
    if (pageSlug1 === 'company') {
      // company 페이지의 경우 pageSlug2와 pageSlug3도 고려
      if (pageSlug2 === 'products' && pageSlug3) {
        // products의 하위 페이지 (content1, content2)
        const expectedPath = `${pageSlug1}/${pageSlug2}/${pageSlug3}`;
        return path === expectedPath;
      } else {
        // company의 다른 페이지들
        const expectedPath = pageSlug2 ? `${pageSlug1}/${pageSlug2}` : `${pageSlug1}/overview`;
        return path === expectedPath;
      }
    } else if (pageSlug1 === 'system') {
      // system 페이지의 경우 pageSlug2도 고려
      const expectedPath = pageSlug2 ? `${pageSlug1}/${pageSlug2}` : `${pageSlug1}/overview`;
      return path === expectedPath;
    } else if (pageSlug1 === 'product') {
      if (pageSlug2 && pageSlug3) {
        // standard-gas, mixed-gas 등 중첩된 outlet의 하위 페이지
        const expectedPath = `${pageSlug1}/${pageSlug2}/${pageSlug3}`;
        return path === expectedPath;
      } else {
        const expectedPath = pageSlug2 ? `${pageSlug1}/${pageSlug2}` : `${pageSlug1}/cover`;
        return path === expectedPath;
      }
    } else if (pageSlug1 === 'catalog-index') {
      // catalog-index 페이지의 경우
      return path === pageSlug1;
    } else {
      // 다른 페이지의 경우 pageSlug1만 고려
      const pageName = path.split('/')[0];
      return pageName === pageSlug1;
    }
  });
  
  // 디버깅을 위한 로그
  console.log('pageSlug1:', pageSlug1, 'pageSlug2:', pageSlug2, 'pageSlug3:', pageSlug3, 'pageIndex:', pageIndex, 'pageFlatMap:', pageFlatMap);
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === pageFlatMap.length - 1;

  const [autoplayState, setAutoplayState] = useState(false);
  const autoplayTimer = useRef(null);

  const [pagingPending, setPagingPending] = useState(false);
  const pagingDebounce = useRef(null);

  const handleAutoplay = (action) => {
    if (action === "toggle") {
      setAutoplayState((prev) => !prev);
    } else {
      setAutoplayState(action);
    }
  };

  const paging = useCallback(
    (action, path, isAutoPaging) => {
      if (!isAutoPaging) handleAutoplay(false);

      let targetPage;

      switch (action) {
        case "prev":
          targetPage = pageFlatMap[pageIndex - 1];
          break;
        case "next":
          targetPage = pageFlatMap[pageIndex + 1];
          break;
        default:
          targetPage = path;
      }

      console.log('paging - action:', action, 'pageIndex:', pageIndex, 'targetPage:', targetPage, 'pageFlatMap:', pageFlatMap);
      if (targetPage) navigate(`/${lang}/${targetPage}`);
    },
    [lang, pageIndex, pageFlatMap, navigate],
  );

  const [isResponsive, setIsResponsive] = useState(false);
  const [activePageInfo, setActivePageInfo] = useState({});

  useEffect(() => {
    const resizeHandler = () => {
      setIsResponsive(breakpoint >= window.innerWidth);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [breakpoint]);

  useEffect(() => {
    // 언어가 유효하고 pageSlug1만 없는 경우 (예: /en/ -> /en/cover)
    if (lang && langSet.includes(lang) && !pageSlug1) {
      navigate(`/${lang}/${pageFlatMap[0]}`);
    }
    // 언어가 없거나 유효하지 않거나, 경로가 유효하지 않은 경우
    else if (!lang || !langSet.includes(lang) || (pageSlug1 && !pageFlatMap.includes(curPagePath))) {
      navigate(defaultPath);
    }
  }, [lang, curPagePath, defaultPath, langSet, pageFlatMap, pageSlug1]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        handleAutoplay("toggle");
      } else {
        handleAutoplay(false);
      }

      if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        paging("prev");
      } else if (["ArrowRight", "ArrowDown"].includes(e.key)) {
        paging("next");
      }
    };

    const handleWheel = (e) => {
      if (isResponsive) return;

      if (pagingPending) return;
      if (e.target.closest(".wheel_prevent")) return;

      setPagingPending(true);

      handleAutoplay(false);

      paging(e.deltaY > 0 ? "next" : "prev");

      clearTimeout(pagingDebounce.current);

      pagingDebounce.current = setTimeout(() => {
        setPagingPending(false);
      }, 800);
    };

    const handleClick = (e) => {
      if (!e.target.closest('[data-role="autoplayButton"]')) {
        handleAutoplay(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("click", handleClick);
    };
  }, [paging, isResponsive, pagingDebounce, pagingPending]);

  useEffect(() => {
    if (!configs.autoplay) return;

    if (autoplayState) {
      autoplayTimer.current = setInterval(() => {
        if (configs.autoplay.loop && isLastPage) {
          paging("default", pageFlatMap[0], true);
        } else if (isLastPage) {
          clearInterval(autoplayTimer.current);
          setAutoplayState(false);
        } else {
          paging("next", null, true);
        }
      }, configs.autoplay.delay);
    } else {
      clearInterval(autoplayTimer.current);
    }

    return () => clearInterval(autoplayTimer.current);
  }, [autoplayState, configs, pageIndex, isLastPage, paging]);

  return (
    <CatalogContext.Provider
      value={{
        configs,
        lang,
        pageSlug1,
        pageIndex,
        autoplayState,
        handleAutoplay,
        paging,
        isFirstPage,
        isLastPage,
        isResponsive,
        activePageInfo,
        setActivePageInfo,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => {
  return useContext(CatalogContext);
};

function flattenPages(pages, parentPath = "") {
  return pages.reduce((acc, page) => {
    const pagePath = parentPath
      ? `${parentPath}/${page.name}`
      : typeof page === "string"
        ? page
        : page.name;

    if (page.outlets) {
      page.outlets.forEach((outlet) => {
        if (typeof outlet === "string") {
          acc.push(`${pagePath}/${outlet}`);
        } else {
          acc.push(...flattenPages([outlet], pagePath));
        }
      });
    } else {
      acc.push(pagePath);
    }

    return acc;
  }, []);
}

export const PageIndex = () => {
  const { pageIndex } = useCatalog();
  const currentPage = typeof pageIndex === 'number' ? pageIndex + 1 : 1;
  console.log('PageIndex - pageIndex:', pageIndex, 'currentPage:', currentPage);
  return currentPage.toString().padStart(3, '0');
};
