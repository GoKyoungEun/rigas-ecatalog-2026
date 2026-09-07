import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs, GroupedSpecTable, RangeSpecTable } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "standard-gas",
  depth3: "voc-standards",
};

const componentGroups = [
  {
    label: <>Hydro carbons Gas<br />or Liquid Mixtures</>,
    rows: [
      [
        { label: "Benzene", value: <>C<sub>6</sub>H<sub>6</sub></> },
        { label: "Toluene", value: <>C<sub>7</sub>H<sub>8</sub></> },
      ],
      [
        { label: "Ethylbenzene", value: <>C<sub>6</sub>H<sub>5</sub>C<sub>2</sub>H<sub>5</sub></> },
        { label: "o-Xylene", value: <>o-C<sub>6</sub>H<sub>4</sub>C<sub>2</sub>H<sub>6</sub></> },
      ],
      [
        { label: "m-Xylene", value: <>m-C<sub>6</sub>H<sub>4</sub>C<sub>2</sub>H<sub>6</sub></> },
        { label: "p-Xylene", value: <>p-C<sub>6</sub>H<sub>4</sub>C<sub>2</sub>H<sub>6</sub></> },
      ],
      [
        { label: "Styrene", value: <>C<sub>8</sub>H<sub>8</sub></> },
        { label: "1,2-Dichlorobenzene", value: <>1,2-C<sub>6</sub>H<sub>4</sub>Cl<sub>2</sub></> },
      ],
      [
        { label: "1,2,4-Trimethylbenzene...etc.", value: <>1,2,4-C<sub>6</sub>H<sub>3</sub>(CH<sub>3</sub>)<sub>3</sub>...etc.</> },
        null,
      ],
    ],
  },
  {
    label: <>CFCs / HCFCs / <br />HFCs / PFCs</>,
    rows: [
      [
        { label: "Trichloro fluoromethane", value: <>CCl<sub>3</sub>F</> },
        { label: "Dichloro difluoromethane", value: <>CCl<sub>2</sub>F<sub>2</sub></> },
      ],
      [
        { label: "1, 1 ,2-Trichloro trifluoroethane", value: <>C<sub>2</sub>Cl<sub>3</sub>F<sub>3</sub></> },
        { label: "1, 2-Dichloro tetrafluoroethane", value: <>1, 2-C<sub>2</sub>Cl<sub>2</sub>F<sub>4</sub></> },
      ],
    ],
  },
  {
    label: "Chlorinated Hydrocarbons",
    rows: [
      [
        { label: "Methyl chloride", value: <>CH<sub>3</sub>Cl</> },
        { label: "Ethyl chloride", value: <>C<sub>2</sub>H<sub>5</sub>Cl</> },
      ],
      [
        { label: "Vinyl chloride", value: <>C<sub>2</sub>H<sub>3</sub>Cl</> },
        { label: "Methylene chloride", value: <>CH<sub>2</sub>Cl<sub>2</sub></> },
      ],
      [
        { label: "Chloroform", value: <>CHCl<sub>3</sub></> },
        { label: "Carbon tetrachloride", value: <>CCl<sub>4</sub></> },
      ],
      [
        { label: "1, 1-Dichloroethane", value: <>1, 1-C<sub>2</sub>H<sub>4</sub>Cl<sub>2</sub></> },
        { label: "1, 2-Dichloroethane...etc.", value: <>1, 2-C<sub>2</sub>H<sub>4</sub>Cl<sub>2</sub>...etc.</> },
      ],
    ],
  },
];

const componentColWidths = ["17%", "24%", "18%", "23%", "14%"];

const mixtureGroups = [
  { label: "Components & Matrix", rowSpan: 2 },
  { label: "Nominal Fraction Range", colSpan: 3 },
  { label: <>Urel<br />(k=2) %</>, rowSpan: 2 },
  { label: <>Shelf<br />(year)</>, rowSpan: 2 },
];

const mixtureSubHeaders = ["From", "To", "Unit"];

const mixtureColWidths = ["26%", "13%", "15%", "15%", "16%", "15%"];

const mixtureRows = [
  ["Benzene", "1", "100", "µmol/mol", { value: "±1~±5", rowSpan: 6 }, { value: "1~2", rowSpan: 6 }],
  ["Toluene", "1", "100", "µmol/mol"],
  ["Ethylbenzene", "1", "100", "µmol/mol"],
  ["o-Xylene", "1", "100", "µmol/mol"],
  ["m-Xylene", "1", "100", "µmol/mol"],
  ["p-Xylene", "1", "100", "µmol/mol"],
  [
    "Styrene",
    "1",
    "100",
    "µmol/mol",
    { value: "Determined in accordance with the customer's needs", rowSpan: 2, colSpan: 2 },
  ],
  ["Nitrogen", "balance", "", "",],
  ["Vinyl chloride", "5", "10", "µmol/mol", { value: "±2~±3", rowSpan: 12 }, { value: "1~2", rowSpan: 12 }],
  ["1, 3-Butadiene", "5", "10", "µmol/mol"],
  ["Dichloromethane", "5", "10", "µmol/mol"],
  ["Acrylonitrile", "5", "10", "µmol/mol"],
  ["Chloroform", "5", "10", "µmol/mol"],
  ["Carbon tetrachloride", "5", "10", "µmol/mol"],
  ["Benzene", "5", "10", "µmol/mol"],
  ["1, 2-Dichloroethane", "5", "10", "µmol/mol"],
  ["Trichloroethylene", "5", "10", "µmol/mol"],
  ["Tetrachloroethylene", "5", "10", "µmol/mol"],
  ["Ethylbenzene", "5", "10", "µmol/mol"],
  ["Styrene", "5", "10", "µmol/mol"],
  [
    "Aniline",
    "5",
    "10",
    "µmol/mol",
    { value: "Determined in accordance with the customer's needs", rowSpan: 2, colSpan: 2 },
  ],
  ["Nitrogen", "balance", "", "",],
];

const mixtureNotes = [
  "Measurement uncertainty (Urel) and shelf life for Nitric Oxide, Sulfur Dioxide, and Carbon Monoxide mixtures are determined according to customer requirements.",
  "If you have any inquiry on products and mixing besides the above components and concentration, ask for consultation and we will provide further information.",
  "Urel. : relative expanded uncertainty",
];

export default function VocStandards() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail voc-standards">
      <div className="bg">
        <Image src="product/standard-gas-bg5.jpg" alt="" />
      </div>
      <Anime anime="fadeIn" delay={0.3} className="product-detail-visual">
        <Image src="product/standard-gas-img5.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">STANDARD GAS</p>
            <h2 className="page-head-sbj">
              Volatile Organic
              <br />
              Compound Standards(VOCs)
            </h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              VOCs in certain period may cause long term damage on human health, so its hall be monitored. <br />
              The followings are calibration gas of volatile organic compound measuring system supplied <br />
              by RIGAS Co., Ltd. and required and recommended generally.
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
                content: <GroupedSpecTable groups={componentGroups} colWidths={componentColWidths} />,
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
