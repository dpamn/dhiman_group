import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { DecShell } from "@/components/engineering/DecShell";
import {
  ProductCatalogActions,
  ProductCatalogCta,
} from "@/components/shared";
import {
  ButtonLink,
  Container,
  Reveal,
  Section,
} from "@/components/ui";
import { decCatalogConfig, getProductBrochure } from "@/lib/catalog-data";
import { decConfig, decProducts, getDecProduct } from "@/lib/dec-data";
import { siteConfig } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return decProducts.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getDecProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Dhiman Engineering Company`,
    description: product.description,
    alternates: {
      canonical: `/engineering/products/${product.id}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name }],
    },
  };
}

export default async function DecProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getDecProduct(slug);

  if (!product) {
    notFound();
  }

  const brochure = getProductBrochure("DEC", product.id);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    brand: {
      "@type": "Brand",
      name: decConfig.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: decConfig.name,
    },
    category: product.category,
  };

  return (
    <DecShell>
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              {product.category}
              {product.model ? ` · ${product.model}` : ""}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {product.description}
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="default">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              {product.images && product.images.length > 1 ? (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {product.images.slice(1).map((img) => (
                    <div
                      key={img}
                      className="relative aspect-[4/3] overflow-hidden rounded-card bg-slate-100"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} additional view`}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </Reveal>

            <Reveal direction="right">
              {product.overview ? (
                <>
                  <h2 className="font-display text-2xl font-bold text-brand-navy">
                    Overview
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">{product.overview}</p>
                </>
              ) : null}

              {product.applications && product.applications.length > 0 ? (
                <>
                  <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">
                    Applications
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {product.applications.map((app) => (
                      <li
                        key={app}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-green-600"
                        />
                        {app}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {product.specs && product.specs.length > 0 ? (
                <>
                  <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">
                    Specifications
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="rounded-control bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              <ProductCatalogActions
                brochure={brochure}
                completeCatalogPath={decCatalogConfig.catalogPath}
                contactPath="/engineering/contact"
              />

              <div className="mt-4">
                <ButtonLink
                  href="/engineering/products"
                  variant="ghost"
                  size="sm"
                >
                  <ArrowRight aria-hidden="true" className="size-3.5 rotate-180" />
                  All Products
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ProductCatalogCta
        catalogPath={decCatalogConfig.catalogPath}
        contactPath="/engineering/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </DecShell>
  );
}
