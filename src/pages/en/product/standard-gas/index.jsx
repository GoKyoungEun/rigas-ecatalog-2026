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
          { path: "atmospheric-standards", element: <AtmosphericStandards key="components" /> },
          {
            path: "atmospheric-standards-mixture",
            element: <AtmosphericStandards key="mixture" tab="mixture" />,
          },
          { path: "automobile-exhaust-standards", element: <AutomobileExhaustStandards /> },
          {
            path: "petrochemical-natural-gas-standards",
            element: <PetrochemicalNaturalGasStandards key="components" />,
          },
          {
            path: "petrochemical-natural-gas-standards-mixture",
            element: <PetrochemicalNaturalGasStandards key="mixture" tab="mixture" />,
          },
          { path: "odor-standards", element: <OdorStandards key="components" /> },
          { path: "odor-standards-mixture", element: <OdorStandards key="mixture" tab="mixture" /> },
          { path: "voc-standards", element: <VocStandards key="components" /> },
          { path: "voc-standards-mixture", element: <VocStandards key="mixture" tab="mixture" /> },
        ]}
        slug="pageSlug3"
      />
    </div>
  );
}
