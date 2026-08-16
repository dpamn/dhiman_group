import {
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/cn";

const controlClasses =
  "min-h-12 w-full rounded-control border border-slate-300 bg-white px-4 py-3 text-brand-ink shadow-sm transition-[border-color,box-shadow] placeholder:text-slate-400 hover:border-slate-400 focus:border-brand-steel focus:outline-none focus:ring-2 focus:ring-brand-steel/20 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 aria-invalid:border-red-600 aria-invalid:ring-red-600/15";

export function Field({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-2", className)} {...props} />;
}

export function FieldLabel({
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-semibold text-brand-primary", className)}
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm leading-6 text-slate-500", className)} {...props} />
  );
}

export function FieldError({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      role="alert"
      className={cn("text-sm font-medium text-red-700", className)}
      {...props}
    />
  );
}

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(controlClasses, className)} {...props} />
));

Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, rows = 5, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={rows}
    className={cn(controlClasses, "resize-y", className)}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => (
  <select ref={ref} className={cn(controlClasses, className)} {...props} />
));

Select.displayName = "Select";
