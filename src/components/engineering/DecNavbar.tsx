"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink, Container } from "@/components/ui";

const decNav = [
  { label: "Home", href: "/engineering" },
  { label: "About", href: "/engineering/about" },
  { label: "Products", href: "/engineering/products" },
  { label: "Services", href: "/engineering/services" },
  { label: "Projects", href: "/engineering/projects" },
  { label: "Catalog", href: "/engineering/catalog" },
  { label: "Gallery", href: "/engineering/gallery" },
];

export function DecNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const isHero = pathname === "/engineering";
  const solid = !isHero || isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        mounted ? "transition-all duration-300" : ""
      } ${
        solid
          ? "border-b border-slate-200/80 bg-white/95 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Dhiman Group mark — links back to main site */}
          <Link
            href="/"
            className="inline-flex items-center rounded-sm"
            aria-label="Back to Dhiman Group"
            title="Dhiman Group"
          >
            <Image
              src="/images/dhiman-group-mark.png"
              alt="Dhiman Group"
              width={74}
              height={48}
              className={`h-9 w-auto object-contain transition-[filter] duration-300 ${
                solid ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Divider */}
          <span
            aria-hidden="true"
            className={`h-7 w-px transition-colors duration-300 ${
              solid ? "bg-slate-300" : "bg-white/30"
            }`}
          />

          {/* DEC logo — links to engineering home */}
          <a
            href="/engineering"
            className="inline-flex items-center rounded-sm"
            aria-label="Dhiman Engineering Company home"
          >
            <Image
              src="/images/DEC_images/DHIMAN ENGG.png"
              alt="Dhiman Engineering Company"
              width={120}
              height={40}
              className={`h-9 w-auto object-contain transition-[filter] duration-300 ${
                solid ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </a>
        </div>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {decNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`rounded-sm py-2 text-[0.9rem] font-semibold transition-colors ${
                      active
                        ? solid
                          ? "text-brand-navy"
                          : "text-white"
                        : solid
                          ? "text-slate-600 hover:text-brand-navy"
                          : "text-white/80 hover:text-white"
                    }`}
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
            href="/engineering/contact"
            variant={solid ? "secondary" : "primary"}
            className="min-w-32"
          >
            Get a Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`grid size-11 place-items-center rounded-sm lg:hidden ${
            solid ? "text-brand-navy" : "text-white"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="dec-mobile-nav"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </Container>

      <div
        id="dec-mobile-nav"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile navigation" className="py-5">
            <ul>
              {decNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-sm border-b border-slate-100 py-4 font-semibold text-brand-navy"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/engineering/contact"
              variant="secondary"
              className="mt-5 w-full"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  );
}
