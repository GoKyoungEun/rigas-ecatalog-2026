import { twMerge } from "tailwind-merge";
import Sluger from "catalog/Sluger";
import ProductTraceability from "./traceability";
import ProductCover from "./cover";
import ProductStandardGas from "./standard-gas";
import Product02 from "./product02";
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
            { path: "product02", element: <Product02 /> },
        ]}
        slug="pageSlug2"
        />
    </div>
  );
}