import { ArrowRight, Compass, Eye, Gem } from "lucide-react";
import Image from "next/image";

import { ButtonLink, Container, Reveal, SectionHeading } from "./ui";

const principles = [
  {
    label: "Mission",
    text: "Create dependable industrial and agricultural value through disciplined execution.",
    icon: Compass,
  },
  {
    label: "Vision",
    text: "Build enduring businesses known for capability, relevance, and responsible growth.",
    icon: Eye,
  },
  {
    label: "Values",
    text: "Quality, integrity, practical innovation, and respect for every partnership.",
    icon: Gem,
  },
] as const;

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <Reveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
              <Image
                src="/images/about-group.jpg"
                alt="Engineer working in a modern industrial development facility"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-2 w-28 bg-brand-green"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-28 h-2 w-12 bg-brand-amber"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <SectionHeading eyebrow="About Dhiman Group" title="Who We Are" />
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Dhiman Group brings together focused businesses across
              engineering, manufacturing, and agriculture under one clear
              purpose: to create lasting value through dependable work. Our
              companies combine practical industry knowledge with a
              forward-looking approach to design, production, and service. We
              believe strong businesses are built through consistent quality,
              responsible decisions, and relationships that endure beyond a
              single project. By aligning specialized capabilities with shared
              standards, the group is able to serve evolving industrial and
              agricultural needs while preserving the agility of each
              division. Our commitment is simple: understand the need, execute
              with discipline, and stand behind the outcome.
            </p>

            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {principles.map(({ label, text, icon: Icon }) => (
                <div
                  key={label}
                  className="grid gap-3 py-5 sm:grid-cols-[8rem_1fr]"
                >
                  <p className="flex items-center gap-2 font-display font-bold text-brand-navy">
                    <Icon
                      aria-hidden="true"
                      className="size-4 text-green-600"
                    />
                    {label}
                  </p>
                  <p className="leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            <ButtonLink href="#companies" variant="secondary" className="mt-8">
              Learn More
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
