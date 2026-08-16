"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { motionTransition, revealViewport } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

const offsets = {
  up: { x: 0, y: 24 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={revealViewport}
      transition={{
        ...motionTransition,
        duration: reduceMotion ? 0 : motionTransition.duration,
        delay: reduceMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
};

export function HoverLift({ children, className }: HoverLiftProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.24, ease: motionTransition.ease }}
    >
      {children}
    </motion.div>
  );
}
