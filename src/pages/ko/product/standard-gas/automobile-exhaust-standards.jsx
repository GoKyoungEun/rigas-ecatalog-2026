import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, SpecTable, RangeSpecTable } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "standard-gas",
  depth3: "automobile-exhaust-standards",
};

const components = [
  { label: "Carbon dioxide", value: <>CO<sub>2</sub></> },
  { label: "Carbon monoxide", value: "CO" },
  { label: "Propane", value: <>C<sub>3</sub>H<sub>8</sub></> },
  { label: "Oxygen", value: <>O<sub>2</sub></> },
];

const mixtureGroups = [
  { label: "Components & Matrix", rowSpan: 2 },
  { label: "Nominal Fraction Range", colSpan: 3 },
  { label: <>Urel<br />(k=2) %</>, rowSpan: 2 },
  { label: <>Shelf<br />(year)</>, rowSpan: 2 },
];

const mixtureSubHeaders = ["From", "To", "Unit"];

const mixtureColWidths = ["26%", "13%", "15%", "15%", "16%", "15%"];

const mixtureRows = [
  ["Carbon dioxide", "5.0", "20.0", "cmol/mol", "±1~±2", "1~2"],
  [
    "Propane",
    "0.01",
    "1.00",
    "cmol/mol",
    { value: "Determined in accordance with the customer's needs", rowSpan: 4, colSpan: 2 },
  ],
  ["Carbon monoxide", "0.1", "5.0", "cmol/mol"],
  ["Oxygen", "0.1", "2.0", "cmol/mol"],
  ["Nitric Oxide", "0.01", "0.5", "cmol/mol"],
];

const mixtureNotes = [
  "If you have any inquiry on products and mixing besides the above components and concentration, ask for consultation and we will provide further information.",
  "Urel. : relative expanded uncertainty",
];

export default function AutomobileExhaustStandards() {
  return (
    <CatalogPage
      pageInfo={pageInfo}
      className="page-wrapper product-detail automobile-exhaust-standards"
    >
      <div className="bg">
        <Image src="product/standard-gas-bg2.jpg" alt="" />
      </div>
      <Anime anime="fadeIn" delay={0.3} className="product-detail-visual">
        <Image src="product/standard-gas-img2.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">STANDARD GAS</p>
            <h2 className="page-head-sbj">Automobile Exhaust Gas Standards</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              High-precision gas standards for accurate vehicle emissions testing. Designed to support calibration, analysis,
              and regulatory compliance. Reliable mixtures ensure consistent results across automotive applications.
            </p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <div className="spec-section">
            <div className="tabs-nav">
              <div className="tabs-nav-btn is-active">Components</div>
            </div>
            <div className="tabs-panel">
              <SpecTable items={components} />
            </div>
          </div>

          <div className="spec-section">
            <div className="tabs-nav">
              <div className="tabs-nav-btn is-active">Mixture Example</div>
            </div>
            <div className="tabs-panel">
              <RangeSpecTable
                groups={mixtureGroups}
                subHeaders={mixtureSubHeaders}
                rows={mixtureRows}
                notes={mixtureNotes}
                colWidths={mixtureColWidths}
              />
            </div>
          </div>
        </Anime>
      </div>
    </CatalogPage>
  );
}
