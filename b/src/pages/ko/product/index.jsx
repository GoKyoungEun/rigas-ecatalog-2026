import { twMerge } from "tailwind-merge";
import Sluger from "catalog/Sluger";
import ProductCover from "./cover";
import Product01 from "./product01";
const pageInfo = {
  depth1: "product",
  depth2: "",
};

export default function Product() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
            { path: "cover", element: <ProductCover /> },
            { path: "product01", element: <Product01 /> },
        ]}
        slug="pageSlug2"
        />
    </div>
  );
}