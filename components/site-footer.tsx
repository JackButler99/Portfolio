import Link from "next/link";
import { navItems, profile } from "@/lib/portfolio-data";
import { shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-charcoal pt-[72px] text-[#f5f7fa]">
      <div className={cn(shell, "grid grid-cols-[minmax(0,1.6fr)_0.55fr_0.55fr] gap-[60px] pb-[70px] max-[760px]:grid-cols-1 max-[760px]:gap-10")}>
        <div>
          <Link className="inline-flex items-center gap-3" href="/">
            <span className="grid size-10 place-items-center rounded-[10px] bg-primary font-mono text-xs font-extrabold text-white" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="grid leading-[1.16]">
              <strong className="text-sm tracking-[0.055em]">{profile.name}</strong>
              <span className="mt-1 max-w-[310px] font-mono text-[0.68rem] uppercase leading-[1.35] tracking-[0.08em] text-[#aeb8c5]">{profile.role}</span>
            </span>
          </Link>
          <p className="mt-6 max-w-[460px] text-sm text-[#aeb8c5]">Built to turn complex product and data work into useful, dependable software.</p>
        </div>

        <div className="grid content-start gap-3">
          <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#89a9fb]">Explore</span>
          {navItems.filter((item) => !item.external).slice(1).map((item) => (
            <Link className="text-sm font-semibold text-[#aeb8c5] transition-colors hover:text-white focus-visible:text-white" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="grid content-start gap-3">
          <span className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[#89a9fb]">Connect</span>
          <a className="text-sm font-semibold text-[#aeb8c5] transition-colors hover:text-white" href={profile.upworkUrl} target="_blank" rel="noreferrer">Upwork</a>
          <a className="text-sm font-semibold text-[#aeb8c5] transition-colors hover:text-white" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-sm font-semibold text-[#aeb8c5] transition-colors hover:text-white" href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <div className={cn(shell, "flex justify-between gap-5 border-t border-white/10 py-5 font-mono text-[0.68rem] text-[#aeb8c5] max-[460px]:flex-col")}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
