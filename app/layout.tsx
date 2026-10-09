import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/portfolio-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · Full-Stack & Data/AI Engineer`,
    template: `%s · ${profile.name}`,
  },
  description:
    "Full-stack development, data analytics, and machine-learning engineering for useful, dependable digital products.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          className="fixed left-3 top-3 z-[100] -translate-y-[160%] rounded-lg bg-charcoal px-4 py-2.5 font-bold text-white transition-transform focus:translate-y-0"
          href="#main-content"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
