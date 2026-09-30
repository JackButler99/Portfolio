import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/portfolio-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · Full-Stack & Data Engineer`,
    template: `%s · ${profile.name}`,
  },
  description:
    "Full-stack web development and data science engineering for useful, dependable digital products.",
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
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
