import { twMerge } from "tailwind-merge";
import Sluger from "catalog/Sluger";
import CompanyOverview from "./overview";

const pageInfo = {
  depth1: "company",
  depth2: "",
};

export default function Company() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
            { path: "overview", element: <CompanyOverview /> },
        ]}
        slug="pageSlug2"
        />
    </div>
  );
}