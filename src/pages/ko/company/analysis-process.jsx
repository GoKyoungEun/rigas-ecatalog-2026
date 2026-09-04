import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";

const pageInfo = {
  depth1: "company",
  depth2: "analysis-process",
};

const steps = [
  {
    label: "STEP 1",
    img: "company/analysis-process-img1.jpg",
    items: [
      "Scale calibration through KRISS 1. WT CLASS weight",
      <><strong>Gravimetric manufacturing</strong> by ISO6142</>,
    ],
  },
  {
    label: "STEP 2",
    img: "company/analysis-process-img2.jpg",
    items: [
      "Comparative analysis with National Metrology Institute CRM",
    ],
  },
  {
    label: "STEP 3",
    img: "company/analysis-process-img3.jpg",
    items: [
      "Comparative analysis with Internal reference materials",
      "Using verified internal reference materials evaluated for stability",
    ],
  },
  {
    label: "STEP 4",
    img: "company/analysis-process-img4.jpg",
    items: [
      "Optimized cylinder treatment based on components and concentrations",
      <><strong>Special cylinder inner treatment technology</strong> developed by RIGAS</>,
    ],
  },
  {
    label: "STEP 5",
    img: "company/analysis-process-img5.jpg",
    items: [
      <><strong>Regular proficiency testing</strong> with international reference materials agencies</>,
    ],
  },
];

export default function CompanyAnalysisProcess() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper analysis-process">
      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">COMPANY</p>
            <h2 className="page-head-sbj">Manufacturing / Analysis Process</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              Our reference gas production process is built on KRISS-traceable weighing standards and ISO 6142-compliant gravimetric preparation. <br />
              Each mixture is precisely blended, analyzed, and stabilized using optimized cylinder treatment methods.  <br />
              Regular proficiency testing with domestic and international reference material institutes ensures consistent accuracy, reliability, and long-term quality. <br />
            </p>
          </Anime>
        </div>

        <div className="analysis-process-steps">
          {steps.map((step, i) => (
            <Anime key={step.label} anime="fadeUp" delay={0.5 + i * 0.15} className="analysis-process-step">
              <div className="analysis-process-step-img">
                <Image src={step.img} alt="" />
              </div>
              <div className="analysis-process-step-bar">
                {i < steps.length - 1 && (
                  <span className="analysis-process-arrow" aria-hidden="true">
                    <Image src="company/ico-arrow.svg" alt="" />
                  </span>
                )}
              </div>
              <div className="analysis-process-step-content">
                <p className="analysis-process-step-label">{step.label}</p>
                <ul className="analysis-process-step-list">
                  {step.items.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
              </div>
            </Anime>
          ))}
        </div>
      </div>
    </CatalogPage>
  );
}
