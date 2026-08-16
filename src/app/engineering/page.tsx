import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Cog,
  Droplets,
  Factory,
  GraduationCap,
  Home,
  ShieldCheck,
  Trophy,
  Waves,
  Wrench,
} from "lucide-react";

import { DecShell } from "@/components/engineering/DecShell";
import { CatalogHomeSection } from "@/components/shared";
import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  decConfig,
  decGalleryImages,
  decProducts,
  decServices,
  decStats,
} from "@/lib/dec-data";
import { decCatalogConfig } from "@/lib/catalog-data";

export const metadata: Metadata = {
  title: "Dhiman Engineering Company | Water Treatment & Pool Specialists",
  description:
    "Dhiman Engineering Company — specialists in water treatment plants, swimming pool construction, and precision industrial components. Serving clients across India.",
  keywords: [
    "water treatment plant",
    "swimming pool construction",
    "pool filtration",
    "industrial components",
    "Shamli",
    "Uttar Pradesh",
    "Dhiman Engineering",
  ],
  openGraph: {
    title: "Dhiman Engineering Company",
    description:
      "Water treatment, swimming pool construction, and industrial engineering solutions.",
    images: [{ url: "/images/DEC_images/slider/1.jpg", width: 1200, height: 630 }],
  },
};

const serviceIcons = {
  droplets: Droplets,
  waves: Waves,
  wrench: Wrench,
  cog: Cog,
} as const;

const featuredProducts = decProducts.slice(0, 6);
const galleryPreview = decGalleryImages.slice(0, 6);

export default function EngineeringHomePage() {
  return (
    <DecShell>
      {/* ── Hero ── */}
      <section
        id="home"
        aria-labelledby="dec-hero-title"
        className="relative flex min-h-svh items-center overflow-hidden bg-brand-navy text-white"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/DEC_images/slider/1.jpg"
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
              Water Treatment &amp; Pool Technology Specialists
            </p>
            <h1
              id="dec-hero-title"
              className="font-display text-5xl font-extrabold leading-[0.98] tracking-normal sm:text-7xl lg:text-[5rem]"
            >
              DHIMAN
              <br />
              ENGINEERING
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Delivering reliable water treatment plants, custom swimming pools,
              and precision industrial components — engineered for performance,
              built to last.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/engineering/products" className="sm:min-w-48">
                Explore Products
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="/engineering/contact"
                variant="outline"
                className="sm:min-w-40"
              >
                Get a Quote
              </ButtonLink>
            </div>
          </Reveal>
        </Container>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-5 left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-white/35 text-white transition-colors hover:border-white hover:bg-white/10 sm:bottom-7"
        >
          <ChevronDown aria-hidden="true" className="size-5" />
        </a>
      </section>

      {/* ── Stats Bar ── */}
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

      {/* ── About ── */}
      <Section id="about" tone="default">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="Engineering water solutions since decades."
              description="Dhiman Engineering Company is devoted to water treatment and aquatic technology in India. We offer the latest in pool and spa technology alongside high-quality industrial water treatment plants — all engineered to meet the demands of modern infrastructure."
            />
            <ul className="mt-8 space-y-3">
              {[
                "In-ground, semi-ground, and portable pools",
                "Industrial water treatment plants",
                "Precision flow control components",
                "Custom fabrication to specification",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-600">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-green-600"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/engineering/about"
              variant="secondary"
              className="mt-8"
            >
              Learn More About Us
            </ButtonLink>
          </Reveal>

          <Reveal direction="right" className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-card">
              <Image
                src="/images/DEC_images/about/wtp.jpg"
                alt="Water treatment plant"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-card">
              <Image
                src="/images/DEC_images/about/swimming.png"
                alt="Swimming pool construction"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ── Services ── */}
      <Section tone="muted" id="services">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Do"
              title="Comprehensive engineering services."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {decServices.map((service, i) => {
              const Icon =
                serviceIcons[service.icon as keyof typeof serviceIcons];
              return (
                <Reveal key={service.title} delay={i * 0.08}>
                  <HoverLift className="h-full">
                    <article className="flex h-full flex-col rounded-card border border-slate-200 bg-white p-7 shadow-card">
                      <div className="grid size-12 place-items-center rounded-sm bg-brand-navy text-white">
                        <Icon aria-hidden="true" className="size-6" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">
                        {service.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-1.5">
                        {service.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-xs font-medium text-slate-500"
                          >
                            <span
                              aria-hidden="true"
                              className="size-1.5 shrink-0 rounded-full bg-green-500"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </HoverLift>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/engineering/services" variant="secondary">
              View All Services
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ── Featured Products ── */}
      <Section tone="default" id="products">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Products"
              title="Engineered for performance."
              description="From precision flow control instruments to complete swimming pool systems — our product range covers the full spectrum of water engineering needs."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.07}>
                <HoverLift className="h-full">
                  <article className="group h-full overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-control bg-brand-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-brand-navy">
                        {product.name}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                        {product.description}
                      </p>
                      {product.specs && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {product.specs.map((spec) => (
                            <li
                              key={spec}
                              className="rounded-control bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                            >
                              {spec}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </HoverLift>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/engineering/products" variant="secondary">
              View All Products
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ── Catalog ── */}
      <CatalogHomeSection
        config={decCatalogConfig}
        title="Explore Our Product Catalog"
        description="Discover our complete range of engineering products and solutions."
      />

      {/* ── Industries ── */}
      <Section tone="dark" id="industries">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Trusted across sectors."
              description="Our engineering solutions are deployed across a wide range of industries — from municipal water works to luxury hospitality."
              inverse
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Municipal Water Works", Icon: Building2 },
              { name: "Hotels & Resorts", Icon: Building2 },
              { name: "Residential Complexes", Icon: Home },
              { name: "Schools & Institutions", Icon: GraduationCap },
              { name: "Industrial Plants", Icon: Factory },
              { name: "Sports Facilities", Icon: Trophy },
            ].map(({ name, Icon }, i) => (
              <Reveal key={name} delay={i * 0.07}>
                <div className="flex flex-col items-center gap-3 rounded-card border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:border-brand-green hover:bg-white/10">
                  <Icon aria-hidden="true" className="size-8 text-green-300" />
                  <p className="text-sm font-semibold leading-5 text-white">
                    {name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Gallery Preview ── */}
      <Section tone="muted" id="gallery">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Projects that speak for themselves."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {galleryPreview.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.06}>
                <div
                  className={`group relative overflow-hidden rounded-card ${
                    i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                  style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/0 transition-colors duration-300 group-hover:bg-brand-navy/30" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/engineering/gallery" variant="secondary">
              View Full Gallery
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-20 text-white sm:py-24">
        <Container className="text-center">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Ready to Start?
            </p>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Let&apos;s build your next project.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Whether you need a water treatment plant, a custom swimming pool,
              or precision industrial components — our team is ready to help.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ButtonLink href="/engineering/contact" className="sm:min-w-48">
                Get a Free Quote
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink
                href={`tel:${decConfig.phones[0].replace(/-/g, "")}`}
                variant="outline"
              >
                Call {decConfig.phoneDisplay}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </DecShell>
  );
}
