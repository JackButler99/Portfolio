"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { useState } from "react";
import type { PortfolioProject } from "@/lib/portfolio-data";

type HeroProjectShowcaseProps = {
  projects: PortfolioProject[];
};

export function HeroProjectShowcase({ projects }: HeroProjectShowcaseProps) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug);
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? projects[0];

  if (!activeProject) return null;

  return (
    <article className={`featured-project accent-${activeProject.accent}`}>
      <div className="featured-switcher" role="tablist" aria-label="Live portfolio projects">
        {projects.map((project) => (
          <button
            key={project.slug}
            id={`project-tab-${project.slug}`}
            type="button"
            role="tab"
            aria-selected={activeProject.slug === project.slug}
            aria-controls="featured-project-panel"
            onClick={() => setActiveSlug(project.slug)}
          >
            <span>{project.number}</span>
            {project.shortTitle ?? project.title}
          </button>
        ))}
      </div>

      <div
        id="featured-project-panel"
        className="featured-project-panel"
        role="tabpanel"
        aria-labelledby={`project-tab-${activeProject.slug}`}
      >
        {activeProject.image ? (
          <div className={`featured-project-visual visual-${activeProject.slug}`}>
            <Image
              key={activeProject.image}
              src={activeProject.image}
              alt={activeProject.imageAlt ?? `${activeProject.title} application preview`}
              fill
              priority
              sizes="(max-width: 1080px) 90vw, 48vw"
            />
            <div className="featured-visual-status">
              <span><i aria-hidden="true" /> Live product</span>
              <span>{activeProject.category}</span>
            </div>
            {activeProject.liveUrl ? (
              <a
                className="project-visual-link"
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${activeProject.title} live application`}
              />
            ) : null}
          </div>
        ) : null}

        <div className="featured-project-copy">
          <div className="featured-project-heading">
            <p>{activeProject.label}</p>
            <h2>{activeProject.title}</h2>
          </div>
          <p>{activeProject.summary}</p>
        </div>

        <div className="featured-metric-grid" aria-label={`${activeProject.title} project facts`}>
          {activeProject.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="featured-project-footer">
          <ul aria-label={`${activeProject.title} technology`}>
            {activeProject.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="featured-project-actions">
            {activeProject.liveUrl ? (
              <a className="featured-primary-link" href={activeProject.liveUrl} target="_blank" rel="noreferrer">
                Try live <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
            <Link href={`/projects/${activeProject.slug}`}>Case study</Link>
            {activeProject.repositoryUrl ? (
              <a className="featured-source-link" href={activeProject.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`${activeProject.title} source code on GitHub`}>
                <Code2 aria-hidden="true" />
                <span>Source</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
