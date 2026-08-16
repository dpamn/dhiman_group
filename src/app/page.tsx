import {
  About,
  Companies,
  ContactCTA,
  Footer,
  Hero,
  Infrastructure,
  Navbar,
  WhyChooseUs,
} from "@/components";
import { siteConfig } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/dhiman-group-logo.png`,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vivek Vihar",
    addressLocality: "Shamli",
    addressRegion: "Uttar Pradesh",
    postalCode: "247776",
    addressCountry: "IN",
  },
  subOrganization: [
    {
      "@type": "Organization",
      name: "Dhiman Engineering Company",
    },
    {
      "@type": "Organization",
      name: "Naman Agro Udhyog",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Companies />
        <Infrastructure />
        <WhyChooseUs />
        <ContactCTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
