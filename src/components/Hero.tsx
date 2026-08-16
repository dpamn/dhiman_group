import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

import { ButtonLink, Container, Reveal } from "./ui";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center overflow-hidden bg-brand-navy text-white"
    >
      <div className="absolute inset-0 grid grid-rows-[58%_42%] md:grid-cols-2 md:grid-rows-1">
        <div className="relative">
          <Image
            src="/images/hero-industry.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/hero-agriculture.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(31,93,117,0.94) 0%, rgba(31,93,117,0.78) 44%, rgba(31,93,117,0.4) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-navy/20"
      />

      <Container className="relative z-10 pb-24 pt-32 sm:pb-28 sm:pt-36">
        <Reveal className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-normal text-green-300">
            <span className="h-px w-10 bg-brand-green" />
            A diversified industrial group
          </p>
          <h1
            id="hero-title"
            className="font-display text-5xl font-extrabold leading-[0.98] tracking-normal sm:text-7xl lg:text-[5.5rem]"
          >
            DHIMAN GROUP
          </h1>
          <p className="mt-6 flex max-w-3xl flex-wrap gap-x-3 gap-y-1 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
            <span>Engineering.</span>
            <span>Manufacturing.</span>
            <span className="text-green-300">Agriculture.</span>
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            A diversified industrial group committed to quality, innovation,
            and long-term partnerships across engineering and agricultural
            industries.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#companies" className="sm:min-w-48">
              Explore Companies
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="outline"
              className="sm:min-w-40"
            >
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About Dhiman Group"
        className="absolute bottom-5 left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10 sm:bottom-7"
      >
        <ChevronDown aria-hidden="true" className="size-5" />
      </a>
    </section>
  );
}
