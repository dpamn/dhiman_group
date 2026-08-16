import { ArrowRight } from "lucide-react";

import { ButtonLink, Container, Reveal } from "@/components/ui";

type ProductCatalogCtaProps = {
  catalogPath: string;
  contactPath: string;
};

export function ProductCatalogCta({
  catalogPath,
  contactPath,
}: ProductCatalogCtaProps) {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container className="text-center">
        <Reveal>
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Looking for more products?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
            Explore our complete catalog and discover our full product range.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={catalogPath} className="sm:min-w-52">
              View Complete Catalog
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href={contactPath} variant="secondary" className="sm:min-w-40">
              Send Inquiry
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
