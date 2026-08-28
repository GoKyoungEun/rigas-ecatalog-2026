import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink } from "catalog/CatalogNavigations";
import { Anime, Image } from "components/elements";
import { useCatalog } from "catalog/Catalog.context";
import { IMG_URL } from "configs";

const pageInfo = {
  depth1: "product",
  depth2: "cover",
};


export default function ProductCover() {
  const { isResponsive } = useCatalog();
  const mo = isResponsive;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index, hasSubmenu) => {
    if (!mo || !hasSubmenu) return;
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <CatalogPage
      pageInfo={pageInfo}
      className={twMerge("page-wrapper product-cover", mo && "product-cover--mo")}
    >
      <div className="bg">
        <Image src="product/product-cover.png" alt="" />
      </div>
    </CatalogPage>
  );
}
