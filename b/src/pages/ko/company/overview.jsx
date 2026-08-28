import { twMerge } from "tailwind-merge";
import { CatalogPage } from "catalog/CatalogPage";
import { Anime, Image } from "components/elements";
import { useCatalog } from "catalog/Catalog.context";

const pageInfo = {
  depth1: "company",
  depth2: "overview",
};

export default function CompanyOverview() {
  const { isResponsive } = useCatalog();
  const mo = isResponsive;

  return (
    <CatalogPage pageInfo={pageInfo} className="page-wrapper company-overview">
      <div className="bg">
        <Image src="company/overview.png" />
      </div>
    </CatalogPage>
  );
}