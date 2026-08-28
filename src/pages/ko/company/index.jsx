import { twMerge } from "tailwind-merge";
import Sluger from "catalog/Sluger";
import CompanyHistory from "./history";
import CompanyGlobalNetwork from "./global-network";

const pageInfo = {
  depth1: "company",
  depth2: "",
};

export default function Company() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
            { path: "history", element: <CompanyHistory /> },
            { path: "global-network", element: <CompanyGlobalNetwork /> },
        ]}
        slug="pageSlug2"
        />
    </div>
  );
}