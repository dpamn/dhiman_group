import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { DecShell } from "@/components/engineering/DecShell";
import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects | Dhiman Engineering Company",
  description:
    "Explore Dhiman Engineering Company's project portfolio — water treatment plants, swimming pools, and industrial engineering work across India.",
};

const projectApproach = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by thoroughly understanding the operating environment, technical requirements, and project constraints.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "Our team develops a practical, cost-effective solution with appropriate quality controls and clear documentation.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We coordinate execution with quality and communication in view — ensuring on-time, on-spec delivery every time.",
  },
] as const;

const projectHighlights = [
  {
    title: "Municipal Water Treatment Plant",
    location: "Shamli, Uttar Pradesh",
    category: "Water Treatment",
    image: "/images/DEC_images/about/wtp.jpg",
    description:
      "Design, supply, and installation of a complete water treatment plant for municipal water supply — including filtration, dosing, and distribution systems.",
  },
  {
    title: "Hotel Swimming Pool Complex",
    location: "Uttar Pradesh",
    category: "Swimming Pools",
    image: "/images/DEC_images/slider/2.jpg",
    description:
      "Construction of a full-size in-ground swimming pool with integrated filtration, heating, and automated dosing systems for a premium hotel property.",
  },
  {
    title: "Residential Pool & Spa",
    location: "Delhi NCR",
    category: "Swimming Pools",
    image: "/images/DEC_images/about/swimming.png",
    description:
      "Custom residential swimming pool and spa installation with Surflo circulation technology and automated water quality management.",
  },
  {
    title: "Industrial Flow Control Systems",
    location: "Haryana",
    category: "Industrial Components",
    image: "/images/DEC_images/slider/3.jpg",
    description:
      "Supply and installation of precision flow controllers, level indicators, and rate setters for an industrial water management system.",
  },
] as const;

export default function EngineeringProjectsPage() {
  return (
    <DecShell>
      {/* ── Hero ── */}
      <section className="bg-brand-navy text-white">
        <Container className="grid gap-10 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Our Projects
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Projects that demonstrate our capability.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We approach every assignment with a clear focus on requirements,
              coordination, quality control, and dependable delivery.
            </p>
            <ButtonLink href="/engineering/contact" variant="primary" className="mt-8">
              Discuss Your Project
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
          <Reveal direction="right">
            <div className="relative min-h-72 overflow-hidden rounded-card border border-white/15 sm:min-h-96">
              <Image
                src="/images/DEC_images/slider/1.jpg"
                alt="Engineering project in progress"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Approach ── */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A disciplined project approach."
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {projectApproach.map(({ number, title, description }, i) => (
              <Reveal key={number} delay={i * 0.1}>
                <li className="rounded-card bg-white p-8 shadow-card">
                  <span className="font-display text-4xl font-extrabold text-green-600">
                    {number}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-brand-navy">
                    {title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ── Project Highlights ── */}
      <Section tone="default">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Project Highlights"
              title="Selected work."
              description="A selection of projects that showcase the breadth and quality of our engineering capabilities."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {projectHighlights.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.08}>
                <HoverLift className="h-full">
                  <article className="group h-full overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-control bg-brand-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-normal text-slate-400">
                        {project.location}
                      </p>
                      <h2 className="mt-2 font-display text-xl font-bold text-brand-navy">
                        {project.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {project.description}
                      </p>
                    </div>
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
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
              Share your requirements and we&apos;ll develop a tailored
              engineering solution for you.
            </p>
            <ButtonLink href="/engineering/contact" className="mt-8">
              Start a Conversation
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </DecShell>
  );
}
