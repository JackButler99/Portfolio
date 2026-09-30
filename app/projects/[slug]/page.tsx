import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/contact-cta";
import { projects } from "@/lib/portfolio-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: project.title, description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main id="main-content">
      <section className={`case-hero accent-${project.accent}`}>
        <div className="shell">
          <div className="case-meta">
            <span>{project.number}</span>
            <span>{project.category}</span>
            <span>{project.label}</span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <ul className="tag-list">
            {project.stack.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="shell template-note case-note" aria-label="Template notice">
        <strong>Demo case study</strong>
        <p>This structure is ready for your screenshots, process details, and verified results.</p>
      </section>

      <section className="case-content shell">
        <aside>
          <span className="eyebrow">Contribution</span>
          <ul>
            {project.services.map((service) => (
              <li key={service}><Check aria-hidden="true" />{service}</li>
            ))}
          </ul>
          <Button asChild variant="outline">
            <Link href="/projects">All projects</Link>
          </Button>
        </aside>
        <div className="case-story">
          <article>
            <span>01 / Context</span>
            <h2>The challenge</h2>
            <p>{project.challenge}</p>
          </article>
          <article>
            <span>02 / Approach</span>
            <h2>The solution</h2>
            <p>{project.solution}</p>
          </article>
          <div className="metric-grid">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <article>
            <span>03 / Evidence</span>
            <h2>The outcome</h2>
            <p>{project.outcome}</p>
          </article>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
