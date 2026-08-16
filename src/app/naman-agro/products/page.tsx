import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { NauShell } from "@/components/agro/NauShell";
import { ProductCatalogCta } from "@/components/shared";
import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  agroProductCategories,
  agroProducts,
  categoryDescriptions,
} from "@/lib/agro-data";
import { nauCatalogConfig } from "@/lib/catalog-data";

export const metadata: Metadata = {
  title: "Products | Naman Agro Udhyog",
  description:
    "Explore Naman Agro Udhyog's range of agricultural machinery, trailed sprayers, IBC tank trailers and tractor hitch assemblies.",
  alternates: {
    canonical: "/naman-agro/products",
  },
};

export default function NamanProductsPage() {
  return (
    <NauShell>
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Our Products
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Our Agricultural Machinery
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Purpose-built equipment for efficient agricultural operations —
              from PTO sprayers and trailed implements to mobile tank trailers
              and tractor hitch assemblies.
            </p>
          </Reveal>
        </Container>
      </section>

      {agroProductCategories.map((category, catIndex) => {
        const products = agroProducts.filter((p) => p.category === category);
        if (products.length === 0) return null;

        return (
          <Section
            key={category}
            tone={catIndex % 2 === 0 ? "default" : "muted"}
            id={category.toLowerCase().replace(/\s+/g, "-")}
          >
            <Container>
              <Reveal>
                <SectionHeading
                  eyebrow={`Category ${String(catIndex + 1).padStart(2, "0")}`}
                  title={category}
                  description={categoryDescriptions[category]}
                />
              </Reveal>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {products.map((product, i) => (
                  <Reveal key={product.id} delay={i * 0.08}>
                    <HoverLift className="h-full">
                      <article className="group flex h-full flex-col overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
                        <div className="relative h-64 overflow-hidden bg-slate-100">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h2 className="font-display text-xl font-bold text-brand-navy">
                            {product.name}
                          </h2>
                          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                            {product.description}
                          </p>
                          {product.features.length > 0 ? (
                            <div className="mt-5">
                              <p className="mb-2 text-xs font-bold uppercase tracking-normal text-slate-400">
                                Key Features
                              </p>
                              <ul className="flex flex-wrap gap-2">
                                {product.features.map((feature) => (
                                  <li
                                    key={feature}
                                    className="rounded-control bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                                  >
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                          <div className="mt-6 flex gap-3">
                            <ButtonLink
                              href={`/naman-agro/products/${product.id}`}
                              variant="secondary"
                              size="sm"
                              className="flex-1"
                            >
                              View Details
                              <ArrowRight aria-hidden="true" className="size-3.5" />
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
            </Container>
          </Section>
        );
      })}

      <ProductCatalogCta
        catalogPath={nauCatalogConfig.catalogPath}
        contactPath="/naman-agro/contact"
      />

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Need product guidance?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
              Share your farming requirements and our team will help you
              identify the right agricultural equipment.
            </p>
            <ButtonLink href="/naman-agro/contact" className="mt-8">
              Send an Inquiry
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </NauShell>
  );
}
