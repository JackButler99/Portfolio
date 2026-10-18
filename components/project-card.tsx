import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio-data";
import { projectAccentClasses } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  const primaryMetric = project.metrics[0];

  return (
    <article
      className={cn(
        "group relative isolate flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#d8e0ea] bg-white shadow-[var(--shadow-sm)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--project-accent)] hover:shadow-[0_20px_46px_rgba(21,34,54,0.12)]",
        projectAccentClasses[project.accent],
      )}
    >
      <Link
        className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--project-accent)]"
        href={`/projects/${project.slug}`}
      >
        <span className="sr-only">View {project.title} case study</span>
      </Link>

      <div className="relative aspect-[16/10] overflow-hidden border-b border-[#d8e0ea] bg-[#f4f6f9]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} application preview`}
            fill
            sizes="(max-width: 760px) 92vw, (max-width: 1080px) 46vw, 31vw"
            className={cn(
              "transition-transform duration-500 ease-out group-hover:scale-[1.025]",
              project.slug === "learn-toefl"
                ? "object-cover object-bottom"
                : project.slug === "physics-studio"
                  ? "object-contain object-center"
                  : "object-cover object-top",
            )}
          />
        ) : (
          <div className="relative grid h-full place-items-center overflow-hidden bg-[linear-gradient(145deg,#f8fafc,#eef2f7)] p-6 text-center">
            <div className="absolute -right-14 -top-14 size-40 rounded-full border border-[var(--project-accent)]/25 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-12 size-48 rounded-full bg-[color-mix(in_srgb,var(--project-accent)_10%,transparent)]" aria-hidden="true" />
            <div className="relative">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--project-accent)]">Concept project</span>
              <strong className="mt-3 block text-2xl tracking-[-0.04em] text-foreground">{project.title}</strong>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-4 top-4 z-[1] flex items-center justify-between gap-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.06em]">
          <span className="rounded-md border border-white/70 bg-white/90 px-2 py-1 text-[var(--project-accent)] shadow-sm backdrop-blur-sm">{project.number}</span>
          <span className="truncate rounded-md border border-white/70 bg-white/90 px-2 py-1 text-[#596579] shadow-sm backdrop-blur-sm">{project.label}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1.5 font-mono text-xs font-extrabold uppercase tracking-[0.075em] text-[var(--project-accent)]">{project.category}</p>
        <h2 className="mb-2.5 text-2xl font-bold tracking-[-0.035em] text-foreground">{project.title}</h2>
        <p className="m-0 line-clamp-3 text-[0.92rem] leading-6 text-ink-soft">{project.summary}</p>

        {primaryMetric ? (
          <div className="mt-4 flex items-baseline gap-2 border-t border-[#e3e8ef] pt-4">
            <strong className="text-lg font-bold tracking-[-0.03em] text-[var(--project-accent)]">{primaryMetric.value}</strong>
            <span className="text-xs leading-5 text-[#68768a]">{primaryMetric.label}</span>
          </div>
        ) : null}

        <ul className="my-4 flex flex-wrap gap-1.5 p-0" aria-label={`${project.title} technology`}>
          {project.stack.slice(0, 3).map((item) => (
            <li className="list-none rounded-full border border-[#d7dfe9] bg-[#f7f9fc] px-2.5 py-1 font-mono text-[0.68rem] text-[#657286]" key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#e3e8ef] pt-4 text-sm">
          <span className="inline-flex items-center gap-1.5 font-bold text-foreground transition-colors group-hover:text-[var(--project-accent)]">
            View case study <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>

          <div className="pointer-events-none relative z-20 flex items-center gap-3">
            {project.repositoryUrl ? (
              <a
                className="pointer-events-auto inline-flex cursor-pointer items-center gap-1.5 font-semibold text-[#667386] transition-colors hover:text-[var(--project-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-accent)]"
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source code`}
              >
                <Code2 className="size-4" aria-hidden="true" />
                <span className="max-[420px]:sr-only">Source</span>
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                className="pointer-events-auto inline-flex cursor-pointer items-center gap-1.5 font-semibold text-[#667386] transition-colors hover:text-[var(--project-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--project-accent)]"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live application`}
              >
                <span className="max-[420px]:sr-only">Live</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
