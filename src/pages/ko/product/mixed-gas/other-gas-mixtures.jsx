import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image, Tabs, IconCardGrid } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "mixed-gas",
  depth3: "other-gas-mixtures",
};

const gasItems = [
  { label: "Illuminating Gas Mixtures", icon: "product/ico-laser-gas-mixtures01.svg" },
  { label: "Toxic Gases", icon: "product/ico-laser-gas-mixtures02.svg" },
  {
    label: (
      <>
        Semiconductor <br />
        Gas Mixtures
      </>
    ),
    icon: "product/ico-laser-gas-mixtures03.svg",
  },
  { label: "Rare Gases", icon: "product/ico-laser-gas-mixtures04.svg" },
  {
    label: (
      <>
        Research and <br />
        Development Gas Mixtures
      </>
    ),
    icon: "product/ico-laser-gas-mixtures05.svg",
  },
  { label: "Hydrocarbons", icon: "product/ico-laser-gas-mixtures06.svg" },
  { label: "High Purity Gases", icon: "product/ico-laser-gas-mixtures07.svg" },
  { label: "Etc.", icon: "product/ico-laser-gas-mixtures08.svg" },
];

export default function OtherGasMixtures() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product-detail other-gas-mixtures">
      <div className="bg">
        <Image src="product/mixed-gas-bg2.jpg" alt="" />
      </div>
      <Anime anime="fadeRight" delay={0.3} className="product-detail-visual">
        <Image src="product/mixed-gas-img2.png" alt="" />
      </Anime>

      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">MIXED GAS</p>
            <h2 className="page-head-sbj">Other Gas Mixtures</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              RIGAS Co., Ltd. also supplies illuminating gas, rare gas or <br />
              semiconductor gas mixture according to various customer needs. <br />
              We, RIGAS Co., Ltd., will produce gas according to your order.
            </p>
          </Anime>
        </div>

        <Anime anime="fadeUp" delay={0.5} className="product-detail-body">
          <div className="spec-section">
            <Tabs
              tabs={[{ key: "gases", label: "Gases", content: <IconCardGrid items={gasItems} /> }]}
            />
          </div>
        </Anime>
      </div>
    </CatalogPage>
  );
}
