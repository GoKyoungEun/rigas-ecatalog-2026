import { useState, useEffect } from "react";

export default function FullScreen({ render, onClick, className }) {
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setFullScreen(!!document.fullscreenElement);
    };

    const handleKeyPress = (e) => {
      if (e.key === "F11") {
        e.preventDefault();
        toggleFullScreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return {};
}
