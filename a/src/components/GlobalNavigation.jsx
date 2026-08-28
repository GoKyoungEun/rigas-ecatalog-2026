import { twMerge } from "tailwind-merge";
import {
  CatalogLink,
  CatalogPagingButton,
} from "catalog/CatalogNavigations";
import { PageIndex } from "catalog/Catalog.context";
import { useParams } from "react-router-dom";
import { Image, Lang } from "components/elements";

const companySubmenu = [
  "Overview",
  "History",
  "Qualified Agency",
  "R&D Achievement",
  "Global Network",
];

const productSubmenu = [
  "Maintaining Traceability",
  "Standard Gas",
  "Mixed Gas",
  "Gas Cylinder/Valve",
  "rigas | ONE Series",
  "rigas | PAS",
  "RIGAS Regulator for Calibration Gases",
];

export default function GlobalNavigation() {
  const { lang, pageSlug1, pageSlug2 } = useParams();

  const isCompanySection = pageSlug1 === "company" || pageSlug1 === "cover";
  const isProductSection = pageSlug1 === "product";
  const showHeader = pageSlug1 !== "intro" && pageSlug1 !== "last";

  return (
    <div className="pointer-events-none absolute left-0 top-0 z-[9999] h-full w-full">
      {showHeader && (
        <div className="rigas-header-wrap pointer-events-auto">
          <header className="rigas-header">
            <CatalogLink to="/intro" className="rigas-header-logo">
              <Image src="logo.svg" alt="RIGAS" />
            </CatalogLink>

            <nav className="rigas-header-nav">
              <div className="rigas-header-nav-item rigas-header-nav-item--company">
                <span className={twMerge("rigas-header-nav-label", isCompanySection && "active")}>
                  Company
                </span>
              </div>
              <span className="rigas-header-divider" aria-hidden="true" />
              <div className="rigas-header-nav-item rigas-header-nav-item--product">
                <span className={twMerge("rigas-header-nav-label", isProductSection && "active")}>
                  Product
                </span>
              </div>
            </nav>

            <div className="rigas-header-utils">
              {/* <CatalogLink
                className="lang-btn"
                to={(() => {
                  const targetLang = lang === "ko" ? "en" : "ko";
                  return `/${targetLang}/intro`;
                })()}
                fromRoot={true}
              >
                <Lang content={{ en: "KOR", ko: "ENG" }} />
              </CatalogLink> */}
              <CatalogLink to="/cover/index" className="rigas-header-menu" aria-label="Menu">
                <span />
                <span />
                <span />
              </CatalogLink>
            </div>
          </header>

          <div className="rigas-header-submenu rigas-header-submenu--company">
            <ul>
              {companySubmenu.map((label) => (
                <li key={label}>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rigas-header-submenu rigas-header-submenu--product">
            <ul>
              {productSubmenu.map((label) => (
                <li key={label}>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {!((pageSlug1 === "intro") || pageSlug1 === "last") && (
        <div className={twMerge("paging-box flex items-center w-[272px] *:pointer-events-auto", !(pageSlug1 === "cover" && pageSlug2 === "intro") && "paging-bg")}>
          <CatalogPagingButton
            direction="prev"
            className={twMerge("paging-prev", !(pageSlug1 === "cover" && pageSlug2 === "intro") && "disabled:opacity-50", (pageSlug1 === "cover" && pageSlug2 === "intro") && "opacity-0")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
              <g id="그룹_16668" data-name="그룹 16668" transform="translate(0 -1000)">
                <g id="사각형_4039" data-name="사각형 4039" transform="translate(0 1000)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0">
                  <rect width="80" height="80" stroke="none"/>
                  <rect x="0.5" y="0.5" width="79" height="79" fill="none"/>
                </g>
                <g id="그룹_23" data-name="그룹 23" transform="translate(27 1029)">
                  <g id="그룹_22" data-name="그룹 22">
                    <path id="패스_21" data-name="패스 21" d="M15.732,0V15.732H0" transform="translate(22.248 11.124) rotate(135)" fill="none" stroke="#9e9e9e" stroke-miterlimit="10" stroke-width="4"/>
                    <line id="선_1" data-name="선 1" x1="25.275" transform="translate(0.217 10.912)" fill="none" stroke="#9e9e9e" stroke-width="4"/>
                  </g>
                </g>
              </g>
            </svg>
          </CatalogPagingButton>
          <CatalogPagingButton
            direction="next"
            className={twMerge("paging-next disabled:opacity-50", (pageSlug1 === "cover" && pageSlug2 === "intro") && "active")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
              <g id="그룹_16667" data-name="그룹 16667" transform="translate(-1840 -1000)">
                <g id="사각형_4040" data-name="사각형 4040" transform="translate(1840 1000)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0">
                  <rect width="80" height="80" stroke="none"/>
                  <rect x="0.5" y="0.5" width="79" height="79" fill="none"/>
                </g>
                <g id="그룹_16664" data-name="그룹 16664" transform="translate(1867 1029)">
                  <g id="그룹_22" data-name="그룹 22" transform="translate(0)">
                    <path id="패스_21" data-name="패스 21" d="M15.731,15.732V0H0" transform="translate(14.368 0) rotate(45)" fill="none" stroke="#9e9e9e" stroke-miterlimit="10" stroke-width="4"/>
                    <line id="선_1" data-name="선 1" x2="25.275" transform="translate(0 10.912)" fill="none" stroke="#9e9e9e" stroke-width="4"/>
                  </g>
                </g>
              </g>
            </svg>
          </CatalogPagingButton>
        </div>
      )}
    </div>
  );
}
