/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Clock, Star, Check, ArrowRight, X } from 'lucide-react';
import { Program } from '../types';

interface OfferingsSectionProps {
  onBookProgram: (programName: string) => void;
}

export default function OfferingsSection({ onBookProgram }: OfferingsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const programs: Program[] = [
    {
      title: 'Gut Reset Protocol',
      duration: '21 DAYS',
      tag: 'POPULAR',
      description: 'A scientifically validated, fast-tracked biological restoration to rebuild the enteric lining, clear dysbiosis, and optimize micro-biome diversity.',
      imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Metabolic Reversal',
      duration: '12 WEEKS',
      tag: 'INTENSIVE',
      description: 'An expert-guided precision program combining dynamic continuous glucose monitoring with cellular metabolic restoration triggers.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Longevity Fit Program',
      duration: 'ONGOING',
      tag: 'LIFELONG',
      description: 'A tailored physical optimization blueprint focusing on vo2 max peaks, muscular endurance indices, cellular therapy, and biometric feedback.',
      imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const getDetailedBio = (title: string) => {
    switch (title) {
      case 'Gut Reset Protocol':
        return {
          overview: 'The Gut Reset is structured to eradicate pathogenic colonies, introduce high-potency symbiotic flora, and repair digestive single-layer linings.',
          phases: ['Phase 1: Clear & Eradicate (Day 1 - 7)', 'Phase 2: Soothe & Reintegrate (Day 8 - 14)', 'Phase 3: Populate & Thrive (Day 15 - 21)'],
          perks: ['Professional micro-biome mapping', 'Personalized healing shakes', 'Weekly clinical specialist review']
        };
      case 'Metabolic Reversal':
        return {
          overview: 'A premium full-rebuilt protocol targeting biological age metrics, liver lipid accumulation, and insulin response curves for steady energy.',
          phases: ['Phase 1: Baseline mapping & CGM load (Week 1 - 2)', 'Phase 2: Autonomic habituation integration (Week 3 - 8)', 'Phase 3: Resiliency consolidation (Week 9 - 12)'],
          perks: ['24/7 Biosensor monitoring', 'Physician metabolic analysis', 'Custom culinary prep guides']
        };
      case 'Longevity Fit Program':
      default:
        return {
          overview: 'Designed for high performers requesting permanent physical peaks, cognitive longevity indicators, and skeletal preservation metrics.',
          phases: ['Continuous biometric scanning', 'Quarterly muscle index assessments', 'Personalized longevity training regimes'],
          perks: ['Vo2 Max diagnostic lab trials', 'Biological age cellular testing', 'Premium fitness companion app']
        };
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll > 0) {
      const percentage = (container.scrollLeft / maxScroll) * 100;
      setScrollProgress(percentage);
    }
  };

  const handleNext = () => {
    const container = document.getElementById('programs-scroller');
    if (container) {
      container.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const container = document.getElementById('programs-scroller');
    if (container) {
      container.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="relative bg-bg-azure py-20 lg:py-28 border-t border-gray-100 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/4 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#1E9E98]/5 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Arrows */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3 text-left">
            <span className="text-xs font-black tracking-widest text-[#006A66] uppercase">
              CORE OFFERINGS
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-navy-dark leading-tight">
              Health <span className="italic font-light text-turquoise-brand">Transformation</span> Programs
            </h2>
          </div>
          
          {/* Navigation Arrows & Progress track */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Scroll Progress track (desktop) */}
            <div className="hidden sm:block w-32 h-0.5 bg-gray-200/80 rounded-full overflow-hidden mr-4">
              <div 
                className="h-full bg-turquoise-brand transition-all duration-100 ease-out" 
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-dark shadow-sm hover:border-[#006A66] hover:text-[#006A66] transition-colors cursor-pointer"
              aria-label="Previous programs"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-dark shadow-sm hover:border-[#006A66] hover:text-[#006A66] transition-colors cursor-pointer"
              aria-label="Next programs"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Carousel Content Container */}
        <div
          id="programs-scroller"
          onScroll={handleScroll}
          className="scrollbar-none flex gap-8 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProgram(program)}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group min-w-[300px] max-w-[380px] flex-1 shrink-0 snap-start bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/60 shadow-[0_8px_30px_rgba(7,21,36,0.02)] hover:shadow-[0_20px_40px_rgba(7,21,36,0.06)] hover:border-turquoise-brand/30 transition-all duration-300 cursor-pointer text-left flex flex-col"
            >
              {/* Cover Image with label badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent"></div>
                
                {/* Duration Badge */}
                <span className="absolute bottom-4 left-4 bg-navy-dark/85 backdrop-blur-md text-white font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase border border-white/10">
                  {program.duration}
                </span>

                {/* Aesthetic Status badge */}
                <span className="absolute top-4 right-4 bg-orange-vitality text-white font-black text-[9px] tracking-wider px-2.5 py-0.5 rounded-full">
                  {program.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy-dark group-hover:text-turquoise-brand transition-colors font-sans">
                    {program.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-500 mt-2">
                    {program.description}
                  </p>
                </div>
                
                {/* Learn more interactive trigger link */}
                <div className="pt-4 flex items-center justify-between border-t border-gray-100/50 mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006A66] uppercase tracking-wider group-hover:text-turquoise-brand transition-colors">
                    Explore Program <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress track (mobile) */}
        <div className="block sm:hidden w-32 h-0.5 bg-gray-200/80 rounded-full overflow-hidden mx-auto mt-6">
          <div 
            className="h-full bg-turquoise-brand transition-all duration-100 ease-out" 
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

      </div>

      {/* Program Detailed Insights Popup Overlay */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/60 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-8 max-h-[90vh] overflow-y-auto border border-gray-100"
            >
              {/* Top Close bar */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute right-4 top-4 rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors z-10 cursor-pointer"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Inner Content */}
              <div className="space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src={selectedProgram.imageUrl}
                    alt={selectedProgram.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/45 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-orange-vitality text-white text-[9px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase inline-block mb-1">
                      {selectedProgram.duration}
                    </span>
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-white">{selectedProgram.title}</h3>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-gray-600 font-medium">
                  {getDetailedBio(selectedProgram.title).overview}
                </p>

                {/* Protocol phases */}
                <div className="space-y-3 bg-bg-azure/50 p-4 rounded-2xl border border-gray-100/50">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-[#006A66] flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#006A66]" /> PROTOCOL STRUCTURE:
                  </h4>
                  <div className="space-y-2.5">
                    {getDetailedBio(selectedProgram.title).phases.map((ph, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex gap-3 text-xs text-gray-700 font-semibold items-center"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#006A66]/10 text-xs font-black text-[#006A66]">
                          {idx + 1}
                        </span>
                        <span>{ph}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Core Offer Perks list */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-navy-dark flex items-center gap-2">
                    <Star className="h-4 w-4 text-orange-vitality fill-orange-vitality" /> BENEFITS & METRICS:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {getDetailedBio(selectedProgram.title).perks.map((pr, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="flex items-center gap-3 rounded-xl bg-bg-azure/40 px-4 py-3 text-xs font-bold text-gray-700 border border-gray-100/50"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-turquoise-brand/10 text-turquoise-brand">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{pr}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Close CTAs */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onBookProgram(selectedProgram.title);
                      setSelectedProgram(null);
                    }}
                    className="flex-1 rounded-full bg-orange-vitality py-3.5 text-center text-xs font-black tracking-widest text-white hover:bg-orange-600 shadow-md shadow-orange-vitality/10 cursor-pointer"
                  >
                    STRENGTHEN CELL ENROLLMENT
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProgram(null)}
                    className="flex-1 rounded-full border border-gray-200 py-3.5 text-center text-xs font-bold tracking-wider text-gray-600 hover:bg-gray-50 cursor-pointer"
                  >
                    CLOSE BLUEPRINT
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
