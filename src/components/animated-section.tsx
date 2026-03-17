"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  playOnLoad?: boolean;
}

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0, 
  direction = "up",
  playOnLoad = false,
  ...props 
}: AnimatedSectionProps) {

  const getInitialPosition = () => {
    switch(direction) {
      case "up": return { y: 50, x: 0 };
      case "down": return { y: -50, x: 0 };
      case "left": return { x: 50, y: 0 };
      case "right": return { x: -50, y: 0 };
      case "none": return { x: 0, y: 0 };
      default: return { y: 50, x: 0 };
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={playOnLoad ? { opacity: 1, x: 0, y: 0 } : undefined}
      whileInView={!playOnLoad ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={!playOnLoad ? { once: true, margin: "-100px" } : undefined}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("w-full relative", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
