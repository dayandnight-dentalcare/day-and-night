"use client";

import { notFound } from "next/navigation";
import { treatmentsData } from "@/data/treatments";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, CheckCircle2, IndianRupee, HelpCircle, ChevronDown, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { use } from "react";

export default function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const treatment = treatmentsData.find((t) => t.id === slug);

  if (!treatment) {
    return notFound();
  }

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const imagePath = `/images/services/${slug}.jpg`;

  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900 pb-20">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-40 lg:pb-28 overflow-hidden bg-[#575BA3]">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={imagePath}
            alt={treatment.name}
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            onError={(e) => {
              e.currentTarget.src = "/images/services/default.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#575BA3] to-[#454882]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#575BA3] via-transparent to-transparent opacity-80" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white/80 text-sm font-medium mb-6 uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/treatments" className="hover:text-white transition-colors">Treatments</Link>
            <ChevronRight size={14} />
            <span className="text-white">{treatment.name}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
          >
            {treatment.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            {treatment.shortDesc}
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          {/* 2. & 3. INTRODUCTION / WHAT IS IT */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#575BA3] rounded-full inline-block"></span>
                Overview
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {treatment.overview}
              </p>
              
              <div className="bg-[#575BA3]/5 rounded-xl p-6 border border-[#575BA3]/10 mt-8">
                <h3 className="font-heading font-bold text-[#575BA3] text-xl mb-3">Who Needs It?</h3>
                <p className="text-gray-700 leading-relaxed">
                  {treatment.whoNeedsIt}
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2CBCE4]/20 to-[#575BA3]/20 rounded-[2rem] blur-lg opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <img
                src={imagePath}
                alt={`${treatment.name} Overview`}
                className="relative rounded-[1.5rem] w-full h-[300px] md:h-[400px] object-cover shadow-md border border-white"
                onError={(e) => {
                  e.currentTarget.src = "/images/services/default.jpg";
                }}
              />
              
              {/* Highlight Price Card Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-[#2CBCE4]/10 rounded-full flex items-center justify-center text-[#2CBCE4]">
                  <IndianRupee size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Starting From</p>
                  <p className="font-bold text-gray-900 text-lg">{treatment.price}</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100 mb-16" />

          {/* 4. BENEFITS SECTION */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
              Discover why {treatment.name} is the optimal choice for your oral health and aesthetic goals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {treatment.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gray-50/80 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#2CBCE4]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-[#2CBCE4] group-hover:scale-110 transition-transform" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. PROCEDURE / STEPS SECTION */}
          <div className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12 text-center">
              The Procedure Step-by-Step
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {treatment.procedureSteps.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#575BA3] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                    {idx + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-[#575BA3]/30 transition-all">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. PRICE RANGE SECTION */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-[#575BA3] to-[#454882] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <IndianRupee size={200} />
              </div>
              <div className="relative z-10 md:w-2/3">
                <h2 className="text-3xl font-heading font-bold mb-4">Investment in Your Smile</h2>
                <p className="text-blue-100 mb-8 text-lg">
                  We believe in transparent pricing. Below is the estimated range for {treatment.name}.
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 inline-block mb-6">
                  <p className="text-sm text-blue-100 uppercase tracking-widest font-semibold mb-2">Approximate Cost</p>
                  <p className="text-4xl font-bold">{treatment.price}</p>
                </div>
                <p className="text-sm text-blue-200/80">
                  * Note: Final cost may vary depending on the complexity of your specific case and materials chosen. A comprehensive consultation will provide an exact quote.
                </p>
              </div>
            </div>
          </div>

          {/* 7. FAQ SECTION */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 flex items-center gap-3">
              <HelpCircle className="text-[#2CBCE4]" size={32} />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {treatment.faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${expandedFaq === idx ? 'border-[#575BA3] shadow-md bg-[#575BA3]/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${expandedFaq === idx ? 'bg-[#575BA3] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/0">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 8. CTA SECTION */}
      <div className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-gradient-to-br from-[#2CBCE4] to-[#22a1c4] rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-[#2CBCE4]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-white/90 text-lg mb-10">
              Schedule your personalized consultation for {treatment.name} today and take the first step towards perfect oral health.
            </p>
            
            <div className="flex justify-center items-center">
              <Link 
                href="/appointment" 
                className="group relative px-8 py-4 bg-[#575BA3] text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(87,91,163,0.39)] hover:shadow-[0_6px_20px_rgba(87,91,163,0.5)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Calendar size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
