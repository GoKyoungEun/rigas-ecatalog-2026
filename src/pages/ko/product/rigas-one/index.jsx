import Sluger from "catalog/Sluger";
import RigasOne from "./rigas-one";

export default function ProductRigasOne() {
  return (
    <div className="contents-wrap">
      <Sluger
        routes={[{ path: "rigas-one", element: <RigasOne /> }]}
        slug="pageSlug3"
      />
    </div>
  );
}
