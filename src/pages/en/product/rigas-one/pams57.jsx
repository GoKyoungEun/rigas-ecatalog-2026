import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "rigas-one",
  depth3: "pams",
};

const features = [
  <>
    1 µmol/mol (ppm) in Nitrogen, 110 L, 10 MPa
    <br />5 nmol/mol (ppb) in Nitrogen, 110 L, 10 MPa
  </>,
  "Highly convenient and portable small 1 L container",
  "Highly reliable values proven through short-term and long-term stability assessment",
  "Manufactured in accordance with KS I ISO 6142 (Gas analysis — Preparation of calibration gas mixtures — Gravimetric method)",
  "Cylinders with special internal treatment",
  "Validity period of 12 months",
  "Precise measurement of low-vapor-pressure components with additional cylinder and regulator heating devices",
];

const componentGroups = [
  {
    range: "1–10",
    items: [
      "Ethylene",
      "Acetylene",
      "Ethane",
      "Propylene",
      "Propane",
      "iso-Butane",
      "1-Butene",
      "n-Butane",
      "trans-2-Butene",
      "cis-2-Butene",
    ],
  },
  {
    range: "11–20",
    items: [
      "Isopentane",
      "1-Pentene",
      "n-Pentane",
      "Isoprene",
      "trans-2-Pentene",
      "cis-2-Pentene",
      "2,2-Dimethylbutane",
      "Cyclopentane",
      "2,3-Dimethylbutane",
      "2-Methylpentane",
    ],
  },
  {
    range: "21–30",
    items: [
      "3-Methylpentane",
      "1-Hexene",
      "n-Hexane",
      "Methylcyclopentane",
      "2,4-Dimethylpentane",
      "Benzene",
      "Cyclohexane",
      "2-Methylhexane",
      "2,3-Dimethylpentane",
      "3-Methylhexane",
    ],
  },
  {
    range: "31–40",
    items: [
      "2,2,4-Trimethylpentane",
      "n-Heptane",
      "Methylcyclohexane",
      "2,3,4-Trimethylpentane",
      "Toluene",
      "2-Methylheptane",
      "3-Methylheptane",
      "n-Octane",
      "Ethylbenzene",
      "m-Xylene",
    ],
  },
  {
    range: "41–50",
    items: [
      "p-Xylene",
      "Styrene",
      "o-Xylene",
      "n-Nonane",
      "Isopropylbenzene",
      "n-Propylbenzene",
      "m-Ethyltoluene",
      "p-Ethyltoluene",
      "1,3,5-Trimethylbenzene",
      "o-Ethyltoluene",
    ],
  },
  {
    range: "51–57",
    items: [
      "1,2,4-Trimethylbenzene",
      "n-Decane",
      "1,2,3-Trimethylbenzene",
      "m-Diethylbenzene",
      "p-Diethylbenzene",
      "n-Undecane",
      "n-Dodecane",
    ],
  },
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
  const components = componentGroups.flatMap((group) => group.items);

  return (
    <div className="rigas-one-analysis">
      <figure className="rigas-one-chromatogram">
        <Image
          src="product/pams57-img01.jpg"
          alt="PAMS 57 component gas mixture chromatogram with 57 labeled peaks"
        />
      </figure>

      <ol className="rigas-one-component-list rigas-one-component-list--57">
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

export default function Pams57() {
  return (
    <CatalogPage
      pageInfo={pageInfo}
      className="page-wrapper product-detail rigas-one-series pams57"
    >
      <div className="bg">
        <Image src="product/rigas-one-bg2.jpg" alt="" />
      </div>

      <Anime anime="fadeRight" delay={0.3} className="product-detail-visual">
        <Image
          src="product/rigas-one-img2.png"
          alt="Compact silver calibration gas cylinders with regulators"
        />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">RIGAS | ONE</p>
            <h2 className="page-head-sbj">PAMS 57 Components mix (Ozone Precursor)</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              VOCs measured by the Photochemical Assessment and Measurement Station (PAMS)
              <br />
              as precursors contributing to ozone generation.
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
