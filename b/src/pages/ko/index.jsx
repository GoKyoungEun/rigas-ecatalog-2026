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
  { num: "03", label: "Qualified Agency", to: "/company/certification" },
  { num: "04", label: "R&D Achievement", to: "/company/facility" },
  { num: "05", label: "Global Network", to: "/company/global-network" },
];

const productItems = [
  { num: "01", label: "Maintaining Traceability", to: "/product/cover" },
  { num: "02", label: "Standard Gas", to: "/product/product01" },
  { num: "03", label: "Mixed Gas", to: "/product/mixed-gas" },
  { num: "04", label: "Gas Cylinder/Valve", to: "/product/manufacturing-process" },
  { num: "05", label: "rigas | ONE Series", to: "/product/one-series" },
  { num: "06", label: "rigas | PAS", to: "/product/pas" },
  { num: "07", label: "RIGAS Regulator for Calibration Gases", to: "/product/regulator" },
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
        <h2 className="index-panel-heading">We Set <br />The Standard</h2>
        <IndexList title="Company" items={companyItems} />
        <IndexList title="Product" items={productItems} />
      </motion.aside>
    </CatalogPage>
  );
}
