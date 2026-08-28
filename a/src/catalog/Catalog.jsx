import { CatalogProvider } from "./Catalog.context";
import CatalogContainer from "./CatalogContainer";
import CatalogScaler from "./CatalogScaler";
import CatalogPageRouter from "./CatalogPageRouter";
import GlobalNavigation from "components/GlobalNavigation";
import ScrollTop from "./ScrollTop";
import SianNav from "components/SianNav";
import DragController from "./DragController";


// 메인 카탈로그 컴포넌트 (Provider 및 레이아웃 관리)
export default function Catalog() {
  return (
    <CatalogProvider>
      <ScrollTop />
      <DragController />
      {process.env.REACT_APP_IS_SIAN === "true" && <SianNav />}
      <CatalogContainer>
        <CatalogScaler>
          <CatalogPageRouter />
          <GlobalNavigation />
        </CatalogScaler>
      </CatalogContainer>
    </CatalogProvider>
  );
}
