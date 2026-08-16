import type { MetadataRoute } from "next";

import { agroProducts } from "@/lib/agro-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dhimangroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/companies",
    "/contact",
    "/engineering",
    "/engineering/about",
    "/engineering/products",
    "/engineering/services",
    "/engineering/projects",
    "/engineering/gallery",
    "/engineering/contact",
    "/naman-agro",
    "/naman-agro/products",
    "/naman-agro/gallery",
    "/naman-agro/contact",
    "/naman-agro/dealers",
  ];

  const productRoutes = agroProducts.map(
    (product) => `/naman-agro/products/${product.id}`,
  );

  const routes = [...staticRoutes, ...productRoutes];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : route === "/naman-agro" ? 0.9 : 0.7,
  }));
}
