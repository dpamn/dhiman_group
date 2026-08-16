import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { NauShell } from "@/components/agro/NauShell";
import {
  ButtonLink,
  Container,
  Reveal,
  Section,
} from "@/components/ui";
import { agroConfig, agroProducts, getAgroProduct } from "@/lib/agro-data";
import { siteConfig } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return agroProducts.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getAgroProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Naman Agro Udhyog`,
    description: product.description,
    alternates: {
      canonical: `/naman-agro/products/${product.id}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 1200, height: 630, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getAgroProduct(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${product.image}`,
    brand: {
      "@type": "Brand",
      name: agroConfig.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: agroConfig.name,
      url: agroConfig.url,
    },
    category: product.category,
  };

  return (
    <NauShell>
      <section className="bg-brand-navy text-white">
        <Container className="pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-green-300">
              {product.category}
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
                  className={
                    product.category === "Tractor Implements"
                      ? "object-contain p-4"
                      : "object-cover"
                  }
                />
              </div>
              {product.images.length > 1 ? (
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {product.images.slice(1, 4).map((img) => (
                    <div
                      key={img}
                      className="relative aspect-square overflow-hidden rounded-card bg-slate-100"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} additional view`}
                        fill
                        sizes="(min-width: 1024px) 15vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </Reveal>

            <Reveal direction="right">
              <h2 className="font-display text-2xl font-bold text-brand-navy">
                Overview
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{product.overview}</p>

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

              <h3 className="mt-8 font-display text-xl font-bold text-brand-navy">
                Key Features
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-control bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/naman-agro/contact" className="sm:min-w-48">
                  Send an Inquiry
                  <ArrowRight aria-hidden="true" className="size-4" />
                </ButtonLink>
                <ButtonLink
                  href="/naman-agro/products"
                  variant="secondary"
                  className="sm:min-w-40"
                >
                  All Products
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {product.images.length > 4 ? (
        <Section tone="muted">
          <Container>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-brand-navy">
                Additional Images
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.images.slice(4).map((img) => (
                <div
                  key={img}
                  className="relative aspect-[4/3] overflow-hidden rounded-card bg-slate-100"
                >
                  <Image
                    src={img}
                    alt={`${product.name} gallery image`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </NauShell>
  );
}
