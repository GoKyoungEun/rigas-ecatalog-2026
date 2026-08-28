import { useParams } from "react-router-dom";

export function Lang({ content }) {
  const { lang } = useParams();
  return content[lang] || content.ko || Object.values(content)[0] || '';
}

export function useLang(content) {
  const { lang } = useParams();
  return content[lang] || content.ko || Object.values(content)[0] || '';
}
