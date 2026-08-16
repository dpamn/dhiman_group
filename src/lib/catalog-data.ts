export type CatalogCompany = "DEC" | "NAU";

export type CatalogPage = {
  src: string;
  alt: string;
  label?: string;
};

export type CatalogEntry = {
  id: string;
  company: CatalogCompany;
  title: string;
  description: string;
  category: string;
  cover: string;
  pages: CatalogPage[];
  productIds?: string[];
  lastUpdated?: string;
  downloadFilename?: string;
  pdf?: string;
};

export type CompanyCatalogConfig = {
  company: CatalogCompany;
  catalogPath: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  completeCatalog: CatalogEntry;
  categoryCatalogs: CatalogEntry[];
  productBrochures: CatalogEntry[];
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
  };
};

const DEC_CATALOG_BASE = "/images/DEC_images/catalog";
const NAU_CATALOG_BASE = "/images/NAU_images/catalog";

export const decCatalogConfig: CompanyCatalogConfig = {
  company: "DEC",
  catalogPath: "/engineering/catalog",
  heroTitle: "Engineering Product Catalog",
  heroSubtitle: "Explore Our Complete Engineering Product Range",
  heroDescription:
    "Browse our latest product catalog to explore our range of engineering products, components and industrial solutions.",
  completeCatalog: {
    id: "dec-complete-catalog",
    company: "DEC",
    title: "Dhiman Engineering Product Catalog",
    description:
      "Complete engineering product catalog featuring precision industrial components including CI head stock systems and related assemblies.",
    category: "Complete Catalog",
    cover: `${DEC_CATALOG_BASE}/dec-ci-headstock-cover.jpg`,
    pages: [
      {
        src: `${DEC_CATALOG_BASE}/dec-ci-headstock-cover.jpg`,
        alt: "Complete CI Head Stock Systems — Dhiman Engineering Company catalog cover",
        label: "Cover",
      },
      {
        src: `${DEC_CATALOG_BASE}/dec-ci-headstock-specs.jpg`,
        alt: "CI Head Stock Systems technical specifications and exploded view",
        label: "Specifications",
      },
    ],
    lastUpdated: "2026-08-16",
    downloadFilename: "Dhiman-Engineering-Product-Catalog",
    productIds: ["ci-head-stock"],
  },
  categoryCatalogs: [
    {
      id: "dec-industrial-components",
      company: "DEC",
      title: "Industrial Components",
      description:
        "Precision-machined industrial components including CI head stock systems, cylinder barrels, pistons and sealing assemblies.",
      category: "Industrial Components",
      cover: `${DEC_CATALOG_BASE}/dec-ci-headstock-cover.jpg`,
      pages: [
        {
          src: `${DEC_CATALOG_BASE}/dec-ci-headstock-cover.jpg`,
          alt: "Complete CI Head Stock Systems catalog page",
          label: "Cover",
        },
        {
          src: `${DEC_CATALOG_BASE}/dec-ci-headstock-specs.jpg`,
          alt: "CI Head Stock Systems technical specifications",
          label: "Specifications",
        },
      ],
      lastUpdated: "2026-08-16",
      productIds: ["ci-head-stock"],
    },
  ],
  productBrochures: [
    {
      id: "dec-ci-head-stock-brochure",
      company: "DEC",
      title: "CI Head Stock Systems",
      description:
        "Complete CI head stock systems with hand wheel and spindle assemblies. Model DH-HS-WH-100 with cast iron construction and SS 304 components.",
      category: "Industrial Components",
      cover: `${DEC_CATALOG_BASE}/dec-ci-headstock-cover.jpg`,
      pages: [
        {
          src: `${DEC_CATALOG_BASE}/dec-ci-headstock-cover.jpg`,
          alt: "CI Head Stock With Hand Wheel — Model DH-HS-WH-100",
          label: "Product Overview",
        },
        {
          src: `${DEC_CATALOG_BASE}/dec-ci-headstock-specs.jpg`,
          alt: "CI Head Stock Systems exploded view and technical data",
          label: "Technical Data",
        },
      ],
      lastUpdated: "2026-08-16",
      productIds: ["ci-head-stock"],
    },
  ],
  seo: {
    title: "Dhiman Engineering Product Catalog | Engineering Products",
    description:
      "Explore the Dhiman Engineering product catalog and discover our complete range of engineering products, components and industrial solutions.",
    canonical: "/engineering/catalog",
    ogImage: `${DEC_CATALOG_BASE}/dec-ci-headstock-cover.jpg`,
  },
};

export const nauCatalogConfig: CompanyCatalogConfig = {
  company: "NAU",
  catalogPath: "/naman-agro/catalog",
  heroTitle: "Agricultural Machinery Catalog",
  heroSubtitle: "Explore Our Complete Agricultural Product Range",
  heroDescription:
    "Discover agricultural machinery and implements designed for practical farming requirements and reliable field performance.",
  completeCatalog: {
    id: "nau-complete-catalog",
    company: "NAU",
    title: "Naman Agro Udhyog Product Catalog",
    description:
      "Complete agricultural machinery catalog featuring tractor-mounted sprayers, trailer spray machines, spray tanks, pump assemblies and hose reel systems.",
    category: "Complete Catalog",
    cover: `${NAU_CATALOG_BASE}/nau-product-01-tractor-mounted-spray.png`,
    pages: [
      {
        src: `${NAU_CATALOG_BASE}/nau-product-01-tractor-mounted-spray.png`,
        alt: "Tractor Mounted Spray Machine — Product 01",
        label: "Product 01",
      },
      {
        src: `${NAU_CATALOG_BASE}/nau-product-02-trailer-ibc-spray.png`,
        alt: "Trailer / IBC Spray Machine — Product 02",
        label: "Product 02",
      },
      {
        src: `${NAU_CATALOG_BASE}/nau-product-03-agricultural-spray-tank.png`,
        alt: "Agricultural Spray Tank — Product 03",
        label: "Product 03",
      },
      {
        src: `${NAU_CATALOG_BASE}/nau-product-04-spray-pump-assembly.png`,
        alt: "Spray Pump Assembly — Product 04",
        label: "Product 04",
      },
      {
        src: `${NAU_CATALOG_BASE}/nau-product-05-hose-reel-system.png`,
        alt: "Hose Reel / Hose System — Product 05",
        label: "Product 05",
      },
    ],
    lastUpdated: "2026-08-16",
    downloadFilename: "Naman-Agro-Udhyog-Product-Catalog",
    productIds: [
      "tractor-mounted-spray-machine",
      "trailer-ibc-spray-machine",
      "agricultural-spray-tank",
      "spray-pump-assembly",
      "hose-reel-system",
    ],
  },
  categoryCatalogs: [
    {
      id: "nau-agricultural-machinery",
      company: "NAU",
      title: "Agricultural Machinery",
      description:
        "Tractor-mounted spray machines and trailer spray systems for efficient field crop spraying operations.",
      category: "Agricultural Machinery",
      cover: `${NAU_CATALOG_BASE}/nau-product-01-tractor-mounted-spray.png`,
      pages: [
        {
          src: `${NAU_CATALOG_BASE}/nau-product-01-tractor-mounted-spray.png`,
          alt: "Tractor Mounted Spray Machine",
          label: "Tractor Mounted Spray",
        },
        {
          src: `${NAU_CATALOG_BASE}/nau-product-02-trailer-ibc-spray.png`,
          alt: "Trailer / IBC Spray Machine",
          label: "Trailer / IBC Spray",
        },
      ],
      lastUpdated: "2026-08-16",
      productIds: ["tractor-mounted-spray-machine", "trailer-ibc-spray-machine"],
    },
    {
      id: "nau-farming-equipment",
      company: "NAU",
      title: "Farming Equipment",
      description:
        "Spray tanks, pump assemblies and hose reel systems for agricultural liquid application.",
      category: "Farming Equipment",
      cover: `${NAU_CATALOG_BASE}/nau-product-03-agricultural-spray-tank.png`,
      pages: [
        {
          src: `${NAU_CATALOG_BASE}/nau-product-03-agricultural-spray-tank.png`,
          alt: "Agricultural Spray Tank",
          label: "Spray Tank",
        },
        {
          src: `${NAU_CATALOG_BASE}/nau-product-04-spray-pump-assembly.png`,
          alt: "Spray Pump Assembly",
          label: "Pump Assembly",
        },
        {
          src: `${NAU_CATALOG_BASE}/nau-product-05-hose-reel-system.png`,
          alt: "Hose Reel / Hose System",
          label: "Hose Reel System",
        },
      ],
      lastUpdated: "2026-08-16",
      productIds: [
        "agricultural-spray-tank",
        "spray-pump-assembly",
        "hose-reel-system",
      ],
    },
  ],
  productBrochures: [
    {
      id: "nau-brochure-01",
      company: "NAU",
      title: "Tractor Mounted Spray Machine",
      description:
        "High performance tractor-mounted spray machine with diaphragm pump. Tank capacities from 200 to 600 litres.",
      category: "Agricultural Machinery",
      cover: `${NAU_CATALOG_BASE}/nau-product-01-tractor-mounted-spray.png`,
      pages: [
        {
          src: `${NAU_CATALOG_BASE}/nau-product-01-tractor-mounted-spray.png`,
          alt: "Tractor Mounted Spray Machine catalog page",
          label: "Brochure",
        },
      ],
      productIds: ["tractor-mounted-spray-machine"],
    },
    {
      id: "nau-brochure-02",
      company: "NAU",
      title: "Trailer / IBC Spray Machine",
      description:
        "Trailer-mounted IBC spray machine for large farm areas. Capacities from 300 to 1000 litres with heavy-duty chassis.",
      category: "Agricultural Machinery",
      cover: `${NAU_CATALOG_BASE}/nau-product-02-trailer-ibc-spray.png`,
      pages: [
        {
          src: `${NAU_CATALOG_BASE}/nau-product-02-trailer-ibc-spray.png`,
          alt: "Trailer / IBC Spray Machine catalog page",
          label: "Brochure",
        },
      ],
      productIds: ["trailer-ibc-spray-machine"],
    },
    {
      id: "nau-brochure-03",
      company: "NAU",
      title: "Agricultural Spray Tank",
      description:
        "High quality LLDPE spray tank with UV protection. Capacities from 200 to 1000 litres.",
      category: "Farming Equipment",
      cover: `${NAU_CATALOG_BASE}/nau-product-03-agricultural-spray-tank.png`,
      pages: [
        {
          src: `${NAU_CATALOG_BASE}/nau-product-03-agricultural-spray-tank.png`,
          alt: "Agricultural Spray Tank catalog page",
          label: "Brochure",
        },
      ],
      productIds: ["agricultural-spray-tank"],
    },
    {
      id: "nau-brochure-04",
      company: "NAU",
      title: "Spray Pump Assembly",
      description:
        "High pressure spray pump assembly with forged brass pump head. Diaphragm and piston pump options available.",
      category: "Farming Equipment",
      cover: `${NAU_CATALOG_BASE}/nau-product-04-spray-pump-assembly.png`,
      pages: [
        {
          src: `${NAU_CATALOG_BASE}/nau-product-04-spray-pump-assembly.png`,
          alt: "Spray Pump Assembly catalog page",
          label: "Brochure",
        },
      ],
      productIds: ["spray-pump-assembly"],
    },
    {
      id: "nau-brochure-05",
      company: "NAU",
      title: "Hose Reel / Hose System",
      description:
        "Heavy-duty hose reel system with MS frame and high-quality PVC/rubber hose. Lengths from 50 to 200 metres.",
      category: "Farming Equipment",
      cover: `${NAU_CATALOG_BASE}/nau-product-05-hose-reel-system.png`,
      pages: [
        {
          src: `${NAU_CATALOG_BASE}/nau-product-05-hose-reel-system.png`,
          alt: "Hose Reel / Hose System catalog page",
          label: "Brochure",
        },
      ],
      productIds: ["hose-reel-system"],
    },
  ],
  seo: {
    title: "Naman Agro Udhyog Product Catalog | Agricultural Machinery",
    description:
      "Explore the Naman Agro Udhyog product catalog featuring agricultural machinery and implements designed for practical farming requirements.",
    canonical: "/naman-agro/catalog",
    ogImage: `${NAU_CATALOG_BASE}/nau-product-01-tractor-mounted-spray.png`,
  },
};

export function getCatalogConfig(company: CatalogCompany): CompanyCatalogConfig {
  return company === "DEC" ? decCatalogConfig : nauCatalogConfig;
}

export function getCatalogForProduct(
  company: CatalogCompany,
  productId: string,
): CatalogEntry | undefined {
  const config = getCatalogConfig(company);
  const allEntries = [
    ...config.productBrochures,
    ...config.categoryCatalogs,
    config.completeCatalog,
  ];

  return allEntries.find((entry) => entry.productIds?.includes(productId));
}

export function getProductBrochure(
  company: CatalogCompany,
  productId: string,
): CatalogEntry | undefined {
  const config = getCatalogConfig(company);
  return config.productBrochures.find((entry) =>
    entry.productIds?.includes(productId),
  );
}

export function getCatalogEntryById(
  company: CatalogCompany,
  catalogId: string,
): CatalogEntry | undefined {
  const config = getCatalogConfig(company);
  const allEntries = [
    config.completeCatalog,
    ...config.categoryCatalogs,
    ...config.productBrochures,
  ];
  return allEntries.find((entry) => entry.id === catalogId);
}
