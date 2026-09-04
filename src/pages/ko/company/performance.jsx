import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";

const pageInfo = {
  depth1: "company",
  depth2: "performance",
};

const certificates = [
  { img: "company/performance-img1.jpg", caption: <>ISO9001<br />Quality Management System</> },
  { img: "company/performance-img2.jpg", caption: <>KOLAS<br />Reference Material Manufacturer Accreditation</> },
  { img: "company/performance-img3.jpg", caption: <>Appointment Certificate<br />For Standard gas Testing and Certification Agency</> },
  { img: "company/performance-img4.jpg", caption: <>High-pressure Gas<br />Manufacturing Authorization</> },
];

const awards = [
  { img: "company/performance-img5.jpg", caption: <>Presidential Commendation<br />on World Standards Day<br />[Korean Agency for Technology and Standards]</> },
];

function PerformanceGroup({ title, items, delay }) {
  return (
    <Anime anime="fadeUp" delay={delay} className="performance-group">
      <h3 className="performance-group-title">{title}</h3>
      <ul className="performance-list">
        {items.map((item) => (
          <li key={item.img} className="performance-item">
            <div className="performance-item-img">
              <Image src={item.img} alt="" />
            </div>
            <p className="performance-item-caption">{item.caption}</p>
          </li>
        ))}
      </ul>
    </Anime>
  );
}

export default function CompanyPerformance() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper performance">
      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">COMPANY</p>
            <h2 className="page-head-sbj">Performance</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              RIGAS, ISO 17034 Certified Company, is an official certification body of the standard gas designated by Korean government.
            </p>
          </Anime>
        </div>

        <div className="performance-groups">
          <PerformanceGroup title="Certificates" items={certificates} delay={0.5} />
          <PerformanceGroup title="Awards" items={awards} delay={0.6} />
        </div>
      </div>
    </CatalogPage>
  );
}
