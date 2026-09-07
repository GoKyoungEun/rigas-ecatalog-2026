import { twMerge } from "tailwind-merge";
import Sluger from "catalog/Sluger";
import ProductTraceability from "./traceability";
import ProductCover from "./cover";
import ProductStandardGas from "./standard-gas";
import ProductMixedGas from "./mixed-gas";
import ProductRigasOne from "./rigas-one";
const pageInfo = {
  depth1: "product",
  depth2: "",
};

export default function Product() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
            { path: "traceability", element: <ProductTraceability /> },
            { path: "cover", element: <ProductCover /> },
            { path: "standard-gas", element: <ProductStandardGas /> },
            { path: "mixed-gas", element: <ProductMixedGas /> },
            { path: "rigas-one", element: <ProductRigasOne /> },
        ]}
        slug="pageSlug2"
        />
    </div>
  );
}