import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ContainerElement =
  | "div"
  | "section"
  | "nav"
  | "header"
  | "footer"
  | "main";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ContainerElement;
};

export function Container({
  as,
  className = "",
  ...props
}: ContainerProps) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16",
        className,
      )}
      {...props}
    />
  );
}
