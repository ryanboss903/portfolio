"use client";

import { techStack } from "@/lib/data";

export default function Ticker() {
  // Duplicate stack to create seamless infinite loop
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full bg-foreground/5 border-y border-white/10 py-6 overflow-hidden relative z-10">
      
      {/* Fade gradients on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
        {duplicatedStack.map((tech, index) => (
          <div key={index} className="flex items-center gap-8 group cursor-default">
            <span className="font-mono text-sm md:text-base uppercase tracking-widest text-foreground/60 group-hover:text-accent-lime transition-colors duration-300">
              {tech}
            </span>
            <span className="text-accent-orange text-xs font-mono opacity-50">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
