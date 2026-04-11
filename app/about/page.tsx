"use client";

import { motion } from "framer-motion";
import AnimatedCard from "@/components/AnimatedCard";
import Image from "next/image";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 relative w-full">
      <div className="container mx-auto max-w-7xl">
        {/* 1. Doctor Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl rounded-full z-0 opacity-50" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass z-10 border border-white/10 shadow-2xl">
                {/* Premium Initial Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex flex-col items-center justify-center border border-white/5 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] group">
                  <div className="w-40 h-40 rounded-full border border-gold/30 flex items-center justify-center bg-dark-900/50 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:scale-105 transition-transform duration-700">
                    <span className="text-7xl font-heading text-transparent bg-clip-text bg-gradient-to-b from-gold to-white/50 tracking-tighter">
                      DS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-8">
              <div>
                <h2 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">Founder & Lead Clinician</h2>
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">Dr. Killamsetty Sai Sandeep</h3>
                <p className="text-accent text-xl font-medium tracking-wide">MDS Orthodontist | Aligners & Braces Specialist</p>
              </div>
              
              <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light">
                <p>
                  As a visionary in the field of modern orthodontics, Dr. Sandeep brings a meticulous, detail-oriented approach to restorative and cosmetic dentistry. With years of specialized training in advanced aligner therapy and structural braces, he has transformed thousands of smiles, blending clinical precision with artistic balance.
                </p>
                <p>
                  Dr. Sandeep believes that true luxury in healthcare comes from personalized, patient-centric experiences. His philosophy is simple: every smile is a unique canvas, and every treatment should be as comfortable, invisible, and efficient as possible, day or night.
                </p>
              </div>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gold pl-6 py-2">
                  <p className="text-white/90 italic font-heading text-xl">
                    "Your smile is your signature. We ensure it's written beautifully, confidently, and effortlessly."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Pioneers Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 pt-20 border-t border-white/5"
        >
          <h1 className="text-gold text-sm font-bold tracking-widest uppercase mb-4">About Day & Night</h1>
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">Pioneers of the Ultimate Sense of Beauty</h2>
          <p className="text-white/70 text-lg leading-relaxed font-light">
            Founded with the vision to elevate dentistry to an art form, Day & Night Dental Clinic 
            combines cutting-edge digital dentistry, luxurious care, and uncompromising precision 
            to create smiles that radiate confidence and elegance.
          </p>
        </motion.div>

        {/* 3. Our Philosophy & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(44,188,228,0.15)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
              alt="Luxury Dental Clinic" 
              className="w-full h-full object-cover grayscale-[0.3]"
            />
          </div>
          <div className="space-y-8">
            <h3 className="font-heading text-3xl font-bold">Our Philosophy</h3>
            <p className="text-white/70 leading-relaxed">
              We believe a beautiful smile is the ultimate expression of inner health and outer confidence. 
              Our designers use the 'Ultimate Smile AI' concept to map your facial features rigorously 
              before performing any physical treatments.
            </p>
            <p className="text-white/70 leading-relaxed">
              In our serene, state-of-the-art facility, you're not just a patient; you're a patron of art, 
              and your smile is our masterpiece.
            </p>
          </div>
        </div>

        {/* 4. Core Values */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-bold mb-10 text-center">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Precision", "Artistry", "Luxury", "Integrity"].map((value, idx) => (
              <AnimatedCard key={idx} delay={idx * 0.1} className="p-8 text-center bg-dark-800/80 hover:bg-dark-800 transition-colors border border-white/5">
                <h4 className="font-heading text-2xl font-bold text-accent mb-4">{value}</h4>
                <p className="text-sm text-white/60">
                  Upholding the highest standards to deliver world-class dental experiences day and night.
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
