import type { Metadata } from "next";
import { ArrowUpRight, Clock3, Globe2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { profile } from "@/lib/portfolio-data";
import { eyebrow, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact me on Upwork",
  description: "Discuss your web application or data project with Ridho Kurniawan through Upwork.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Let's work together"
        title="Let’s discuss your project on Upwork."
        description="Tell me what you’re building, which parts need help, and when you’d like to start."
      />
      <section className={cn(shell, "grid grid-cols-[minmax(280px,0.75fr)_minmax(0,1.25fr)] items-start gap-[clamp(60px,10vw,150px)] pb-32 pt-10 max-[760px]:grid-cols-1")}>
        <div className="grid content-start gap-3">
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
          <div className="grid grid-cols-[38px_1fr] gap-x-3 gap-y-0.5 rounded-[10px] border border-[#d6dee8] bg-white p-5 shadow-[0_5px_16px_rgba(21,34,54,0.035)]">
            <MessageSquare className="row-span-2 size-5 self-center text-primary" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">Project enquiries</span>
            <strong className="break-words text-sm">Through Upwork</strong>
          </div>
        </div>
        <div className="rounded-[18px] border border-[#d6dee8] bg-white p-8 shadow-[var(--shadow-sm)] sm:p-10">
          <p className={eyebrow}>Start a conversation</p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Start with a short project brief.</h2>
          <p className="mt-5 max-w-[620px] text-base leading-7 text-ink-soft">Send me a message or job invitation on Upwork. Include your goals, current stack, and any designs or existing code you can share.</p>
          <Button asChild size="lg" className="mt-8 max-[460px]:w-full">
            <a href={profile.upworkUrl} target="_blank" rel="noopener noreferrer">
              {profile.contactLabel} <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">We can discuss scope, availability, and the first milestone there.</p>
        </div>
      </section>
    </main>
  );
}
