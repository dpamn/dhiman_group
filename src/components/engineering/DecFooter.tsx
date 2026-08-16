import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { decConfig } from "@/lib/dec-data";
import { Container } from "@/components/ui";

const footerNav = [
  { label: "Home", href: "/engineering" },
  { label: "About Us", href: "/engineering/about" },
  { label: "Products", href: "/engineering/products" },
  { label: "Services", href: "/engineering/services" },
  { label: "Projects", href: "/engineering/projects" },
  { label: "Gallery", href: "/engineering/gallery" },
  { label: "Contact", href: "/engineering/contact" },
];

export function DecFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1.2fr] lg:gap-12 lg:py-16">
        <div>
          <a href="/engineering" aria-label="Dhiman Engineering Company home">
            <Image
              src="/images/DEC_images/DHIMAN ENGG.png"
              alt="Dhiman Engineering Company"
              width={160}
              height={54}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </a>
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            Specialists in water treatment engineering, swimming pool
            construction, and precision industrial components — delivering
            quality solutions across India since decades.
          </p>
          <a
            href="/engineering/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-control border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-green hover:bg-brand-green hover:text-brand-navy"
          >
            Get a Free Quote
          </a>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="font-display text-base font-bold text-white">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold text-white">
            Contact Us
          </h2>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li>
              <div className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-green-300"
                />
                <div className="space-y-1">
                  {decConfig.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/-/g, "")}`}
                      className="block transition-colors hover:text-white"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <a
                href={`mailto:${decConfig.email}`}
                className="flex gap-3 transition-colors hover:text-white"
              >
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-green-300"
                />
                <span className="break-all">{decConfig.email}</span>
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-green-300"
              />
              <span className="leading-6">{decConfig.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Dhiman Engineering Company. All rights reserved.</p>
          <Link
            href="/"
            className="transition-colors hover:text-slate-200"
          >
            Part of Dhiman Group
          </Link>
        </Container>
      </div>
    </footer>
  );
}
