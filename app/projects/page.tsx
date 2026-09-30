import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected full-stack web development and data science case studies.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Selected projects"
        title="Case studies built around real decisions."
        description="A project is more than its stack. These case-study templates show the problem, the reasoning, the system, and the result clients should expect to understand."
      />
      <section className="shell template-note" aria-label="Template notice">
        <strong>Portfolio template</strong>
        <p>Replace these demo case studies with your verified projects and outcomes before publishing.</p>
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
