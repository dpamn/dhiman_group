import { Handshake, Lightbulb, ShieldCheck } from "lucide-react";

import { Container, Reveal, SectionHeading } from "./ui";

const reasons = [
  {
    title: "Quality",
    description:
      "Clear standards and disciplined processes guide every stage of execution.",
    icon: ShieldCheck,
    accent: "bg-brand-green text-brand-ink",
  },
  {
    title: "Innovation",
    description:
      "Practical ideas are translated into better methods, solutions, and outcomes.",
    icon: Lightbulb,
    accent: "bg-brand-amber text-brand-ink",
  },
  {
    title: "Customer Trust",
    description:
      "We build long-term relationships through transparency and dependable support.",
    icon: Handshake,
    accent: "bg-brand-navy text-white",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="border-y border-slate-200 bg-brand-mist py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Dhiman Group"
            title="Principles that shape every partnership."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon, accent }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <article className="h-full rounded-md border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-8">
                <div
                  className={`grid size-12 place-items-center rounded-sm ${accent}`}
                >
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold tracking-normal text-brand-navy">
                  {title}
                </h3>
                <p className="mt-3 text-lg leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
