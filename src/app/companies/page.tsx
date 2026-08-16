import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageShell } from "@/components/shared";
import { companies } from "@/lib/site";
import { Card, Container, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Companies" };
export default function CompaniesPage() { return <PageShell><Section tone="muted"><Container><SectionHeading level="h1" eyebrow="Our companies" title="Specialist divisions, one group." description="Choose the Dhiman Group business best aligned with your requirements." /><div className="mt-10 grid gap-6 lg:grid-cols-2">{companies.map((company) => <Card key={company.name} className="overflow-hidden"><div className="relative h-64"><Image src={company.image} alt={company.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div><div className="p-7 sm:p-8"><h2 className="font-display text-3xl font-bold text-brand-navy">{company.name}</h2><p className="mt-4 leading-7 text-slate-600">{company.description}</p><Link href={company.href} className="mt-6 inline-flex font-bold text-green-700 hover:text-brand-navy">Visit company →</Link></div></Card>)}</div></Container></Section></PageShell>; }
