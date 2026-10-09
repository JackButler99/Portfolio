import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { profile, projects } from "@/lib/portfolio-data";
import { sectionSpacing, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

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
      <section className={cn(shell, "flex items-center gap-5 rounded-[10px] border border-[#cbd8f8] bg-[#edf2ff] px-5 py-4 max-[760px]:grid max-[760px]:gap-1.5")} aria-label="Public project notice">
        <strong className="shrink-0 font-mono text-xs font-extrabold uppercase tracking-[0.07em] text-blue-dark">Live work</strong>
        <p className="m-0 text-sm text-[#596981]">The first two projects are live—you can try each app, inspect its source, and read the complete case study.</p>
        <a className="ml-auto shrink-0 border-b border-[#9ab1e9] pb-0.5 text-sm font-bold text-blue-dark hover:text-primary max-[760px]:ml-0 max-[760px]:justify-self-start" href={profile.githubUrl} target="_blank" rel="noreferrer">View GitHub profile</a>
      </section>
      <section className={cn(shell, sectionSpacing, "grid grid-cols-2 gap-5 pt-14 max-[760px]:grid-cols-1")}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
      <ContactCta />
    </main>
  );
}
