import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SectionTone = "default" | "muted" | "dark";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: SectionTone;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-white text-brand-ink",
  muted: "bg-brand-mist text-brand-ink",
  dark: "bg-brand-primary text-white",
};

export function Section({
  className,
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-28",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
