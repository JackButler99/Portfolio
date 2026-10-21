import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { profile, skillGroups } from "@/lib/portfolio-data";
import { eyebrow, sectionSpacing, sectionTitle, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "About Ridho Kurniawan, a full-stack developer with a background in Engineering Physics and research.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="I’m Ridho, a full-stack developer."
        description={profile.shortBio}
      />

      <section className={cn(shell, "grid grid-cols-[minmax(270px,0.7fr)_minmax(0,1fr)] items-start gap-[clamp(52px,9vw,130px)] pb-32 pt-[60px] max-[760px]:grid-cols-1")}>
        <div className="grid aspect-square max-w-[390px] place-items-center rounded-[18px] border border-[#cdd9ed] bg-gradient-to-br from-primary to-blue-dark text-6xl font-extrabold tracking-[-0.08em] text-white shadow-[var(--shadow-md)] sm:text-7xl lg:text-8xl max-[760px]:max-w-[330px]" aria-hidden="true">{profile.initials}</div>
        <div>
          <p className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-4xl">My background is in Engineering Physics.</p>
          <p className="mb-5 text-base leading-7 text-ink-soft">I studied Engineering Physics at Bandung Institute of Technology and have worked as a research assistant at ITB and Pukyong National University. That background carries into projects involving scientific models, calculations, and data.</p>
          <p className="mb-5 text-base leading-7 text-ink-soft">I now focus on web development with Next.js, TypeScript, and PostgreSQL. My projects include a learning platform, multiplayer games, physics simulations, and a market research dashboard. I work on the interface and the backend, including the data each application needs to save or process.</p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 max-[760px]:grid-cols-1">
            <div className="grid gap-1.5"><span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Based in</span><strong className="text-sm">Indonesia</strong></div>
            <div className="grid gap-1.5"><span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Work format</span><strong className="text-sm">Remote</strong></div>
            <div className="grid gap-1.5"><span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Communication</span><strong className="text-sm">English · Indonesian</strong></div>
          </div>
        </div>
      </section>

      <section className={cn(sectionSpacing, "border-y border-[#dbe2eb] bg-[#f0f3f7]")}>
        <div className={shell}>
          <div className="mb-12 grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.65fr)] items-end gap-[clamp(48px,7vw,88px)] max-[760px]:grid-cols-1 max-[760px]:gap-6">
            <div>
              <p className={eyebrow}>Tools I use</p>
              <h2 className={cn(sectionTitle, "mt-4")}>The stack behind my projects.</h2>
            </div>
            <p className="m-0 border-l-2 border-[#c9d6f7] pl-6 text-base leading-7 text-ink-soft max-[760px]:border-l-0 max-[760px]:border-t-2 max-[760px]:pt-4 max-[760px]:pl-0">Next.js and TypeScript are central to my web projects. I use PostgreSQL for application data and Python for analysis and forecasting. The case studies show how I use these tools.</p>
          </div>
          <div className="grid grid-cols-4 border-t border-[#cfd8e3] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
            {skillGroups.map((group) => (
              <article className="border-r border-[#cfd8e3] p-7 even:max-[1080px]:border-r-0 max-[1080px]:border-b max-[760px]:border-r-0 last:border-r-0 last:max-[1080px]:border-b-0" key={group.title}>
                <h3 className="mb-5 min-h-[52px] text-base font-bold max-[760px]:min-h-0">{group.title}</h3>
                <ul className="grid gap-2.5 p-0">
                  {group.skills.map((skill) => <li className="list-none font-mono text-xs text-ink-soft" key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={cn(shell, sectionSpacing, "grid grid-cols-[0.7fr_1.3fr] gap-[clamp(52px,10vw,140px)] max-[1080px]:grid-cols-1")}>
        <div>
          <p className={eyebrow}>Working together</p>
          <h2 className={cn(sectionTitle, "mt-4")}>What you can expect.</h2>
        </div>
        <div className="border-t border-border">
          <article className="grid grid-cols-[48px_0.75fr_1fr] gap-6 border-b border-border py-7 max-[760px]:grid-cols-[40px_1fr]"><span className="font-mono text-base font-extrabold leading-none text-primary">01</span><h3 className="text-lg font-bold tracking-[-0.025em]">Explain the choices</h3><p className="text-sm leading-6 text-ink-soft max-[760px]:col-start-2">I explain why I recommend an approach, including the tradeoffs and anything that still needs to be checked.</p></article>
          <article className="grid grid-cols-[48px_0.75fr_1fr] gap-6 border-b border-border py-7 max-[760px]:grid-cols-[40px_1fr]"><span className="font-mono text-base font-extrabold leading-none text-primary">02</span><h3 className="text-lg font-bold tracking-[-0.025em]">Keep the code readable</h3><p className="text-sm leading-6 text-ink-soft max-[760px]:col-start-2">I separate responsibilities and document the parts that someone else will need to run or change.</p></article>
          <article className="grid grid-cols-[48px_0.75fr_1fr] gap-6 border-b border-border py-7 max-[760px]:grid-cols-[40px_1fr]"><span className="font-mono text-base font-extrabold leading-none text-primary">03</span><h3 className="text-lg font-bold tracking-[-0.025em]">Be clear about limits</h3><p className="text-sm leading-6 text-ink-soft max-[760px]:col-start-2">My case studies include what I checked, what remains unfinished, and what I would improve next.</p></article>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
