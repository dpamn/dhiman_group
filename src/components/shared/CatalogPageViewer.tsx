"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Expand,
  X,
} from "lucide-react";

import { ButtonLink } from "@/components/ui";
import type { CatalogEntry } from "@/lib/catalog-data";

type CatalogPageViewerProps = {
  catalog: CatalogEntry;
  initialPage?: number;
  productPathPrefix?: string;
  showProductLinks?: boolean;
  relatedProducts?: { id: string; name: string }[];
};

export function CatalogPageViewer({
  catalog,
  initialPage = 0,
  productPathPrefix,
  showProductLinks = false,
  relatedProducts = [],
}: CatalogPageViewerProps) {
  const [activePage, setActivePage] = useState(initialPage);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const pageCount = catalog.pages.length;
  const currentPage = catalog.pages[activePage];

  const goToPrev = useCallback(() => {
    setActivePage((p) => (p - 1 + pageCount) % pageCount);
  }, [pageCount]);

  const goToNext = useCallback(() => {
    setActivePage((p) => (p + 1) % pageCount);
  }, [pageCount]);

  const closeFullscreen = useCallback(() => setIsFullscreen(false), []);

  useEffect(() => {
    if (!isFullscreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeFullscreen();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeFullscreen, goToNext, goToPrev, isFullscreen]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goToPrev();
      else goToNext();
    }
    touchStartX.current = null;
  };

  const viewerContent = (
    <div
      className="relative overflow-hidden rounded-card border border-slate-200 bg-slate-50"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/3]">
        <Image
          src={currentPage.src}
          alt={currentPage.alt}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-contain p-2"
          priority={activePage === 0}
        />
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3">
        <button
          type="button"
          onClick={goToPrev}
          className="grid size-10 place-items-center rounded-control border border-slate-200 text-brand-navy transition-colors hover:border-brand-navy hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-brand-green"
          aria-label="Previous catalog page"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>

        <p className="text-sm font-medium text-slate-600">
          Page {activePage + 1} of {pageCount}
          {currentPage.label ? (
            <span className="hidden text-slate-400 sm:inline">
              {" "}
              — {currentPage.label}
            </span>
          ) : null}
        </p>

        <button
          type="button"
          onClick={goToNext}
          className="grid size-10 place-items-center rounded-control border border-slate-200 text-brand-navy transition-colors hover:border-brand-navy hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-brand-green"
          aria-label="Next catalog page"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-bold text-brand-navy">
              {catalog.title}
            </h3>
            {catalog.lastUpdated ? (
              <p className="mt-1 text-sm text-slate-500">
                Last updated:{" "}
                {new Date(catalog.lastUpdated).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" · "}
                {pageCount} {pageCount === 1 ? "page" : "pages"}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="inline-flex items-center gap-2 rounded-control border border-slate-200 px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-navy hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-brand-green"
            aria-label="Open catalog in full screen"
          >
            <Expand aria-hidden="true" className="size-4" />
            Full Screen
          </button>
        </div>

        {viewerContent}

        {catalog.pdf ? (
          <div className="mt-4 flex flex-wrap gap-3">
            <ButtonLink
              href={catalog.pdf}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              View PDF
            </ButtonLink>
            <ButtonLink
              href={catalog.pdf}
              download={catalog.downloadFilename}
              variant="ghost"
              size="sm"
            >
              <Download aria-hidden="true" className="size-4" />
              Download PDF
            </ButtonLink>
          </div>
        ) : null}
      </div>

      <aside>
        <p className="mb-3 text-xs font-bold uppercase tracking-normal text-slate-400">
          Pages
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
          {catalog.pages.map((page, index) => (
            <button
              key={page.src}
              type="button"
              onClick={() => setActivePage(index)}
              className={`relative shrink-0 overflow-hidden rounded-control border-2 transition-colors focus-visible:outline-2 focus-visible:outline-brand-green ${
                activePage === index
                  ? "border-brand-navy"
                  : "border-slate-200 hover:border-slate-300"
              }`}
              aria-label={`View page ${index + 1}${page.label ? `: ${page.label}` : ""}`}
              aria-current={activePage === index ? "true" : undefined}
            >
              <div className="relative h-20 w-28 lg:h-24 lg:w-full">
                <Image
                  src={page.src}
                  alt=""
                  fill
                  sizes="120px"
                  loading="lazy"
                  className="object-cover object-top"
                />
              </div>
              {page.label ? (
                <span className="block truncate px-2 py-1 text-center text-xs font-medium text-slate-600">
                  {page.label}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        {showProductLinks && catalog.productIds && productPathPrefix ? (
          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-normal text-slate-400">
              Related Products
            </p>
            <ul className="space-y-2">
              {catalog.productIds.map((productId) => {
                const product = relatedProducts.find((p) => p.id === productId);
                return (
                  <li key={productId}>
                    <a
                      href={`${productPathPrefix}/${productId}`}
                      className="text-sm font-semibold text-brand-navy transition-colors hover:text-green-700"
                    >
                      {product?.name ?? "View Product"} →
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </aside>

      {isFullscreen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${catalog.title} full screen viewer`}
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={closeFullscreen}
        >
          <div
            className="flex items-center justify-between px-4 py-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm font-medium text-white">
              {catalog.title} — Page {activePage + 1} of {pageCount}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeFullscreen}
              className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Close full screen viewer"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-2 z-10 grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:left-4"
              aria-label="Previous page"
            >
              <ChevronLeft aria-hidden="true" className="size-6" />
            </button>

            <div className="relative h-full w-full max-w-5xl">
              <Image
                src={currentPage.src}
                alt={currentPage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 z-10 grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:right-4"
              aria-label="Next page"
            >
              <ChevronRight aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
