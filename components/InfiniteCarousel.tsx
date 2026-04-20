"use client";

import { ReactNode } from "react";

interface InfiniteCarouselProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
}

export default function InfiniteCarousel({ 
  children, 
  speed = "normal", 
  direction = "left" 
}: InfiniteCarouselProps) {
  
  const speedClass = {
    slow: "duration-[40s]",
    normal: "duration-[25s]",
    fast: "duration-[15s]"
  }[speed];

  const animateClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="relative flex overflow-x-hidden group bg-white py-4 w-full">
      {/* Left Gradient Overlay - To hide hard edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      
      {/* Right Gradient Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Primary Track */}
      <div className={`flex shrink-0 gap-6 px-3 ${animateClass} group-hover:[animation-play-state:paused]`}>
        {children}
      </div>

      {/* Duplicate Track for seamless loop */}
      <div aria-hidden="true" className={`flex shrink-0 gap-6 px-3 ${animateClass} group-hover:[animation-play-state:paused]`}>
        {children}
      </div>
    </div>
  );
}
