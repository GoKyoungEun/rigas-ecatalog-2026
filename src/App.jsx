import "./global.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Head from "Head";
import { BASE_NAME, ROUTER_TYPE } from "configs";
import Catalog from "catalog/Catalog";

const CatalogRouter = ROUTER_TYPE === "hash" ? HashRouter : BrowserRouter;

// 전체 라우트 구조 설계
export default function App() {
  return (
    <HelmetProvider>
      <CatalogRouter basename={BASE_NAME}>
        <Routes>
          <Route
            path="/:lang?/:pageSlug1?/:pageSlug2?/:pageSlug3?/:pageSlug4?/*"
            element={
              <>
                <Head />
                <Catalog />
              </>
            }
          />
        </Routes>
      </CatalogRouter>
    </HelmetProvider>
  );
}
