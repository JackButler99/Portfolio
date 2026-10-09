import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { profile, skillGroups } from "@/lib/portfolio-data";
import { eyebrow, sectionSpacing, sectionTitle, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "About the full-stack developer and data/AI engineer behind the work.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About"
        title="A builder who thinks in systems, users, and evidence."
        description={profile.shortBio}
      />

      <section className={cn(shell, "grid grid-cols-[minmax(270px,0.7fr)_minmax(0,1fr)] items-start gap-[clamp(52px,9vw,130px)] pb-32 pt-[60px] max-[760px]:grid-cols-1")}>
        <div className="grid aspect-square max-w-[390px] place-items-center rounded-[18px] border border-[#cdd9ed] bg-gradient-to-br from-primary to-blue-dark text-6xl font-extrabold tracking-[-0.08em] text-white shadow-[var(--shadow-md)] sm:text-7xl lg:text-8xl max-[760px]:max-w-[330px]" aria-hidden="true">{profile.initials}</div>
        <div>
          <p className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-4xl">I work where product engineering and data meet.</p>
          <p className="mb-5 text-base leading-7 text-ink-soft">That means I can design a clear interface, reason about the backend behind it, and understand the analysis or model that makes the product valuable. Clients get fewer handoffs and a partner who can follow the problem across the stack.</p>
          <p className="mb-5 text-base leading-7 text-ink-soft">I care about maintainable choices, honest progress updates, and software that makes a real task easier. The goal is not to maximize complexity. It is to build the right thing, make it dependable, and leave it understandable.</p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 max-[760px]:grid-cols-1">
            <div className="grid gap-1.5"><span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Based in</span><strong className="text-sm">Indonesia</strong></div>
            <div className="grid gap-1.5"><span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Working with</span><strong className="text-sm">Remote teams</strong></div>
            <div className="grid gap-1.5"><span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Communication</span><strong className="text-sm">English · Indonesian</strong></div>
          </div>
        </div>
      </section>

      <section className={cn(sectionSpacing, "border-y border-[#dbe2eb] bg-[#f0f3f7]")}>
        <div className={shell}>
          <div className="mb-12 grid grid-cols-[minmax(0,1.2fr)_minmax(280px,0.65fr)] items-end gap-[clamp(48px,7vw,88px)] max-[760px]:grid-cols-1 max-[760px]:gap-6">
            <div>
              <p className={eyebrow}>Technical toolkit</p>
              <h2 className={cn(sectionTitle, "mt-4")}>Broad enough to connect the work. Focused enough to ship it well.</h2>
            </div>
            <p className="m-0 border-l-2 border-[#c9d6f7] pl-6 text-base leading-7 text-ink-soft max-[760px]:border-l-0 max-[760px]:border-t-2 max-[760px]:pt-4 max-[760px]:pl-0">Update this list to match the tools you can confidently discuss, demonstrate, and use on a client project.</p>
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
          <p className={eyebrow}>Working principles</p>
          <h2 className={cn(sectionTitle, "mt-4")}>What you can expect.</h2>
        </div>
        <div className="border-t border-border">
          <article className="grid grid-cols-[48px_0.75fr_1fr] gap-6 border-b border-border py-7 max-[760px]:grid-cols-[40px_1fr]"><span className="font-mono text-base font-extrabold leading-none text-primary">01</span><h3 className="text-lg font-bold tracking-[-0.025em]">Clarity over theatre</h3><p className="text-sm leading-6 text-ink-soft max-[760px]:col-start-2">Direct communication, visible tradeoffs, and no jargon used to hide uncertainty.</p></article>
          <article className="grid grid-cols-[48px_0.75fr_1fr] gap-6 border-b border-border py-7 max-[760px]:grid-cols-[40px_1fr]"><span className="font-mono text-base font-extrabold leading-none text-primary">02</span><h3 className="text-lg font-bold tracking-[-0.025em]">Evidence over assumption</h3><p className="text-sm leading-6 text-ink-soft max-[760px]:col-start-2">Important decisions are tested against users, data, or the smallest useful experiment.</p></article>
          <article className="grid grid-cols-[48px_0.75fr_1fr] gap-6 border-b border-border py-7 max-[760px]:grid-cols-[40px_1fr]"><span className="font-mono text-base font-extrabold leading-none text-primary">03</span><h3 className="text-lg font-bold tracking-[-0.025em]">Progress over perfectionism</h3><p className="text-sm leading-6 text-ink-soft max-[760px]:col-start-2">Working increments create better feedback than a long invisible build.</p></article>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
