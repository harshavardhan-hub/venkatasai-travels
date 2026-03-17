"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
  href?: string;
  target?: string;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ className, variant = "primary", size = "md", children, href, target, asChild: _asChild, ...props }, ref) => {
    const baseClasses =
      "relative inline-flex items-center justify-center font-medium rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50 overflow-hidden group";

    const variants = {
      primary:
        "bg-royal-blue text-cream hover:bg-royal-blue/90 shadow-md shadow-royal-blue/20",
      gold: "bg-gold text-deep-navy hover:brightness-110 shadow-lg shadow-gold/30 hover:shadow-gold/50",
      secondary:
        "bg-saffron text-deep-navy hover:bg-saffron/90 shadow-sm",
      outline:
        "border-2 border-gold text-gold hover:bg-gold hover:text-deep-navy bg-transparent",
      ghost: "hover:bg-cream/10 text-cream bg-transparent",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
      icon: "h-11 w-11",
    };

    const combinedClassName = cn(baseClasses, variants[variant], sizes[size], className);
    const content = (
      <>
        <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">{children}</span>
        {/* Subtle hover shine effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          ref={ref as React.Ref<HTMLAnchorElement>}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={combinedClassName}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={combinedClassName}
        {...(props as HTMLMotionProps<"button">)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };

