import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";

const pageInfo = {
  depth1: "intro",
  depth2: "",
};

export default function Intro() {
  return (
    <CatalogPage pageInfo={pageInfo} className="intro">
      <p className="intro-catalog-label">RIGAS Product Catalog 2026</p>

      <Anime anime="fadeIn" delay={0.5} className="intro-cylinder">
        <Image src="intro-img.png" alt="" />
      </Anime>

      <Anime anime="fadeIn" delay={0.6} className="intro-brand">
        <Image src="intro-logo.svg" alt="RIGAS" />
      </Anime>
    </CatalogPage>
  );
}
