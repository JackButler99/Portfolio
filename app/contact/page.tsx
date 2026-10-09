import type { Metadata } from "next";
import { Clock3, Globe2, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { profile } from "@/lib/portfolio-data";
import { shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss a full-stack development, data analytics, or machine-learning project.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Start a conversation"
        title="Tell me what you’re trying to improve."
        description="Share the problem, where the work stands today, and what a useful outcome looks like. I’ll respond with the clearest next step."
      />
      <section className={cn(shell, "grid grid-cols-[minmax(280px,0.75fr)_minmax(0,1.25fr)] gap-[clamp(60px,10vw,150px)] pb-32 pt-10 max-[760px]:grid-cols-1")}>
        <div className="grid content-start gap-3">
          <div className="grid grid-cols-[38px_1fr] gap-x-3 gap-y-0.5 rounded-[10px] border border-[#d6dee8] bg-white p-5 shadow-[0_5px_16px_rgba(21,34,54,0.035)]">
            <Mail className="row-span-2 size-5 self-center text-primary" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Email</span>
            <a className="break-words text-sm" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="grid grid-cols-[38px_1fr] gap-x-3 gap-y-0.5 rounded-[10px] border border-[#d6dee8] bg-white p-5 shadow-[0_5px_16px_rgba(21,34,54,0.035)]">
            <Globe2 className="row-span-2 size-5 self-center text-primary" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Location</span>
            <strong className="break-words text-sm">{profile.location}</strong>
          </div>
          <div className="grid grid-cols-[38px_1fr] gap-x-3 gap-y-0.5 rounded-[10px] border border-[#d6dee8] bg-white p-5 shadow-[0_5px_16px_rgba(21,34,54,0.035)]">
            <Clock3 className="row-span-2 size-5 self-center text-primary" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Availability</span>
            <strong className="break-words text-sm">{profile.availability}</strong>
          </div>
          <div className="mt-3 border-l-[3px] border-primary bg-[#edf2ff] p-5">
            <strong className="text-sm text-blue-dark">Before publishing</strong>
            <p className="mt-1.5 text-sm text-[#5f6e85]">Add your LinkedIn profile in <code className="text-xs text-foreground">lib/portfolio-data.ts</code> when it is ready.</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Project enquiry</h2>
          <p className="mb-9 mt-4 max-w-[620px] text-base leading-7 text-ink-soft">A few useful details are enough to begin. Please don’t include passwords or sensitive data.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
