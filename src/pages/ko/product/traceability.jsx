import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "traceability",
};

const nodes = [
  { key: "si", title: "SI", sub: "International System of Units", delay: 0.6 },
  { key: "ilac", title: "ILAC", sub: "International System", delay: 0.7 },
  { key: "bipm", title: "BIPM", sub: "International System", delay: 0.75 },
  { key: "apac", title: "APAC", sub: "Reginal Cooperation", delay: 0.8 },
  { key: "nmis", title: "NMIS", sub: "KRISS / NIST/ NPL / VSL", delay: 0.85 },
  { key: "kolas", title: "KOLAS", sub: "ISO17034", delay: 0.9 },
];

export default function ProductTraceability() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper traceability">
      <div className="bg">
        <Image src="product/traceability-bg.jpg" alt="" />
      </div>
      <div className="dim" />
      <div className="wrap">
        <div className="page-head">
          <Anime anime="fadeUp" delay={0.15} className="page-head-title">
            <p className="page-head-cate">PRODUCT</p>
            <h2 className="page-head-sbj">Traceability</h2>
          </Anime>
          <Anime anime="fadeUp" delay={0.35} className="page-head-desc">
            <p>
              Our analytical operations are traceable through acalibration standard <br />
              produced to either a recognized international standard <br />
              such as KRISS, NIST, VSL, NPL or a gravimetrically manufactured <br />
              Primary Reference Standard traceable to KRISS standard masses.
            </p>
          </Anime>
        </div>

      </div>

      <Anime anime="fadeIn" delay={0.5} className="traceability-lines">
        <Image src="product/traceability-line.svg" alt="" />
      </Anime>

      {nodes.map((node) => (
        <Anime
          key={node.key}
          anime="fadeIn"
          delay={node.delay}
          className={`traceability-node traceability-node--${node.key}`}
        >
          <p className="traceability-node-title">{node.title}</p>
          <p className="traceability-node-sub">{node.sub}</p>
        </Anime>
      ))}

      <Anime anime="scaleUp" delay={1} className="traceability-circle">
        <Image src="product/traceability-img1.svg" alt="" />
      </Anime>
    </CatalogPage>
  );
}
