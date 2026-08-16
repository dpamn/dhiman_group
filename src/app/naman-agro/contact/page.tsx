import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { NauShell } from "@/components/agro/NauShell";
import { NauContactForm } from "@/components/agro/NauContactForm";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { agroConfig } from "@/lib/agro-data";

export const metadata: Metadata = {
  title: "Contact | Naman Agro Udhyog",
  description:
    "Contact Naman Agro Udhyog for agricultural machinery enquiries, product information and support.",
  alternates: {
    canonical: "/naman-agro/contact",
  },
};

export default function NamanContactPage() {
  const whatsappNumber = agroConfig.phone.replace(/\D/g, "");

  return (
    <NauShell>
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Contact Us
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Get in touch with our team.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Reach out with your requirements and our team will respond with
              product guidance and support.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Get in Touch"
                  title="We're here to help."
                  description="Whether you need a specific product or want to explore options — we're happy to talk."
                />
              </Reveal>

              <Reveal className="mt-10 space-y-6">
                <div className="flex gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
                  <div className="grid size-11 shrink-0 place-items-center rounded-sm bg-brand-navy text-white">
                    <Phone aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Phone</p>
                    <div className="mt-1 space-y-1">
                      {agroConfig.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/-/g, "")}`}
                          className="block text-slate-600 transition-colors hover:text-brand-navy"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
                  <div className="grid size-11 shrink-0 place-items-center rounded-sm bg-brand-navy text-white">
                    <Mail aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Email</p>
                    <a
                      href={`mailto:${agroConfig.email}`}
                      className="mt-1 block break-all text-slate-600 transition-colors hover:text-brand-navy"
                    >
                      {agroConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
                  <div className="grid size-11 shrink-0 place-items-center rounded-sm bg-brand-navy text-white">
                    <MapPin aria-hidden="true" className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Address</p>
                    <p className="mt-1 leading-6 text-slate-600">
                      {agroConfig.address}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${agroConfig.mapQuery}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-green-700 hover:text-brand-navy"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
                  <p className="font-semibold text-brand-navy">WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-green-700 hover:text-brand-navy"
                  >
                    Message on WhatsApp →
                  </a>
                </div>

                <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
                  <p className="font-semibold text-brand-navy">Business Hours</p>
                  <div className="mt-2 space-y-1 text-sm text-slate-600">
                    <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right">
              <div className="rounded-card border border-slate-200 bg-white p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-brand-navy">
                  Send an inquiry
                </h2>
                <p className="mt-2 text-slate-600">
                  Fill in the form below and we&apos;ll get back to you shortly.
                </p>
                <NauContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <div className="h-80 w-full bg-slate-200">
        <iframe
          title="Naman Agro Udhyog location"
          src={`https://maps.google.com/maps?q=${agroConfig.mapQuery}&output=embed`}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
          aria-label="Map showing Naman Agro Udhyog location in Shamli, Uttar Pradesh"
        />
      </div>
    </NauShell>
  );
}
