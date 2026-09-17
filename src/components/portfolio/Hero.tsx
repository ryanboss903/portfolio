"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import { ArrowUpRight, Terminal, ShieldCheck, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const orb = orbRef.current;

    if (!section || !content) return;

    const mm = gsap.matchMedia();

    // Orb floating ambient animation
    if (orb) {
      gsap.to(orb, {
        y: -25,
        x: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Entrance animation
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(
      content.querySelectorAll(".hero-fade"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      }
    );

    // Desktop subtle scale effect
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=50%",
        animation: gsap.to(section, {
          opacity: 0.9,
          scale: 0.98,
          ease: "none"
        }),
        scrub: true,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="hero" 
      className="min-h-screen w-full flex items-center relative overflow-hidden bg-background pt-24 pb-16 lg:py-0"
    >
      {/* 
        CINEMATIC INTEGRATED BACKGROUND PORTRAIT (Visible across mobile & desktop)
        Blends Ryan's clean studio portrait directly into the atmosphere behind the typography 
      */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Right-aligned Hero Portrait (100% Visible, Crisp, Seamlessly Blended) */}
        <div className="absolute top-0 right-0 bottom-0 w-full sm:w-[75vw] md:w-[62vw] lg:w-[50vw] xl:w-[46vw] h-full select-none">
          <Image
            src="/ryan_hero_clean.jpg"
            alt="Ryan Ochieng - Full Stack Engineer & CTO"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 46vw"
            className="object-cover object-[center_12%] sm:object-[center_15%] opacity-90 lg:opacity-95 contrast-[1.08] brightness-[1.02]"
          />
          {/* Subtle directional gradient vignettes: keep text area deep black while keeping portrait crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 via-25% to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/90 via-background/30 to-transparent" />
        </div>

        {/* Ambient Neon Backlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] lg:w-[35vw] lg:h-[35vw] bg-accent-lime/10 rounded-full blur-[140px]" />
        <div 
          ref={orbRef}
          className="absolute top-[16%] right-[10%] w-64 h-64 lg:w-96 lg:h-96 rounded-full border border-accent-orange/20 bg-gradient-to-br from-accent-orange/15 to-transparent blur-[2px] opacity-50"
        />
        <div className="absolute bottom-[15%] left-[5%] w-36 h-36 rounded-full border border-accent-lime/20 bg-gradient-to-tr from-accent-lime/10 to-transparent blur-[1px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Top Status HUD Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-accent-lime font-bold">//</span>
            <span className="tracking-widest uppercase text-foreground/80 font-semibold text-[11px] sm:text-xs">
              Startup CTO &amp; Full Stack Architect
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/30 text-accent-lime">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-ping" />
              <span className="tracking-wider text-[10px] sm:text-[11px] font-semibold">
                Available for CTO Advisory &amp; Contracts
              </span>
            </div>
            <span className="hidden md:inline-block text-foreground/40 font-light text-[11px]">
              {personalInfo.location}
            </span>
          </div>
        </div>

        {/* Main Content: Kinetic Typography & Integrated Atmosphere */}
        <div ref={contentRef} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          {/* Main Left Typography Column */}
          <div className="w-full lg:max-w-2xl xl:max-w-3xl flex flex-col justify-center">
            
            {/* Pill badge with instant photo avatar chip for mobile recognition */}
            <div className="hero-fade mb-3 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-white/15 backdrop-blur-md w-fit">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-accent-lime/60 shrink-0">
                <Image
                  src="/ryan_hero_clean.jpg"
                  alt="Ryan Ochieng"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[11px] font-mono tracking-wider text-foreground/90 uppercase font-semibold">
                Ryan Ochieng <span className="text-accent-lime">/ CTO</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span className="text-[10px] font-mono text-foreground/50 hidden sm:inline">
                JobAi • LoveInn • Greenfield
              </span>
            </div>

            {/* Giant Kinetic Display Name - Unobstructed */}
            <div className="hero-fade overflow-visible">
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.2vw] xl:text-[6.8rem] leading-[0.9] tracking-tighter uppercase text-foreground">
                {personalInfo.name.split(" ")[0]}
              </h1>
            </div>

            <div className="hero-fade overflow-visible pr-2">
              <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.2vw] xl:text-[6.8rem] leading-[0.9] tracking-tighter uppercase text-outline-accent">
                {personalInfo.name.split(" ")[1]}
              </h1>
            </div>

            {/* Tagline */}
            <div className="hero-fade mt-5 sm:mt-6">
              <h2 className="text-base sm:text-lg md:text-xl font-mono text-accent-lime tracking-wide flex items-center gap-2">
                <span className="text-accent-orange">&gt;</span> {personalInfo.tagline}
              </h2>
            </div>

            {/* Bio */}
            <div className="hero-fade mt-4 sm:mt-5 max-w-xl">
              <p className="text-sm sm:text-base font-light text-foreground/80 leading-relaxed drop-shadow-sm">
                {personalInfo.bio}
              </p>
            </div>

            {/* Quick Metrics HUD */}
            <div className="hero-fade grid grid-cols-3 gap-4 mt-6 sm:mt-8 py-3.5 border-y border-white/10 max-w-lg bg-black/40 backdrop-blur-md px-4 rounded-xl border border-white/5">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-foreground">2+</div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-foreground/50">CTO Startups</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-accent-lime">&lt; 25ms</div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-foreground/50">Edge Latency</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-accent-orange">99.9%</div>
                <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-foreground/50">Uptime SLA</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-fade flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-8">
              <a
                href="#work"
                className="px-6 py-3 rounded-full bg-accent-lime text-black font-mono font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-accent-lime/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg shadow-accent-lime/20"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/5 border border-white/15 text-foreground font-mono text-xs sm:text-sm tracking-wider uppercase hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-2"
              >
                <span>Let's Talk</span>
              </a>
            </div>

          </div>

          {/* Right Floating Glassmorphic Telemetry Badge (Complements the background portrait without blocking it) */}
          <div className="hidden lg:flex flex-col items-end gap-4 self-end pb-8">
            <div className="p-4 rounded-2xl bg-neutral-950/70 border border-white/15 backdrop-blur-xl shadow-2xl max-w-xs text-right">
              <div className="flex items-center justify-end gap-1.5 text-accent-lime text-xs font-mono font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CTO &amp; SYSTEM ARCHITECT</span>
              </div>
              <div className="font-display font-bold text-lg text-white">Ryan Ochieng</div>
              <div className="text-[11px] font-mono text-foreground/60 mt-1">
                JobAi Technologies &bull; LoveInn &bull; Greenfield
              </div>
              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-foreground/40">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                  LIVE PRODUCTION
                </span>
                <span className="text-accent-orange font-semibold">NAIROBI / GLOBAL</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 pointer-events-none">
        <span className="text-[9px] uppercase tracking-widest font-mono text-foreground/40">// scroll down</span>
        <div className="w-[1px] h-6 bg-foreground/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-accent-lime animate-scroll-down" style={{ animationDuration: '1.5s', animationIterationCount: 'infinite' }} />
        </div>
      </div>

    </section>
  );
}
