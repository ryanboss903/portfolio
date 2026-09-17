"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
  textClassName?: string;
}

export default function Marquee({ text, speed = 1, className = "", textClassName = "" }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const t1 = textRef1.current;
    const t2 = textRef2.current;

    if (!container || !t1 || !t2) return;

    let x = 0;
    let direction = -1;

    // Optional: detect scroll direction to reverse marquee
    let lastScrollY = window.scrollY;
    
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      direction = currentScrollY > lastScrollY ? -1 : 1;
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", onScroll);

    const ticker = gsap.ticker.add(() => {
      x += speed * direction;
      
      // Reset position when it scrolls fully out of view
      if (x <= -100) {
        x = 0;
      } else if (x >= 0) {
        x = -100;
      }
      
      gsap.set(t1, { xPercent: x });
      gsap.set(t2, { xPercent: x + 100 });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      gsap.ticker.remove(ticker);
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden w-full flex whitespace-nowrap ${className}`}>
      <div ref={textRef1} className={`absolute will-change-transform ${textClassName}`}>
        {text}&nbsp;
      </div>
      <div ref={textRef2} className={`absolute will-change-transform ${textClassName}`}>
        {text}&nbsp;
      </div>
    </div>
  );
}
