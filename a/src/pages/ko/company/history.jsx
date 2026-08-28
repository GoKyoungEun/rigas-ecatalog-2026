import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";
import { useCatalog } from "catalog/Catalog.context";

const pageInfo = {
  depth1: "company",
  depth2: "history",
};

export default function CompanyHistory() {
  const { isResponsive } = useCatalog();
  const mo = isResponsive;

  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper history">
      <div className="bg">
        <Image src="company/history.png" />
      </div>
    </CatalogPage>
  );
}