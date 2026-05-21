/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Award, Star, Mail, Quote, ShieldAlert, BadgeCheck, Phone } from 'lucide-react';
import { Specialist } from '../types';

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
    <section id="research" className="bg-bg-azure py-16 lg:py-24 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="mb-16 text-center space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-dark sm:text-4.5xl">
            Master Clinicians
          </h2>
          <p className="mx-auto max-w-xl text-sm font-semibold uppercase tracking-wider text-[#006A66]">
            The brilliant minds behind our precision health protocols.
          </p>
        </div>

        {/* 3 circular avatar column layouts */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredDoc(doc.name)}
              onMouseLeave={() => setHoveredDoc(null)}
              className="flex flex-col items-center text-center space-y-6 group cursor-pointer relative"
            >
              {/* Outer decorative ring container for the circle avatar */}
              <div className="relative">
                {/* Simulated rotating outline ring */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-turquoise-brand to-orange-vitality opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow blur-xs transition duration-500"></div>

                {/* Outer white ring boundary */}
                <div className="relative h-48 w-48 rounded-full p-1.5 bg-white shadow-md shadow-navy-dark/5 transition-transform duration-500 group-hover:scale-102 flex items-center justify-center overflow-hidden">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="h-full w-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Mini credential badge icon */}
                <span className="absolute bottom-2 right-2 bg-white text-[#2FB7B1] p-1.5 rounded-full shadow-lg border border-gray-50 flex items-center justify-center">
                  <BadgeCheck className="h-5 w-5 fill-current text-turquoise-brand stroke-white" />
                </span>
              </div>

              {/* Bio Details */}
              <div className="space-y-2 max-w-xs">
                <h3 className="text-2xl font-black tracking-tight text-navy-dark group-hover:text-turquoise-brand transition-colors">
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
              {hoveredDoc === doc.name && (
                <div className="absolute bottom-10 z-30 w-72 rounded-2xl bg-navy-dark p-5 text-left border border-white/10 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150 pointer-events-none">
                  <div className="flex items-center gap-1.5 text-turquoise-brand font-extrabold text-[10px] tracking-widest uppercase mb-3">
                    <Award className="h-4 w-4" /> CLINICAL STANDARDS
                  </div>
                  <div className="space-y-2">
                    {doc.specialties.map((spec, i) => (
                      <div key={i} className="flex gap-2 items-center text-xs font-semibold text-gray-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-vitality" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
