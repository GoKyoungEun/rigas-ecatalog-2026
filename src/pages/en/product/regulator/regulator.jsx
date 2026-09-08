import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "regulator",
};

const specifications = [
  [
    ["Body", "Brass (Ni-Plated), SUS316L"],
    ["Diaphragm", "SUS316L / Hastelloy"],
    ["Temperature Range", "-40°C ~ 74°C"],
    ["Maximum Inlet Pressure", "25 MPa"],
  ],
  [
    ["Seat", "PCTFE / PTFE"],
    ["Stem", "SUS316L"],
    ["Inlet and Outlet Port Size", "1/4 Inch NPT"],
  ],
];

const applications = [
  ["Research Laboratories", "Gas Chromatography", "Laser Gas System", "Process Analyzer"],
  [
    "Zero & Calibration Gases",
    "Purging Systems",
    "In use for calibration gas of HCl, Amine, BTEX, HCHO, HF, etc.",
  ],
];

function Overview() {
  return (
    <div className="regulator-overview">
      <div className="regulator-section-heading regulator-section-heading--inline">
        <h3>Special features</h3>
        <p>1 Stage (Single-stage) and 2 Stage (Double-stage) Construction</p>
      </div>

      <div className="regulator-spec-table">
        {specifications.map((column, index) => (
          <table className="regulator-spec-table-col" key={index}>
            <tbody>
              {column.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>

      <div className="regulator-applications">
        <div className="regulator-section-heading">
          <h3>When to use</h3>
        </div>
        <div className="regulator-application-columns">
          {applications.map((column, index) => (
            <ul key={index}>
              {column.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

function OtherInformation() {
  return (
    <div className="regulator-order-wrap">
      <table className="regulator-order-table">
        <thead>
          <tr>
            <th>Series</th>
            <th>Material</th>
            <th>Stage</th>
            <th>Inlet pressure gauge</th>
            <th>Pressure control range</th>
            <th>
              Inlet connections
              <br />
              (Nut type)
            </th>
            <th>
              Outlet connections
              <br />
              (Male connector)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="3" scope="rowgroup">
              G
            </th>
            <td>S : SUS316L</td>
            <td>1 : 1 stage</td>
            <td rowSpan="5">25 : 25 MPa</td>
            <td>06 : 0.6 MPa</td>
            <td>R : 22 mm-RH</td>
            <td>0 : no option</td>
          </tr>
          <tr>
            <td>B : Brass</td>
            <td>2 : 2 stage</td>
            <td>10 : 1.0 MPa</td>
            <td>L : 22 mm-LH</td>
            <td>1 : 1/4” LOK</td>
          </tr>
          <tr>
            <td>(Ni-Plated)</td>
            <td />
            <td />
            <td>C : CGA 350</td>
            <td>2 : 1/8” LOK</td>
          </tr>
          <tr>
            <th rowSpan="2" scope="rowgroup">
              S
            </th>
            <td>S : SUS316L</td>
            <td>1 : 1 stage</td>
            <td />
            <td>N : no option</td>
            <td>3 : 1/16” LOK</td>
          </tr>
          <tr>
            <td />
            <td />
            <td />
            <td>E : etc.</td>
            <td>4 : etc.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Regulator() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail regulator">
      <div className="bg">
        <Image src="product/regulator-bg.jpg" alt="" />
      </div>

      <Anime anime="fadeRight" delay={0.3} className="product-detail-visual">
        <Image src="product/regulator-img.png" alt="RIGAS calibration gas regulator" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">REGULATOR</p>
            <h2 className="page-head-sbj">RIGAS Regulator for Calibration Gases</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              RIGAS regulators are designed specifically for gas analysis, helping improve
              measurement accuracy and overall analytical efficiency.
              <br />
              The G-Series enables fast, reliable analysis, while the S-Series features special
              internal surface treatment for reactive and adsorptive gases.
            </p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <Tabs
            tabs={[
              { key: "overview", label: "Overview", content: <Overview /> },
              {
                key: "other-information",
                label: "Other Information",
                content: <OtherInformation />,
              },
            ]}
          />
        </Anime>
      </div>
    </CatalogPage>
  );
}
