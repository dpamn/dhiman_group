import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cog,
  Gauge,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { NauShell } from "@/components/agro/NauShell";
import { NauGalleryGrid } from "@/components/agro/NauGalleryGrid";
import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  agroApplications,
  agroConfig,
  agroInfrastructureImages,
  agroProducts,
  agroStrengths,
} from "@/lib/agro-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Naman Agro Udhyog | Agricultural Machinery & Implements",
  description:
    "Naman Agro Udhyog manufactures reliable agricultural machinery and implements designed for practical farming requirements, durable performance and efficient field operations.",
  keywords: [
    "agricultural machinery",
    "tractor sprayer",
    "agricultural implements",
    "farm equipment",
    "Naman Agro Udhyog",
    "Shamli",
    "Uttar Pradesh",
  ],
  alternates: {
    canonical: "/naman-agro",
  },
  openGraph: {
    title: "Naman Agro Udhyog | Agricultural Machinery & Implements",
    description: agroConfig.description,
    url: "/naman-agro",
    images: [
      {
        url: agroConfig.heroImage,
        width: 1200,
        height: 630,
        alt: "Naman Agro Udhyog agricultural machinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Agro Udhyog | Agricultural Machinery & Implements",
    description: agroConfig.description,
    images: [agroConfig.heroImage],
  },
};

const strengthIcons = {
  shield: ShieldCheck,
  cog: Cog,
  check: CheckCircle2,
  users: Users,
  gauge: Gauge,
  trending: TrendingUp,
} as const;

const featuredProducts = agroProducts.slice(0, 4);

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: agroConfig.name,
  url: agroConfig.url,
  logo: `${siteConfig.url}${agroConfig.logo}`,
  description: agroConfig.description,
  email: agroConfig.email,
  telephone: agroConfig.phone,
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vivek Vihar",
    addressLocality: "Shamli",
    addressRegion: "Uttar Pradesh",
    postalCode: "247776",
    addressCountry: "IN",
  },
};

export default function NamanAgroHomePage() {
  return (
    <NauShell>
      {/* Hero */}
      <section
        id="home"
        aria-labelledby="nau-hero-title"
        className="relative flex min-h-svh items-center overflow-hidden bg-brand-navy text-white"
      >
        <div className="absolute inset-0">
          <Image
            src={agroConfig.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.72) 55%, rgba(15,23,42,0.45) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-24 pt-32 sm:pb-28 sm:pt-36">
          <Reveal className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-normal text-green-300">
              <span className="h-px w-10 bg-brand-green" aria-hidden="true" />
              {agroConfig.tagline}
            </p>
            <h1
              id="nau-hero-title"
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-normal sm:text-6xl lg:text-[4.5rem]"
            >
              Powering Agriculture with Reliable Engineering
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Naman Agro Udhyog manufactures dependable agricultural machinery
              and implements designed to support farmers with practical
              performance, durable construction and efficient operation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/naman-agro/products" className="sm:min-w-48">
                Explore Products
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="/naman-agro/contact"
                variant="outline"
                className="sm:min-w-40"
              >
                Contact Us
              </ButtonLink>
            </div>
          </Reveal>
        </Container>

        <a
          href="#intro"
          aria-label="Scroll to introduction section"
          className="absolute bottom-5 left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10 sm:bottom-7"
        >
          <ChevronDown aria-hidden="true" className="size-5" />
        </a>
      </section>

      {/* Introduction */}
      <Section id="intro" tone="default">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Introduction"
              title="Engineering That Works in the Field"
              description="Naman Agro Udhyog is focused on developing and manufacturing agricultural machinery and implements that meet the practical demands of modern farming. Our approach combines robust construction, functional engineering and dependable performance to create equipment that farmers can rely on in everyday agricultural operations."
            />
            <ButtonLink href="/naman-agro#about" variant="secondary" className="mt-8">
              Know More About Us
            </ButtonLink>
          </Reveal>

          <Reveal direction="right" className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-slate-100">
              <Image
                src="/images/NAU_images/1786865097997.jpg"
                alt="PTO tractor-mounted power sprayer"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-card bg-slate-100">
              <Image
                src="/images/NAU_images/tractor-hitch.jpg"
                alt="Heavy-duty tractor hitch assembly"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-contain p-2"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Why Choose */}
      <Section tone="muted" id="why">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Strengths"
              title="Why Choose Naman Agro Udhyog"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agroStrengths.map((strength, i) => {
              const Icon = strengthIcons[strength.icon];
              return (
                <Reveal key={strength.title} delay={i * 0.07}>
                  <HoverLift className="h-full">
                    <article className="flex h-full flex-col rounded-card border border-slate-200 bg-white p-7 shadow-card">
                      <div className="grid size-12 place-items-center rounded-sm bg-brand-navy text-white">
                        <Icon aria-hidden="true" className="size-6" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                        {strength.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                        {strength.description}
                      </p>
                    </article>
                  </HoverLift>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Products */}
      <Section tone="default" id="products">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Products"
              title="Our Agricultural Machinery"
              description="Purpose-built equipment for efficient agricultural operations."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.07}>
                <HoverLift className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-control bg-brand-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-brand-navy">
                        {product.name}
                      </h3>
                      <p className="mt-2 flex-1 line-clamp-2 text-sm leading-6 text-slate-600">
                        {product.description}
                      </p>
                      <div className="mt-5 flex gap-3">
                        <ButtonLink
                          href={`/naman-agro/products/${product.id}`}
                          variant="secondary"
                          size="sm"
                          className="flex-1"
                        >
                          View Details
                        </ButtonLink>
                        <ButtonLink
                          href="/naman-agro/contact"
                          variant="ghost"
                          size="sm"
                          className="flex-1"
                        >
                          Inquiry
                        </ButtonLink>
                      </div>
                    </div>
                  </article>
                </HoverLift>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/naman-agro/products" variant="secondary">
              View All Products
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* Infrastructure */}
      <Section tone="muted" id="infrastructure">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal direction="left" className="grid grid-cols-2 gap-4">
            {agroInfrastructureImages.map((img) => (
              <div
                key={img.src}
                className="relative aspect-square overflow-hidden rounded-card bg-slate-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>
          <Reveal>
            <SectionHeading
              eyebrow="Manufacturing"
              title="Built for the Demands of Agriculture"
              description="From material selection and fabrication to finishing and final inspection, every stage of manufacturing contributes to the reliability of our agricultural equipment. Our focus is on producing practical machinery with robust construction and consistent quality."
            />
          </Reveal>
        </Container>
      </Section>

      {/* Applications */}
      <Section tone="dark" id="applications">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="Designed for Agricultural Operations"
              inverse
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {agroApplications.map((app, i) => (
              <Reveal key={app.title} delay={i * 0.08}>
                <article className="group overflow-hidden rounded-card border border-white/15 bg-white/5 backdrop-blur-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-navy/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-white">
                      {app.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {app.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quality */}
      <Section tone="default" id="quality">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Quality"
              title="Quality You Can Depend On"
              description="Reliable agricultural equipment begins with consistent manufacturing and attention to detail. Naman Agro Udhyog focuses on practical engineering, robust construction and quality-conscious production to deliver machinery built for demanding agricultural environments."
              align="center"
            />
          </Reveal>
        </Container>
      </Section>

      {/* About */}
      <Section tone="muted" id="about">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="About Naman Agro Udhyog"
              description="Naman Agro Udhyog is an agricultural machinery and implements business focused on providing dependable equipment for farming requirements. With an emphasis on practical engineering and durable construction, the company works to develop products that combine functionality, reliability and ease of use."
            />
            <p className="mt-6 font-display text-xl font-bold text-brand-green">
              {agroConfig.brandMessage}
            </p>
          </Reveal>
          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-white p-8 shadow-card">
              <Image
                src={agroConfig.logo}
                alt="Naman Agro Udhyog logo"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-6"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Gallery Preview */}
      <Section tone="default" id="gallery">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Our Agricultural Equipment"
              align="center"
            />
          </Reveal>
          <NauGalleryGrid showFilters={false} limit={6} />
          <div className="mt-10 text-center">
            <ButtonLink href="/naman-agro/gallery" variant="secondary">
              View Full Gallery
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-brand-navy py-20 text-white sm:py-24">
        <Container className="text-center">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Let&apos;s Build Better Solutions for Agriculture
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Looking for reliable agricultural machinery or want to know more
              about our products? Get in touch with Naman Agro Udhyog.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ButtonLink href="/naman-agro/contact" className="sm:min-w-48">
                Contact Us
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="/naman-agro/contact"
                variant="outline"
                className="sm:min-w-48"
              >
                Send an Inquiry
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </NauShell>
  );
}
