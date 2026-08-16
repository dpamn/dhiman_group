import type { ReactNode } from "react";

import { NauFooter } from "./NauFooter";
import { NauNavbar } from "./NauNavbar";

export function NauShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NauNavbar />
      <main id="main-content">{children}</main>
      <NauFooter />
    </>
  );
}
