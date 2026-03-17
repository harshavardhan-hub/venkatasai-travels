import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "gold";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-deep-navy text-cream shadow hover:bg-deep-navy/90 border border-transparent",
    secondary: "bg-saffron text-deep-navy hover:bg-saffron/80 border border-transparent",
    outline: "border border-gold text-gold",
    gold: "bg-gold text-deep-navy shadow-sm border border-transparent",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
