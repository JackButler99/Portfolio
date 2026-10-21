import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { processSteps, services } from "@/lib/portfolio-data";
import { eyebrow, sectionSpacing, sectionTitle, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description: "Web application development, data analysis, forecasting, and interactive dashboards by Ridho Kurniawan.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Services"
        title="Web development and data tools."
        description="I can help with a complete application or a specific part of an existing project. We’ll agree on the scope, deliverables, and first milestone before work starts."
      />
      <section className={cn(shell, sectionSpacing, "pt-10")}>
        {services.map((service) => (
          <article className="grid grid-cols-[0.85fr_1fr] gap-[clamp(50px,10vw,140px)] border-t border-border py-16 max-[760px]:grid-cols-1 max-[760px]:gap-8" key={service.number}>
            <div>
              <span className="font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">{service.number}</span>
              <h2 className="mt-3 max-w-[500px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl">{service.title}</h2>
            </div>
            <div>
              <p className="mb-7 text-base leading-7 text-ink-soft">{service.description}</p>
              <ul className="mb-7 grid grid-cols-2 gap-x-6 gap-y-3.5 border-y border-border py-6 max-[760px]:grid-cols-1">
                {service.deliverables.map((item) => (
                  <li className="flex items-start gap-2.5 text-sm text-ink-soft" key={item}><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className="font-mono text-xs leading-6 text-[#687588]"><strong className="text-primary">Best for:</strong> {service.bestFor}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={cn(shell, sectionSpacing, "pt-8")}>
        <div className="mb-12 grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.65fr)] items-end gap-[clamp(48px,7vw,88px)] max-[760px]:grid-cols-1 max-[760px]:gap-6">
          <div>
            <p className={eyebrow}>How we work</p>
            <h2 className={cn(sectionTitle, "mt-4")}>How a project gets started.</h2>
          </div>
          <p className="m-0 border-l-2 border-[#c9d6f7] pl-6 text-base leading-7 text-ink-soft max-[760px]:border-l-0 max-[760px]:border-t-2 max-[760px]:pt-4 max-[760px]:pl-0">Send me a brief through Upwork with your goals, current stack, and timeline. I’ll help identify what needs to be built and how to break up the work.</p>
        </div>
        <ol className="m-0 grid grid-cols-4 border-y border-[#d5dde7] p-0 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {processSteps.map((step) => (
            <li className="min-h-[255px] list-none border-r border-[#d5dde7] p-7 transition-colors hover:bg-white even:max-[1080px]:border-r-0 max-[1080px]:border-b max-[760px]:min-h-0 max-[760px]:border-r-0 last:border-r-0 last:max-[1080px]:border-b-0" key={step.number}>
              <span className="font-mono text-base font-extrabold leading-none text-primary">{step.number}</span>
              <h3 className="mb-3 mt-12 text-xl font-bold tracking-[-0.025em] max-[760px]:mt-8">{step.title}</h3>
              <p className="text-sm leading-6 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <ContactCta />
    </main>
  );
}
