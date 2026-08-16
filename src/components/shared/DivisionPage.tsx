import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ButtonLink, Card, Container, Section, SectionHeading } from "@/components/ui";

import { PageShell } from "./PageShell";

type Feature = { title: string; description: string; href?: string };

export function DivisionPage({
  eyebrow,
  title,
  description,
  image,
  children,
  features = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
  features?: Feature[];
}) {
  return (
    <PageShell>
      <section className="bg-brand-navy text-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-green-300">{eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
            <ButtonLink href="/contact" variant="secondary" className="mt-8">Discuss your requirements</ButtonLink>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-card border border-white/15 sm:min-h-80">
            <Image src={image} alt="" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" priority />
          </div>
        </Container>
      </section>
      {features.length ? (
        <Section tone="muted">
          <Container>
            <SectionHeading eyebrow="Explore" title="Built around your needs" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="p-7">
                  <h2 className="font-display text-2xl font-bold text-brand-navy">{feature.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
                  {feature.href ? <Link className="mt-5 inline-flex font-bold text-green-700 hover:text-brand-navy" href={feature.href}>Explore →</Link> : null}
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
      {children}
    </PageShell>
  );
}
