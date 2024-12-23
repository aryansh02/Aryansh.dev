import { cn } from "@/app/utils/cn";

export default function Button({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}) {
  // Define base styles for buttons
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";

  // Define variant styles
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    ghost: "bg-transparent text-indigo-600 hover:bg-indigo-100",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100",
  };

  // Define size styles
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className // Allow custom class overrides
      )}
      {...props}
    >
      {children}
    </button>
  );
}
