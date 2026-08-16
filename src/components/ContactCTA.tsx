import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

import { ButtonLink, Container, Reveal } from "./ui";

export function ContactCTA() {
  const { contact } = siteConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-white py-20 text-brand-ink sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-brand-green"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal direction="left">
            <p className="text-sm font-bold uppercase tracking-normal text-green-700">
              Start a conversation
            </p>
            <h2
              id="contact-title"
              className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-normal text-brand-navy sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Build Together
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Connect with Dhiman Group to discuss your requirements, identify
              the right business division, and begin a focused conversation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={`tel:${contact.phone}`}
                className="sm:min-w-40"
              >
                <Phone aria-hidden="true" className="size-4" />
                Call Us
              </ButtonLink>
              <ButtonLink
                href={`mailto:${contact.email}?subject=Inquiry%20for%20Dhiman%20Group`}
                variant="secondary"
                className="sm:min-w-44"
              >
                Send Inquiry
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal direction="right">
            <address className="not-italic">
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                <div className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                  <span className="grid size-12 place-items-center rounded-sm bg-brand-mist text-green-700">
                    <Phone aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">
                      Phone
                    </span>
                    <span className="mt-1 block space-y-1">
                      {contact.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/-/g, "")}`}
                          className="block text-lg font-semibold text-brand-navy transition-colors hover:text-green-700"
                        >
                          {phone}
                        </a>
                      ))}
                    </span>
                  </span>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="group grid grid-cols-[3rem_1fr] gap-4 py-6"
                >
                  <span className="grid size-12 place-items-center rounded-sm bg-brand-mist text-green-700 transition-colors group-hover:bg-green-50">
                    <Mail aria-hidden="true" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-500">
                      Email
                    </span>
                    <span className="mt-1 block break-words text-lg font-semibold text-brand-navy">
                      {contact.email}
                    </span>
                  </span>
                </a>
                <div className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                  <span className="grid size-12 place-items-center rounded-sm bg-brand-mist text-green-700">
                    <MapPin aria-hidden="true" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-500">
                      Address
                    </span>
                    <span className="mt-1 block max-w-md text-lg font-semibold leading-7 text-brand-navy">
                      {contact.address}
                    </span>
                  </span>
                </div>
              </div>
            </address>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
