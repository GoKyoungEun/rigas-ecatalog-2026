import { CatalogPage } from "catalog/CatalogPage";
import { Anime } from "components/elements";
import GlobeNetwork from "components/GlobeNetwork";

const pageInfo = {
  depth1: "company",
  depth2: "global-network",
};

export default function CompanyGlobalNetwork() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper global-network">
      <div className="wrap">
        <div className="global-network-head">
          <Anime anime="fadeUp" delay={0.15} className="global-network-title">
            <p className="global-network-cate">COMPANY</p>
            <h2 className="global-network-sbj">Global Network</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="global-network-desc">
            <p>
              국내시장 점유율 70%를 차지하며, 동남아, 중동, 유럽,
              <br />
              중남미 등 전세계 40여 개국에
              <br />
              제품을 수출하고 있습니다.
            </p>
          </Anime>
        </div>
      </div>

      <Anime anime="fadeIn" delay={0.45} className="global-network-visual">
        <GlobeNetwork className="global-network-globe" />
      </Anime>
    </CatalogPage>
  );
}
