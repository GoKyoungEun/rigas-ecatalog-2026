import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink } from "catalog/CatalogNavigations";
import { Anime, Image, Video } from "components/elements";
import { useCatalog } from "catalog/Catalog.context";

const pageInfo = {
  depth1: "product",
  depth2: "product01",
};

export default function Product01() {
  const { isResponsive } = useCatalog();
  const mo = isResponsive;

  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper product01">
      <div className="bg">
        <Image src="product/product01.png" />
      </div>
    </CatalogPage>
  );
}