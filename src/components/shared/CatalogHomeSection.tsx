import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

import { ButtonLink, Container, Reveal, Section } from "@/components/ui";
import type { CompanyCatalogConfig } from "@/lib/catalog-data";

type CatalogHomeSectionProps = {
  config: CompanyCatalogConfig;
  title: string;
  description: string;
};

export function CatalogHomeSection({
  config,
  title,
  description,
}: CatalogHomeSectionProps) {
  const { completeCatalog, catalogPath } = config;

  return (
    <Section tone="muted" id="catalog">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal direction="left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
            <Image
              src={completeCatalog.cover}
              alt={`${completeCatalog.title} cover`}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm font-semibold text-green-300">
                {completeCatalog.pages.length} catalog pages
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-600">
            Product Catalog
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-navy sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={catalogPath} className="sm:min-w-44">
              View Catalog
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            {completeCatalog.pdf ? (
              <ButtonLink
                href={completeCatalog.pdf}
                download={completeCatalog.downloadFilename}
                variant="secondary"
                className="sm:min-w-44"
              >
                <Download aria-hidden="true" className="size-4" />
                Download Catalog
              </ButtonLink>
            ) : (
              <ButtonLink
                href={catalogPath}
                variant="secondary"
                className="sm:min-w-44"
              >
                <Download aria-hidden="true" className="size-4" />
                Browse Catalog
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
