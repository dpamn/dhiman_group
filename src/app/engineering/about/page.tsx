import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Target, Users } from "lucide-react";

import { DecShell } from "@/components/engineering/DecShell";
import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { decStats } from "@/lib/dec-data";

export const metadata: Metadata = {
  title: "About Us | Dhiman Engineering Company",
  description:
    "Learn about Dhiman Engineering Company — our history, mission, and commitment to water treatment and pool engineering excellence.",
};

const values = [
  {
    title: "Quality First",
    description:
      "Every product and project is held to rigorous quality standards. We don't cut corners — our reputation depends on it.",
    icon: ShieldCheck,
  },
  {
    title: "Customer Focus",
    description:
      "We listen carefully to understand your requirements and deliver solutions that genuinely solve your problems.",
    icon: Users,
  },
  {
    title: "Precision Engineering",
    description:
      "Our manufacturing processes are built around accuracy, repeatability, and long-term reliability.",
    icon: Target,
  },
] as const;

export default function EngineeringAboutPage() {
  return (
    <DecShell>
      {/* ── Hero ── */}
      <section className="bg-brand-navy text-white">
        <Container className="grid gap-10 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              About Us
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Devoted to water engineering excellence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Dhiman Engineering Company has been a trusted name in water
              treatment and aquatic technology for decades — serving municipal
              bodies, hotels, residential complexes, and industrial clients
              across India.
            </p>
          </Reveal>
          <Reveal direction="right">
            <div className="relative min-h-72 overflow-hidden rounded-card border border-white/15 sm:min-h-96">
              <Image
                src="/images/DEC_images/slider/2.jpg"
                alt="Dhiman Engineering Company facility"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Stats ── */}
      <div className="bg-brand-green">
        <Container className="grid grid-cols-2 gap-px bg-green-400 lg:grid-cols-4">
          {decStats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-brand-green px-6 py-8 text-center text-brand-navy"
            >
              <p className="font-display text-4xl font-extrabold">{value}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-normal">
                {label}
              </p>
            </div>
          ))}
        </Container>
      </div>

      {/* ── Story ── */}
      <Section tone="default">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-card">
                <Image
                  src="/images/DEC_images/about/wtp.jpg"
                  alt="Water treatment plant"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-8 aspect-square overflow-hidden rounded-card">
                <Image
                  src="/images/DEC_images/about/swimming.png"
                  alt="Swimming pool project"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Built on engineering integrity."
            />
            <div className="mt-6 space-y-4 text-slate-600 leading-7">
              <p>
                Dhiman Engineering Company was founded with a clear purpose: to
                bring reliable, high-quality water treatment and pool technology
                to clients across India. Based in Shamli, Uttar Pradesh, we have
                grown from a focused engineering firm into a comprehensive
                solutions provider.
              </p>
              <p>
                Our expertise spans the full water engineering spectrum — from
                industrial water treatment plants and dosing systems to custom
                swimming pools and precision flow control instruments. We combine
                modern technology with hands-on engineering experience to deliver
                solutions that perform reliably for years.
              </p>
              <p>
                We are proud to be part of the Dhiman Group — a diversified
                industrial group committed to quality, innovation, and long-term
                partnerships.
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              {[
                "ISO-compliant manufacturing processes",
                "Experienced engineering team",
                "Pan-India project delivery",
                "After-sales support & AMC",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-5 shrink-0 text-green-600"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* ── Values ── */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              title="Principles that guide every project."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <HoverLift className="h-full">
                  <article className="h-full rounded-card border border-slate-200 bg-white p-8 shadow-card">
                    <div className="grid size-12 place-items-center rounded-sm bg-brand-navy text-white">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-brand-navy">
                      {title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">{description}</p>
                  </article>
                </HoverLift>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
              Reach out to discuss your project requirements. Our team will
              respond promptly with a tailored solution.
            </p>
            <ButtonLink href="/engineering/contact" className="mt-8">
              Contact Us Today
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </DecShell>
  );
}
