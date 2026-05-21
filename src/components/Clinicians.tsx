/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, BadgeCheck } from 'lucide-react';

export default function Clinicians() {
  const [hoveredDoc, setHoveredDoc] = useState<string | null>(null);

  const doctors = [
    {
      name: 'Dr. Rajan Shah',
      role: 'DIRECTOR & SENIOR INTEGRATIVE SPECIALIST',
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
      tagline: 'Combining robotic surgical precision with targeted metabolic restoration protocols.',
      specialties: ['Precision Surgical Robotics', 'Tissue Regeneration Trials', 'Organ Span Extension']
    },
    {
      name: 'Dr. Anjali Singh',
      role: 'CHIEF OF FUNCTIONAL MEDICINE',
      imageUrl: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400',
      tagline: 'Leading research on enteric microbiome analysis and personalized metabolic mappings.',
      specialties: ['Microbiome Profiling', 'Vaginal-Enteric Diagnostics', 'Hormonal Equilibrium']
    },
    {
      name: 'Dr. Vikram Malhotra',
      role: 'LEAD, LONGEVITY & CLINICAL RESEARCH',
      imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
      tagline: 'Directing human performance trials, Vo2 peaks study, and cellular epigenetic testing.',
      specialties: ['Vo2 Peak Studies', 'Telomere Dynamics Trial', 'Epigenetic Reprogramming']
    }
  ];

  return (
    <section id="research" className="relative bg-bg-azure py-20 lg:py-28 border-t border-gray-100 overflow-hidden">
      {/* Dynamic ambient background blobs */}
      <div className="absolute top-1/3 right-10 h-[350px] w-[350px] rounded-full bg-orange-vitality/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 h-[300px] w-[300px] rounded-full bg-turquoise-brand/5 blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="mb-20 text-center space-y-4">
          <span className="text-xs font-black tracking-widest text-[#006A66] uppercase block">
            MEDICAL LEADERSHIP
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight text-navy-dark leading-tight">
            Master <span className="italic font-light text-turquoise-brand">Clinicians</span>
          </h2>
          <p className="mx-auto max-w-lg text-xs leading-relaxed text-gray-500 font-medium">
            The brilliant medical minds directing our precision-guided longevity and cellular health protocols.
          </p>
        </div>

        {/* 3 circular avatar column layouts */}
        <div className="grid grid-cols-1 gap-16 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredDoc(doc.name)}
              onMouseLeave={() => setHoveredDoc(null)}
              className="flex flex-col items-center text-center space-y-6 group cursor-pointer relative"
            >
              {/* Outer decorative ring container for the circle avatar */}
              <div className="relative">
                
                {/* Concentric Orbiting Paths (Visible on Hover and adds deep aesthetic texture) */}
                <div className="absolute inset-0 -m-5 flex items-center justify-center pointer-events-none">
                  {/* Orbit 1: Slow rotating dashed ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute h-56 w-56 rounded-full border border-dashed border-[#1E9E98]/20"
                  />
                  {/* Orbit 2: Faster counter-rotating track */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute h-[210px] w-[210px] rounded-full border border-dashed border-orange-vitality/10"
                  />
                  {/* Orbiting dot */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute h-56 w-56 rounded-full"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-turquoise-brand shadow-md shadow-turquoise-brand/40" />
                  </motion.div>
                  
                  {/* Orbiting dot 2 */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute h-[210px] w-[210px] rounded-full"
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-orange-vitality shadow-md shadow-orange-vitality/40" />
                  </motion.div>
                </div>

                {/* Outer white ring boundary */}
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-48 w-48 rounded-full p-2 bg-white shadow-xl shadow-navy-dark/5 flex items-center justify-center overflow-hidden border border-gray-100"
                >
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Mini credential badge icon */}
                <span className="absolute bottom-2 right-2 bg-white text-[#2FB7B1] p-1.5 rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-10">
                  <BadgeCheck className="h-5 w-5 fill-current text-turquoise-brand stroke-white animate-pulse-slow" />
                </span>
              </div>

              {/* Bio Details */}
              <div className="space-y-2 max-w-xs relative z-10">
                <h3 className="text-2xl font-bold tracking-tight text-navy-dark group-hover:text-turquoise-brand transition-colors font-sans">
                  {doc.name}
                </h3>
                
                {/* Clinical Role uppercase */}
                <p className="text-[10px] font-black tracking-widest text-[#006A66] uppercase leading-tight">
                  {doc.role}
                </p>

                {/* Subtext description visible on hover or mobile */}
                <p className="text-xs text-gray-500 pt-2 leading-relaxed h-[44px] overflow-hidden line-clamp-2">
                  {doc.tagline}
                </p>
              </div>

              {/* Advanced info popover tooltips representing premium design complexity */}
              <AnimatePresence>
                {hoveredDoc === doc.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", damping: 22, stiffness: 350 }}
                    className="absolute -bottom-4 translate-y-full z-30 w-72 rounded-2xl dark-glassmorphic-card p-5 text-left border border-white/10 shadow-2xl pointer-events-none"
                  >
                    <div className="flex items-center gap-2 text-turquoise-brand font-extrabold text-[10px] tracking-widest uppercase mb-3">
                      <Award className="h-4 w-4" /> CLINICAL STANDARDS
                    </div>
                    <div className="space-y-2.5">
                      {doc.specialties.map((spec, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex gap-2 items-center text-xs font-semibold text-gray-200"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-vitality" />
                          <span>{spec}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
