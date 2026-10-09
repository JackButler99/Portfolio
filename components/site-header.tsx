import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems, profile } from "@/lib/portfolio-data";
import { shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/90 bg-background/90 backdrop-blur-lg">
      <div className={cn(shell, "grid min-h-[78px] grid-cols-[1fr_auto_1fr] items-center gap-6 max-[1080px]:grid-cols-[1fr_auto] max-[760px]:min-h-[70px]")}>
        <Link className="inline-flex items-center justify-self-start gap-3" href="/" aria-label={`${profile.name} home`}>
          <span className="grid size-10 place-items-center rounded-[10px] bg-charcoal font-mono text-xs font-extrabold text-white shadow-[inset_0_-2px_0_rgba(255,255,255,0.08)]" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="grid leading-[1.16]">
            <strong className="text-sm tracking-[0.055em]">{profile.name}</strong>
            <span className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground max-[760px]:hidden">Web + Data</span>
          </span>
        </Link>

        <nav className="flex items-center justify-center gap-8 max-[1080px]:hidden" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.external ? (
              <a className="text-sm font-semibold text-[#566273] transition-colors hover:text-primary focus-visible:text-primary" key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link className="text-sm font-semibold text-[#566273] transition-colors hover:text-primary focus-visible:text-primary" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Button asChild className="min-h-[43px] justify-self-end px-5 max-[1080px]:hidden text-gray-100">
          <Link href="/contact">Start a project</Link>
        </Button>

        <details className="relative hidden justify-self-end max-[1080px]:block">
          <summary className="grid size-[43px] cursor-pointer list-none place-items-center rounded-lg border border-border bg-white [&::-webkit-details-marker]:hidden" aria-label="Open navigation">
            <Menu className="size-5" aria-hidden="true" />
          </summary>
          <nav className="absolute right-0 top-[54px] grid w-[220px] rounded-xl border border-border bg-white p-2.5 shadow-[var(--shadow-md)]" aria-label="Mobile navigation">
            {navItems.map((item) =>
              item.external ? (
                <a className="rounded-md px-3 py-2.5 font-semibold text-ink-soft hover:bg-accent hover:text-blue-dark" key={item.href} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link className="rounded-md px-3 py-2.5 font-semibold text-ink-soft hover:bg-accent hover:text-blue-dark" key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </details>
      </div>
    </header>
  );
}
