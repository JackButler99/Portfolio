import Link from "next/link";
import type { PortfolioProject } from "@/lib/portfolio-data";
import { projectAccentClasses } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className={cn("group flex min-w-0 flex-col rounded-xl border border-[#d8e0ea] bg-white p-[18px] shadow-[var(--shadow-sm)] transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:border-[var(--project-accent)] hover:shadow-[0_18px_40px_rgba(21,34,54,0.1)]", projectAccentClasses[project.accent])}>
      <div className="mb-3.5 flex items-center justify-between font-mono text-xs uppercase tracking-[0.06em]">
        <span className="text-base font-extrabold leading-none text-[var(--project-accent)]">{project.number}</span>
        <span className="text-[#768396]">{project.label}</span>
      </div>
      <div className="mb-6 grid grid-cols-3 overflow-hidden rounded-lg border border-[#d2dae4] bg-[#f4f6f9] max-[460px]:grid-cols-1" aria-label={`${project.title} project facts`}>
        {project.metrics.map((metric, index) => (
          <div className={cn("grid min-h-[138px] min-w-0 content-between gap-6 p-4 max-[460px]:min-h-[92px]", index < project.metrics.length - 1 && "border-r border-[#d2dae4] max-[460px]:border-b max-[460px]:border-r-0")} key={metric.label}>
            <strong className="break-words text-2xl font-bold tracking-[-0.035em] text-[var(--project-accent)]">{metric.value}</strong>
            <span className="text-xs leading-5 text-[#68768a]">{metric.label}</span>
          </div>
        ))}
      </div>
      <p className="mb-1 font-mono text-xs font-extrabold uppercase tracking-[0.075em] text-[var(--project-accent)]">{project.category}</p>
      <h2 className="mb-2.5 text-2xl font-bold tracking-[-0.035em]">{project.title}</h2>
      <p className="m-0 flex-1 text-[0.95rem] leading-7 text-ink-soft">{project.summary}</p>
      <ul className="my-5 flex flex-wrap gap-2 p-0" aria-label={`${project.title} technology`}>
        {project.stack.slice(0, 4).map((item) => (
          <li className="list-none rounded-md border border-[#d7dfe9] bg-[#f7f9fc] px-2 py-1 font-mono text-xs text-[#657286]" key={item}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-x-[18px] gap-y-3 text-sm">
        <Link className="border-b border-[var(--project-accent)] pb-0.5 font-bold hover:text-[var(--project-accent)]" href={`/projects/${project.slug}`}>
          View case study
        </Link>
        {project.repositoryUrl ? (
          <a className="border-b border-[#c6cfdb] pb-0.5 font-semibold text-[#667386] hover:text-[var(--project-accent)]" href={project.repositoryUrl} target="_blank" rel="noreferrer">
            Source code
          </a>
        ) : null}
        {project.liveUrl ? (
          <a className="border-b border-[#c6cfdb] pb-0.5 font-semibold text-[#667386] hover:text-[var(--project-accent)]" href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
