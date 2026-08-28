import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink } from "catalog/CatalogNavigations";
import { Anime, Image, Video, Counter } from "components/elements";

const pageInfo = {
  depth1: "product",
  depth2: "product02",
};

export default function Product02() {
  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product02">
      <div className="bg">
        <Image src="product/product02.png" />
      </div>
    </CatalogPage>
  );
}