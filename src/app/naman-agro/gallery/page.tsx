import type { Metadata } from "next";

import { NauShell } from "@/components/agro/NauShell";
import { NauGalleryGrid } from "@/components/agro/NauGalleryGrid";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery | Naman Agro Udhyog",
  description:
    "Browse Naman Agro Udhyog's gallery of agricultural sprayers, trailed equipment, IBC tank trailers and tractor components.",
  alternates: {
    canonical: "/naman-agro/gallery",
  },
};

export default function NamanGalleryPage() {
  return (
    <NauShell>
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Gallery
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Our Agricultural Equipment
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A visual look at Naman Agro Udhyog&apos;s agricultural machinery,
              sprayers, trailers and tractor components.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeading
              title="Product & Field Gallery"
              description="Filter by category or browse all images. Click any image to view full size."
              align="center"
            />
          </Reveal>
          <NauGalleryGrid showFilters />
        </Container>
      </Section>
    </NauShell>
  );
}
