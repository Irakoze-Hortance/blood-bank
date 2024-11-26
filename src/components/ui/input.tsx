import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "block w-full rounded-md border text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 dark:ring-offset-neutral-950",
  {
    variants: {
      variant: {
        default:
          "border-neutral-300 bg-white text-neutral-900 focus-visible:ring-neutral-950 focus-visible:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:focus-visible:ring-neutral-300 dark:focus-visible:border-neutral-300",
        destructive:
          "border-red-500 bg-white text-neutral-900 focus-visible:ring-red-500 focus-visible:border-red-500 dark:border-red-900 dark:bg-neutral-950 dark:text-neutral-50 dark:focus-visible:ring-red-900 dark:focus-visible:border-red-900",
        outline:
          "border-neutral-200 bg-white focus-visible:ring-neutral-950 focus-visible:border-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:focus-visible:ring-neutral-300 dark:focus-visible:border-neutral-300",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, error, label, id, ...props }, ref) => {
    const insideId = id || React.useId();
    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={insideId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            {label}
          </label>
        )}
        <input
          className={cn(
            inputVariants({ variant, size, className }),
            error && "border-red-500 focus-visible:ring-red-500"
          )}
          id={insideId}
          ref={ref}
          aria-invalid={!!error}
          {...props}
        />
        {error && <small className="text-sm text-red-500">{error}</small>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
