import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const transition = { duration: 0.8, ease: [0.85, 0.14, 0.29, 0.99] };

export default function IntroHeroTextLayer() {
  const { pageSlug1 } = useParams();
  const show = pageSlug1 === "intro" || pageSlug1 === "index";
  const isIndex = pageSlug1 === "index";

  if (!show) return null;

  return (
    <motion.div
      className="intro-hero-text-layer"
      initial={false}
      animate={
        isIndex
          ? { top: "50%", left: 136, y: "-50%" }
          : { top: 215, left: 110, y: 0 }
      }
      transition={transition}
    >
      <motion.p
        className="intro-hero-subtitle"
        initial={false}
        animate={{ fontSize: isIndex ? "22px" : "30px" }}
        transition={transition}
      >
        Advancing Accuracy Through Science and Innovation
      </motion.p>
      <motion.h1
        className="intro-hero-title"
        initial={false}
        animate={{ fontSize: isIndex ? "64px" : "95px" }}
        transition={transition}
      >
        Setting the Standard,
        <br />
        Delivering Precision
      </motion.h1>
    </motion.div>
  );
}
