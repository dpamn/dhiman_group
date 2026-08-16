import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

const baseClasses =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-control font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-secondary text-brand-primary hover:bg-green-400 focus-visible:outline-brand-secondary",
  secondary:
    "bg-brand-primary text-white hover:bg-slate-800 focus-visible:outline-brand-primary",
  light:
    "bg-white text-brand-primary hover:bg-slate-100 focus-visible:outline-white",
  outline:
    "border border-white/55 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white",
  ghost:
    "bg-transparent text-brand-primary hover:bg-slate-100 focus-visible:outline-brand-primary",
  danger:
    "bg-red-700 text-white hover:bg-red-800 focus-visible:outline-red-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-5 py-3 text-base",
  lg: "min-h-14 px-6 py-3.5 text-base",
  icon: "size-11 p-0",
};

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleOptions = {}) {
  return cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
