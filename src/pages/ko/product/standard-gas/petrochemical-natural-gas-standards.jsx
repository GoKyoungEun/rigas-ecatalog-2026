import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs, SpecTable, RangeSpecTable } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "standard-gas",
  depth3: "petrochemical-natural-gas-standards",
};

const components = [
  {
    label: "Methane",
    value: (
      <>
        CH<sub>4</sub>
      </>
    ),
  },
  {
    label: "Ethylene",
    value: (
      <>
        C<sub>2</sub>H<sub>4</sub>
      </>
    ),
  },
  {
    label: "Cyclopropane",
    value: (
      <>
        C<sub>3</sub>H<sub>6</sub>
      </>
    ),
  },
  {
    label: "iso-Butane",
    value: (
      <>
        iso-C<sub>4</sub>H<sub>10</sub>
      </>
    ),
  },
  {
    label: "Propadiene",
    value: (
      <>
        C<sub>3</sub>H<sub>4</sub>
      </>
    ),
  },
  {
    label: "trans-2-Butene",
    value: (
      <>
        trans-2-C<sub>4</sub>H<sub>8</sub>
      </>
    ),
  },
  {
    label: "iso-Butylene",
    value: (
      <>
        iso-C<sub>4</sub>H<sub>8</sub>
      </>
    ),
  },
  {
    label: "cis-2-Butene",
    value: (
      <>
        cis-2-C<sub>4</sub>H<sub>8</sub>
      </>
    ),
  },
  {
    label: "iso-Pentane",
    value: (
      <>
        iso-C<sub>5</sub>H<sub>12</sub>
      </>
    ),
  },
  {
    label: "1, 2-Butadiene",
    value: (
      <>
        1,2-C<sub>4</sub>H<sub>6</sub>
      </>
    ),
  },
  {
    label: "Methylacetylene",
    value: (
      <>
        C<sub>3</sub>H<sub>4</sub>
      </>
    ),
  },
  {
    label: "Ethyl acetylene",
    value: (
      <>
        C<sub>4</sub>H<sub>6</sub>
      </>
    ),
  },
  { label: "etc.", value: "" },
  {
    label: "Ethane",
    value: (
      <>
        C<sub>2</sub>H<sub>6</sub>
      </>
    ),
  },
  {
    label: "Propane",
    value: (
      <>
        C<sub>3</sub>H<sub>8</sub>
      </>
    ),
  },
  {
    label: "Propylene",
    value: (
      <>
        C<sub>3</sub>H<sub>6</sub>
      </>
    ),
  },
  {
    label: "n-Butane",
    value: (
      <>
        n-C<sub>4</sub>H<sub>10</sub>
      </>
    ),
  },
  {
    label: "Acetylene",
    value: (
      <>
        C<sub>2</sub>H<sub>2</sub>
      </>
    ),
  },
  {
    label: "1-Butene",
    value: (
      <>
        1-C<sub>4</sub>H<sub>8</sub>
      </>
    ),
  },
  {
    label: "Cyclopentane",
    value: (
      <>
        C<sub>5</sub>H<sub>10</sub>
      </>
    ),
  },
  {
    label: "2, 2-Dimethylpropane",
    value: (
      <>
        2,2-C<sub>5</sub>H<sub>12</sub>
      </>
    ),
  },
  {
    label: "n-Pentane",
    value: (
      <>
        n-C<sub>5</sub>H<sub>12</sub>
      </>
    ),
  },
  {
    label: "1, 3-Butadiene",
    value: (
      <>
        1,3-C<sub>4</sub>H<sub>6</sub>
      </>
    ),
  },
  {
    label: "Vinyl acetylene",
    value: (
      <>
        C<sub>4</sub>H<sub>4</sub>
      </>
    ),
  },
  {
    label: "trans-2-Pentene",
    value: (
      <>
        trans-2-C<sub>5</sub>H<sub>10</sub>
      </>
    ),
  },
];

const mixtureGroups = [
  { label: "Components & Matrix", rowSpan: 2 },
  { label: "Nominal Fraction Range", colSpan: 2 },
  {
    label: (
      <>
        Urel
        <br />
        (k=2) %
      </>
    ),
    rowSpan: 2,
  },
  {
    label: (
      <>
        Shelf
        <br />
        (year)
      </>
    ),
    rowSpan: 2,
  },
];

const mixtureSubHeaders = ["From", "Unit"];

const mixtureColWidths = ["30%", "17%", "17%", "18%", "18%"];

const mixtureRows = [
  ["Nitrogen", "0.50", "cmol/mol", { value: "±1~±2", rowSpan: 4 }, { value: "1~2", rowSpan: 4 }],
  ["Carbon dioxide", "1.00", "cmol/mol"],
  ["Ethane", "8.00", "cmol/mol"],
  ["Propane", "4.00", "cmol/mol"],
  [
    "iso-Butane",
    "1.00",
    "cmol/mol",
    { value: "Determined in accordance with the customer's needs", rowSpan: 7, colSpan: 2 },
  ],
  ["n-Butane", "1.00", "cmol/mol"],
  ["iso-Pentane", "0.05", "cmol/mol"],
  ["neo-Pentane", "0.05", "cmol/mol"],
  ["n-Pentane", "0.05", "cmol/mol"],
  ["n-Hexane", "0.05", "cmol/mol"],
  ["Methane", "balance", ""],
];

const mixtureNotes = [
  "If you have any inquiry on products and mixing besides the above components and concentration, ask for consultation and we will provide further information.",
  "Urel. : relative expanded uncertainty",
];

export default function PetrochemicalNaturalGasStandards() {
  return (
    <CatalogPage
      pageInfo={pageInfo}
      className="page-wrapper product-detail petrochemical-natural-gas-standards"
    >
      <div className="bg">
        <Image src="product/standard-gas-bg3.jpg" alt="" />
      </div>
      <Anime anime="fadeRight" delay={0.3} className="product-detail-visual">
        <Image src="product/standard-gas-img3.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">STANDARD GAS</p>
            <h2 className="page-head-sbj">
              Petrochemical and
              <br />
              Natural Gas Standards
            </h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              RIGAS standard materials for petrochemical process are supplied in gas or liquid
              phase. <br />
              Also, multi-compounds standard materials such as alkanes, alkenes, aromatics or other
              are available.
            </p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <Tabs
            tabs={[
              {
                key: "components",
                label: "Components",
                scrollable: true,
                content: <SpecTable items={components} />,
              },
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
        </Anime>
      </div>
    </CatalogPage>
  );
}
