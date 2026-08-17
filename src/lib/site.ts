import type {
  CompanyDivision,
  InfrastructureItem,
  NavigationItem,
} from "@/types/site";

export const siteConfig = {
  name: "Dhiman Group",
  legalName: "Dhiman Group",
  description:
    "A diversified industrial group committed to quality, innovation, and long-term partnerships across engineering and agricultural industries.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dhimangroup.com",
  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+919837144746",
    phoneDisplay:
      process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ?? "+91 9837144746",
    phones: [
      "+91-9837144746",
      "+91-9837469849",
      "+91-7599222973",
      "+91-7251893534",
    ] as const,
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "dhimangroup00@gmail.com",
    address: "Vivek Vihar, Shamli, Uttar Pradesh — 247776",
    mapQuery: "Vivek+Vihar+Shamli+Uttar+Pradesh+247776",
  },
} as const;

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "Contact", href: "/contact" },
];

export const companies: CompanyDivision[] = [
  {
    name: "Dhiman Engineering Company",
    description:
      "Specialists in water treatment plants, swimming pool construction, and precision industrial components — serving municipal bodies, hotels, residential complexes, and industrial clients across India.",
    capabilities: [
      "Water Treatment Plants",
      "Swimming Pool Construction",
      "Industrial Components",
    ],
    href: "/engineering",
    image: "/images/DEC_images/slider/1.jpg",
    imageAlt:
      "Dhiman Engineering Company water treatment and pool construction projects",
  },
  {
    name: "Naman Agro Udhyog",
    description:
      "Manufacturing reliable agricultural machinery and implements designed for practical farming requirements and dependable field performance.",
    capabilities: [
      "Agricultural Machinery",
      "Trailed Sprayers",
      "Tractor Implements",
    ],
    href: "/naman-agro",
    image: "/images/NAU_images/a_clean_product_photography_style_outdoor_scene_a.png",
    imageAlt: "Naman Agro Udhyog IBC tank sprayer trailer in agricultural field",
  },
];

export const infrastructure: InfrastructureItem[] = [
  {
    title: "Factory",
    image: "/images/hero-industry.jpg",
    imageAlt: "Large industrial factory interior with structural steel",
  },
  {
    title: "Manufacturing",
    image: "/images/about-group.jpg",
    imageAlt: "Modern engineering and assembly work environment",
  },
  {
    title: "Warehouse",
    image: "/images/infrastructure-warehouse.jpg",
    imageAlt: "Organized warehouse and logistics infrastructure",
  },
  {
    title: "Quality Testing",
    image: "/images/infrastructure-quality.jpg",
    imageAlt: "Engineer carrying out a precision quality inspection",
  },
];

