import type { PortfolioProject } from "@/lib/portfolio-data";

export const shell =
  "mx-auto w-[min(1240px,calc(100%-3.5rem))] max-[760px]:w-[min(100%-2rem,1240px)]";

export const eyebrow =
  "m-0 font-mono text-xs font-extrabold uppercase leading-5 tracking-[0.12em] text-primary";

export const sectionSpacing = "py-24 lg:py-32";

export const sectionTitle =
  "m-0 max-w-[840px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl";

export const bodyMuted = "text-ink-soft";

export const projectAccentClasses: Record<PortfolioProject["accent"], string> = {
  lime: "[--project-accent:var(--blue)]",
  cyan: "[--project-accent:var(--teal)]",
  violet: "[--project-accent:var(--violet)]",
  orange: "[--project-accent:var(--amber)]",
};
