import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/contact-cta";
import { HeroProjectShowcase } from "@/components/hero-project-showcase";
import { ProjectCard } from "@/components/project-card";
import { processSteps, profile, projects, services } from "@/lib/portfolio-data";
import { eyebrow, sectionSpacing, sectionTitle, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export default function Home() {
  const liveProjects = projects.filter((project) => project.kind === "repository").slice(0, 2);

  return (
    <main id="main-content">
      <section className={cn(shell, "relative grid min-h-[calc(100vh-78px)] grid-cols-[minmax(0,0.96fr)_minmax(430px,1.04fr)] items-center gap-[clamp(52px,7vw,100px)] py-24 max-[1080px]:min-h-0 max-[1080px]:grid-cols-1 max-[1080px]:py-24 max-[760px]:py-16")}>
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_86%_18%,rgba(36,87,214,0.1),transparent_25rem)]" aria-hidden="true" />
        <div className="motion-safe:animate-[enter_600ms_ease_both] max-[1080px]:max-w-[840px]">
          <p className="mb-8 inline-flex items-center gap-2 rounded-md border border-[#cfd8e5] bg-white/80 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.04em] text-[#536174]"><span className="size-[7px] rounded-full bg-[#238b6c] shadow-[0_0_0_4px_rgba(35,139,108,0.1)]" aria-hidden="true" />{profile.availability}</p>
          <p className={eyebrow}>{profile.role}</p>
          <h1 className="mt-4 text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">I build <em className="not-italic text-primary">reliable</em> web products powered by data.</h1>
          <p className="mt-7 max-w-[650px] text-base leading-7 text-ink-soft sm:text-lg">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3 max-[460px]:grid">
            <Button asChild size="lg">
              <Link href="/projects">Explore my work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk about your project</Link>
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 border-y border-[#d7dfe9] max-[760px]:grid-cols-1">
            <div className="grid gap-2 border-r border-[#d7dfe9] py-4 pr-4 max-[760px]:grid-cols-[52px_1fr] max-[760px]:items-center max-[760px]:border-b max-[760px]:border-r-0 max-[760px]:py-3 max-[760px]:pr-0">
              <dt className="font-mono text-2xl font-extrabold leading-none tracking-[-0.03em] text-primary">01</dt>
              <dd className="m-0 text-sm leading-5 text-ink-soft">Clear product thinking</dd>
            </div>
            <div className="grid gap-2 border-r border-[#d7dfe9] px-4 py-4 max-[760px]:grid-cols-[52px_1fr] max-[760px]:items-center max-[760px]:border-b max-[760px]:border-r-0 max-[760px]:px-0 max-[760px]:py-3">
              <dt className="font-mono text-2xl font-extrabold leading-none tracking-[-0.03em] text-primary">02</dt>
              <dd className="m-0 text-sm leading-5 text-ink-soft">Full-stack delivery</dd>
            </div>
            <div className="grid gap-2 py-4 pl-4 max-[760px]:grid-cols-[52px_1fr] max-[760px]:items-center max-[760px]:py-3 max-[760px]:pl-0">
              <dt className="font-mono text-2xl font-extrabold leading-none tracking-[-0.03em] text-primary">03</dt>
              <dd className="m-0 text-sm leading-5 text-ink-soft">Data-backed outcomes</dd>
            </div>
          </dl>
        </div>

        <HeroProjectShowcase projects={liveProjects} />
      </section>

      <section className="overflow-hidden border-y border-border bg-white max-[760px]:overflow-x-auto" aria-label="Core capabilities">
        <div className="flex min-w-max items-center justify-center gap-6 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.075em] text-ink-soft max-[760px]:justify-start">
          <span>Next.js</span><i className="size-1 rounded-full bg-primary" />
          <span>TypeScript</span><i className="size-1 rounded-full bg-primary" />
          <span>Python</span><i className="size-1 rounded-full bg-primary" />
          <span>PostgreSQL</span><i className="size-1 rounded-full bg-primary" />
          <span>Machine Learning</span><i className="size-1 rounded-full bg-primary" />
          <span>API Design</span><i className="size-1 rounded-full bg-primary" />
          <span>Data Products</span>
        </div>
      </section>

      <section className={cn(shell, sectionSpacing)}>
        <div className="mb-12 grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.65fr)] items-end gap-[clamp(48px,7vw,88px)] max-[760px]:mb-10 max-[760px]:grid-cols-1 max-[760px]:gap-6">
          <div>
            <p className={eyebrow}>Selected work</p>
            <h2 className={cn(sectionTitle, "mt-4")}>Useful software, seen from both sides.</h2>
          </div>
          <p className="m-0 border-l-2 border-[#c9d6f7] pl-6 text-base leading-7 text-ink-soft max-[760px]:border-l-0 max-[760px]:border-t-2 max-[760px]:pt-4 max-[760px]:pl-0">Repository-backed applications alongside clearly labeled data-product concepts, with the decisions and engineering behind each one.</p>
        </div>
        <div className="grid grid-cols-3 gap-5 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {projects.slice(1, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Button asChild variant="outline" className="mt-7">
          <Link href="/projects">View all projects</Link>
        </Button>
      </section>

      <section className={cn(sectionSpacing, "border-y border-[#dbe2eb] bg-[#f0f3f7]")}>
        <div className={shell}>
          <div className="mb-12 grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.65fr)] items-end gap-[clamp(48px,7vw,88px)] max-[760px]:mb-10 max-[760px]:grid-cols-1 max-[760px]:gap-6">
            <div>
              <p className={eyebrow}>Ways I can help</p>
              <h2 className={cn(sectionTitle, "mt-4")}>One partner across product and data.</h2>
            </div>
            <p className="m-0 border-l-2 border-[#c9d6f7] pl-6 text-base leading-7 text-ink-soft max-[760px]:border-l-0 max-[760px]:border-t-2 max-[760px]:pt-4 max-[760px]:pl-0">Bring me a defined build or an ambiguous operational problem. I’ll help turn it into a sensible technical plan and a working result.</p>
          </div>
          <div className="border-t border-[#cfd8e3]">
            {services.map((service) => (
              <article className="grid grid-cols-[60px_0.85fr_1.1fr_0.8fr] items-start gap-8 border-b border-[#cfd8e3] py-8 max-[1080px]:grid-cols-[50px_0.9fr_1.1fr] max-[760px]:grid-cols-[42px_1fr] max-[760px]:gap-x-5 max-[760px]:gap-y-3" key={service.number}>
                <span className="font-mono text-base font-extrabold leading-none text-primary">{service.number}</span>
                <h3 className="text-lg font-bold tracking-[-0.025em]">{service.title}</h3>
                <p className="m-0 text-sm leading-6 text-ink-soft max-[760px]:col-start-2">{service.description}</p>
                <p className="m-0 font-mono text-xs leading-6 text-[#687588] max-[1080px]:col-span-2 max-[1080px]:col-start-2 max-[760px]:col-span-1 max-[760px]:col-start-2">{service.bestFor}</p>
              </article>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-7">
            <Link href="/services">Explore services</Link>
          </Button>
        </div>
      </section>

      <section className={cn(shell, sectionSpacing)}>
        <div className="mb-12 grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.65fr)] items-end gap-[clamp(48px,7vw,88px)] max-[760px]:mb-10 max-[760px]:grid-cols-1 max-[760px]:gap-6">
          <div>
            <p className={eyebrow}>A low-friction process</p>
            <h2 className={cn(sectionTitle, "mt-4")}>Clear steps. Visible progress.</h2>
          </div>
          <p className="m-0 border-l-2 border-[#c9d6f7] pl-6 text-base leading-7 text-ink-soft max-[760px]:border-l-0 max-[760px]:border-t-2 max-[760px]:pt-4 max-[760px]:pl-0">You should always know what is being built, what changed, and what decision comes next.</p>
        </div>
        <ol className="m-0 grid grid-cols-4 border-y border-[#d5dde7] p-0 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {processSteps.map((step) => (
            <li className="min-h-[255px] list-none border-r border-[#d5dde7] p-7 transition-colors hover:bg-white even:max-[1080px]:border-r-0 max-[1080px]:border-b max-[760px]:min-h-0 max-[760px]:border-r-0 last:border-r-0 last:max-[1080px]:border-b-0" key={step.number}>
              <span className="font-mono text-base font-extrabold leading-none text-primary">{step.number}</span>
              <h3 className="mb-3 mt-12 text-xl font-bold tracking-[-0.025em] max-[760px]:mt-8">{step.title}</h3>
              <p className="m-0 text-sm leading-6 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ContactCta />
    </main>
  );
}
