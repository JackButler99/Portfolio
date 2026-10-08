import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
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
        <div className="case-hero-grid shell">
          <div className="case-hero-copy">
            <div className="case-meta">
              <span>{project.number}</span>
              <span>{project.category}</span>
              <span>{project.label}</span>
            </div>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-hero-actions">
              {project.liveUrl ? (
                <Button asChild size="lg">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Try the live app <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
              {project.repositoryUrl ? (
                <Button asChild size="lg" variant="outline">
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    <Code2 aria-hidden="true" /> Source code
                  </a>
                </Button>
              ) : null}
            </div>
            <ul className="tag-list">
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          {project.image ? (
            <div className={`case-hero-media visual-${project.slug}`}>
              <Image
                src={project.image}
                alt={project.imageAlt ?? `${project.title} application preview`}
                fill
                priority
                sizes="(max-width: 1080px) 92vw, 46vw"
              />
              <div className="case-media-status">
                <span><i aria-hidden="true" /> Live product</span>
                <span>Open in browser</span>
              </div>
              {project.liveUrl ? (
                <a
                  className="project-visual-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live application`}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      {project.kind === "concept" ? (
        <section className="shell template-note case-note" aria-label="Concept project notice">
          <strong>Concept case study</strong>
          <p>This project demonstrates the proposed product and technical approach; it is not presented as a shipped client engagement.</p>
        </section>
      ) : null}

      <section className="case-content shell">
        <aside>
          {project.caseStudy ? (
            <>
              <span className="eyebrow">Project overview</span>
              <dl className="case-overview">
                {project.caseStudy.overview.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          ) : null}
          <span className="eyebrow">Contribution</span>
          <ul className="case-contribution-list">
            {project.services.map((service) => (
              <li key={service}><Check aria-hidden="true" />{service}</li>
            ))}
          </ul>
          <div className="case-aside-actions">
            {project.repositoryUrl ? (
              <Button asChild>
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  <Code2 aria-hidden="true" /> View source code
                </a>
              </Button>
            ) : null}
            {project.liveUrl ? (
              <Button asChild variant="outline">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Open live app <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            ) : null}
            <Button asChild variant="outline">
              <Link href="/projects">All projects</Link>
            </Button>
          </div>
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

          {project.caseStudy ? (
            <section className="case-section" aria-labelledby="case-highlights-heading">
              <div className="case-section-heading">
                <span>03 / Product highlights</span>
                <h2 id="case-highlights-heading">What makes it useful</h2>
              </div>
              <div className="case-highlight-grid">
                {project.caseStudy.highlights.map((highlight) => (
                  <article key={highlight.number}>
                    <span>{highlight.number}</span>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <div className="metric-grid">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <article>
            <span>{project.caseStudy ? "04" : "03"} / Evidence</span>
            <h2>The outcome</h2>
            <p>{project.outcome}</p>
          </article>

          {project.caseStudy ? (
            <>
              <section className="case-section" aria-labelledby="case-decisions-heading">
                <div className="case-section-heading">
                  <span>05 / Engineering decisions</span>
                  <h2 id="case-decisions-heading">Why it was built this way</h2>
                </div>
                <div className="case-decision-list">
                  {project.caseStudy.decisions.map((decision, index) => (
                    <article key={decision.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{decision.title}</h3>
                        <p>{decision.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="case-validation-grid" aria-label="Validation and next steps">
                <article>
                  <span>06 / Validation</span>
                  <h2>What I verified</h2>
                  <ul>
                    {project.caseStudy.validation.map((item) => (
                      <li key={item}><Check aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </article>
                <article>
                  <span>07 / Next iteration</span>
                  <h2>What I would improve next</h2>
                  <ol>
                    {project.caseStudy.nextSteps.map((item, index) => (
                      <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
                    ))}
                  </ol>
                </article>
              </section>
            </>
          ) : null}
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
