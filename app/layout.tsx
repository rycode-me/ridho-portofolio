import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://YOUR_DOMAIN.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ridho Yoss Pratama — Cyber Security • Linux • Systems • Networking",
  description:
    "Personal portfolio of Ridho Yoss Pratama, focused on cybersecurity, Linux systems, system administration, and networking.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ridho Yoss Pratama — Cyber Security • Linux • Systems • Networking",
    description:
      "Personal portfolio of Ridho Yoss Pratama, focused on cybersecurity, Linux systems, system administration, and networking.",
    url: siteUrl,
    siteName: "Ridho Yoss Pratama",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridho Yoss Pratama — Cyber Security • Linux • Systems • Networking",
    description:
      "Personal portfolio of Ridho Yoss Pratama, focused on cybersecurity, Linux systems, system administration, and networking.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${sans.variable} ${mono.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-signal-teal focus:text-base focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
