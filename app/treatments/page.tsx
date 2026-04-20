"use client";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const getImagePath = (name: string) => {
  return `/images/services/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`;
};

const SERVICES = [
  { name: "Metal Braces", desc: "Traditional alignment for complex structural issues.", extendedDesc: "Benefits: Highly effective for severe misalignments.\n\nProcedure: Brackets are bonded to teeth and connected with a wire.\n\nWhy it is recommended: Best for complex bite issues and severe crowding." },
  { name: "Clear Aligners", desc: "Invisible, comfortable alignment for a discreet transformation.", extendedDesc: "Benefits: Removable, nearly invisible, and very comfortable.\n\nProcedure: Custom-fitted removable trays gradually shift your teeth.\n\nWhy it is recommended: Perfect for mild to moderate alignment issues." },
  { name: "Smile Designing", desc: "Comprehensive aesthetics tailored to your facial symmetry.", extendedDesc: "Benefits: Enhances overall facial aesthetics and deeply boosts confidence.\n\nProcedure: Comprehensive digital mapping and multi-step cosmetic improvements.\n\nWhy it is recommended: Essential for total smile makeovers." },
  { name: "Root Canal Treatment", desc: "Painless microscopic therapy to save your natural teeth.", extendedDesc: "Benefits: Saves severely decayed teeth and stops deep infection pain.\n\nProcedure: Infected pulp is safely removed, cleaned, and sealed microscopically.\n\nWhy it is recommended: Required when treating deep cavities or infected tooth pulp." },
  { name: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth.", extendedDesc: "Benefits: Functions and looks identically to natural teeth.\n\nProcedure: Titanium post is placed in the jawbone, capped with a lifelike crown.\n\nWhy it is recommended: Best for replacing single or multiple missing teeth permanently." },
  { name: "Dental Scaling", desc: "Advanced ultrasonic cleaning for optimal gum health.", extendedDesc: "Benefits: Prevents gum disease and eliminates tartar buildup.\n\nProcedure: Ultrasonic tools safely remove plaque without harming enamel.\n\nWhy it is recommended: Strongly recommended for routine hygiene maintenance every 6 months." },
  { name: "Extraction", desc: "Safe, comfortable removal of compromised teeth.", extendedDesc: "Benefits: Prevents spread of decay and relieves severe crowding.\n\nProcedure: Gently and painlessly extracting irrecoverable native teeth under anesthesia.\n\nWhy it is recommended: Necessary for extremely decayed, damaged, or impacted wisdom teeth." },
  { name: "FPD", desc: "Fixed partial dentures to restore function and appearance.", extendedDesc: "Benefits: Fills gaps securely without needing daily removal.\n\nProcedure: A bridge is securely anchored to adjacent healthy teeth.\n\nWhy it is recommended: Ideal for patients missing one or a few adjacent teeth." },
  { name: "Facial Fracture Surgery", desc: "Expert maxillofacial reconstructive procedures.", extendedDesc: "Benefits: Restores critical facial aesthetics and mechanical function.\n\nProcedure: Surgical realignment and stabilization of jaw or facial bones.\n\nWhy it is recommended: Mandatory for trauma cases involving the facial skeleton." },
  { name: "Flap Surgery", desc: "Advanced periodontal treatment for severe gum disease.", extendedDesc: "Benefits: Deeply cleans tooth roots and meticulously repairs bone damage.\n\nProcedure: Gums are gently lifted to clean deep pockets, then securely sutured.\n\nWhy it is recommended: Essential for advanced periodontitis that basic scaling cannot resolve." },
  { name: "Cosmetic Fillings", desc: "Tooth-colored restorations completely invisible to the eye.", extendedDesc: "Benefits: Restores tooth integrity invisibly while blending perfectly with enamel.\n\nProcedure: Decayed enamel is removed and carefully filled with composite resin.\n\nWhy it is recommended: Best practice for treating cavities or repairing small native chips." },
  { name: "Gum Depigmentation", desc: "Laser treatment for an even, healthy pink gumline.", extendedDesc: "Benefits: Enhances aesthetic appeal by neutralizing dark melanin spots.\n\nProcedure: Advanced lasers gently and painlessly peel superficial pigmented layers.\n\nWhy it is recommended: Highly recommended for patients experiencing dark or heavily uneven gums." },
  { name: "Tooth Whitening", desc: "Professional grade brightening up to 8 shades lighter.", extendedDesc: "Benefits: Dramatically enhances smile brightness safely in one hour.\n\nProcedure: Application of professional bleaching agents selectively activated by light.\n\nWhy it is recommended: Quickest fix for heavily stained or naturally yellowed teeth." },
  { name: "Laser Treatment", desc: "Minimally invasive, precise soft tissue therapy.", extendedDesc: "Benefits: Faster healing, substantially less bleeding, and superior comfort.\n\nProcedure: Focused light energy performs soft tissue corrections seamlessly.\n\nWhy it is recommended: Top choice for gum contouring, ulcer treatments, and minor surgeries." },
  { name: "Digital Dentistry", desc: "3D scanning and printing for ultra-precise diagnostics.", extendedDesc: "Benefits: Eliminates messy molds and guarantees incredibly precise results.\n\nProcedure: Intraoral scanners capture a flawless 3D model of your mouth.\n\nWhy it is recommended: Standard procedure for precise crowns, aligners, and comprehensive implant planning." },
  { name: "Dental Health Scanner", desc: "Comprehensive intraoral imaging for complete oral mappings.", extendedDesc: "Benefits: Detects hidden issues early and tracks oral health over time.\n\nProcedure: A non-invasive wand effortlessly scans teeth in real-time, displaying structural models instantly.\n\nWhy it is recommended: A crucial step for thorough diagnostic checkups and treatment simulations." },
];

export default function Treatments() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-neutral-50 text-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold mb-6"
          >
            Our Treatments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A comprehensive suite of premium dental services, utilizing state-of-the-art technology for unparalleled results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <AnimatedCard
              key={idx}
              delay={idx * 0.05}
              className="group border border-gray-200 hover:border-primary bg-white transition-colors h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md"
            >
              {/* IMAGE */}
              <img
                src={getImagePath(service.name)}
                alt={service.name}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105 border-b border-gray-100"
                onError={(e) => (e.currentTarget.src = "/images/services/default.jpg")}
              />

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                  {service.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex-grow" />

                <div className="overflow-hidden">
                  <AnimatePresence initial={false}>
                    {expandedIndex === idx && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="pt-4 border-t border-gray-100 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                          {service.extendedDesc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div 
                  onClick={() => toggleExpand(idx)}
                  className="mt-6 pt-4 border-t border-gray-100 text-xs text-primary font-bold uppercase tracking-widest cursor-pointer hover:text-gray-900 transition-colors flex justify-between items-center"
                >
                  <span>{expandedIndex === idx ? "Show Less" : "Learn More"}</span>
                  <motion.div
                    animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
