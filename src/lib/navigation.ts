/** Returns true when a nav item should appear active for the current pathname. */
export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/companies") {
    return (
      pathname === "/companies" ||
      pathname.startsWith("/engineering") ||
      pathname.startsWith("/naman-agro")
    );
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
