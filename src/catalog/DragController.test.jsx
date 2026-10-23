import { fireEvent, render, screen } from "@testing-library/react";
import DragController from "./DragController";
import { useCatalog } from "./Catalog.context";

jest.mock("./Catalog.context", () => ({ useCatalog: jest.fn() }));

const point = (clientX, clientY = 100) => ({ clientX, clientY });

function swipe(element) {
  fireEvent.touchStart(element, { touches: [point(200)] });
  fireEvent.touchEnd(element, { changedTouches: [point(100)] });
}

test("swiping a horizontally scrollable table does not change pages", () => {
  const paging = jest.fn();
  useCatalog.mockReturnValue({ paging });
  render(
    <>
      <DragController />
      <div data-testid="scroller" style={{ overflowX: "auto" }}>
        <table><tbody><tr><td>Cell</td></tr></tbody></table>
      </div>
      <div data-testid="page">Page</div>
    </>,
  );

  const scroller = screen.getByTestId("scroller");
  Object.defineProperties(scroller, {
    scrollWidth: { value: 600 },
    clientWidth: { value: 300 },
  });

  swipe(screen.getByText("Cell"));
  expect(paging).not.toHaveBeenCalled();

  swipe(screen.getByTestId("page"));
  expect(paging).toHaveBeenCalledWith("next");
});
