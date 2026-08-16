export type NavigationItem = {
  label: string;
  href: string;
};

export type CompanyDivision = {
  name: string;
  description: string;
  capabilities: readonly string[];
  href: string;
  image: string;
  imageAlt: string;
};

export type InfrastructureItem = {
  title: string;
  image: string;
  imageAlt: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
