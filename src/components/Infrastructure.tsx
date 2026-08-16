import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { infrastructure } from "@/lib/site";

import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  SectionHeading,
} from "./ui";

const gridClasses = [
  "lg:col-span-7 lg:row-span-2 min-h-[25rem] lg:min-h-[36rem]",
  "lg:col-span-5 min-h-[18rem]",
  "lg:col-span-5 min-h-[18rem]",
  "lg:col-span-12 min-h-[20rem] lg:min-h-[24rem]",
] as const;

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Infrastructure"
              title="Built for consistent execution."
              description="Integrated facilities support disciplined manufacturing, organized material flow, and reliable quality control."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="self-start lg:self-auto"
            >
              Discuss Your Requirements
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {infrastructure.map((item, index) => (
            <Reveal
              key={item.title}
              className={gridClasses[index]}
              delay={index * 0.07}
            >
              <HoverLift className="h-full">
                <article className="group relative h-full min-h-[18rem] overflow-hidden rounded-md bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes={
                      index === 3
                        ? "(min-width: 1024px) 100vw, 100vw"
                        : "(min-width: 1024px) 58vw, 100vw"
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/25"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,rgba(15,23,42,0.9),transparent)]"
                  />
                  <h3 className="absolute bottom-0 left-0 p-6 font-display text-2xl font-bold tracking-normal text-white sm:p-8 sm:text-3xl">
                    {item.title}
                  </h3>
                </article>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
