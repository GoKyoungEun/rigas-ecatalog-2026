import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";
import GlobeNetwork from "components/GlobeNetwork";

const pageInfo = {
  depth1: "company",
  depth2: "global-network",
};

const clientGroups = [
  {
    title: "Major Enterprises",
    items: [
      { img: "company/logo-hyundai.png", alt: "Hyundai" },
      { img: "company/logo-samsung.png", alt: "Samsung" },
      { img: "company/logo-posco.png", alt: "Posco" },
    ],
  },
  {
    title: "Global Corporation",
    items: [
      { img: "company/logo-nipponsanso.png", alt: "Nippon Sanso" },
      { img: "company/logo-honeywell.png", alt: "Honeywell Technologies" },
      { img: "company/logo-linde.png", alt: "Linde" },
    ],
  },
  {
    title: "Public Institutions",
    items: [
      { img: "company/logo-ktl.png", alt: "Korea Testing Laboratory" },
      { img: "company/logo-keco.png", alt: "K-eco" },
      { img: "company/logo-kepco.png", alt: "Kepco" },
    ],
  },
];

export default function CompanyGlobalNetwork() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper global-network">
      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">COMPANY</p>
            <h2 className="page-head-sbj">Global Network</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              With a 70% market share in Korea, RIGAS leads the market in standard gases.
              <br />
              As a trusted partner, RIGAS continues to strengthen its position as a Key
              Manufacturer.
              <br />
              Expanding our presence in the global market, we are supplying products to more than 40
              countries worldwide.
            </p>
          </Anime>
        </div>
      </div>

      <Anime anime="fadeUp" delay={0.5} className="global-network-clients">
        <span className="global-network-clients-badge">Major Clients</span>
        <div className="global-network-clients-body">
          {clientGroups.map((group) => (
            <div key={group.title} className="global-network-clients-group">
              <h3 className="global-network-clients-group-title">{group.title}</h3>
              <ul className="global-network-clients-list">
                {group.items.map((item) => (
                  <li key={item.img} className="global-network-clients-item">
                    <Image src={item.img} alt={item.alt} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Anime>

      <Anime anime="scaleUp" delay={0.45} className="global-network-visual">
        <GlobeNetwork className="global-network-globe" />
      </Anime>
    </CatalogPage>
  );
}
