import { eyebrow as eyebrowClass, shell } from "@/lib/portfolio-styles";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className={cn(shell, "relative pb-[74px] pt-24 sm:pt-32 lg:pt-40")}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h1 className="mt-4 max-w-[1050px] text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">{title}</h1>
      <p className="ml-auto mt-8 max-w-[720px] border-l-2 border-[#ccd9fa] pl-7 text-base leading-7 text-ink-soft max-[760px]:ml-0 max-[760px]:border-l-0 max-[760px]:border-t-2 max-[760px]:pt-5 max-[760px]:pl-0">{description}</p>
      <div className="mt-14 h-px w-full bg-[linear-gradient(90deg,var(--blue)_0_14%,var(--line)_14%_100%)]" aria-hidden="true" />
    </section>
  );
}
