import { useCatalog } from "catalog/Catalog.context";
import { twMerge } from "tailwind-merge";

export default function Br({ pc, mobile }) {
  const { isResponsive } = useCatalog();

  let classNames = "block";

  if (pc || mobile) {
    if (!pc && !isResponsive) {
      classNames = "hidden";
    } else if (!mobile && isResponsive) {
      classNames = "hidden";
    }
  }

  return <br className={twMerge(classNames)} />;
}
