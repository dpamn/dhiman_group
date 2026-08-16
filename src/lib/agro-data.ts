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
  catalogId?: string;
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
    id: "tractor-mounted-spray-machine",
    name: "Tractor Mounted Spray Machine",
    category: "Agricultural Machinery",
    description:
      "Engineered for efficiency and durability, our tractor mounted spray machine ensures uniform spraying, saves time and effort, and increases crop productivity.",
    overview:
      "High performance tractor-mounted spray machine with diaphragm pump, UV-protected tank and 3-point linkage mounting. Designed for pesticides, herbicides, fungicides and water soluble fertilizer application across field crops, orchards and plantations.",
    applications: [
      "Pesticides & insecticides spraying",
      "Herbicides spraying",
      "Fungicides spraying",
      "Water soluble fertilizers spraying",
    ],
    features: [
      "High quality tanks with UV protection",
      "Powerful & efficient diaphragm pump",
      "High pressure for long range spraying",
      "Adjustable pressure regulator",
      "Chemical resistant & corrosion free parts",
      "Sturdy MS frame with powder coating",
    ],
    specs: [
      "Tank Capacity: 200 / 300 / 400 / 500 / 600 Ltr.",
      "Pump Type: Diaphragm Pump",
      "Working Pressure: 15 – 45 kg/cm²",
      "Required Power: 20 – 45 HP",
      "No. of Outlets: 2",
      "Hose Pipe Length: 50 Meter (8.5 mm)",
      "Mounting: 3 Point Linkage",
    ],
    image: "/images/NAU_images/catalog/nau-product-01-tractor-mounted-spray.png",
    images: [
      "/images/NAU_images/catalog/nau-product-01-tractor-mounted-spray.png",
      "/images/NAU_images/1786865097997.jpg",
      "/images/NAU_images/1786865099104.jpg",
    ],
    catalogId: "nau-brochure-01",
  },
  {
    id: "trailer-ibc-spray-machine",
    name: "Trailer / IBC Spray Machine",
    category: "Agricultural Machinery",
    description:
      "Trailer-mounted IBC spray machine ideal for large farm areas and fields. Easy to transport, highly efficient and suitable for all types of crops and spray operations.",
    overview:
      "Heavy-duty trailer spray machine with high capacity tank, powerful diaphragm pump and hose reel system. Built on a robust chassis with 7.50 × 16 wheels for reliable field performance.",
    applications: [
      "Pesticides & insecticides spraying",
      "Herbicides spraying",
      "Fungicides spraying",
      "Water soluble fertilizers spraying",
    ],
    features: [
      "Heavy duty chassis & axle",
      "High capacity tank",
      "Powerful diaphragm pump",
      "High range & uniform spraying",
      "Easy to attach with tractor",
      "Long life & low maintenance",
    ],
    specs: [
      "Tank Capacity: 300 / 500 / 800 / 1000 Ltr.",
      "Pump Type: Diaphragm Pump",
      "Working Pressure: 15 – 45 kg/cm²",
      "Required Power: 20 – 50 HP",
      "Wheel Size: 7.50 × 16",
      "Hose Pipe Length: 50 Meter (8.5 mm)",
    ],
    image: "/images/NAU_images/catalog/nau-product-02-trailer-ibc-spray.png",
    images: [
      "/images/NAU_images/catalog/nau-product-02-trailer-ibc-spray.png",
      "/images/NAU_images/a_clean_product_photography_style_outdoor_scene_a.png",
      "/images/NAU_images/1786865098311.jpg",
    ],
    catalogId: "nau-brochure-02",
  },
  {
    id: "agricultural-spray-tank",
    name: "Agricultural Spray Tank",
    category: "Farming Equipment",
    description:
      "High quality polyethylene spray tank with UV protection. Strong, leakproof and corrosion resistant for long lasting performance.",
    overview:
      "Virgin quality LLDPE horizontal spray tank with thick wall construction, UV stabilization and food grade material. Suitable for pesticides, herbicides, fertilizers and water across multiple capacity options.",
    applications: [
      "Pesticides & insecticides spraying",
      "Herbicides spraying",
      "Fungicides spraying",
      "Water & liquid fertilizers spraying",
    ],
    features: [
      "Virgin quality food grade material",
      "Thick wall & heavy duty construction",
      "UV stabilized for long life",
      "Leak proof & rust proof",
      "Easy to clean & maintain",
      "Multiple capacities available",
    ],
    specs: [
      "Material: LLDPE Virgin Material",
      "Type: Horizontal",
      "Capacity: 200 / 300 / 400 / 500 / 600 / 800 / 1000 Ltr.",
      "Wall Thickness: 7 – 9 mm (Approx.)",
      "Lid Size: 400 mm",
      "Color: White (Standard)",
    ],
    image: "/images/NAU_images/catalog/nau-product-03-agricultural-spray-tank.png",
    images: [
      "/images/NAU_images/catalog/nau-product-03-agricultural-spray-tank.png",
    ],
    catalogId: "nau-brochure-03",
  },
  {
    id: "spray-pump-assembly",
    name: "Spray Pump Assembly",
    category: "Farming Equipment",
    description:
      "High efficiency spray pump assembly designed for consistent pressure and uniform spraying across all types of agricultural spray applications.",
    overview:
      "Powerful spray pump with forged brass pump head, hard chrome plated ceramic pistons and built-in pressure regulator. Available in diaphragm, piston and membrane pump configurations.",
    applications: [
      "Pesticides & insecticides spraying",
      "Herbicides spraying",
      "Fungicides spraying",
      "Water soluble fertilizers spraying",
    ],
    features: [
      "High pressure & high flow rate",
      "Forged brass pump head",
      "Hard chrome plated ceramic pistons",
      "Built-in pressure regulator",
      "Smooth operation & low vibration",
      "Corrosion resistant materials",
    ],
    specs: [
      "Pump Type: Diaphragm / Piston Pump",
      "Max. Pressure: 15 – 45 kg/cm²",
      "Discharge: 30 – 80 LPM",
      "Required Power: 2 – 5 HP",
      "Speed: 800 – 1000 RPM",
      "Weight (Approx.): 14 – 22 Kg",
    ],
    image: "/images/NAU_images/catalog/nau-product-04-spray-pump-assembly.png",
    images: [
      "/images/NAU_images/catalog/nau-product-04-spray-pump-assembly.png",
    ],
    catalogId: "nau-brochure-04",
  },
  {
    id: "hose-reel-system",
    name: "Hose Reel / Hose System",
    category: "Farming Equipment",
    description:
      "Hose reel system designed for smooth operation, long life and maximum convenience during spraying. Built with high quality materials for heavy duty performance.",
    overview:
      "Heavy-duty MS frame with powder coating, high quality PVC/rubber hose and smooth reeling system. Includes leak proof brass joints and adjustable spray gun for all types of agricultural spraying.",
    applications: [
      "Pesticides spraying",
      "Herbicides spraying",
      "Fungicides spraying",
      "Fertilizers spraying",
    ],
    features: [
      "Heavy duty MS frame with powder coating",
      "High quality rubber / PVC hose",
      "Smooth & strong reeling system",
      "Leak proof brass joints",
      "Easy installation & operation",
      "Long lasting & low maintenance",
    ],
    specs: [
      "Reel Material: Mild Steel (MS)",
      "Hose Material: PVC / Rubber",
      "Hose Length: 50 / 100 / 150 Meter",
      "Hose Diameter: 8.5 mm / 10 mm",
      "Working Pressure: 15 – 45 kg/cm²",
      "Coating: Powder Coated",
    ],
    image: "/images/NAU_images/catalog/nau-product-05-hose-reel-system.png",
    images: [
      "/images/NAU_images/catalog/nau-product-05-hose-reel-system.png",
    ],
    catalogId: "nau-brochure-05",
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
