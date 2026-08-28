import { useCatalog } from "./Catalog.context";
import { Link, useParams } from "react-router-dom";
import { Lang } from "components/elements";

export function CatalogLink({ to, children, className, relative, fromRoot, title }) {
  const { lang } = useParams();

  if (fromRoot && relative) {
    throw new Error("CatalogLink 컴포넌트의 fromRoot와 relative 속성은 함께 사용할 수 없습니다.");
  }

  let href;
  
  if (fromRoot) {
    // fromRoot가 true면 절대 경로 사용
    href = to?.startsWith("/") ? to : `/${to || ""}`;
  } else if (relative) {
    // relative가 true면 상대 경로 사용
    href = to?.startsWith("../") ? to : `./${to || ""}`;
  } else {
    // 기본적으로 현재 언어를 포함한 경로 사용
    const currentLang = lang || 'ko';
    const path = to?.startsWith("/") ? to : `/${to || ""}`;
    href = `/${currentLang}${path}`;
  }

  console.log('CatalogLink - lang:', lang, 'to:', to, 'href:', href);

  const handleClick = (e) => {
    if (!to) {
      e.preventDefault();
    }
  };

  return (
    <Link
      to={href || ""}
      className={className}
      relative={relative ? "path" : null}
      onClick={handleClick}
    >
      {title ? <Lang content={title} /> : children}
    </Link>
  );
}

/**
 * 자동재생 버튼 컴포넌트
 * @render { play: 재생버튼, pause: 정지버튼 }
 * @returns
 */
export function CatalogAutoplayButton({ render, onClick, className, ...props }) {
  const { autoplayState, handleAutoplay } = useCatalog();

  const handleClick = () => {
    handleAutoplay("toggle");
    onClick && onClick();
  };

  return (
    <button {...props} onClick={handleClick} className={className} data-role="autoplayButton">
      {!autoplayState ? render?.play : render?.pause}
    </button>
  );
}

export function CatalogPagingButton({ onClick, className, children, direction }) {
  if (!["prev", "next"].includes(direction)) {
    throw new Error("PagingButton 컴포넌트의 direction 값은 'prev' 또는 'next'만 가능합니다.");
  }

  const { paging, isFirstPage, isLastPage } = useCatalog();

  const handleClick = () => {
    paging(direction);
    onClick && onClick();
  };

  const disabled = direction === "prev" ? isFirstPage : isLastPage;

  return (
    <button onClick={handleClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
