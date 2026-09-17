"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section) return;

    items.forEach((item) => {
      // Reveal the item
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );

      // Draw the line
      const line = item.querySelector(".exp-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.6,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.trigger === section && t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="min-h-screen w-full relative bg-background border-t border-white/5 py-24 z-[3]">
      <div className="container mx-auto px-6 h-full flex flex-col max-w-5xl">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent-lime font-mono text-sm tracking-widest uppercase">// Career &amp; Leadership</span>
          <div className="h-[1px] w-24 bg-accent-lime/30" />
        </div>

        <h2 className="font-display font-bold text-5xl md:text-7xl mb-20 uppercase tracking-tighter text-outline-accent">
          Timeline
        </h2>

        <div className="relative ml-2 md:ml-4 pb-16">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-foreground/10" />

          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1;

            return (
              <div 
                key={i} 
                ref={(el) => { itemsRef.current[i] = el; }}
                className="relative pl-10 md:pl-16 mb-16 last:mb-0 group"
              >
                {/* Status Dot */}
                <div className="absolute left-[-4.5px] top-2 w-[10px] h-[10px] bg-background border border-accent-lime rounded-full z-10 group-hover:bg-accent-lime transition-colors" />
                
                {/* Vertical Line */}
                {!isLast && (
                  <div className="exp-line absolute left-0 top-3 bottom-[-4rem] w-[1px] bg-accent-lime origin-top" />
                )}

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                    <span className="chonky-underline-orange">
                      {exp.role}
                    </span>
                  </h3>
                  <span className="text-accent-lime font-mono text-sm">
                    // {exp.company}
                  </span>
                  <span className="text-foreground/40 font-mono text-xs md:ml-auto uppercase tracking-widest">
                    [{exp.period}]
                  </span>
                </div>

                <div className="code-editor-style mb-5">
                  <p className="text-foreground/75 font-light leading-relaxed max-w-2xl text-sm md:text-base">
                    {exp.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-foreground/5 border border-white/5 text-xs font-mono text-foreground/70 uppercase rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
