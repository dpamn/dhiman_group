"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { isNavActive } from "@/lib/navigation";
import { navigation } from "@/lib/site";

import { ButtonLink, Container, Logo } from "./ui";

function navLinkClass(isActive: boolean, solidHeader: boolean): string {
  if (isActive) {
    return solidHeader
      ? "text-brand-navy underline decoration-brand-green decoration-2 underline-offset-8"
      : "text-white underline decoration-brand-green decoration-2 underline-offset-8";
  }

  return solidHeader
    ? "text-slate-700 hover:text-brand-navy"
    : "text-white/85 hover:text-white";
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const solidHeader = pathname !== "/" || isScrolled || isOpen;
  const contactActive = isNavActive(pathname, "/contact");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        solidHeader
          ? "border-slate-200/80 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo tone={solidHeader ? "dark" : "light"} />

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => {
              const active = isNavActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`rounded-sm py-2 text-[0.95rem] font-semibold transition-colors ${navLinkClass(active, solidHeader)}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href="/contact"
            variant={solidHeader ? "secondary" : "primary"}
            className={`min-w-32 ${contactActive ? "ring-2 ring-brand-green/40 ring-offset-2" : ""}`}
            aria-current={contactActive ? "page" : undefined}
          >
            Contact Us
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`grid size-11 shrink-0 place-items-center rounded-sm lg:hidden ${
            solidHeader ? "text-brand-navy" : "text-white"
          }`}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile navigation" className="py-5">
            <ul>
              {navigation.map((item) => {
                const active = isNavActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`block rounded-sm border-b border-slate-100 py-4 font-semibold ${
                        active
                          ? "text-brand-navy underline decoration-brand-green decoration-2 underline-offset-4"
                          : "text-brand-navy"
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className={`mt-5 w-full ${contactActive ? "ring-2 ring-brand-green/40" : ""}`}
              aria-current={contactActive ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  );
}
