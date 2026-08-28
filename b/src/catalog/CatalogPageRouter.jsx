import { lazy, Suspense, useState, useEffect } from "react";
import { useCatalog } from "./Catalog.context";

// 페이지 라우팅 로직
export default function CatalogPageRouter() {
  const {
    configs: { pageMap },
    lang,
    pageSlug1,
  } = useCatalog();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (lang) {
      setPages(
        pageMap.map((pg) => {
          const pgName = typeof pg === "string" ? pg : pg.name;
          return {
            name: pgName,
            component: lazy(() => import(`pages/${lang}/${pgName}`)),
          };
        }),
      );
    }
  }, [lang, pageMap]);

  const Page = pages.find((page) => page.name === pageSlug1);

  return <Suspense>{Page && <Page.component />}</Suspense>;
}
