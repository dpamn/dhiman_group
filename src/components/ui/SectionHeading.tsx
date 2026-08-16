import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  id?: string;
  level?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  id,
  level = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = level;
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const eyebrowColor = inverse ? "text-green-300" : "text-green-700";
  const titleColor = inverse ? "text-white" : "text-brand-navy";
  const bodyColor = inverse ? "text-slate-300" : "text-slate-600";
  const descriptionAlignment = align === "center" ? "mx-auto" : "";

  return (
    <header className={cn("max-w-3xl", alignment, className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-sm font-bold uppercase tracking-normal",
            eyebrowColor,
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "font-display text-3xl font-bold leading-[1.12] tracking-normal sm:text-4xl lg:text-5xl",
          titleColor,
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-8",
            bodyColor,
            descriptionAlignment,
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
