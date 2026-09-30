import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { processSteps, services } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack development, data science, and data-powered product engineering services.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Services"
        title="Engineering that connects the interface to the outcome."
        description="Choose a focused engagement or combine disciplines for an end-to-end product. Scope, milestones, and handoff stay clear from the beginning."
      />
      <section className="section shell service-detail-list">
        {services.map((service) => (
          <article key={service.number}>
            <div className="service-detail-title">
              <span>{service.number}</span>
              <h2>{service.title}</h2>
            </div>
            <div className="service-detail-copy">
              <p>{service.description}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}><Check aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className="best-for"><strong>Best for:</strong> {service.bestFor}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section shell engagement-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>A practical path from ambiguity to release.</h2>
          </div>
          <p>Each engagement is shaped around the smallest meaningful outcome, then delivered in reviewable increments.</p>
        </div>
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <ContactCta />
    </main>
  );
}
