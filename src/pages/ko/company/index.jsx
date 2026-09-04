import { twMerge } from "tailwind-merge";
import Sluger from "catalog/Sluger";
import CompanyOverview from "./overview";
import CompanyHistory from "./history";
import CompanyPerformance from "./performance";
import CompanyGlobalNetwork from "./global-network";
import CompanyAnalysisProcess from "./analysis-process";

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
            { path: "history", element: <CompanyHistory /> },
            { path: "performance", element: <CompanyPerformance /> },
            { path: "global-network", element: <CompanyGlobalNetwork /> },
            { path: "analysis-process", element: <CompanyAnalysisProcess /> },
        ]}
        slug="pageSlug2"
        />
    </div>
  );
}