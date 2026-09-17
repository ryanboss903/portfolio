"use client";

import Hero from "@/components/portfolio/Hero";
import Ticker from "@/components/portfolio/Ticker";
import Expertise from "@/components/portfolio/Expertise";
import Work from "@/components/portfolio/Work";
import ArchitectureDeck from "@/components/portfolio/ArchitectureDeck";
import Experience from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Hero />
      <Ticker />
      <Expertise />
      <Work />
      <Experience />
      <ArchitectureDeck />
      <Footer />
    </main>
  );
}
