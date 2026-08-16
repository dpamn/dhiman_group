"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

import { Reveal } from "@/components/ui";
import {
  agroGalleryImages,
  type AgroGalleryCategory,
} from "@/lib/agro-data";

const filterOptions: AgroGalleryCategory[] = [
  "All",
  "Sprayers",
  "Trailers",
  "Components",
  "Field",
];

type NauGalleryGridProps = {
  showFilters?: boolean;
  limit?: number;
};

export function NauGalleryGrid({
  showFilters = true,
  limit,
}: NauGalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<AgroGalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const filteredImages =
    activeFilter === "All"
      ? agroGalleryImages
      : agroGalleryImages.filter((img) => img.category === activeFilter);

  const displayImages = limit
    ? filteredImages.slice(0, limit)
    : filteredImages;

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((index) =>
      index !== null
        ? (index - 1 + displayImages.length) % displayImages.length
        : null,
    );
  }, [displayImages.length]);

  const next = useCallback(() => {
    setLightbox((index) =>
      index !== null ? (index + 1) % displayImages.length : null,
    );
  }, [displayImages.length]);

  useEffect(() => {
    if (lightbox === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, lightbox, next, prev]);

  return (
    <>
      {showFilters ? (
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setActiveFilter(option);
                setLightbox(null);
              }}
              className={`rounded-control px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === option
                  ? "bg-brand-navy text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
              aria-pressed={activeFilter === option}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {displayImages.map((img, i) => (
          <Reveal key={`${img.src}-${i}`} delay={i * 0.04}>
            <button
              type="button"
              className="group relative mb-4 block w-full overflow-hidden rounded-card focus-visible:outline-2 focus-visible:outline-brand-green"
              onClick={() => setLightbox(i)}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-navy/0 transition-colors duration-300 group-hover:bg-brand-navy/40">
                <ZoomIn
                  aria-hidden="true"
                  className="size-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {lightbox !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Close lightbox"
            onClick={close}
          >
            <X aria-hidden="true" className="size-5" />
          </button>

          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:left-4"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-5xl px-12 sm:px-16"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={displayImages[lightbox].src}
              alt={displayImages[lightbox].alt}
              width={1200}
              height={800}
              className="mx-auto max-h-[75vh] w-auto rounded-card object-contain sm:max-h-[85vh]"
              priority
            />
            <p className="mt-3 text-center text-sm text-slate-300">
              {displayImages[lightbox].alt}
            </p>
          </div>

          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white sm:right-4"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
