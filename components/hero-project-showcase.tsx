"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useState } from "react";
import type { PortfolioProject } from "@/lib/portfolio-data";
import { projectAccentClasses } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

type HeroProjectShowcaseProps = {
  projects: PortfolioProject[];
};

export function HeroProjectShowcase({ projects }: HeroProjectShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? projects[0];

  if (!activeProject) return null;
  const isPhysicsStudio = activeProject.slug === "physics-studio";
  const isMarketLab = activeProject.slug === "market-lab";
  const usesContainedPreview = isPhysicsStudio || isMarketLab;

  const visualClassName = cn(
    "relative block cursor-pointer overflow-hidden rounded-2xl border border-[#d8d4ce] bg-[#f5f7fb] outline-none focus-visible:ring-4 focus-visible:ring-[var(--project-accent)]/30",
    isPhysicsStudio ? "aspect-[1919/943]" : isMarketLab ? "aspect-[16/10]" : "aspect-[1.58]",
  );

  return (
    <article className={cn("group relative overflow-hidden rounded-3xl border border-[#d8d3ca] bg-[#fffdf9]/95 p-3 shadow-[0_30px_75px_rgba(31,39,53,0.13)] motion-safe:animate-[enter_600ms_110ms_ease_both] max-[760px]:rounded-[18px] max-[760px]:p-2.5", projectAccentClasses[activeProject.accent])}>
      <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[color-mix(in_srgb,var(--project-accent)_10%,transparent)] blur" aria-hidden="true" />
      <div className="relative z-10 mb-2.5 grid grid-cols-4 gap-1 rounded-xl border border-[#e0dbd2] bg-[#f1ede7] p-1 max-[640px]:grid-cols-2" role="tablist" aria-label="Live portfolio projects">
        {projects.map((project) => (
          <button
            key={project.slug}
            id={`project-tab-${project.slug}`}
            type="button"
            role="tab"
            aria-selected={activeProject.slug === project.slug}
            aria-controls="featured-project-panel"
            onClick={() => setActiveSlug(project.slug)}
            className={cn(
              "flex min-w-0 items-center gap-2 rounded-lg border-0 bg-transparent px-3 py-2.5 text-left text-xs font-bold text-[#6c6b69] transition-[background,color,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-accent)]/30 max-[460px]:gap-1.5 max-[460px]:px-2 cursor-pointer",
              activeProject.slug === project.slug && "bg-white text-foreground shadow-[0_3px_12px_rgba(31,39,53,0.08)]",
            )}
          >
            <span className={cn("font-mono text-base font-extrabold leading-none text-[#96928b]", activeProject.slug === project.slug && "text-[var(--project-accent)]")}>{project.number}</span>
            {project.shortTitle ?? project.title}
          </button>
        ))}
      </div>

      <div
        id="featured-project-panel"
        className="relative z-10 grid"
        role="tabpanel"
        aria-labelledby={`project-tab-${activeProject.slug}`}
      >
        {activeProject.image ? (
          activeProject.liveUrl ? (
            <a
              className={visualClassName}
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${activeProject.title} live application`}
            >
              <Image
                key={activeProject.image}
                src={activeProject.image}
                alt={activeProject.imageAlt ?? `${activeProject.title} application preview`}
                fill
                priority
                sizes="(max-width: 1080px) 90vw, 48vw"
                className={cn(
                  isMarketLab
                    ? "scale-[0.96] object-contain object-center transition-transform duration-500 ease-out group-hover:scale-100"
                    : isPhysicsStudio
                      ? "object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    : "object-cover object-top transition-transform duration-300 group-hover:scale-[1.012]",
                  activeProject.slug === "learn-toefl" && "object-bottom",
                )}
              />
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-3.5 bottom-3 z-10 flex items-center justify-between gap-3.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.05em] text-white",
                  usesContainedPreview &&
                    "rounded-lg bg-slate-950/70 px-3 py-2 backdrop-blur-sm",
                )}
              >
                <span className="inline-flex items-center gap-2">
                  <i
                    className="size-[7px] rounded-full bg-[#62d6a4] shadow-[0_0_0_4px_rgba(98,214,164,0.18)]"
                    aria-hidden="true"
                  />
                  Live demo
                </span>
                <span>{activeProject.category}</span>
              </div>
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent",
                  usesContainedPreview ? "h-2/5 to-[rgba(13,18,26,0.62)]" : "h-3/5 to-[rgba(13,18,26,0.72)]",
                )}
                aria-hidden="true"
              />
            </a>
          ) : (
            <div className={visualClassName}>
              <Image
                key={activeProject.image}
                src={activeProject.image}
                alt={activeProject.imageAlt ?? `${activeProject.title} application preview`}
                fill
                priority
                sizes="(max-width: 1080px) 90vw, 48vw"
                className={cn(
                  "object-cover object-top",
                  activeProject.slug === "learn-toefl" && "object-bottom",
                  usesContainedPreview && "object-contain object-center",
                )}
              />
              <div className="absolute inset-x-3.5 bottom-3 z-10 flex items-center justify-between gap-3.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.05em] text-white">
                <span>{activeProject.category}</span>
              </div>
              {!usesContainedPreview ? (
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-b from-transparent to-[rgba(13,18,26,0.72)]"
                aria-hidden="true"
              />
            ) : null}
            </div>
          )
        ) : null}

        <div className="grid grid-cols-[minmax(150px,0.72fr)_minmax(0,1.28fr)] gap-6 px-2 pb-[18px] pt-[22px] max-[760px]:grid-cols-1 max-[760px]:gap-2.5 max-[460px]:px-1">
          <div>
            <p className="mb-1 font-mono text-[0.68rem] font-extrabold uppercase tracking-[0.07em] text-[var(--project-accent)]">{activeProject.label}</p>
            <h2 className="text-2xl font-bold tracking-[-0.035em]">{activeProject.title}</h2>
          </div>
          <p className="m-0 text-sm leading-6 text-ink-soft">{activeProject.summary}</p>
        </div>

        <div className="grid grid-cols-3 overflow-hidden border-y border-[#e1ddd6]" aria-label={`${activeProject.title} project facts`}>
          {activeProject.metrics.map((metric, index) => (
            <div className={cn("grid min-w-0 gap-1 px-2.5 py-3", index < activeProject.metrics.length - 1 && "border-r border-[#e1ddd6]", index === 0 && "pl-2")} key={metric.label}>
              <strong className="text-xl font-bold tracking-[-0.035em] text-[var(--project-accent)]">{metric.value}</strong>
              <span className="truncate text-xs leading-5 text-[#73736f] max-[460px]:whitespace-normal">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-5 px-2 pb-1 pt-3.5 max-[760px]:flex-col max-[760px]:items-start max-[460px]:px-1">
          <ul className="m-0 flex flex-wrap gap-1.5 p-0" aria-label={`${activeProject.title} technology`}>
            {activeProject.stack.slice(0, 3).map((item) => <li className="list-none rounded-full border border-[#dedad3] bg-[#f7f4ef] px-2 py-1 font-mono text-[0.68rem] text-[#696966]" key={item}>{item}</li>)}
          </ul>
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs font-bold max-[760px]:justify-start">
            {activeProject.liveUrl ? (
              <a className="inline-flex items-center gap-1.5 rounded-lg bg-charcoal px-3 py-2 text-white! transition-colors hover:bg-[var(--project-accent)]" href={activeProject.liveUrl} target="_blank" rel="noreferrer">
                Try the demo <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
            <Link
              className="group/case inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-foreground transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--project-accent)_10%,white)] hover:text-[var(--project-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-accent)]/30"
              href={`/projects/${activeProject.slug}`}
            >
              Case study
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover/case:translate-x-0.5 group-hover/case:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            {activeProject.repositoryUrl ? (
              <a
                className="group/source inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[#626866] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#f1eee8] hover:text-[var(--project-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-accent)]/30"
                href={activeProject.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${activeProject.title} source code on GitHub`}
              >
                <Code2
                  className="size-3.5 transition-transform duration-200 group-hover/source:scale-110"
                  aria-hidden="true"
                />
                <span>Source</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
