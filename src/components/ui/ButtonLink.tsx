import type { AnchorHTMLAttributes, ReactNode } from "react";

import { buttonStyles, type ButtonSize, type ButtonVariant } from "./button-styles";

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={buttonStyles({ className, size, variant })}
      {...props}
    >
      {children}
    </a>
  );
}
