import Image from "next/image";
import { Download, Eye } from "lucide-react";

import { ButtonLink, HoverLift } from "@/components/ui";
import type { CatalogEntry } from "@/lib/catalog-data";

type CatalogCardProps = {
  catalog: CatalogEntry;
  catalogPath: string;
  viewHref?: string;
};

export function CatalogCard({ catalog, catalogPath, viewHref }: CatalogCardProps) {
  const pageCount = catalog.pages.length;
  const href = viewHref ?? `${catalogPath}#${catalog.id}`;

  return (
    <HoverLift className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={catalog.cover}
            alt={`${catalog.title} catalog cover`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-control bg-brand-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {catalog.category}
          </span>
          {pageCount > 0 ? (
            <span className="absolute bottom-3 right-3 rounded-control bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {pageCount} {pageCount === 1 ? "page" : "pages"}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-bold text-brand-navy">
            {catalog.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
            {catalog.description}
          </p>

          {catalog.lastUpdated ? (
            <p className="mt-3 text-xs text-slate-400">
              Updated{" "}
              {new Date(catalog.lastUpdated).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
              })}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            <ButtonLink href={href} variant="secondary" size="sm" className="flex-1">
              <Eye aria-hidden="true" className="size-3.5" />
              View
            </ButtonLink>
            {catalog.pdf ? (
              <ButtonLink
                href={catalog.pdf}
                download={catalog.downloadFilename}
                variant="ghost"
                size="sm"
                className="flex-1"
                aria-label={`Download ${catalog.title} PDF`}
              >
                <Download aria-hidden="true" className="size-3.5" />
                Download
              </ButtonLink>
            ) : (
              <ButtonLink
                href={href}
                variant="ghost"
                size="sm"
                className="flex-1"
                aria-label={`View ${catalog.title} catalog pages`}
              >
                <Download aria-hidden="true" className="size-3.5" />
                Browse
              </ButtonLink>
            )}
          </div>
        </div>
      </article>
    </HoverLift>
  );
}
