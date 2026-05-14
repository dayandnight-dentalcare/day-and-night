"use client";

import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";

const getIcon = (name: string) => {
  const className = "w-12 h-12 md:w-14 md:h-14 text-white transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]";
  const strokeWidth = 1.2;

  switch (name) {
    case "Metal Braces":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 2c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V5c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 6.5l-1.05-2.05C10.67 3.05 9.46 2 8 2z"/>
          <path d="M6 9h12" />
          <path d="M6 13h12" />
          <rect x="7" y="7.5" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="15" y="7.5" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="7" y="11.5" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="15" y="11.5" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="11" y="7.5" width="2" height="2" rx="0.5" fill="currentColor"/>
          <rect x="11" y="11.5" width="2" height="2" rx="0.5" fill="currentColor"/>
        </svg>
      );
    case "Clear Aligners":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 14s2-4 8-4 8 4 8 4v3c0 2-3 4-8 4s-8-2-8-4v-3z" />
          <path d="M4 14c2-1 5-1 8-1s6 0 8 1" />
        </svg>
      );
    case "Smile Designing":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 5c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V8c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 9.5l-1.05-2.05C10.67 6.05 9.46 5 8 5z"/>
          <path d="M20 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
          <path d="M4 1l.5 1 1 .5-1 .5L4 4l-.5-1-1-.5 1-.5z" />
        </svg>
      );
    case "Root Canal Treatment":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 2c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V5c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 6.5l-1.05-2.05C10.67 3.05 9.46 2 8 2z"/>
          <path d="M12 9v3l-2 3v3" strokeDasharray="1 3" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12l2 3v3" strokeDasharray="1 3" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Dental Implants":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 2c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4v1h2v-1c2.21 0 4-1.79 4-4V5c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 6.5l-1.05-2.05C10.67 3.05 9.46 2 8 2z"/>
          <path d="M12 15v7" />
          <path d="M9 16h6" />
          <path d="M10 18h4" />
          <path d="M10 20h4" />
        </svg>
      );
    case "Dental Scaling":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 4c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V7c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 8.5l-1.05-2.05C10.67 5.05 9.46 4 8 4z"/>
          <path d="M22 2l-7 7-2-2 7-7z" />
          <path d="M15 9l-2 2c-1 1-2 1-3 .5" />
        </svg>
      );
    case "Extraction":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 8c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4v-4c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 12.5l-1.05-2.05C10.67 9.05 9.46 8 8 8z"/>
          <path d="M12 6V2" />
          <path d="M9 5l3-3 3 3" />
        </svg>
      );
    case "FPD":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 6c-1 0-2 1-2 2v2c0 1 .5 2 1.5 2 .5 0 .5 2-.5 3 .5.5 1.5 1 2 1 .5 0 1-.5 2-1-.5-1-.5-3-.5-3 .5 0 1.5-1 1.5-2V8c0-1-1-2-2-2-.5 0-.5.5-.5.5S4.5 6 4 6z" />
          <path d="M20 6c-1 0-2 1-2 2v2c0 1 .5 2 1.5 2 .5 0 .5 2-.5 3 .5.5 1.5 1 2 1 .5 0 1-.5 2-1-.5-1-.5-3-.5-3 .5 0 1.5-1 1.5-2V8c0-1-1-2-2-2-.5 0-.5.5-.5.5S20.5 6 20 6z" />
          <path d="M12 6c-1 0-2 1-2 2v2c0 1 .5 2 1.5 2 .5 0 .5 2-.5 3 .5.5 1.5 1 2 1 .5 0 1-.5 2-1-.5-1-.5-3-.5-3 .5 0 1.5-1 1.5-2V8c0-1-1-2-2-2-.5 0-.5.5-.5.5S12.5 6 12 6z" />
          <path d="M6 8h12" strokeWidth="2" />
        </svg>
      );
    case "Facial Fracture Surgery":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M8 12h8" />
          <path d="M12 8v8" />
          <path d="M9 16l6-8" strokeDasharray="2 2" />
        </svg>
      );
    case "Flap Surgery":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 2c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V5c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 6.5l-1.05-2.05C10.67 3.05 9.46 2 8 2z"/>
          <path d="M4 14c3-2 6-2 8 0" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      );
    case "Cosmetic Fillings":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 2c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V5c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 6.5l-1.05-2.05C10.67 3.05 9.46 2 8 2z"/>
          <circle cx="12" cy="7" r="2" fill="currentColor" />
        </svg>
      );
    case "Gum Depigmentation":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M2 14c4-3 8-3 12 0s8 3 8 0" />
          <path d="M2 17c4-3 8-3 12 0s8 3 8 0" />
          <path d="M12 2l-1 4-4 1 4 1 1 4 1-4 4-1-4-1z" fill="currentColor" />
        </svg>
      );
    case "Tooth Whitening":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 5c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V8c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 9.5l-1.05-2.05C10.67 6.05 9.46 5 8 5z"/>
          <path d="M12 2v1" /><path d="M12 21v1" />
          <path d="M2 12h1" /><path d="M21 12h1" />
          <path d="M5 5l.5.5" /><path d="M18.5 18.5l.5.5" />
          <path d="M19 5l-.5.5" /><path d="M5.5 18.5l-.5.5" />
        </svg>
      );
    case "Laser Treatment":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 6c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V9c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 10.5l-1.05-2.05C10.67 7.05 9.46 6 8 6z"/>
          <path d="M22 2l-6 6" strokeWidth="2" />
          <path d="M16 8l-2 2-2-2 2-2z" fill="currentColor"/>
          <path d="M14 10l-4 4" strokeDasharray="2 2" />
        </svg>
      );
    case "Dental Health Scanner":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 8c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4v-4c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 12.5l-1.05-2.05C10.67 9.05 9.46 8 8 8z"/>
          <path d="M2 4h20v2H2z" fill="currentColor" />
          <path d="M12 6v2" strokeDasharray="1 2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 2c-1.66 0-3 1.34-3 3v4c0 2.21 1.79 4 4 4 0 1.66 0 5-1.5 7.5 1.14.75 2.5 1.5 4.5 1.5s3.36-.75 4.5-1.5c-1.5-2.5-1.5-5.84-1.5-7.5 2.21 0 4-1.79 4-4V5c0-1.66-1.34-3-3-3-1.46 0-2.67 1.05-2.95 2.45L12 6.5l-1.05-2.05C10.67 3.05 9.46 2 8 2z"/>
        </svg>
      );
  }
};

const SERVICES = [
  { name: "Metal Braces" },
  { name: "Clear Aligners" },
  { name: "Smile Designing" },
  { name: "Root Canal Treatment" },
  { name: "Dental Implants" },
  { name: "Dental Scaling" },
  { name: "Extraction" },
  { name: "FPD" },
  { name: "Facial Fracture Surgery" },
  { name: "Flap Surgery" },
  { name: "Cosmetic Fillings" },
  { name: "Gum Depigmentation" },
  { name: "Tooth Whitening" },
  { name: "Laser Treatment" },
  { name: "Dental Health Scanner" },
];

const SPECIALITIES = ["Clear Aligners", "Root Canal Treatment", "Dental Implants"];

export default function TreatmentsSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Reusable Set of Cards for perfect layout alignment in CSS animation
  const CarouselSet = () => (
    <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
      {SERVICES.map((service, idx) => {
        const isSpeciality = SPECIALITIES.includes(service.name);
        
        const slug = service.name.toLowerCase().replace(/\s+/g, "-");

        return (
          <Link 
            href={`/treatments/${slug}`} 
            key={idx}
            className="group relative flex-none w-[160px] sm:w-[180px] md:w-[220px] outline-none"
          >
            {/* 
              Luxury Card Base 
              Using #575BA3 styling as requested with dark overlay for hover
            */}
            <div
              className="h-full w-full rounded-[1.5rem] bg-gradient-to-br from-[#575BA3] to-[#454882] border border-white/10 shadow-[0_4px_20px_rgba(87,91,163,0.15)] hover:shadow-[0_8px_30px_rgba(87,91,163,0.5)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-white"
            >
              {/* Slightly darker overlay on hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle Soft Glow Behind Text */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Elegant Speciality Badge */}
              {isSpeciality && (
                <div className="absolute top-3.5 right-3.5 z-20" title="Speciality Treatment">
                  <Star className="w-4 h-4 md:w-[18px] md:h-[18px] fill-[#FBBF24] text-[#FBBF24] drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] opacity-95 group-hover:scale-110 transition-transform duration-500" />
                </div>
              )}

              {/* Content Section */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full gap-5">
                <div className="p-2 text-white transition-all duration-300">
                  {getIcon(service.name)}
                </div>
                <h4 
                  className="text-[15px] md:text-[17px] font-semibold text-white/95 group-hover:text-white transition-colors leading-snug drop-shadow-sm tracking-wide"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service.name}
                </h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="w-full relative py-12 md:py-16 overflow-hidden group/slider">
      {/* Edge Dimming Gradient Mask */}
      <div 
        className="w-full overflow-hidden max-w-[100vw] mx-auto px-4 md:px-12"
        style={{ 
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", 
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" 
        }}
      >
        {/* CSS Marquee Animation Track */}
        <div 
          className={`flex w-max animate-luxury-marquee pb-16 pt-8 ${isPaused ? '[animation-play-state:paused]' : ''} hover:[animation-play-state:paused]`}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <CarouselSet />
          <CarouselSet />
        </div>
      </div>

      <style jsx global>{`
        @keyframes luxury-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-luxury-marquee {
          animation: luxury-marquee 50s linear infinite;
        }
      `}</style>
    </div>
  );
}
