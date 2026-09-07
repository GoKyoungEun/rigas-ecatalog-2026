import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs, CategoryList, RangeSpecTable } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "mixed-gas",
  depth3: "laser-gas-mixtures",
};

const componentGroups = [
  { label: "Vision Correction", items: ["PRK, LASIK", "ArF = 193nm"] },
  { label: "Angioplasty & TMR", items: ["XeCl = 308nm"] },
  { label: "Microlithography", items: ["ArF = 193nm", "KrF = 248nm"] },
];

const mixtureGroups = [
  { label: "Components & Matrix", rowSpan: 2 },
  { label: "Excimer Laser Gas Mixtures", colSpan: 2 },
];

const mixtureSubHeaders = ["Type", "Concentration"];

const mixtureColWidths = ["38%", "31%", "31%"];

const mixtureRows = [
  ["Fluorine", { value: "ArF(193nm)", rowSpan: 3 }, "0.2cmol/mol"],
  ["Argon", "9.0cmol/mol"],
  ["Neon", ""],
  ["Hydrogen Chloride", { value: "XeCl(308nm)", rowSpan: 4 }, "0.06cmol/mol"],
  ["Hydrogen", "0.03cmol/mol"],
  ["Xenon", "1.50cmol/mol"],
  ["Neon", ""],
  ["Fluorine", { value: "KrF(248nm)", rowSpan: 3 }, "0.10cmol/mol"],
  ["Krypton", "1.00cmol/mol"],
  ["Neon", ""],
];

const mixtureNotes = [
  "If you have any inquiry on products and mixing besides the above components and concentration, ask for consultation and we will provide further information.",
  "Urel. : relative expanded uncertainty",
];

export default function LaserGasMixtures() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail laser-gas-mixtures">
      <div className="bg">
        <Image src="product/mixed-gas-bg1.jpg" alt="" />
      </div>
      <Anime anime="fadeIn" delay={0.3} className="product-detail-visual">
        <Image src="product/mixed-gas-img1.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">MIXED GAS</p>
            <h2 className="page-head-sbj">Laser Gas Mixtures</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              RIGAS excimer laser gas is used widely includings emiconductor manufacturing process, medical area or
              precision process.
            </p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <div className="spec-section">
            <Tabs tabs={[{ key: "components", label: "Components", content: <CategoryList groups={componentGroups} /> }]} />
          </div>

          <div className="spec-section">
            <Tabs
              tabs={[
                {
                  key: "mixture",
                  label: "Mixture Example",
                  scrollable: true,
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
          </div>
        </Anime>
      </div>
    </CatalogPage>
  );
}
