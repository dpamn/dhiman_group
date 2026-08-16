import { siteConfig } from "./site";

export const decConfig = {
  name: "Dhiman Engineering Company",
  tagline: "Water Treatment & Pool Technology Specialists",
  description:
    "A trusted name in water treatment engineering, swimming pool construction, and precision industrial components — serving clients across India with quality-first solutions.",
  email: siteConfig.contact.email,
  phones: siteConfig.contact.phones,
  phoneDisplay: siteConfig.contact.phoneDisplay,
  address: siteConfig.contact.address,
  mapQuery: siteConfig.contact.mapQuery,
  logo: "/images/DEC_images/DHIMAN ENGG.png",
  heroImages: [
    "/images/DEC_images/slider/1.jpg",
    "/images/DEC_images/slider/2.jpg",
    "/images/DEC_images/slider/3.jpg",
    "/images/DEC_images/slider/4.jpg",
  ],
} as const;

export const decStats = [
  { value: "25+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "3", label: "States Served" },
  { value: "100%", label: "Quality Assured" },
] as const;

export type ProductCategory = "Water Treatment" | "Swimming Pools" | "Industrial Components";

export type DecProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  specs?: string[];
};

export const decProducts: DecProduct[] = [
  {
    id: "rate-setter",
    name: "Rate Setter",
    category: "Water Treatment",
    description:
      "Precision-engineered rate setters for accurate flow control in water treatment and distribution systems. Designed for reliable long-term operation in demanding industrial environments.",
    image: "/images/DEC_images/products/rate setter.jpg",
    specs: ["Adjustable flow rate", "Corrosion-resistant body", "Industrial grade"],
  },
  {
    id: "level-indicator",
    name: "Level Indicator",
    category: "Water Treatment",
    description:
      "High-accuracy level indicators for real-time monitoring of liquid levels in tanks, reservoirs, and treatment vessels. Built for durability and ease of maintenance.",
    image: "/images/DEC_images/products/level indicator.JPG",
    specs: ["Visual & digital readout", "Wide range compatibility", "Low maintenance"],
  },
  {
    id: "flow-indicator",
    name: "Flow Indicator",
    category: "Water Treatment",
    description:
      "Reliable flow indicators engineered for continuous monitoring of water and fluid flow in treatment plants and industrial pipelines.",
    image: "/images/DEC_images/products/flow indicator.JPG",
    specs: ["High visibility display", "Robust construction", "Easy installation"],
  },
  {
    id: "flow-controller",
    name: "Flow Controller",
    category: "Water Treatment",
    description:
      "Advanced flow controllers for precise regulation of fluid flow rates in water treatment, dosing, and distribution systems.",
    image: "/images/DEC_images/products/flow controller.jpg",
    specs: ["Precision control", "Stainless steel internals", "Wide pressure range"],
  },
  {
    id: "alum-bridge",
    name: "Alum Bridge",
    category: "Water Treatment",
    description:
      "Structurally robust alum bridges designed for water treatment clarifiers and sedimentation tanks. Engineered for continuous operation with minimal maintenance.",
    image: "/images/DEC_images/products/alum_bridge.jpg",
    specs: ["Heavy-duty construction", "Corrosion resistant", "Custom sizing available"],
  },
  {
    id: "bevel-gear",
    name: "Bevel Gear",
    category: "Industrial Components",
    description:
      "Precision-machined bevel gears for power transmission in industrial machinery. Manufactured to tight tolerances for smooth, efficient operation.",
    image: "/images/DEC_images/products/1.jpg",
    specs: ["Precision machined", "Multiple material options", "Custom ratios available"],
  },
  {
    id: "central-bearing",
    name: "Central Bearing",
    category: "Industrial Components",
    description:
      "High-load central bearings for rotating equipment in water treatment and industrial applications. Designed for extended service life.",
    image: "/images/DEC_images/products/2.jpg",
    specs: ["High load capacity", "Sealed design", "Long service life"],
  },
  {
    id: "sluice-gate",
    name: "Sluice Gate",
    category: "Water Treatment",
    description:
      "Heavy-duty sluice gates for flow control in water treatment plants, irrigation channels, and industrial water management systems.",
    image: "/images/DEC_images/products/7.JPG",
    specs: ["Watertight seal", "Manual & motorized options", "Stainless or MS construction"],
  },
  {
    id: "swimming-pool-inground",
    name: "In-Ground Swimming Pool",
    category: "Swimming Pools",
    description:
      "Custom-designed in-ground swimming pools built to any shape, size, or depth. Engineered with Surflo systems for superior water circulation and long-term structural integrity.",
    image: "/images/DEC_images/products/3.jpg",
    specs: ["Any shape & size", "Surflo technology", "Concrete & liner options"],
  },
  {
    id: "pool-filtration",
    name: "Pool Filtration System",
    category: "Swimming Pools",
    description:
      "High-efficiency pool filtration systems ensuring crystal-clear water quality. Includes pre-filters, pumps, and automated dosing for hands-free operation.",
    image: "/images/DEC_images/products/4.jpg",
    specs: ["High-efficiency filters", "Automated dosing", "Energy efficient pumps"],
  },
  {
    id: "semi-ground-pool",
    name: "Semi-Ground Pool",
    category: "Swimming Pools",
    description:
      "Versatile semi-ground pools combining the aesthetics of above-ground with the permanence of in-ground construction. Ideal for varied terrain and soil conditions.",
    image: "/images/DEC_images/products/5.jpg",
    specs: ["Terrain adaptable", "Liner & concrete finish", "Custom dimensions"],
  },
  {
    id: "spa-pool",
    name: "Spa & Hydrotherapy Pool",
    category: "Swimming Pools",
    description:
      "Therapeutic spa and hydrotherapy pools with integrated jet systems, heating, and automated water treatment for residential and commercial installations.",
    image: "/images/DEC_images/products/6.jpg",
    specs: ["Hydrotherapy jets", "Integrated heating", "Automated treatment"],
  },
];

export const decServices = [
  {
    title: "Water Treatment Plants",
    description:
      "End-to-end design, supply, and installation of industrial water treatment plants. We handle everything from raw water intake to treated water delivery — ensuring compliance with quality standards.",
    icon: "droplets",
    highlights: ["Drinking water systems", "Industrial process water", "Effluent treatment", "Dosing systems"],
  },
  {
    title: "Swimming Pool Construction",
    description:
      "Complete swimming pool solutions from concept to commissioning. We build in-ground, semi-ground, and portable pools for residential complexes, hotels, schools, and sports facilities.",
    icon: "waves",
    highlights: ["In-ground & semi-ground pools", "Concrete & liner construction", "Filtration & dosing", "Skimmer & level deck systems"],
  },
  {
    title: "Pool Maintenance & AMC",
    description:
      "Comprehensive annual maintenance contracts for swimming pools and water treatment systems. Our trained technicians ensure your systems run at peak performance year-round.",
    icon: "wrench",
    highlights: ["Scheduled servicing", "Chemical management", "Equipment overhaul", "Emergency support"],
  },
  {
    title: "Industrial Component Manufacturing",
    description:
      "Precision manufacturing of industrial components including gears, bearings, sluice gates, and flow control equipment. Custom fabrication available to client specifications.",
    icon: "cog",
    highlights: ["Bevel gears & bearings", "Sluice gates", "Flow control devices", "Custom fabrication"],
  },
] as const;

export const decIndustries = [
  { name: "Municipal Water Works", icon: "building2" },
  { name: "Hotels & Resorts", icon: "hotel" },
  { name: "Residential Complexes", icon: "home" },
  { name: "Schools & Institutions", icon: "graduation-cap" },
  { name: "Industrial Plants", icon: "factory" },
  { name: "Sports Facilities", icon: "trophy" },
] as const;

export const decGalleryImages = [
  { src: "/images/DEC_images/slider/1.jpg", alt: "Water treatment plant installation" },
  { src: "/images/DEC_images/slider/2.jpg", alt: "Swimming pool construction project" },
  { src: "/images/DEC_images/slider/3.jpg", alt: "Industrial engineering work" },
  { src: "/images/DEC_images/slider/4.jpg", alt: "Pool filtration system" },
  { src: "/images/DEC_images/about/wtp.jpg", alt: "Water treatment plant overview" },
  { src: "/images/DEC_images/about/swimming.png", alt: "Completed swimming pool" },
  { src: "/images/DEC_images/products/3.jpg", alt: "In-ground pool construction" },
  { src: "/images/DEC_images/products/4.jpg", alt: "Pool filtration equipment" },
  { src: "/images/DEC_images/products/5.jpg", alt: "Semi-ground pool project" },
  { src: "/images/DEC_images/products/6.jpg", alt: "Spa pool installation" },
  { src: "/images/DEC_images/products/8.JPG", alt: "Industrial component manufacturing" },
  { src: "/images/DEC_images/products/9.jpg", alt: "Engineering facility" },
] as const;
