import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { DecShell } from "@/components/engineering/DecShell";
import { ProductCatalogCta } from "@/components/shared";
import {
  ButtonLink,
  Container,
  HoverLift,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/ui";
import { decProducts, type ProductCategory } from "@/lib/dec-data";
import { decCatalogConfig } from "@/lib/catalog-data";

export const metadata: Metadata = {
  title: "Products | Dhiman Engineering Company",
  description:
    "Explore our complete range of water treatment equipment, swimming pool systems, and precision industrial components.",
};

const categories: ProductCategory[] = [
  "Water Treatment",
  "Swimming Pools",
  "Industrial Components",
];

const categoryDescriptions: Record<ProductCategory, string> = {
  "Water Treatment":
    "Precision instruments and equipment for water treatment plants, dosing systems, and flow management.",
  "Swimming Pools":
    "Complete pool construction solutions — from in-ground pools to filtration systems and spa installations.",
  "Industrial Components":
    "Precision-machined gears, bearings, and mechanical components for industrial machinery.",
};

export default function EngineeringProductsPage() {
  return (
    <DecShell>
      {/* ── Page Hero ── */}
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Our Products
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Engineered for performance.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              From precision flow control instruments to complete swimming pool
              systems — our product range covers the full spectrum of water
              engineering needs.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── Products by Category ── */}
      {categories.map((category, catIndex) => {
        const products = decProducts.filter((p) => p.category === category);
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

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, i) => (
                  <Reveal key={product.id} delay={i * 0.08}>
                    <HoverLift className="h-full">
                      <article className="group flex h-full flex-col overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
                        <div className="relative h-56 overflow-hidden bg-slate-100">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                          {product.specs && (
                            <div className="mt-5">
                              <p className="mb-2 text-xs font-bold uppercase tracking-normal text-slate-400">
                                Key Features
                              </p>
                              <ul className="flex flex-wrap gap-2">
                                {product.specs.map((spec) => (
                                  <li
                                    key={spec}
                                    className="rounded-control bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                                  >
                                    {spec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="mt-6 flex gap-3">
                            <ButtonLink
                              href={`/engineering/products/${product.id}`}
                              variant="secondary"
                              size="sm"
                              className="flex-1"
                            >
                              View Details
                              <ArrowRight aria-hidden="true" className="size-3.5" />
                            </ButtonLink>
                            <ButtonLink
                              href="/engineering/contact"
                              variant="ghost"
                              size="sm"
                              className="flex-1"
                            >
                              Enquire
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

      {/* ── CTA ── */}
      <ProductCatalogCta
        catalogPath={decCatalogConfig.catalogPath}
        contactPath="/engineering/contact"
      />

      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Need a custom solution?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
              We manufacture to specification. Share your requirements and our
              engineering team will get back to you promptly.
            </p>
            <ButtonLink href="/engineering/contact" className="mt-8">
              Contact Our Team
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </DecShell>
  );
}
