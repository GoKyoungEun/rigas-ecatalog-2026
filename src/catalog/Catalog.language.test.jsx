import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { CatalogProvider, useCatalog } from "./Catalog.context";
import { CatalogLink } from "./CatalogNavigations";
import { catalogConfigs } from "configs";

function Probe() {
  const { lang } = useCatalog();
  const { pathname } = useLocation();
  return <>
    <output data-testid="path">{pathname}</output>
    <output data-testid="language">{lang}</output>
    <CatalogLink to="/company/overview">Overview</CatalogLink>
  </>;
}

test.each([
  ["/", "/en/intro"],
  ["/en", "/en/intro"],
  ["/ko", "/en/intro"],
  ["/kr", "/en/intro"],
  ["/ko/company/history", "/en/company/history"],
  ["/kr/product/standard-gas/atmospheric-standards", "/en/product/standard-gas/atmospheric-standards"],
  ["/ko/missing", "/en/intro"],
  ["/en/company/overview", "/en/company/overview"],
])("normalizes %s to %s", async (initialPath, expectedPath) => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/:lang?/:pageSlug1?/:pageSlug2?/:pageSlug3?/*" element={
          <CatalogProvider><Probe /></CatalogProvider>
        } />
      </Routes>
    </MemoryRouter>,
  );
  await waitFor(() => expect(screen.getByTestId("path")).toHaveTextContent(expectedPath));
  expect(screen.getByTestId("language")).toHaveTextContent("en");
  expect(screen.getByRole("link", { name: "Overview" })).toHaveAttribute("href", "/en/company/overview");
});

test("only the existing English catalog is enabled with the RIGAS title", () => {
  expect(catalogConfigs.langSet).toEqual(["en"]);
  expect(catalogConfigs.title.en).toBe("RIGAS");
  expect(catalogConfigs.title.default).toBe("RIGAS");
});
