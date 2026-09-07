import Sluger from "catalog/Sluger";
import LaserGasMixtures from "./laser-gas-mixtures";
import OtherGasMixtures from "./other-gas-mixtures";

export default function ProductMixedGas() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
          { path: "laser-gas-mixtures", element: <LaserGasMixtures /> },
          { path: "other-gas-mixtures", element: <OtherGasMixtures /> },
        ]}
        slug="pageSlug3"
      />
    </div>
  );
}
