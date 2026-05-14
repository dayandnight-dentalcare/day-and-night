"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import Link from "next/link";
import { treatmentsData } from "@/data/treatments";
import { ArrowRight } from "lucide-react";

export default function Treatments() {
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
          {treatmentsData.map((treatment, idx) => (
            <AnimatedCard
              key={treatment.id}
              delay={idx * 0.05}
              className="group border border-gray-200 hover:border-[#575BA3] bg-white transition-all duration-300 h-full flex flex-col overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 relative block"
            >
              <Link href={`/treatments/${treatment.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {treatment.name}</span>
              </Link>

              {/* IMAGE */}
              <div className="overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-0" />
                <img
                  src={`/images/services/${treatment.id}.jpg`}
                  alt={treatment.name}
                  className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110 border-b border-gray-100"
                  onError={(e) => (e.currentTarget.src = "/images/services/default.jpg")}
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow relative z-0">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-[#575BA3] transition-colors">
                  {treatment.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {treatment.shortDesc}
                </p>

                <div className="flex-grow" />

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-[#575BA3]">
                  <span className="uppercase tracking-widest text-xs">Learn More</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
}
