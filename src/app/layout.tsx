import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Nav from "@/components/portfolio/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jobaitechnologies.com"),
  title: "Ryan Ochieng | Full Stack Software Engineer & CTO",
  description: "Official portfolio of Ryan Ochieng — Full Stack Software Engineer and Startup CTO. Architecting scalable cloud platforms, intelligent AI engines, and high-concurrency web systems.",
  keywords: ["Ryan Ochieng", "Full Stack Engineer", "CTO", "Software Architect", "Next.js", "AI Engineer", "Nairobi", "Kenya"],
  authors: [{ name: "Ryan Ochieng", url: "https://jobaitechnologies.com" }],
  openGraph: {
    title: "Ryan Ochieng | Full Stack Software Engineer & CTO",
    description: "Architecting Scalable Universes & Intelligent Platforms. Co-Founder & CTO @ JobAi & LoveInn.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ryan_hot_portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Ochieng - Full Stack Engineer & CTO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Ochieng | Full Stack Software Engineer & CTO",
    description: "Architecting Scalable Universes & Intelligent Platforms.",
    images: ["/ryan_hot_portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} dark`}>
      <body className="antialiased selection:bg-accent-lime selection:text-black">
        <LenisProvider>
          <CustomCursor />
          <Nav />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
