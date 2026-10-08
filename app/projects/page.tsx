import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { profile, projects } from "@/lib/portfolio-projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected full-stack web development and data science case studies.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Selected projects"
        title="Products you can inspect, not just claims."
        description="Explore two complete applications backed by public GitHub repositories, plus clearly labeled data-product concepts that show how I approach analytical work."
      />
      <section className="shell template-note" aria-label="Public project notice">
        <strong>Live work</strong>
        <p>The first two projects are live—you can try each app, inspect its source, and read the complete case study.</p>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">View GitHub profile</a>
      </section>
      <section className="section shell project-grid project-grid-wide">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
      <ContactCta />
    </main>
  );
}
