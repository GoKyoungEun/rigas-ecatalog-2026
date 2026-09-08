import { motion } from "framer-motion";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink } from "catalog/CatalogNavigations";

const pageInfo = {
  depth1: "index",
  depth2: "",
};

const companyItems = [
  { num: "01", label: "Overview", to: "/company/overview" },
  { num: "02", label: "History", to: "/company/history" },
  { num: "03", label: "Performance", to: "/company/performance" },
  { num: "04", label: "Global Network", to: "/company/global-network" },
  { num: "05", label: "Manufacturing / Analysis Process", to: "/company/analysis-process" },
];

const productItems = [
  { num: "01", label: "Traceability", to: "/product/traceability" },
  { num: "02", label: "Standard Gas", to: "/product/standard-gas/atmospheric-standards" },
  { num: "03", label: "Mixed Gas", to: "/product/mixed-gas/laser-gas-mixtures" },
  { num: "04", label: "rigas | ONE", to: "/product/rigas-one/rigas-one" },
  { num: "05", label: "Regulator", to: "/product/regulator" },
];

function IndexArrow() {
  return (
    <span className="index-panel-arrow" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
        <path d="M1 1L6.5 6L1 11" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

function IndexList({ title, items }) {
  return (
    <div className="index-panel-group">
      <h3 className="index-panel-group-title">{title}</h3>
      <ul className="index-panel-list">
        {items.map((item) => (
          <li key={item.label}>
            <CatalogLink to={item.to} className="index-panel-link">
              <span className="index-panel-num">{item.num}</span>
              <span className="index-panel-label">{item.label}</span>
              <IndexArrow />
            </CatalogLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Index() {
  return (
    <CatalogPage pageInfo={pageInfo} className="index-page">
      <motion.aside
        className="index-panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, ease: [0.85, 0.14, 0.29, 0.99], delay: 0.15 }}
      >
        <h2 className="index-panel-heading">We Create Gases</h2>
        <IndexList title="Company" items={companyItems} />
        <IndexList title="Product" items={productItems} />
      </motion.aside>
    </CatalogPage>
  );
}
