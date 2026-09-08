import { useParams } from "react-router-dom";
import { catalogConfigs } from "configs";

export function Lang({ content }) {
  const { lang } = useParams();
  return content[lang] || content[catalogConfigs.langSet[0]] || Object.values(content)[0] || '';
}

export function useLang(content) {
  const { lang } = useParams();
  return content[lang] || content[catalogConfigs.langSet[0]] || Object.values(content)[0] || '';
}
