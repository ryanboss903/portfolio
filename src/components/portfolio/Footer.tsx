"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socials, personalInfo } from "@/lib/data";
import Marquee from "../ui/Marquee";
import { ArrowUpRight, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      ".footer-content",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="min-h-[80vh] w-full relative bg-foreground text-background pt-20 sm:pt-28 pb-10 flex flex-col justify-between z-[4] overflow-hidden">
      
      <div className="container mx-auto px-6 footer-content flex-1 flex flex-col justify-center max-w-7xl">
        
        <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[8vw] leading-[0.9] tracking-tighter uppercase mb-12 sm:mb-16">
          Let's <span className="text-accent-orange">Talk</span>
        </h2>

        {/* Responsive Grid with proper column spans to eliminate overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-background/20 pt-10">
          
          {/* Contact Column: 7 Cols */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-background/50 font-mono text-xs sm:text-sm tracking-widest uppercase block mb-4 sm:mb-6">
              // Direct Inquiries &amp; Advisory
            </span>
            
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-accent-orange transition-colors block mb-2 break-all sm:break-normal leading-tight group"
            >
              <span className="group-hover:underline underline-offset-4 decoration-accent-orange">
                {personalInfo.email}
              </span>
            </a>
            
            <a 
              href={`mailto:${personalInfo.altEmail}`} 
              className="font-display font-medium text-lg sm:text-xl md:text-2xl text-background/80 hover:text-accent-lime transition-colors block mb-4 break-all sm:break-normal"
            >
              {personalInfo.altEmail}
            </a>

            <a 
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-background/10 hover:bg-background/20 text-background font-mono text-xs w-fit mb-6 transition-colors border border-background/15 group"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>WhatsApp: {personalInfo.phone}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <div className="p-4 rounded-xl bg-background/5 border border-background/10 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-mono text-background/60 mb-1">
                <span className="w-2 h-2 rounded-full bg-accent-orange" />
                <span className="uppercase tracking-wider font-semibold">Availability Status</span>
              </div>
              <p className="text-background/80 font-light text-sm leading-relaxed">
                Currently open for Startup CTO roles, system architecture consulting, and high-impact full stack contracts.
              </p>
            </div>
          </div>

          {/* Socials Column: 5 Cols with responsive border */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-background/20 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-start">
             <span className="text-background/50 font-mono text-xs sm:text-sm tracking-widest uppercase block mb-4 sm:mb-6">
               // Digital Presence
             </span>
             <ul className="flex flex-col gap-3 sm:gap-4">
               {socials.map((s, i) => (
                 <li key={i}>
                   <a 
                    href={s.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-display font-bold text-xl sm:text-2xl md:text-3xl hover:text-accent-orange transition-colors inline-flex items-center gap-3 group"
                   >
                     <span className="w-0 h-[2px] bg-accent-orange group-hover:w-6 transition-all duration-300" />
                     <span>{s.name}</span>
                     <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                   </a>
                 </li>
               ))}
             </ul>
          </div>

        </div>

      </div>

      {/* Bottom Marquee & Copyright with safe padding */}
      <div className="w-full mt-16 sm:mt-24">
        <Marquee text={`${personalInfo.name} — CTO & Full Stack Software Engineer — `} speed={0.8} textClassName="font-display font-black text-6xl sm:text-8xl md:text-[9vw] text-background opacity-10" />
        
        <div className="container mx-auto px-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-background/50 uppercase tracking-widest max-w-7xl">
          <p>© {new Date().getFullYear()} Ryan Ochieng. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with Next.js 16 &amp; Tailwind</span>
          </p>
        </div>
      </div>
      
    </footer>
  );
}
