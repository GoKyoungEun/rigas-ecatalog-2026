import Sluger from "catalog/Sluger";
import AtmosphericStandards from "./atmospheric-standards";
import AutomobileExhaustStandards from "./automobile-exhaust-standards";
import PetrochemicalNaturalGasStandards from "./petrochemical-natural-gas-standards";
import OdorStandards from "./odor-standards";
import VocStandards from "./voc-standards";

export default function ProductStandardGas() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
          { path: "atmospheric-standards", element: <AtmosphericStandards /> },
          { path: "automobile-exhaust-standards", element: <AutomobileExhaustStandards /> },
          { path: "petrochemical-natural-gas-standards", element: <PetrochemicalNaturalGasStandards /> },
          { path: "odor-standards", element: <OdorStandards /> },
          { path: "voc-standards", element: <VocStandards /> },
        ]}
        slug="pageSlug3"
      />
    </div>
  );
}
