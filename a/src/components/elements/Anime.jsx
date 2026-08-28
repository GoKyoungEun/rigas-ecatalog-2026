import { motion } from "framer-motion";
import { useCatalog } from "catalog/Catalog.context";

const animeTemplate = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 80 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -80 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -80 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 80 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.85 },
  },
  scaleDown: {
    initial: { opacity: 0, scale: 2 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 2 },
  },
};

export const animeTransitions = {
  ease: { type: "ease", duration: 0.5 },
  linear: { type: "linear", duration: 0.5 },
  easeIn: { type: "easeIn", duration: 0.5 },
  easeOut: { type: "easeOut", duration: 0.5 },
  easeInOut: { type: "easeInOut", duration: 0.5 },
  spring: { type: "spring", bounce: 1, damping: 10, mass: 0.5, stiffness: 90 },
  spring2: { type: "spring", bounce: 5, damping: 9, mass: 0.4, stiffness: 95 },
  spring3: { type: "spring", bounce: 10, damping: 9, mass: 0.8, stiffness: 100 },
  pop: { ease: [0.85, 0.14, 0.29, 0.99], duration: 0.5 },
};

export function Anime({ children, anime, transition = "pop", delay = 0, duration, ...props }) {
  const { isResponsive } = useCatalog();
  let animation = {};

  if (anime) {
    if (typeof anime === "string") {
      animation = { ...animeTemplate[anime] };
    } else {
      animation = { ...animeTemplate[isResponsive ? anime.mobile : anime.default] };
    }
  }

  animation.transition = { ...animeTransitions[transition], delay };

  if (duration) {
    animation.transition.duration = duration;
  }

  return (
    <motion.div {...animation} {...props}>
      {children}
    </motion.div>
  );
}
