import { siteConfig } from "./site";

export const agroConfig = {
  name: "Naman Agro Udhyog",
  shortName: "NAU",
  tagline: "Agricultural Machinery & Implements",
  brandMessage: "Built for Farmers. Engineered for Performance.",
  supportingMessage: "Reliable Agricultural Machinery for Modern Farming.",
  description:
    "Naman Agro Udhyog manufactures reliable agricultural machinery and implements designed for practical farming requirements, durable performance and efficient field operations.",
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  phoneDisplay: siteConfig.contact.phoneDisplay,
  phones: siteConfig.contact.phones,
  address: siteConfig.contact.address,
  mapQuery: siteConfig.contact.mapQuery,
  logo: "/images/NAU_images/nau-logo.png",
  heroImage: "/images/NAU_images/a_clean_product_photography_style_outdoor_scene_a.png",
  url: `${siteConfig.url}/naman-agro`,
} as const;

export type AgroProductCategory =
  | "Agricultural Machinery"
  | "Agricultural Implements"
  | "Farming Equipment"
  | "Tractor Implements";

export type AgroProduct = {
  id: string;
  name: string;
  category: AgroProductCategory;
  description: string;
  overview: string;
  applications: string[];
  features: string[];
  image: string;
  images: string[];
  specs?: string[];
};

export const agroProductCategories: AgroProductCategory[] = [
  "Agricultural Machinery",
  "Agricultural Implements",
  "Farming Equipment",
  "Tractor Implements",
];

export const categoryDescriptions: Record<AgroProductCategory, string> = {
  "Agricultural Machinery":
    "Power-driven agricultural machinery designed for tractor-based field operations.",
  "Agricultural Implements":
    "Trailed and mounted implements for crop management and liquid application.",
  "Farming Equipment":
    "Mobile equipment for liquid transport, spraying and farm maintenance tasks.",
  "Tractor Implements":
    "Heavy-duty hitch and linkage components for secure tractor-implement connections.",
};

export const agroProducts: AgroProduct[] = [
  {
    id: "pto-power-sprayer",
    name: "PTO Tractor-Mounted Power Sprayer",
    category: "Agricultural Machinery",
    description:
      "PTO-driven power sprayer with integrated tank, pump assembly and hose system for efficient crop spraying operations.",
    overview:
      "This tractor-mounted power sprayer is designed for farmers who need reliable liquid application in the field. The unit combines a durable tank, belt-driven pump system and practical hose routing in a reinforced steel frame built for everyday agricultural use.",
    applications: [
      "Crop spraying and pest control",
      "Liquid fertilizer application",
      "Tractor PTO-powered field operations",
    ],
    features: [
      "PTO belt-drive pump system",
      "Integrated pressure gauge",
      "Reinforced steel frame",
      "Coiled delivery hoses",
    ],
    image: "/images/NAU_images/1786865097997.jpg",
    images: [
      "/images/NAU_images/1786865097997.jpg",
      "/images/NAU_images/1786865099104.jpg",
    ],
  },
  {
    id: "trailed-agricultural-sprayer",
    name: "Trailed Agricultural Sprayer",
    category: "Agricultural Implements",
    description:
      "Two-wheeled trailed sprayer with high-density spray tank, manual hose reel and tractor drawbar hitch for field spraying.",
    overview:
      "Built as a practical trailed implement, this agricultural sprayer features a UV-safe high-density spray tank mounted on a welded steel chassis. The unit includes a manual hose reel and is designed for towing behind a tractor across varied field conditions.",
    applications: [
      "Field crop spraying",
      "Liquid application across cultivated areas",
      "Tractor-towed spraying operations",
    ],
    features: [
      "High-density UV-safe spray tank",
      "Manual hose reel",
      "Heavy-duty trailed chassis",
      "Tractor drawbar hitch",
    ],
    image: "/images/NAU_images/1786865098117.jpg",
    images: [
      "/images/NAU_images/1786865098117.jpg",
      "/images/NAU_images/1786865098923.jpg",
      "/images/NAU_images/1786865099252.jpg",
      "/images/NAU_images/1786865099645.jpg",
    ],
  },
  {
    id: "ibc-tank-sprayer-trailer",
    name: "IBC Tank Sprayer Trailer",
    category: "Farming Equipment",
    description:
      "Trailer-mounted IBC tank sprayer with pump assembly, hose reel and PTO or manual drive options for liquid application.",
    overview:
      "This mobile sprayer trailer combines a large-capacity IBC tank with a custom-fabricated steel frame, pump manifold and hose management system. Designed for practical farm use, it supports liquid transport and spraying across agricultural operations.",
    applications: [
      "Liquid transport and spraying",
      "Farm maintenance and crop care",
      "Mobile field spraying operations",
    ],
    features: [
      "Large-capacity IBC tank",
      "Pump and valve manifold",
      "Hose reel system",
      "Robust trailer frame",
    ],
    image: "/images/NAU_images/a_clean_product_photography_style_outdoor_scene_a.png",
    images: [
      "/images/NAU_images/a_clean_product_photography_style_outdoor_scene_a.png",
      "/images/NAU_images/a_bright_high_resolution_outdoor_agricultural_equ.png",
      "/images/NAU_images/1786865098311.jpg",
      "/images/NAU_images/1786865098532.jpg",
      "/images/NAU_images/1786865098783.jpg",
      "/images/NAU_images/1786865099385.jpg",
      "/images/NAU_images/1786865099511.jpg",
    ],
  },
  {
    id: "tractor-hitch-assembly",
    name: "Tractor Hitch Assembly",
    category: "Tractor Implements",
    description:
      "Heavy-duty welded steel hitch and linkage assembly for secure mounting of agricultural implements to tractor three-point systems.",
    overview:
      "Manufactured from thick steel plate with precision welding, this tractor hitch assembly provides a robust connection point for agricultural implements. The unit includes mounting holes, clevis brackets and zinc-plated pins for dependable field use.",
    applications: [
      "Tractor three-point linkage connections",
      "Implement mounting and attachment",
      "Agricultural machinery integration",
    ],
    features: [
      "Heavy-duty welded steel construction",
      "Clevis mounting brackets",
      "Zinc-plated connecting pins",
      "Industrial-grade finish",
    ],
    image: "/images/NAU_images/tractor-hitch.jpg",
    images: [
      "/images/NAU_images/tractor-hitch.jpg",
      "/images/NAU_images/eicher-tractor-hitch.jpg",
    ],
  },
];

export const agroStrengths = [
  {
    title: "Reliable Construction",
    description:
      "Agricultural equipment designed with durability and practical field usage in mind.",
    icon: "shield" as const,
  },
  {
    title: "Practical Engineering",
    description:
      "Machines and implements developed around real agricultural requirements.",
    icon: "cog" as const,
  },
  {
    title: "Quality Focus",
    description:
      "Consistent attention to materials, manufacturing and product quality.",
    icon: "check" as const,
  },
  {
    title: "Farmer-Centric Approach",
    description:
      "Solutions designed to make agricultural operations more practical and efficient.",
    icon: "users" as const,
  },
  {
    title: "Product Reliability",
    description:
      "Equipment built to deliver dependable performance across demanding working conditions.",
    icon: "gauge" as const,
  },
  {
    title: "Continuous Improvement",
    description:
      "A focus on improving products, processes and manufacturing capabilities.",
    icon: "trending" as const,
  },
] as const;

export const agroApplications = [
  {
    title: "Crop Management",
    description: "Spraying and liquid application for crop care and protection.",
    image: "/images/NAU_images/a_bright_high_resolution_outdoor_agricultural_equ.png",
  },
  {
    title: "Tractor-Based Operations",
    description: "PTO-driven and trailed equipment for tractor field work.",
    image: "/images/NAU_images/1786865097997.jpg",
  },
  {
    title: "Farm Maintenance",
    description: "Mobile equipment for liquid transport and maintenance tasks.",
    image: "/images/NAU_images/1786865098532.jpg",
  },
] as const;

export const agroInfrastructureImages = [
  {
    src: "/images/NAU_images/1786865097997.jpg",
    alt: "Agricultural sprayer assembly in manufacturing workshop",
  },
  {
    src: "/images/NAU_images/1786865099104.jpg",
    alt: "Power sprayer unit on factory floor",
  },
  {
    src: "/images/NAU_images/eicher-tractor-hitch.jpg",
    alt: "Tractor hitch component fabrication in workshop",
  },
] as const;

export type AgroGalleryCategory =
  | "All"
  | "Sprayers"
  | "Trailers"
  | "Components"
  | "Field";

export type AgroGalleryImage = {
  src: string;
  alt: string;
  category: Exclude<AgroGalleryCategory, "All">;
};

export const agroGalleryImages: AgroGalleryImage[] = [
  {
    src: "/images/NAU_images/a_clean_product_photography_style_outdoor_scene_a.png",
    alt: "IBC tank sprayer trailer attached to tractor in field",
    category: "Field",
  },
  {
    src: "/images/NAU_images/a_bright_high_resolution_outdoor_agricultural_equ.png",
    alt: "Trailer-mounted sprayer in agricultural field",
    category: "Field",
  },
  {
    src: "/images/NAU_images/1786865097997.jpg",
    alt: "PTO tractor-mounted power sprayer in workshop",
    category: "Sprayers",
  },
  {
    src: "/images/NAU_images/1786865099104.jpg",
    alt: "Mobile power sprayer with PTO drive system",
    category: "Sprayers",
  },
  {
    src: "/images/NAU_images/1786865098117.jpg",
    alt: "Trailed agricultural sprayer with Orient tank",
    category: "Sprayers",
  },
  {
    src: "/images/NAU_images/1786865098311.jpg",
    alt: "IBC tank sprayer trailer with pump assembly",
    category: "Trailers",
  },
  {
    src: "/images/NAU_images/1786865098532.jpg",
    alt: "IBC tank trailer with hose reel system",
    category: "Trailers",
  },
  {
    src: "/images/NAU_images/1786865098783.jpg",
    alt: "Mobile IBC tank sprayer unit",
    category: "Trailers",
  },
  {
    src: "/images/NAU_images/1786865098923.jpg",
    alt: "Trailed sprayer with hose reel on street",
    category: "Sprayers",
  },
  {
    src: "/images/NAU_images/1786865099252.jpg",
    alt: "Blue spray tank on trailed chassis",
    category: "Sprayers",
  },
  {
    src: "/images/NAU_images/1786865099385.jpg",
    alt: "Trailed tank sprayer hitched to tractor",
    category: "Field",
  },
  {
    src: "/images/NAU_images/1786865099511.jpg",
    alt: "IBC tank sprayer with MRF tyres",
    category: "Trailers",
  },
  {
    src: "/images/NAU_images/1786865099645.jpg",
    alt: "Orient spray tank trailed sprayer",
    category: "Sprayers",
  },
  {
    src: "/images/NAU_images/tractor-hitch.jpg",
    alt: "Heavy-duty tractor hitch assembly",
    category: "Components",
  },
  {
    src: "/images/NAU_images/eicher-tractor-hitch.jpg",
    alt: "Tractor hitch component on workshop bench",
    category: "Components",
  },
  {
    src: "/images/NAU_images/a_bright_outdoor_agricultural_scene_photograph_of.png",
    alt: "Agricultural sprayer equipment outdoor scene",
    category: "Field",
  },
  {
    src: "/images/NAU_images/a_clean_bright_outdoor_agricultural_scene_a_heav.png",
    alt: "Heavy-duty agricultural equipment in field setting",
    category: "Field",
  },
  {
    src: "/images/NAU_images/a_clean_high_resolution_brightly_lit_outdoor_pro.png",
    alt: "Bright outdoor product photograph of farm equipment",
    category: "Field",
  },
  {
    src: "/images/NAU_images/a_clear_sharp_high_resolution_outdoor_photograph.png",
    alt: "Sharp outdoor photograph of agricultural machinery",
    category: "Field",
  },
  {
    src: "/images/NAU_images/a_crisp_high_resolution_photo_of_a_farm_agricultu.png",
    alt: "Farm agricultural equipment product photo",
    category: "Field",
  },
];

export function getAgroProduct(id: string): AgroProduct | undefined {
  return agroProducts.find((product) => product.id === id);
}
