import * as React from "react";

import { cn } from "@/lib/utils";

const spinnerSizes = {
  sm: "w-4 h-4 border-2",
  default: "w-8 h-8 border-2",
  lg: "w-12 h-12 border-[3px]",
} as const;

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof spinnerSizes;
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = "default", ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={cn(
        "border-foreground border-t-transparent rounded-full animate-spin",
        spinnerSizes[size],
        className
      )}
      {...props}
    />
  )
);
Spinner.displayName = "Spinner";

export { Spinner };