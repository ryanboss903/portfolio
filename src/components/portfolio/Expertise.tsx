"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section) return;

    // Reveal animation
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.trigger === section && t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="min-h-screen w-full relative bg-background border-t border-white/5 pt-24 pb-36 z-[1]">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="text-accent-lime font-mono text-sm tracking-widest uppercase">// Expertise</span>
          <div className="h-[1px] w-24 bg-accent-lime/30"></div>
        </div>

        <h2 className="font-display font-bold text-5xl md:text-7xl mb-20 uppercase tracking-tighter">
          What I <span className="text-accent-orange italic">Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-foreground/5 border border-white/10 p-8 hover:bg-foreground/10 transition-colors duration-500 group"
            >
              <div className="text-accent-lime font-mono text-xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1}.
              </div>
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground group-hover:text-accent-lime transition-colors">
                <span className={index % 2 === 0 ? "chonky-underline-lime" : "chonky-underline-orange"}>
                  {skill.name}
                </span>
              </h3>
              <div className="code-editor-style">
                <p className="text-foreground/70 leading-relaxed font-light text-sm">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
