import Link from "next/link";
import { projects } from "@/lib/portfolio-projects";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-label">{project.label}</span>
      </div>
      <div className="project-proof" aria-label={`${project.title} project facts`}>
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
      <p className="project-category">{project.category}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.title} technology`}>
        {project.stack.slice(0, 4).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-card-links">
        <Link className="text-link" href={`/projects/${project.slug}`}>
          View case study
        </Link>
        {project.repositoryUrl ? (
          <a className="text-link text-link-muted" href={project.repositoryUrl} target="_blank" rel="noreferrer">
            Source code
          </a>
        ) : null}
        {project.liveUrl ? (
          <a className="text-link text-link-muted" href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
