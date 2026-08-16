import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  Phone,
  Users,
  // Youtube,
} from "lucide-react";

import { getSocialLinks } from "@/lib/social";
import { navigation, siteConfig } from "@/lib/site";

import { Container, Logo } from "./ui";

const socialIcons = {
  LinkedIn: BriefcaseBusiness,
  Facebook: Users,
  Instagram: Camera,
  // YouTube: Youtube,
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const { contact } = siteConfig;
  const socialLinks = getSocialLinks();

  return (
    <footer className="bg-brand-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.2fr] lg:gap-12 lg:py-16">
        <div>
          <Logo variant="full" />
          <p className="mt-5 max-w-sm leading-7 text-slate-300">
            A diversified group advancing engineering, manufacturing, and
            agriculture through focused businesses and shared standards.
          </p>
          {socialLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons];

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="grid size-10 place-items-center rounded-sm border border-white/20 text-slate-300 transition-colors hover:border-brand-green hover:bg-brand-green hover:text-brand-ink"
                  >
                    {Icon ? (
                      <Icon aria-hidden="true" className="size-4" />
                    ) : null}
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="font-display text-base font-bold tracking-normal text-white">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
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

        <nav aria-label="Group companies">
          <h2 className="font-display text-base font-bold tracking-normal text-white">
            Companies
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href="/engineering"
                className="block leading-6 text-slate-300 transition-colors hover:text-white"
              >
                Dhiman Engineering Company
              </a>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Water Treatment &amp; Pool Specialists
              </p>
            </li>
            <li>
              <a
                href="/naman-agro"
                className="block leading-6 text-slate-300 transition-colors hover:text-white"
              >
                Naman Agro Udyog
              </a>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Agricultural Machinery &amp; Solutions
              </p>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold tracking-normal text-white">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li>
              <div className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-green-300"
                />
                <div className="space-y-1">
                  {contact.phones.map((phone) => (
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
                href={`mailto:${contact.email}`}
                className="flex min-w-0 gap-3 transition-colors hover:text-white"
              >
                <Mail
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-green-300"
                />
                <span className="break-words">{contact.email}</span>
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-green-300"
              />
              <span className="leading-6">{contact.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Dhiman Group. All rights reserved.</p>
          <p>Made with ❤ by Amandeep Dhiman</p>
          <p>Engineering. Manufacturing. Agriculture.</p>
        </Container>
      </div>
    </footer>
  );
}
