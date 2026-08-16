import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { companies } from "@/lib/site";

import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  SectionHeading,
} from "./ui";

export function Companies() {
  return (
    <section id="companies" className="bg-brand-mist py-20 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Companies"
            title="Focused businesses. Shared standards."
            description="Two specialized companies, united by the Dhiman Group commitment to quality, practical innovation, and dependable partnerships."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {companies.map((company, index) => {
            const isExternal = company.href.startsWith("http");

            return (
              <Reveal key={company.name} delay={index * 0.1}>
                <HoverLift className="h-full">
                  <article
                    id={
                      index === 0
                        ? "dhiman-engineering-company"
                        : "naman-agro-udyog"
                    }
                    className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                      <Image
                        src={company.image}
                        alt={company.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-green" />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h3 className="font-display text-2xl font-bold leading-tight tracking-normal text-brand-navy sm:text-3xl">
                        {company.name}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-slate-600">
                        {company.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {company.capabilities.map((capability) => (
                          <li
                            key={capability}
                            className="flex items-center gap-3 font-semibold text-slate-700"
                          >
                            <CheckCircle2
                              aria-hidden="true"
                              className="size-5 shrink-0 text-green-600"
                            />
                            {capability}
                          </li>
                        ))}
                      </ul>
                      <ButtonLink
                        href={company.href}
                        variant="secondary"
                        className="mt-8 self-start"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={`Explore ${company.name}`}
                      >
                        Explore Company
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </ButtonLink>
                    </div>
                  </article>
                </HoverLift>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
