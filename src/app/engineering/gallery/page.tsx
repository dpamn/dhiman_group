import type { Metadata } from "next";

import { DecShell } from "@/components/engineering/DecShell";
import { GalleryGrid } from "@/components/engineering/GalleryGrid";
import { Container, Reveal, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Gallery | Dhiman Engineering Company",
  description:
    "A visual showcase of our water treatment plants, swimming pool projects, and engineering work across India.",
};

export default function EngineeringGalleryPage() {
  return (
    <DecShell>
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              Gallery
            </p>
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Our work in pictures.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A visual introduction to our projects, facilities, and the
              engineering environments we operate in.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Projects & Facilities"
              title="Built with precision."
            />
          </Reveal>
          <GalleryGrid />
        </Container>
      </section>
    </DecShell>
  );
}
