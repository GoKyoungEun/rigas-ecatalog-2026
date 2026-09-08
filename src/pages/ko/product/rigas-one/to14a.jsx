import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "rigas-one",
  depth3: "to-14a",
};

const features = [
  <>
    1 µmol/mol (ppm) in Nitrogen, 110 L, 10 MPa
    <br />
    10 nmol/mol (ppb) in Nitrogen, 110 L, 10 MPa
  </>,
  "Highly convenient and portable small 1 L container",
  "Highly reliable values proven through short-term and long-term stability assessment",
  "Manufactured in accordance with KS I ISO 6142 (Gas analysis — Preparation of calibration gas mixtures — Gravimetric method)",
  "Cylinders with special internal treatment",
  "Validity period of 12 months",
  "Precise measurement of low-vapor-pressure components with additional cylinder and regulator heating devices",
];

const components = [
  "Dichlorodifluoromethane",
  "Chloromethane",
  "Freon-114",
  "Vinyl chloride",
  "1,3-Butadiene",
  "Bromomethane",
  "Chloroethane",
  "Freon-11",
  "Acrylonitrile",
  "1,1-Dichloroethene",
  "Methylene Chloride",
  "3-Chloropropene",
  "Freon-113",
  "1,1-Dichloroethane",
  "cis-1,2-Dichloroethylene",
  "Chloroform",
  "1,2-Dichloroethane",
  "1,1,1-Trichloroethane",
  "Benzene",
  "Carbon Tetrachloride",
  "1,2-Dichloropropane",
  "Trichloroethylene",
  "cis-1,3-Dichloropropene",
  "trans-1,3-Dichloropropene",
  "1,1,2-Trichloroethane",
  "Toluene",
  "1,3-Dibromoethane",
  "Tetrachloroethylene",
  "Chlorobenzene",
  "Ethylbenzene",
  "p-Xylene",
  "m-Xylene",
  "Styrene",
  "o-Xylene",
  "1,1,2,2-Tetrachloroethane",
  "4-Ethyltoluene",
  "1,3,5-Trimethylbenzene",
  "1,2,4-Trimethylbenzene",
  "1,3-Dichlorobenzene",
  "1,4-Dichlorobenzene",
  "1,2-Dichlorobenzene",
  "1,2,4-Trichlorobenzene",
  "Hexachloro-1,3-Butadiene",
];

function FeatureList() {
  return (
    <ul className="rigas-one-features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  );
}

function ChromatogramAndComponents() {
  return (
    <div className="rigas-one-analysis">
      <figure className="rigas-one-chromatogram">
        <Image
          src="product/to-14a-img1.jpg"
          alt="TO-14A 43 component gas mixture chromatogram with labeled peaks"
        />
      </figure>

      <ol className="rigas-one-component-list rigas-one-component-list--43">
        {components.map((component, index) => (
          <li key={component}>
            <span className="rigas-one-component-number">{index + 1}</span>
            <span>{component}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function To14a() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail rigas-one-series to14a">
      <div className="bg">
        <Image src="product/rigas-one-bg3.jpg" alt="" />
      </div>

      <Anime anime="fadeRight" delay={0.3} className="product-detail-visual">
        <Image src="product/rigas-one-img3.png" alt="Two RIGAS ONE calibration gas cylinders" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">RIGAS | ONE</p>
            <h2 className="page-head-sbj">TO - 14A 43 Components mix (Toxic Organics)</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              VOCs according to the US Environmental Protection Agency (EPA) standards as hazardous
              air pollutants in the atmosphere.
            </p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <Tabs
            tabs={[
              { key: "features", label: "Special features", content: <FeatureList /> },
              {
                key: "chromatogram",
                label: "Chromatogram & Components",
                content: <ChromatogramAndComponents />,
              },
            ]}
          />
        </Anime>
      </div>
    </CatalogPage>
  );
}
