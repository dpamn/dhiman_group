import type { Metadata } from "next";
import Image from "next/image";

import { PageShell } from "@/components/shared";
import { Container, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <PageShell><Section><Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"><div><SectionHeading level="h1" eyebrow="Dhiman Group" title="Focused businesses. Shared standards." description="Dhiman Group brings engineering, manufacturing, and agriculture together through independent divisions with a common commitment to dependable work and long-term relationships." /><div className="mt-8 grid gap-5 sm:grid-cols-3">{[["Mission","Build practical value through quality-led businesses."],["Vision","Create enduring industrial and agricultural partnerships."],["Values","Integrity, capability, accountability, and care."]].map(([title, copy]) => <div key={title}><h2 className="font-display font-bold text-brand-navy">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p></div>)}</div></div><div className="relative min-h-80 overflow-hidden rounded-card"><Image src="/images/about-group.jpg" alt="Dhiman Group operations" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div></Container></Section></PageShell>;
}
