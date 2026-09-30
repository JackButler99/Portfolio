import Link from "next/link";
import { projects } from "@/lib/portfolio-data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-label">{project.label}</span>
      </div>
      <div className="project-visual" aria-hidden="true">
        <div className="visual-header">
          <span />
          <span />
          <span />
        </div>
        <div className="visual-content">
          <div className="visual-sidebar" />
          <div className="visual-chart">
            {[42, 70, 54, 88, 66, 92].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="visual-panel">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <p className="project-category">{project.category}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <ul className="tag-list" aria-label={`${project.title} technology`}>
        {project.stack.slice(0, 4).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="text-link" href={`/projects/${project.slug}`}>
        View case study
      </Link>
    </article>
  );
}
