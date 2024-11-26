import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// CVA for consistent styling
const selectVariants = cva(
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

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  label?: string; // Optional label
  error?: string; // Error message
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, label, error, id, children, ...props }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            {label}
          </label>
        )}
        <select
          className={cn(
            selectVariants({ variant, size, className }),
            error && "border-red-500 focus-visible:ring-red-500"
          )}
          id={selectId}
          ref={ref}
          aria-invalid={!!error}
          {...props}
        >
          {children}
        </select>
        {error && <small className="text-sm text-red-500">{error}</small>}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select, selectVariants };
