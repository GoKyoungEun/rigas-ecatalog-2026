import Sluger from "catalog/Sluger";
import RigasOne from "./rigas-one";
import Pams57 from "./pams57";
import To14a from "./to14a";

export default function ProductRigasOne() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[
          { path: "rigas-one", element: <RigasOne /> },
          { path: "pams", element: <Pams57 /> },
          { path: "to-14a", element: <To14a /> },
        ]}
        slug="pageSlug3"
      />
    </div>
  );
}
