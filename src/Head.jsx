import { catalogConfigs } from "configs";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

export default function Head() {
  const { title } = catalogConfigs;
  const { lang } = useParams();

  return (
    <Helmet>
      <title>{`${title[lang] ? title[lang] : title.default} | E-catalog`}</title>

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap" rel="stylesheet"/>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
      />
    </Helmet>
  );
}
