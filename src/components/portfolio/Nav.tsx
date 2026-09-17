"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "../ui/Marquee";
import { personalInfo } from "@/lib/data";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav 
        className={`w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-background/85 backdrop-blur-md py-3.5 border-b border-white/10" 
            : "bg-transparent py-5"
        }`}
      >
        {/* Subtle Background Marquee */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center overflow-hidden">
          <Marquee text={`${personalInfo.name} — ${personalInfo.role} — `} speed={0.5} textClassName="font-display font-black text-6xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex justify-between items-center">
          <Link 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "#hero")} 
            className="text-xl font-display font-black tracking-tighter text-foreground group"
          >
            <span>RYAN</span>
            <span className="text-accent-lime">.</span>
            <span className="text-accent-orange">O</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <li key={i}>
                <Link 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs uppercase tracking-widest font-mono text-foreground/70 hover:text-accent-lime transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent-lime transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 text-foreground/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-accent-lime" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-neutral-950/95 border-b border-white/15 backdrop-blur-2xl py-6 px-6 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col gap-4">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-mono uppercase tracking-widest text-foreground/80 hover:text-accent-lime transition-colors block py-1.5"
                >
                  // {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-foreground/50">
            <span className="text-accent-lime">● Available for CTO advisory</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      )}
    </header>
  );
}
