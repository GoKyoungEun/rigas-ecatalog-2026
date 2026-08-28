import { IMG_URL } from "configs";
import { useRef, useEffect } from "react";

export default function Video({ src, autoPlay, loop, muted = true, playsInline = true, hoverPlay = false, delay = 0, ...props }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoPlay && videoRef.current && delay > 0) {
      videoRef.current.pause();
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [autoPlay, delay]);

  const handleMouseEnter = () => {
    if (hoverPlay && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (hoverPlay && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      src={`${IMG_URL}/${src}`}
      autoPlay={autoPlay && delay === 0}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}
