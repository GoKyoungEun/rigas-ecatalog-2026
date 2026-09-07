import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs, GroupedSpecTable, RangeSpecTable } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "standard-gas",
  depth3: "odor-standards",
};

const componentGroups = [
  {
    label: "Formaldehyde",
    rows: [[{ label: "Formaldehyde", value: "HCHO" }, null]],
  },
  {
    label: "SulfurCompounds",
    rows: [
      [
        { label: "Hydrogen sulfide", value: <>H<sub>2</sub>S</> },
        { label: "Methyl mercaptan", value: <>CH<sub>3</sub>SH</> },
      ],
      [
        { label: "Dimethyl sulfide", value: <>(CH<sub>3</sub>)<sub>2</sub>S</> },
        { label: "Dimethyl disulfide", value: <>(CH<sub>3</sub>)<sub>2</sub>S<sub>2</sub></> },
      ],
    ],
  },
  {
    label: "AmineCompounds",
    rows: [
      [
        { label: "Ammonia", value: <>NH<sub>3</sub></> },
        { label: "Trimethyl amine", value: <>(CH<sub>3</sub>)<sub>3</sub>N</> },
      ],
    ],
  },
  {
    label: "Aldehydes",
    rows: [
      [
        { label: "Acetaldehyde", value: <>CH<sub>3</sub>CHO</> },
        { label: "Propionaldehyde", value: <>C<sub>2</sub>H<sub>5</sub>CHO</> },
      ],
      [
        { label: "n-Butyraldehyde", value: <>n-C<sub>3</sub>H<sub>7</sub>CHO</> },
        { label: "n-Valeraldehyde", value: <>n-C<sub>4</sub>H<sub>9</sub>CHO</> },
      ],
      [{ label: "iso-Valeraldehyde", value: <>iso-C<sub>4</sub>H<sub>9</sub>CHO</> }, null],
    ],
  },
  {
    label: "Alcohol & Ketones",
    rows: [
      [
        { label: "iso-Butyl alcohol", value: <>iso-C<sub>4</sub>H<sub>9</sub>OH</> },
        { label: "Ethyl acetate", value: <>CH<sub>3</sub>CO<sub>2</sub>C<sub>2</sub>H<sub>5</sub></> },
      ],
      [{ label: "Methyl isobutyl ketone", value: <>C<sub>4</sub>H<sub>9</sub>COCH<sub>3</sub></> }, null],
    ],
  },
  {
    label: "BTEXS",
    rows: [
      [
        { label: "Toluene", value: <>C<sub>7</sub>H<sub>8</sub></> },
        { label: "Styrene", value: <>C<sub>8</sub>H<sub>8</sub></> },
      ],
      [
        { label: "p-Xylene", value: <>p-C<sub>6</sub>H<sub>4</sub>C<sub>2</sub>H<sub>6</sub></> },
        { label: "Propionic acid", value: <>C<sub>2</sub>H<sub>5</sub>CO<sub>2</sub>H</> },
      ],
    ],
  },
  {
    label: "Acids",
    rows: [
      [
        { label: "n-Butyric acid", value: <>n-C<sub>3</sub>H<sub>7</sub>CO<sub>2</sub>H</> },
        { label: "n-Valeric acid", value: <>n-C<sub>4</sub>H<sub>9</sub>CO<sub>2</sub>H</> },
      ],
      [{ label: "iso-Valeric acid", value: <>iso-C<sub>4</sub>H<sub>9</sub>CO<sub>2</sub>H</> }, null],
    ],
  },
];

const componentColWidths = ["18%", "20%", "20%", "20%", "22%"];

const mixtureGroups = [
  { label: "Components & Matrix", rowSpan: 2 },
  { label: "Nominal Fraction Range", colSpan: 3 },
  { label: <>Urel<br />(k=2) %</>, rowSpan: 2 },
  { label: <>Shelf<br />(year)</>, rowSpan: 2 },
];

const mixtureSubHeaders = ["From", "To", "Unit"];

const mixtureColWidths = ["26%", "13%", "15%", "15%", "16%", "15%"];

const mixtureRows = [
  ["Hydrogen chloride", "2", "10,000", "µmol/mol", "±2~±5", "1~2"],
  ["Hydrogen fluoride", "2", "200", "µmol/mol", "±1~±5", "1~2"],
  [
    "Nitric Oxide",
    "5",
    "5,000",
    "µmol/mol",
    { value: "Determined in accordance with the customer's needs", colSpan: 2 },
  ],
];

const mixtureNotes = [
  "If you have any inquiry on products and mixing besides the above components and concentration, ask for consultation and we will provide further information.",
  "Urel. : relative expanded uncertainty",
];

export default function OdorStandards() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail odor-standards">
      <div className="bg">
        <Image src="product/standard-gas-bg4.jpg" alt="" />
      </div>
      <Anime anime="fadeIn" delay={0.3} className="product-detail-visual">
        <Image src="product/standard-gas-img4.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">STANDARD GAS</p>
            <h2 className="page-head-sbj">Odor Standards</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              This is RIGAS standard gas for detecting and measuring odor. <br />
              Odor is caused by one or more volatile chemical materials in low density generally, which is recognized by
              human or animals.
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
