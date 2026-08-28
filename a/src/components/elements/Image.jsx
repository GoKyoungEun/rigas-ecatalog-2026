import { IMG_URL } from "configs";

export default function Image({ src, alt, className, ...props }) {
  return <img src={`${IMG_URL}/${src}`} alt={alt} className={className} {...props} />;
}
