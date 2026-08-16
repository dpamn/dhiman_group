import type { ReactNode } from "react";

import { DecFooter } from "./DecFooter";
import { DecNavbar } from "./DecNavbar";

export function DecShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <DecNavbar />
      <main id="main-content">
        {children}
      </main>
      <DecFooter />
    </>
  );
}
