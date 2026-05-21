/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, Droplet, HeartPulse, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function SpecializedExcellence() {
  const pathways = [
    {
      id: 'gastro',
      title: 'Gastroenterology',
      tagline: 'Advanced endoscopy, gut microbiome analysis, and comprehensive digestive health protocols.',
      bullets: ['IBD Management', 'Advanced Endoscopy'],
      icon: Activity,
      borderColor: 'group-hover:border-turquoise-brand/50'
    },
    {
      id: 'diabeto',
      title: 'Diabetology',
      tagline: 'Personalized reversal programs and precision glucose monitoring for metabolic resilience.',
      bullets: ['CGM Integration', 'Reversal Protocols'],
      icon: Droplet,
      borderColor: 'group-hover:border-orange-vitality/50'
    },
    {
      id: 'endocrino',
      title: 'Endocrinology',
      tagline: 'Optimizing hormonal balance for energy, mood, and long-term vitality.',
      bullets: ['Thyroid Health', 'Hormonal Balancing'],
      icon: HeartPulse,
      borderColor: 'group-hover:border-violet-400/50'
    }
  ];

  return (
    <section id="wellness" className="relative overflow-hidden bg-navy-dark py-20 lg:py-28 text-white">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-turquoise-brand/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-orange-vitality/5 blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4.5xl text-white">
            Specialized Excellence
          </h2>
          <p className="mx-auto max-w-xl text-xs font-semibold uppercase tracking-wider text-turquoise-brand">
            Precision care pathways for the most critical pillars of your health.
          </p>
        </div>

        {/* 3-Column Dark Glass Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pathways.map((path) => {
            const IconComp = path.icon;
            return (
              <div
                key={path.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-black/20"
              >
                {/* Dynamic Left Colored Border Strip */}
                <div className={`absolute left-0 top-0 h-full w-1 origin-left scale-y-0 bg-gradient-to-b from-[#2FB7B1] to-[#F97316] transition-transform duration-300 group-hover:scale-y-100`}></div>

                <div>
                  {/* Icon Emblem */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-turquoise-brand border border-white/5 transition-all group-hover:bg-white/10 group-hover:scale-105">
                    <IconComp className="h-6 w-6 animate-pulse-slow" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black tracking-tight text-white transition-colors group-hover:text-turquoise-brand">
                      {path.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-300">
                      {path.tagline}
                    </p>
                  </div>

                  {/* Pathways Specific Targets */}
                  <div className="mt-6 space-y-3 border-t border-white/5 pt-6">
                    {path.bullets.map((bullet, index) => (
                      <div key={index} className="flex items-center gap-2.5 text-xs font-bold text-gray-100 uppercase">
                        <Check className="h-4 w-4 text-turquoise-brand shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Chevron Trigger */}
                <div className="mt-8 flex items-center justify-between text-2xs font-extrabold tracking-widest text-[#2FB7B1] uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Pathway Protocol Active</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
