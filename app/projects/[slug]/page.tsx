import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/contact-cta";
import { projects } from "@/lib/portfolio-data";
import { eyebrow, projectAccentClasses, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function CaseParagraphs({ content }: { content: string }) {
  return content
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph, index) => (
      <p className="max-w-[760px] text-base leading-8 text-ink-soft [&+p]:mt-5" key={`${index}-${paragraph.slice(0, 24)}`}>
        {paragraph}
      </p>
    ));
}

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
  const isMarketLab = project.slug === "market-lab";

  const mediaClassName = cn(
    "group relative block overflow-hidden rounded-[22px] border-[8px] border-white/80 bg-charcoal shadow-[0_30px_75px_rgba(25,34,47,0.18)] outline-none transition-transform lg:rotate-[1.2deg] focus-visible:ring-4 focus-visible:ring-[var(--project-accent)]/30 max-[760px]:rounded-2xl max-[760px]:border-[6px]",
    isMarketLab ? "aspect-[16/10] max-[760px]:aspect-[16/10]" : "aspect-[1.42] max-[760px]:aspect-[1.34]",
  );

  return (
    <main id="main-content">
      <section className={cn("relative overflow-hidden border-b border-border bg-gradient-to-br from-[#fbfaf7] to-[#f7f9fc] py-20 sm:py-24 lg:py-32", projectAccentClasses[project.accent])}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,color-mix(in_srgb,var(--project-accent)_14%,transparent),transparent_30rem)]" aria-hidden="true" />
        <div className={cn(shell, "relative grid grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)] items-center gap-[clamp(48px,7vw,94px)] max-[1080px]:grid-cols-1")}>
          <div className="max-[1080px]:max-w-[820px]">
            <div className="mb-7 flex flex-wrap gap-x-7 gap-y-3 font-mono text-xs font-extrabold uppercase tracking-[0.08em] text-[var(--project-accent)]">
              <span>{project.number}</span>
              <span>{project.category}</span>
              <span>{project.label}</span>
            </div>
            <h1 className="max-w-[760px] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{project.title}</h1>
            <p className="mt-7 max-w-[760px] text-base leading-7 text-ink-soft">{project.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2.5 max-[460px]:grid">
              {project.liveUrl ? (
                <Button asChild size="lg">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Try the demo <ArrowUpRight aria-hidden="true" />
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
            <ul className="mt-5 flex flex-wrap gap-2 p-0">
              {project.stack.map((item) => <li className="list-none rounded-md border border-[#d7dfe9] bg-[#f7f9fc] px-2 py-1 font-mono text-xs text-[#657286]" key={item}>{item}</li>)}
            </ul>
          </div>

          {project.image ? (
            project.liveUrl ? (
              <a
                className={cn(mediaClassName, "cursor-pointer")}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live application`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} application preview`}
                  fill
                  priority
                  sizes="(max-width: 1080px) 92vw, 46vw"
                  className={cn("object-cover object-top", project.slug === "learn-toefl" && "object-bottom", isMarketLab && "scale-[0.96] object-contain object-center transition-transform duration-500 ease-out group-hover:scale-100")}
                />
                <div className="pointer-events-none absolute inset-x-[18px] bottom-4 z-10 flex items-center justify-between gap-3 font-mono text-xs font-bold uppercase tracking-[0.06em] text-white">
                  <span className="inline-flex items-center gap-2"><i className="size-2 rounded-full bg-[#62d6a4] shadow-[0_0_0_4px_rgba(98,214,164,0.18)]" aria-hidden="true" /> Live demo</span>
                  <span className="max-[460px]:hidden">Open in browser</span>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[rgba(13,18,26,0.74)]" aria-hidden="true" />
              </a>
            ) : (
              <div className={mediaClassName}>
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? `${project.title} application preview`}
                  fill
                  priority
                  sizes="(max-width: 1080px) 92vw, 46vw"
                  className={cn("object-cover object-top", project.slug === "learn-toefl" && "object-bottom", isMarketLab && "scale-[0.96] object-contain object-center transition-transform duration-500 ease-out group-hover:scale-100")}
                />
                <div className="absolute inset-x-[18px] bottom-4 z-10 flex items-center font-mono text-xs font-bold uppercase tracking-[0.06em] text-white">
                  <span>Project preview</span>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[rgba(13,18,26,0.74)]" aria-hidden="true" />
              </div>
            )
          ) : null}
        </div>
      </section>

      {project.kind === "concept" ? (
        <section className={cn(shell, "mt-12 flex items-center gap-5 rounded-[10px] border border-[#cbd8f8] bg-[#edf2ff] px-5 py-4 max-[760px]:grid max-[760px]:gap-1.5")} aria-label="Concept project notice">
          <strong className="shrink-0 font-mono text-xs font-extrabold uppercase tracking-[0.07em] text-blue-dark">Concept case study</strong>
          <p className="m-0 text-sm text-[#596981]">This is a project proposal. The features and architecture below describe what I would build and test with a real dataset.</p>
        </section>
      ) : null}

      <section className={cn(shell, "grid grid-cols-[280px_minmax(0,1fr)] gap-[clamp(54px,8vw,112px)] pb-36 pt-24 max-[760px]:grid-cols-1 max-[760px]:gap-[70px] max-[760px]:pb-24 max-[760px]:pt-16")}>
        <aside className="self-start sticky top-28 max-[760px]:static">
          {project.caseStudy ? (
            <>
              <span className={eyebrow}>Project overview</span>
              <dl className="mb-8 mt-4 border-y border-border">
                {project.caseStudy.overview.map((item) => (
                  <div className="grid gap-1 border-b border-border py-3 last:border-b-0" key={item.label}>
                    <dt className="font-mono text-xs font-bold uppercase tracking-[0.07em] text-[#7a8798]">{item.label}</dt>
                    <dd className="m-0 text-sm leading-6 text-[#465366]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </>
          ) : null}
          <span className={eyebrow}>{project.kind === "concept" ? "Proposed work" : "My contribution"}</span>
          <ul className="mb-7 mt-4 grid gap-3 border-y border-border py-5">
            {project.services.map((service) => (
              <li className="flex items-start gap-2.5 text-sm text-ink-soft" key={service}><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />{service}</li>
            ))}
          </ul>
          <div className="grid gap-2">
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
                  Open demo <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            ) : null}
            <Button asChild variant="outline">
              <Link href="/projects">All projects</Link>
            </Button>
          </div>
        </aside>
        <div className="grid gap-20 lg:gap-28">
          <article>
            <span className="font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">01 / Context</span>
            <h2 className="mb-5 mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl">The problem</h2>
            <CaseParagraphs content={project.challenge} />
          </article>
          <article>
            <span className="font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">02 / Approach</span>
            <h2 className="mb-5 mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl">{project.kind === "concept" ? "Proposed approach" : "How I built it"}</h2>
            <CaseParagraphs content={project.solution} />
          </article>

          {project.caseStudy ? (
            <section className="grid gap-8" aria-labelledby="case-highlights-heading">
              <div>
                <span className="font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">03 / Product highlights</span>
                <h2 className="mt-3 max-w-[760px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl" id="case-highlights-heading">How people use it</h2>
              </div>
              <div className="grid gap-3">
                {project.caseStudy.highlights.map((highlight) => (
                  <article className="grid min-h-0 grid-cols-[50px_minmax(190px,0.72fr)_minmax(0,1.28fr)] items-start gap-6 rounded-[14px] border border-[#d9e0e8] bg-gradient-to-br from-white to-[#f7f8fa] px-7 py-6 shadow-[0_9px_28px_rgba(21,34,54,0.05)] max-[1080px]:grid-cols-[40px_minmax(0,1fr)] max-[1080px]:gap-x-4 max-[1080px]:gap-y-2 max-[460px]:grid-cols-[36px_minmax(0,1fr)] max-[460px]:px-5" key={highlight.number}>
                    <span className="pt-0.5 font-mono text-lg font-extrabold leading-none tracking-[0.06em] text-primary max-[1080px]:row-span-2">{highlight.number}</span>
                    <h3 className="text-xl font-bold leading-snug tracking-[-0.025em]">{highlight.title}</h3>
                    <p className="m-0 text-sm leading-6 text-ink-soft max-[1080px]:col-start-2">{highlight.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-[#d3dce7] bg-[#d3dce7] shadow-[var(--shadow-sm)] max-[760px]:grid-cols-1">
            {project.metrics.map((metric) => (
              <div className="grid min-h-[150px] content-end gap-2 bg-white p-6 max-[760px]:min-h-[118px]" key={metric.label}>
                <strong className="text-3xl font-bold tracking-[-0.04em] text-primary">{metric.value}</strong>
                <span className="text-sm text-muted-foreground">{metric.label}</span>
              </div>
            ))}
          </div>
          <article>
            <span className="font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">{project.caseStudy ? "04" : "03"} / Evidence</span>
            <h2 className="mb-5 mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl">{project.kind === "concept" ? "What needs validation" : "What the app does now"}</h2>
            <CaseParagraphs content={project.outcome} />
          </article>

          {project.caseStudy ? (
            <>
              <section className="grid gap-8" aria-labelledby="case-decisions-heading">
                <div>
                  <span className="font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">05 / Engineering decisions</span>
                  <h2 className="mt-3 max-w-[760px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl" id="case-decisions-heading">Technical choices</h2>
                </div>
                <div className="grid border-t border-border">
                  {project.caseStudy.decisions.map((decision, index) => (
                    <article className="grid grid-cols-[50px_minmax(0,1fr)] items-start gap-6 border-b border-border py-7 max-[460px]:grid-cols-[36px_minmax(0,1fr)] max-[460px]:gap-3" key={decision.title}>
                      <span className="pt-0.5 font-mono text-lg font-extrabold leading-none tracking-[0.06em] text-primary">{String(index + 1).padStart(2, "0")}</span>
                      <div className="grid grid-cols-[minmax(190px,0.72fr)_minmax(0,1.28fr)] items-start gap-6 max-[1080px]:grid-cols-1 max-[1080px]:gap-2">
                        <h3 className="text-xl font-bold leading-snug tracking-[-0.025em]">{decision.title}</h3>
                        <p className="m-0 max-w-[720px] text-sm leading-6 text-ink-soft">{decision.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="grid gap-4" aria-label="Validation and next steps">
                <article className="grid grid-cols-[minmax(130px,0.48fr)_minmax(190px,0.72fr)_minmax(0,1.3fr)] items-start gap-6 rounded-2xl border border-[#d7dfe8] bg-white p-8 shadow-[var(--shadow-sm)] max-[1080px]:grid-cols-[minmax(170px,0.75fr)_minmax(0,1.25fr)] max-[760px]:grid-cols-1 max-[760px]:gap-3">
                  <span className="pt-1 font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">06 / Validation</span>
                  <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] max-[1080px]:col-start-1 max-[1080px]:row-start-2 max-[760px]:row-start-2">Checks I ran</h2>
                  <ul className="grid gap-4 p-0 max-[1080px]:col-start-2 max-[1080px]:row-span-2 max-[1080px]:row-start-1 max-[760px]:col-start-1 max-[760px]:row-span-1 max-[760px]:row-start-3">
                    {project.caseStudy.validation.map((item) => (
                      <li className="flex items-start gap-3 text-sm leading-6 text-ink-soft" key={item}><Check className="mt-1 size-4 shrink-0 text-[#218567]" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="grid grid-cols-[minmax(130px,0.48fr)_minmax(190px,0.72fr)_minmax(0,1.3fr)] items-start gap-6 rounded-2xl border border-[#d7dfe8] bg-[#f6f2eb] p-8 shadow-[var(--shadow-sm)] max-[1080px]:grid-cols-[minmax(170px,0.75fr)_minmax(0,1.25fr)] max-[760px]:grid-cols-1 max-[760px]:gap-3">
                  <span className="pt-1 font-mono text-sm font-extrabold uppercase tracking-[0.08em] text-primary">07 / Next iteration</span>
                  <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] max-[1080px]:col-start-1 max-[1080px]:row-start-2 max-[760px]:row-start-2">Next steps</h2>
                  <ol className="grid gap-4 p-0 max-[1080px]:col-start-2 max-[1080px]:row-span-2 max-[1080px]:row-start-1 max-[760px]:col-start-1 max-[760px]:row-span-1 max-[760px]:row-start-3">
                    {project.caseStudy.nextSteps.map((item, index) => (
                      <li className="flex items-start gap-3 text-sm leading-6 text-ink-soft" key={item}><span className="grid size-7 shrink-0 place-items-center rounded-full bg-white font-mono text-xs font-extrabold text-blue-dark">{String(index + 1).padStart(2, "0")}</span>{item}</li>
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
