import type { Metadata } from "next";
import Image from "next/image";

import { DecShell } from "@/components/engineering/DecShell";
import {
  CatalogCard,
  CatalogPageViewer,
  CatalogSearch,
} from "@/components/shared";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { decCatalogConfig } from "@/lib/catalog-data";
import { decProducts } from "@/lib/dec-data";

export const metadata: Metadata = {
  title: decCatalogConfig.seo.title,
  description: decCatalogConfig.seo.description,
  alternates: {
    canonical: decCatalogConfig.seo.canonical,
  },
  openGraph: {
    title: decCatalogConfig.seo.title,
    description: decCatalogConfig.seo.description,
    url: decCatalogConfig.seo.canonical,
    images: [
      {
        url: decCatalogConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Dhiman Engineering Product Catalog",
      },
    ],
  },
};

export default function EngineeringCatalogPage() {
  const { completeCatalog, categoryCatalogs, productBrochures, catalogPath } =
    decCatalogConfig;

  const relatedProducts = decProducts.map((p) => ({ id: p.id, name: p.name }));
  const searchableCatalogs = [...productBrochures, ...categoryCatalogs];
  const categories = [
    ...new Set(categoryCatalogs.map((c) => c.category)),
  ];

  return (
    <DecShell>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0">
          <Image
            src={completeCatalog.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 60%, rgba(15,23,42,0.75) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              {decCatalogConfig.heroTitle}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {decCatalogConfig.heroSubtitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {decCatalogConfig.heroDescription}
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="default" id={completeCatalog.id}>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Complete Catalog"
              title={completeCatalog.title}
              description={completeCatalog.description}
            />
          </Reveal>
          <div className="mt-10">
            <CatalogPageViewer
              catalog={completeCatalog}
              productPathPrefix="/engineering/products"
              showProductLinks
              relatedProducts={relatedProducts}
            />
          </div>
        </Container>
      </Section>

      {categoryCatalogs.length > 0 ? (
        <Section tone="muted">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="By Category"
                title="Category Catalogs"
                description="Browse engineering product catalogs organized by category."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {categoryCatalogs.map((catalog) => (
                <CatalogCard
                  key={catalog.id}
                  catalog={catalog}
                  catalogPath={catalogPath}
                />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {productBrochures.length > 0 ? (
        <Section tone="default">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Product Brochures"
                title="Individual Product Catalogs"
                description="Detailed catalog pages for specific engineering products."
              />
            </Reveal>
            <div className="mt-10">
              <CatalogSearch
                catalogs={searchableCatalogs}
                catalogPath={catalogPath}
                categories={categories}
              />
            </div>
          </Container>
        </Section>
      ) : null}

      {productBrochures.map((brochure) => (
        <Section tone="muted" key={brochure.id} id={brochure.id}>
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow={brochure.category}
                title={brochure.title}
                description={brochure.description}
              />
            </Reveal>
            <div className="mt-10">
              <CatalogPageViewer
                catalog={brochure}
                productPathPrefix="/engineering/products"
                showProductLinks
                relatedProducts={relatedProducts}
              />
            </div>
          </Container>
        </Section>
      ))}
    </DecShell>
  );
}
