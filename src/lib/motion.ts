import type { Variants } from "framer-motion";

export const motionTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
} as const;

export const revealViewport = {
  once: true,
  amount: 0.18,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: motionTransition },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: motionTransition },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: motionTransition },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
