import { ContactForm } from "@/components/shared/ContactForm";

const engineeringServiceOptions = [
  { value: "water-treatment", label: "Water Treatment Plant" },
  { value: "swimming-pool", label: "Swimming Pool Construction" },
  { value: "pool-maintenance", label: "Pool Maintenance / AMC" },
  { value: "industrial-components", label: "Industrial Components" },
  { value: "other", label: "Other / General Enquiry" },
] as const;

export function DecContactForm() {
  return (
    <ContactForm
      formIdPrefix="dec"
      division="Dhiman Engineering Company"
      serviceOptions={[...engineeringServiceOptions]}
    />
  );
}
