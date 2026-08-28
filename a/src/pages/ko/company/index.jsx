import { twMerge } from "tailwind-merge";
import Sluger from "catalog/Sluger";
import CompanyHistory from "./history";

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
        ]}
        slug="pageSlug2"
        />
    </div>
  );
}