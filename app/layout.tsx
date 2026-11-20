import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono,Playfair_Display } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kartik Bajpai | Full Stack Developer & SDE",
  description:
    "Portfolio of Kartik Bajpai — Full Stack Developer and SDE focused on backend systems and Generative AI, studying Software Engineering at DTU.",
  metadataBase: new URL("https://kartikbajpai.dev"),
  openGraph: {
    title: "Kartik Bajpai | Full Stack Developer & SDE",
    description:
      "Backend systems, real-time platforms, and GenAI pipelines — portfolio and project log.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}>
      <body className="font-body bg-void text-primary antialiased">{children}</body>
    </html>
  );
}
