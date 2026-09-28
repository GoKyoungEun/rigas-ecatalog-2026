import Sluger from "catalog/Sluger";
import RigasOne from "./rigas-one";
import Pams57 from "./pams57";
import To14a from "./to14a";

export default function ProductRigasOne() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
          { path: "rigas-one", element: <RigasOne key="non-reactive" /> },
          { path: "rigas-one-reactive", element: <RigasOne key="reactive" tab="reactive" /> },
          { path: "pams", element: <Pams57 key="features" /> },
          { path: "pams-chromatogram", element: <Pams57 key="chromatogram" tab="chromatogram" /> },
          { path: "to-14a", element: <To14a key="features" /> },
          { path: "to-14a-chromatogram", element: <To14a key="chromatogram" tab="chromatogram" /> },
        ]}
        slug="pageSlug3"
      />
    </div>
  );
}
