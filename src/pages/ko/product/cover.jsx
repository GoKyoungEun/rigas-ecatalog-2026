import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink } from "catalog/CatalogNavigations";
import { Anime, Image } from "components/elements";
import { useCatalog } from "catalog/Catalog.context";
import { IMG_URL } from "configs";

const pageInfo = {
  depth1: "product",
  depth2: "cover",
};

function renderTitle(title) {
  return String(title)
    .split(/<br\s*\/?>/i)
    .map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line}
      </span>
    ));
}

const products = [
  {
    title: "Standard Gas",
    desc: "Certified calibration gases designed to ensure accurate measurement, analysis, and instrument performance.",
    deco: "product/card-deco01.svg",
    submenu: [
      { label: "Atmospheric Environmental Calibration Standards", to: "#" },
      { label: "Automobile Exhaust Gas Standards", to: "#" },
      { label: "Petrochemicaland Natural Gas Standards", to: "#" },
      { label: "Odor Standards", to: "#" },
      { label: "Volatile Organic Compound Standards(VOCs)", to: "#" },
    ],
  },
  {
    title: "Mixed Gas",
    desc: "Custom gas mixtures manufactured to meet diverse industrial, environmental, and research applications.",
    deco: "product/card-deco02.svg",
    submenu: [
      { label: "Laser Gas Mixtures", to: "#" },
      { label: "Other GasM ixtures", to: "#" },
    ],
  },
  {
    title: "Gas Cylinder<br />/Valve",
    desc: "Durable cylinders and precision valves engineered for safe storage and stable gas delivery.",
    deco: "product/card-deco03.svg",
    submenu: [],
  },
  {
    title: "rigas | ONE <br />Series",
    desc: "Compact 1L calibration gas solutions offering excellent portability, convenience, and reliability.",
    deco: "product/card-deco04.svg",
    submenu: [
      { label: "rigas | ONE", to: "#" },
      { label: "PAMS", to: "#" },
      { label: "TO-14A", to: "#" },
    ],
  },
  {
    title: "rigas | PAS",
    desc: "Pre-analysis system that removes contaminants and moisture to improve analytical accuracy and efficiency.",
    deco: "product/card-deco05.svg",
    submenu: [],
  },
  {
    title: "Regulator",
    desc: "High-performance regulators that provide precise pressure control and stable gas flow.",
    deco: "product/card-deco06.svg",
    submenu: [],
  },
];

export default function ProductCover() {
  const { isResponsive } = useCatalog();
  const mo = isResponsive;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index, hasSubmenu) => {
    if (!mo || !hasSubmenu) return;
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <CatalogPage
      pageInfo={pageInfo}
      className={twMerge("page-wrapper product-cover gnb-light", mo && "product-cover--mo")}
    >
      <section className="product-cover-hero">
        <div className="product-cover-hero-bg">
          <Image src="product/product-cover-bg.png" alt="" />
        </div>
        <Anime anime="fadeIn" delay={0.3} className="product-cover-hero-text">
          <h2>Product</h2>
          <p>
            RIGAS offers a comprehensive range of calibration gases and reference materials.
            <br />
            Our solutions are designed to deliver accuracy, reliability, and traceability across diverse industries.
          </p>
        </Anime>
      </section>

      <ul className="product-cover-grid">
        {products.map((item, index) => {
          const hasSubmenu = item.submenu?.length > 0;

          return (
            <li
              key={String(item.title).replace(/<br\s*\/?>/gi, "")}
              className={twMerge(
                "product-cover-item",
                hasSubmenu && "product-cover-item--has-submenu",
                mo && activeIndex === index && "is-active",
              )}
              onClick={() => handleCardClick(index, hasSubmenu)}
            >
              <Anime anime="fadeUp" delay={0.4 + index * 0.1} className="product-cover-item-inner">
                <div className="product-cover-item-icon">
                  <Image src="product/plus.svg" alt="" />
                </div>
                <h3>{renderTitle(item.title)}</h3>
                <hr className="product-cover-item-divider" />
                <p className="product-cover-item-desc break-keep">{item.desc}</p>

                {hasSubmenu && (
                  <ul className="product-cover-submenu">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <CatalogLink to={sub.to} className="product-cover-submenu-link">
                          <span>{sub.label}</span>
                          <Image src="product/arrow-right.svg" alt="" className="product-cover-submenu-arrow" />
                        </CatalogLink>
                      </li>
                    ))}
                  </ul>
                )}

                {hasSubmenu && (
                  <button
                    type="button"
                    className="product-cover-back"
                    aria-label="닫기"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                  >
                    <Image src="product/arrow-back.svg" alt="" />
                  </button>
                )}

                <div
                  className="product-cover-item-deco"
                  style={{
                    WebkitMaskImage: `url(${IMG_URL}/${item.deco})`,
                    maskImage: `url(${IMG_URL}/${item.deco})`,
                  }}
                  aria-hidden="true"
                />
              </Anime>
            </li>
          );
        })}
      </ul>
    </CatalogPage>
  );
}
