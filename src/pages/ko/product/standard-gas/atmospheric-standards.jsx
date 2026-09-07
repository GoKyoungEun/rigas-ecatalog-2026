import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs, SpecTable, RangeSpecTable } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "standard-gas",
  depth3: "atmospheric-standards",
};

const components = [
  { label: "Nitric oxide", value: "NO" },
  { label: "Nitrogen dioxide", value: <>NO<sub>2</sub></> },
  { label: "Sulfur dioxide", value: <>SO<sub>2</sub></> },
  { label: "Carbon monoxide", value: "CO" },
  { label: "Oxygen", value: <>O<sub>2</sub></> },
  { label: "Hydrogen Chloride", value: "HCl" },
  { label: "Hydrogen fluoride", value: "HF" },
  { label: "Ammonia", value: <>NH<sub>3</sub></> },
  { label: "Carbon dioxide", value: <>CO<sub>2</sub></> },
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
  ["Hydrogen chloride", "1", "10,000", "µmol/mol", "±2~±5", "1~2"],
  ["Hydrogen fluoride", "1", "200", "µmol/mol", "±2~±10", "1~2"],
  [
    "Nitric oxide",
    "1",
    "5,000",
    "µmol/mol",
    {
      value: (
        <div className="spec-table-split-cell">
          <div className="spec-table-split-top">
            <span>±1~±3</span>
            <span>1~2</span>
          </div>
          <div className="spec-table-split-bottom">Determined in accordance with the customer's needs</div>
        </div>
      ),
      rowSpan: 3,
      colSpan: 2,
    },
  ],
  ["Sulfur dioxide", "1", "5,000", "µmol/mol"],
  ["Carbon monoxide", "1", "10,000", "µmol/mol"],
];

const mixtureNotes = [
  "Measurement uncertainty (Urel) and shelf life for Nitric Oxide, Sulfur Dioxide, and Carbon Monoxide mixtures are determined according to customer requirements.",
  "If you have any inquiry on products and mixing besides the above components and concentration, ask for consultation and we will provide further information.",
  "Urel. : relative expanded uncertainty",
];

export default function AtmosphericStandards() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail atmospheric-standards">
      <div className="bg">
        <Image src="product/standard-gas-bg.png" alt="" />
      </div>
      <Anime anime="fadeIn" delay={0.3} className="product-detail-visual">
        <Image src="product/standard-gas-img.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">STANDARD GAS</p>
            <h2 className="page-head-sbj">
              Atmospheric Environmental
              <br />
              Calibration Standards
            </h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              Environment is one of critical element affecting to our life. <br />
              Therefore, accurate standard gas shall be used to monitor and measure industrial effluents. <br />
              RIGAS Co., Ltd. Provides high accurate calibration standard gas for measuring various environmental pollutants.
            </p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <Tabs
            tabs={[
              { key: "components", label: "Components", content: <SpecTable items={components} /> },
              {
                key: "mixture",
                label: "Mixture Example",
                content: (
                  <RangeSpecTable
                    groups={mixtureGroups}
                    subHeaders={mixtureSubHeaders}
                    rows={mixtureRows}
                    notes={mixtureNotes}
                    colWidths={mixtureColWidths}
                  />
                ),
              },
            ]}
          />
        </Anime>
      </div>
    </CatalogPage>
  );
}
