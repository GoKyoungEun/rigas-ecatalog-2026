import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { CatalogPage } from "catalog/CatalogPage";
import { CatalogLink } from "catalog/CatalogNavigations";
import { IMG_URL } from "configs";
import { Anime, Image, Video, } from "components/elements";

const pageInfo = {
  depth1: "intro",
  depth2: "",
};

export default function Last() {
  return (
    <CatalogPage pageInfo={pageInfo} className="intro">
      <CatalogLink to="/index" className="skip-btn">
        <span>INTRO<br />SKIP</span>
      </CatalogLink>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.2 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{
          duration: 0.3,
          delay: 1,
          ease: "easeInOut"
        }}
        className="intro-logo moView"
      >
        <Image src="intro-logo.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: "easeInOut"
        }}
        className="intro-logo pcView"
      >
        <Image src="intro-logo.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.2 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{
          duration: 0.3,
          delay: 2,
          ease: "easeInOut"
        }}
        className="intro-bg pcView"
      >
        <Image src="intro-bg.svg" />
      </motion.div>
      <div
        className="intro-title pcView"
        style={{
          WebkitMaskImage: `url(${IMG_URL}/intro-title.svg)`,
          maskImage: `url(${IMG_URL}/intro-title.svg)`,
        }}
      />
      <div className="bg">
        <Video src="video/intro.mp4" autoPlay loop delay={1} />
      </div>
    </CatalogPage>
  );
}