/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Star, Calendar, Check, ArrowRight, X } from 'lucide-react';
import { Program } from '../types';

interface OfferingsSectionProps {
  onBookProgram: (programName: string) => void;
}

export default function OfferingsSection({ onBookProgram }: OfferingsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  
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

  const handleNext = () => {
    // Mimic carousel focus or scroll
    const container = document.getElementById('programs-scroller');
    if (container) {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    const container = document.getElementById('programs-scroller');
    if (container) {
      container.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="bg-bg-azure py-16 lg:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Arrows */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2 text-left">
            <span className="text-xs font-black tracking-widest text-[#006A66] uppercase">
              CORE OFFERINGS
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-dark sm:text-4.5xl">
              Health Transformation Programs
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-dark shadow-sm hover:bg-gray-50 active:scale-95 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-dark shadow-sm hover:bg-gray-50 active:scale-95 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content Container */}
        <div
          id="programs-scroller"
          className="scrollbar-none flex gap-8 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              onClick={() => setSelectedProgram(program)}
              className="group min-w-[300px] max-w-[380px] flex-1 shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-left"
            >
              {/* Cover Image with label badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Duration Badge */}
                <span className="absolute bottom-4 left-4 bg-navy-dark/85 backdrop-blur-md text-white font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase">
                  {program.duration}
                </span>

                {/* Aesthetic Status badge */}
                <span className="absolute top-4 right-4 bg-orange-vitality text-white font-black text-[9px] tracking-wider px-2.5 py-0.5 rounded-full">
                  {program.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-navy-dark group-hover:text-turquoise-brand transition-colors">
                  {program.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500">
                  {program.description}
                </p>
                
                {/* Learn more interactive trigger link */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-turquoise-brand uppercase tracking-wider group-hover:gap-1.5 transition-all">
                    Explore Program <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detailed Insights Popup Overlay */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/60 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Top Close bar */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute right-4 top-4 rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Inner Content */}
            <div className="space-y-5">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={selectedProgram.imageUrl}
                  alt={selectedProgram.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-orange-vitality text-white text-[9px] font-black px-2 py-0.5 rounded-full tracking-wider uppercase inline-block mb-1">
                    {selectedProgram.duration}
                  </span>
                  <h3 className="text-xl font-extrabold">{selectedProgram.title}</h3>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-600">
                {getDetailedBio(selectedProgram.title).overview}
              </p>

              {/* Protocol phases */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-dark flex items-center gap-1">
                  <Clock className="h-4 w-4 text-[#006A66]" /> PROTOCOL STRUCTURE:
                </h4>
                <div className="space-y-1.5 pl-1">
                  {getDetailedBio(selectedProgram.title).phases.map((ph, idx) => (
                    <div key={idx} className="flex gap-2.5 text-xs text-gray-700 font-semibold items-center">
                      <div className="h-2 w-2 rounded-full bg-[#006A66]"></div>
                      <span>{ph}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Offer Perks list */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-dark flex items-center gap-1">
                  <Star className="h-4 w-4 text-orange-vitality" /> BENEFITS & METRICS:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {getDetailedBio(selectedProgram.title).perks.map((pr, idx) => (
                    <div key={idx} className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2.5 text-xs font-bold text-gray-700">
                      <Check className="h-4 w-4 text-turquoise-brand shrink-0" />
                      <span>{pr}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close CTAs */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onBookProgram(selectedProgram.title);
                    setSelectedProgram(null);
                  }}
                  className="flex-1 rounded-full bg-orange-vitality py-3 text-center text-sm font-bold tracking-wider text-white hover:bg-orange-600"
                >
                  STRENGTHEN CELL ENROLLMENT
                </button>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="flex-1 rounded-full border border-gray-200 py-3 text-center text-sm font-semibold text-gray-600 hover:bg-gray-50"
                >
                  CLOSE BLUEPRINT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
