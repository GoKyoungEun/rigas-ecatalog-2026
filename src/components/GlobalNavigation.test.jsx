import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import GlobalNavigation from "./GlobalNavigation";

jest.mock("catalog/Catalog.context", () => ({
  useCatalog: () => ({ autoplayState: false, handleAutoplay: jest.fn(), paging: jest.fn() }),
}));
jest.mock("components/elements", () => ({
  Image: ({ src, alt }) => <img src={src} alt={alt} />,
  Lang: () => null,
}));

function Page() {
  const { pathname } = useLocation();
  return <><GlobalNavigation /><output data-testid="path">{pathname}</output></>;
}

function setup(path = "/en/product/standard-gas/atmospheric-standards") {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/:lang/:pageSlug1/:pageSlug2?/:pageSlug3?" element={<Page />} />
      </Routes>
    </MemoryRouter>,
  );
  return screen.getByRole("navigation", { name: "Main navigation" }).closest(".rigas-header-wrap");
}

test("hover opens the current section and keeps it open over the submenu", () => {
  const header = setup();
  expect(screen.queryByRole("navigation", { name: "Product navigation" })).not.toBeInTheDocument();
  fireEvent.mouseEnter(header);
  const submenu = screen.getByRole("navigation", { name: "Product navigation" });
  expect(header).toHaveClass("rigas-header-wrap--expanded");
  expect(within(submenu).getAllByRole("link").map((link) => link.getAttribute("href"))).toEqual([
    "/en/product/traceability",
    "/en/product/standard-gas/atmospheric-standards",
    "/en/product/mixed-gas/laser-gas-mixtures",
    "/en/product/rigas-one/rigas-one",
    "/en/product/regulator",
  ]);
  fireEvent.mouseEnter(submenu);
  expect(submenu).toBeVisible();
  fireEvent.mouseLeave(header);
  expect(submenu).not.toBeVisible();
});

test("Company hover switches to the current company pages", () => {
  setup();
  fireEvent.mouseOver(screen.getByRole("link", { name: "Company" }));
  const submenu = screen.getByRole("navigation", { name: "Company navigation" });
  expect(within(submenu).getAllByRole("link")).toHaveLength(5);
  expect(within(submenu).getByText("Performance")).toHaveAttribute("href", "/en/company/performance");
  expect(screen.queryByRole("navigation", { name: "Product navigation" })).not.toBeInTheDocument();
});

test("submenu navigation changes the route and closes the menu", () => {
  const header = setup();
  fireEvent.mouseEnter(header);
  fireEvent.click(screen.getByRole("link", { name: "Regulator" }));
  expect(screen.getByTestId("path")).toHaveTextContent("/en/product/regulator");
  expect(header).not.toHaveClass("rigas-header-wrap--expanded");
  expect(screen.queryByRole("navigation", { name: "Product navigation" })).not.toBeInTheDocument();
});

test("keyboard focus opens the menu and Escape closes it", () => {
  setup();
  fireEvent.focus(screen.getByRole("link", { name: "Product" }));
  const link = screen.getByRole("link", { name: "Regulator" });
  fireEvent.keyDown(link, { key: "Escape" });
  expect(screen.queryByRole("navigation", { name: "Product navigation" })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Product" })).toHaveFocus();
});

test("last page retains its minimal header without a submenu", () => {
  const header = setup("/en/last");
  fireEvent.mouseEnter(header);
  expect(header).not.toHaveClass("rigas-header-wrap--expanded");
  expect(screen.queryByRole("navigation", { name: "Company navigation", hidden: true })).not.toBeInTheDocument();
});
