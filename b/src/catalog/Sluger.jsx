import { useParams } from "react-router-dom";


// 슬러그 기반 라우팅 처리
export default function Sluger({ routes, slug, defaultPath }) {
  const params = useParams();
  const currentPath = params[slug];
  
  // 현재 경로에 맞는 페이지 찾기
  let Page = routes.find((route) => route.path === currentPath)?.element;
  
  // 페이지가 없고 기본 경로가 설정되어 있으면 기본 페이지 표시
  if (!Page && defaultPath) {
    Page = routes.find((route) => route.path === defaultPath)?.element;
  }
  
  // 여전히 페이지가 없으면 첫 번째 페이지 표시
  if (!Page && routes.length > 0) {
    Page = routes[0].element;
  }

  return Page ? Page : null;
}
