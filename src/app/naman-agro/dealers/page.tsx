import type { Metadata } from "next";

import { NauShell } from "@/components/agro/NauShell";
import { agroConfig } from "@/lib/agro-data";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Dealer Network | Naman Agro Udhyog",
  description:
    "Connect with Naman Agro Udhyog for dealer support and product guidance in your area.",
  alternates: {
    canonical: "/naman-agro/dealers",
  },
};

export default function DealersPage() {
  return (
    <NauShell>
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Dealer Network
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Find the right contact
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Our dealer network helps connect farmers and businesses with the
              appropriate Naman Agro product support.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeading
              title="Dealer enquiries"
              description="Dealer details are coordinated through our central team so we can direct your enquiry to the appropriate area."
            />
          </Reveal>
          <div className="mt-8 rounded-card border border-slate-200 bg-white p-7 shadow-card sm:p-10">
            <p className="text-lg leading-8 text-slate-700">
              Call{" "}
              {agroConfig.phones.map((phone, index) => (
                <span key={phone}>
                  {index > 0
                    ? index === agroConfig.phones.length - 1
                      ? ", or "
                      : ", "
                    : ""}
                  <a
                    className="font-bold text-green-700"
                    href={`tel:${phone.replace(/-/g, "")}`}
                  >
                    {phone}
                  </a>
                </span>
              ))}{" "}
              or email{" "}
              <a
                className="font-bold text-green-700"
                href={`mailto:${agroConfig.email}`}
              >
                {agroConfig.email}
              </a>{" "}
              with your location and product interest.
            </p>
          </div>
        </Container>
      </Section>
    </NauShell>
  );
}
