import { useParams } from "react-router-dom";
import { Video } from "components/elements";

export default function IntroVideoLayer() {
  const { pageSlug1 } = useParams();

  if (pageSlug1 !== "index") return null;

  return (
    <div className="intro-video-layer" aria-hidden="true">
      <Video src="video/intro.mp4" autoPlay loop />
    </div>
  );
}
