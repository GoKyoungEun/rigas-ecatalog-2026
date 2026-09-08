import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  CatalogLink,
  CatalogAutoplayButton,
  CatalogPagingButton,
} from "catalog/CatalogNavigations";
import { PageIndex } from "catalog/Catalog.context";
import { useLocation, useParams } from "react-router-dom";
import { Image, Lang } from "components/elements";

const headerSubmenus = {
  company: [
    { label: "Overview", to: "/company/overview" },
    { label: "History", to: "/company/history" },
    { label: "Performance", to: "/company/performance" },
    { label: "Global Network", to: "/company/global-network" },
    { label: "Manufacturing / Analysis Process", to: "/company/analysis-process" },
  ],
  product: [
    { label: "Traceability", to: "/product/traceability" },
    { label: "Standard Gas", to: "/product/standard-gas/atmospheric-standards" },
    { label: "Mixed Gas", to: "/product/mixed-gas/laser-gas-mixtures" },
    { label: "rigas | ONE Series", to: "/product/rigas-one/rigas-one" },
    { label: "Regulator", to: "/product/regulator" },
  ],
};

export default function GlobalNavigation() {
  const { lang, pageSlug1, pageSlug2 } = useParams();
  const { pathname } = useLocation();
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    setOpenSection(null);
  }, [pathname]);

  const isIndexPage = pageSlug1 === "index";
  const isLastPage = pageSlug1 === "last";
  const isCompanySection = pageSlug1 === "company";
  const isProductSection = pageSlug1 === "product";
  const showHeader = pageSlug1 !== "intro";

  return (
    <div className="pointer-events-none absolute left-0 top-0 z-[9999] h-full w-full">
      {showHeader && (
        <div
          className={twMerge(
            "rigas-header-wrap pointer-events-auto",
            isIndexPage && "rigas-header-wrap--index",
            isLastPage && "rigas-header-wrap--last",
            openSection && !isLastPage && "rigas-header-wrap--expanded",
          )}
          onMouseEnter={() => {
            if (!isLastPage) setOpenSection((current) => current || (isProductSection ? "product" : "company"));
          }}
          onMouseLeave={() => setOpenSection(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setOpenSection(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpenSection(null);
              event.stopPropagation();
              event.currentTarget.querySelector(`.rigas-header-nav-item--${openSection}`)?.focus();
              setOpenSection(null);
            }
          }}
        >
          <header className="rigas-header">
            <CatalogLink to="/intro" className="rigas-header-logo">
              <Image src="logo.svg" alt="RIGAS" />
            </CatalogLink>

            <nav className="rigas-header-nav" aria-label="Main navigation"
              onMouseOver={(event) => {
                const item = event.target.closest(".rigas-header-nav-item");
                if (item) setOpenSection(item.classList.contains("rigas-header-nav-item--product") ? "product" : "company");
              }}
              onFocus={(event) => {
                const item = event.target.closest(".rigas-header-nav-item");
                if (item) setOpenSection(item.classList.contains("rigas-header-nav-item--product") ? "product" : "company");
              }}
            >
              <CatalogLink to="/company/overview" className="rigas-header-nav-item rigas-header-nav-item--company">
                <span className={twMerge("rigas-header-nav-label", (openSection ? openSection === "company" : isCompanySection) && "active")}>
                  Company
                </span>
              </CatalogLink>
              <span className="rigas-header-divider" aria-hidden="true" />
              <CatalogLink to="/product/traceability" className="rigas-header-nav-item rigas-header-nav-item--product">
                <span className={twMerge("rigas-header-nav-label", (openSection ? openSection === "product" : isProductSection) && "active")}>
                  Product
                </span>
              </CatalogLink>
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
              <CatalogAutoplayButton
                className="rigas-header-autoplay"
                aria-label="Autoplay"
                render={{
                  play: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
                      <polygon points="13 9 22 16 13 23" fill="#fff" />
                    </svg>
                  ),
                  pause: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
                      <rect x="11" y="10" width="3" height="12" fill="#fff" />
                      <rect x="18" y="10" width="3" height="12" fill="#fff" />
                    </svg>
                  ),
                }}
              />
              <CatalogLink to="/index" className="rigas-header-menu" aria-label="Menu">
                <span className="rigas-header-menu-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </CatalogLink>
            </div>
          </header>
          {!isLastPage && Object.entries(headerSubmenus).map(([section, items]) => (
            <nav
              key={section}
              className="rigas-header-submenu"
              aria-label={`${section === "product" ? "Product" : "Company"} navigation`}
              hidden={openSection !== section}
              onClick={(event) => {
                if (event.target.closest("a")) setOpenSection(null);
              }}
            >
              <ul>
                {items.map((item) => (
                  <li key={item.to}>
                    <CatalogLink to={item.to}>{item.label}</CatalogLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      )}

      {pageSlug1 !== "intro" && (
        <div
          className={twMerge(
            "paging-box flex items-center w-[272px] *:pointer-events-auto",
            !(pageSlug1 === "cover" && pageSlug2 === "intro") && !isLastPage && "paging-bg",
          )}
        >
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
