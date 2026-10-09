import Link from "next/link";
import { Button } from "@/components/ui/button";
import { eyebrow, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export function ContactCta() {
  return (
    <section className={cn(shell, "relative mb-20 grid grid-cols-[minmax(0,1.25fr)_auto] items-end gap-12 overflow-hidden rounded-[18px] bg-[#152b61] px-10 py-12 text-white shadow-[var(--shadow-md)] before:absolute before:right-[-85px] before:bottom-[-130px] before:size-80 before:rounded-full before:border before:border-white/15 before:content-[''] lg:mb-32 lg:px-[72px] lg:py-16 max-[1080px]:grid-cols-1 max-[1080px]:items-start max-[760px]:rounded-[14px] max-[760px]:px-6 max-[760px]:py-8")}>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_92%_0%,rgba(83,126,235,0.42),transparent_23rem)]" aria-hidden="true" />
      <div className="relative z-10">
        <p className={cn(eyebrow, "text-[#9bb8ff]")}>Have a useful problem to solve?</p>
        <h2 className="mt-4 max-w-[750px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">Let’s turn it into a clear, shippable product.</h2>
      </div>
      <div className="relative z-10 flex flex-wrap justify-end gap-3 max-[1080px]:justify-start max-[760px]:grid">
        <Button asChild size="lg">
          <Link href="/contact">Discuss your project</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:border-white/40 hover:bg-white/10 hover:text-white">
          <Link href="/projects">See selected work</Link>
        </Button>
      </div>
    </section>
  );
}
