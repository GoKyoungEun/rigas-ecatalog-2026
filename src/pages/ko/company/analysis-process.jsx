import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";

const pageInfo = {
  depth1: "company",
  depth2: "analysis-process",
};

const certificates = [
  { img: "company/analysis-process-img1.jpg", caption: <>ISO9001<br />Quality Management System</> },
  { img: "company/analysis-process-img2.jpg", caption: <>KOLAS<br />Reference Material Manufacturer Accreditation</> },
  { img: "company/analysis-process-img3.jpg", caption: <>Appointment Certificate<br />For Standard gas Testing and Certification Agency</> },
  { img: "company/analysis-process-img4.jpg", caption: <>High-pressure Gas<br />Manufacturing Authorization</> },
  { img: "company/analysis-process-img5.jpg", caption: <>High-pressure Gas<br />Manufacturing Authorization</> },
];

export default function CompanyAnalysisProcess() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper performance">
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

      </div>
    </CatalogPage>
  );
}
