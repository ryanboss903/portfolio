"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, Project } from "@/lib/data";
import Image from "next/image";
import { 
  ExternalLink, 
  Maximize2, 
  Terminal, 
  ShieldCheck, 
  Sparkles, 
  Globe, 
  Layers 
} from "lucide-react";
import LivePreviewModal from "./LivePreviewModal";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardModes, setCardModes] = useState<Record<string, "live" | "snapshot">>({
    "JobAi Technologies": "live",
    "Greenfield Sourcing": "live",
    "Sokoyote Marketplace": "live",
    "LoveInn Technologies": "snapshot",
    "Buyletlink Realty": "snapshot",
  });

  const toggleCardMode = (projectTitle: string) => {
    setCardModes(prev => ({
      ...prev,
      [projectTitle]: prev[projectTitle] === "live" ? "snapshot" : "live"
    }));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const mm = gsap.matchMedia();

    // Desktop: Pinned horizontal scroll
    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => {
        const containerWidth = container.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
      });

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        trigger.kill();
        tween.kill();
      };
    });

    // Mobile: Native vertical flow, no pinning trap
    mm.add("(max-width: 1023px)", () => {
      // Clear any x transform on container
      gsap.set(container, { clearProps: "all" });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <section 
        ref={sectionRef} 
        id="work" 
        className="w-full relative bg-background border-t border-white/5 overflow-hidden z-[2] lg:h-screen lg:flex lg:items-center py-20 lg:py-0"
      >
        {/* Section Header Indicator */}
        <div className="lg:absolute lg:top-10 lg:left-8 z-10 px-6 lg:px-0 mb-8 lg:mb-0">
          <div className="flex items-center gap-3">
            <span className="text-accent-lime font-mono text-xs md:text-sm tracking-widest uppercase">
              // Selected Works &amp; Live Systems
            </span>
            <div className="h-[1px] w-16 bg-accent-lime/30 hidden sm:block" />
          </div>
        </div>

        <div className="h-full flex items-center w-full">
          <div 
            ref={containerRef} 
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 px-6 lg:px-20 w-full lg:w-auto lg:h-[76vh]"
          >
            
            {/* Intro Lead Slide */}
            <div className="w-full lg:w-[38vw] shrink-0 flex flex-col justify-center lg:mr-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-lime uppercase tracking-widest mb-4">
                <Globe className="w-3.5 h-3.5" />
                <span>Production Deployments</span>
              </div>
              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.95]">
                Selected<br />
                <span className="text-outline-accent">Works</span>
              </h2>
              <p className="text-foreground/70 font-light max-w-md leading-relaxed text-sm md:text-base mb-6">
                Live interactive web platforms and high-throughput systems architected as CTO and Lead Engineer. Test live deployments directly or inspect device views.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-foreground/40 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-accent-lime animate-ping" />
                <span>Scroll horizontally on desktop to inspect all systems</span>
              </div>
            </div>

            {/* Project Cards (Vercel-inspired Glassmorphic Browser Frame) */}
            {projects.map((project, idx) => {
              const isLive = cardModes[project.title] === "live" && project.deployment?.allowIframe;

              return (
                <div 
                  key={idx} 
                  className="w-full lg:w-[62vw] shrink-0 h-auto lg:h-full flex flex-col justify-between group"
                >
                  
                  {/* macOS / Vercel Glassmorphic Browser Window */}
                  <div className="w-full h-[360px] sm:h-[420px] lg:h-[75%] relative rounded-2xl border border-white/15 bg-neutral-950 shadow-2xl flex flex-col overflow-hidden group-hover:border-accent-lime/50 transition-all duration-500">
                    
                    {/* Browser Chrome Header Bar */}
                    <div className="h-11 w-full bg-neutral-900/90 border-b border-white/10 px-4 flex items-center justify-between shrink-0 gap-2">
                      
                      {/* Window Dots */}
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>

                      {/* URL Address Bar */}
                      <div className="flex-1 max-w-sm sm:max-w-md mx-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-foreground/70 flex items-center justify-between truncate">
                        <div className="flex items-center gap-2 truncate">
                          <ShieldCheck className="w-3 h-3 text-accent-lime shrink-0" />
                          <span className="truncate">https://{project.domain}</span>
                        </div>
                        <span className="hidden sm:inline-block text-[10px] text-accent-lime font-mono shrink-0 ml-2">
                          ● {project.deployment?.status || "Ready"}
                        </span>
                      </div>

                      {/* Header Controls */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        
                        {/* Live / Snapshot Switcher (for supported sites) */}
                        {project.deployment?.allowIframe && (
                          <button
                            onClick={() => toggleCardMode(project.title)}
                            className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all ${
                              isLive 
                                ? "bg-accent-lime text-black font-bold" 
                                : "bg-white/10 text-white/70 hover:text-white"
                            }`}
                            title="Toggle live sandbox"
                          >
                            {isLive ? "⚡ Sandbox" : "🖥️ Snapshot"}
                          </button>
                        )}

                        {/* Full-Screen Device Lab Inspect */}
                        <button
                          onClick={() => openModal(project)}
                          className="p-1.5 rounded-md bg-white/5 hover:bg-white/15 text-foreground/70 hover:text-white transition-colors"
                          title="Inspect in Fullscreen Device Lab"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>

                        {/* Open in external tab */}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-accent-lime/10 hover:bg-accent-lime text-accent-lime hover:text-black transition-colors"
                          title="Open live site in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>

                    {/* Viewport: Live Iframe Sandbox OR High-Resolution Snapshot */}
                    <div className="relative w-full flex-1 bg-black overflow-hidden flex items-center justify-center">
                      
                      {isLive ? (
                        <iframe
                          src={project.url}
                          title={project.title}
                          className="w-full h-full border-0 bg-white"
                          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.src}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 62vw"
                            className="object-cover object-top group-hover:scale-102 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                          {/* Quick Interactive Overlay on Hover */}
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-white/10">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                              <span className="text-[11px] font-mono text-white font-medium">
                                Environment: {project.deployment?.environment || "Production"} ({project.deployment?.latency || "24ms"})
                              </span>
                            </div>
                            <button
                              onClick={() => openModal(project)}
                              className="text-[11px] font-mono text-accent-lime hover:underline flex items-center gap-1"
                            >
                              <span>Inspect Live</span>
                              <Maximize2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      )}

                    </div>

                  </div>

                  {/* Project Info & Metadata Row */}
                  <div className="mt-4 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                    <div className="max-w-xl">
                      
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-accent-lime font-mono text-xs uppercase tracking-widest">
                          // {project.category}
                        </span>
                        {project.role && (
                          <span className="px-2.5 py-0.5 rounded-full bg-accent-orange/15 border border-accent-orange/30 text-accent-orange font-mono text-[10px] font-bold uppercase tracking-wider">
                            {project.role}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground group-hover:text-accent-lime transition-colors">
                        <span className="chonky-underline-lime">
                          {project.title}
                        </span>
                      </h3>

                      <p className="text-xs sm:text-sm text-foreground/70 font-light mt-2 leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-foreground/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-accent-lime/10 border border-accent-lime/30 text-accent-lime font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-accent-lime hover:text-black transition-all"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => openModal(project)}
                        className="text-xs font-mono text-foreground/50 hover:text-accent-orange transition-colors flex items-center gap-1.5"
                      >
                        <span>[ Device Lab ]</span>
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}

            <div className="hidden lg:block w-[10vw] shrink-0" />

          </div>
        </div>

      </section>

      {/* Interactive Device Lab Modal */}
      <LivePreviewModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
