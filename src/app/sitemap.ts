import type { MetadataRoute } from "next";

import { agroProducts } from "@/lib/agro-data";
import { decProducts } from "@/lib/dec-data";

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
    "/engineering/catalog",
    "/engineering/services",
    "/engineering/projects",
    "/engineering/gallery",
    "/engineering/contact",
    "/naman-agro",
    "/naman-agro/products",
    "/naman-agro/catalog",
    "/naman-agro/gallery",
    "/naman-agro/contact",
    "/naman-agro/dealers",
  ];

  const nauProductRoutes = agroProducts.map(
    (product) => `/naman-agro/products/${product.id}`,
  );

  const decProductRoutes = decProducts.map(
    (product) => `/engineering/products/${product.id}`,
  );

  const routes = [...staticRoutes, ...nauProductRoutes, ...decProductRoutes];

  return routes.map((route, index) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : route === "/naman-agro" ? 0.9 : 0.7,
  }));
}
