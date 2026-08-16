import type { Metadata } from "next";
import { ContactCTA } from "@/components/ContactCTA";
import { PageShell } from "@/components/shared";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <PageShell><ContactCTA /></PageShell>; }
