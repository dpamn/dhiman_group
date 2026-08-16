import type { Metadata } from "next";
import { ArrowRight, Cog, Droplets, Waves, Wrench } from "lucide-react";

import { DecShell } from "@/components/engineering/DecShell";
import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { decServices } from "@/lib/dec-data";

export const metadata: Metadata = {
  title: "Services | Dhiman Engineering Company",
  description:
    "Water treatment plant installation, swimming pool construction, pool maintenance, and industrial component manufacturing services.",
};

const serviceIcons = {
  droplets: Droplets,
  waves: Waves,
  wrench: Wrench,
  cog: Cog,
} as const;

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your specific requirements, site conditions, and project goals through a detailed consultation.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Our engineering team develops a tailored solution — from system design to component selection and layout planning.",
  },
  {
    number: "03",
    title: "Manufacturing & Supply",
    description:
      "We manufacture or source all required components to specification, ensuring quality at every stage.",
  },
  {
    number: "04",
    title: "Installation & Commissioning",
    description:
      "Our trained technicians handle complete installation and commissioning, ensuring the system performs as designed.",
  },
  {
    number: "05",
    title: "After-Sales Support",
    description:
      "We provide ongoing maintenance, AMC contracts, and technical support to keep your systems running optimally.",
  },
] as const;

export default function EngineeringServicesPage() {
  return (
    <DecShell>
      {/* ── Hero ── */}
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Our Services
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              End-to-end engineering solutions.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              From initial consultation to long-term maintenance — we handle
              every aspect of your water treatment and pool engineering project.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── Services Grid ── */}
      <Section tone="default">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {decServices.map((service, i) => {
              const Icon =
                serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <Reveal key={service.title} delay={i * 0.08}>
                  <HoverLift className="h-full">
                    <article className="flex h-full flex-col rounded-card border border-slate-200 bg-white p-8 shadow-card">
                      <div className="flex items-start gap-5">
                        <div className="grid size-14 shrink-0 place-items-center rounded-sm bg-brand-navy text-white">
                          <Icon aria-hidden="true" className="size-7" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-brand-navy">
                            {service.title}
                          </h2>
                          <p className="mt-3 leading-7 text-slate-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 border-t border-slate-100 pt-6">
                        <p className="mb-3 text-xs font-bold uppercase tracking-normal text-slate-400">
                          What&apos;s Included
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {service.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <span
                                aria-hidden="true"
                                className="size-1.5 shrink-0 rounded-full bg-green-500"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <ButtonLink
                          href="/engineering/contact"
                          variant="secondary"
                          size="sm"
                        >
                          Enquire About This Service
                          <ArrowRight aria-hidden="true" className="size-3.5" />
                        </ButtonLink>
                      </div>
                    </article>
                  </HoverLift>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ── Process ── */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A disciplined project process."
              description="Every project follows a structured approach — ensuring clarity, quality, and on-time delivery from start to finish."
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map(({ number, title, description }, i) => (
              <Reveal key={number} delay={i * 0.08}>
                <li className="rounded-card bg-white p-7 shadow-card">
                  <span className="font-display text-3xl font-extrabold text-green-600">
                    {number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Start your project today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
              Tell us about your requirements and we&apos;ll provide a detailed
              proposal within 48 hours.
            </p>
            <ButtonLink href="/engineering/contact" className="mt-8">
              Request a Proposal
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </DecShell>
  );
}
