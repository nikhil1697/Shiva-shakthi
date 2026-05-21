/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ArrowRight, Activity, Heart, HeartPulse, Sparkles, X, Check, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import { EcosystemCenter } from '../types';

interface EcosystemsProps {
  onBookCenter: (centerName: string) => void;
}

export default function Ecosystems({ onBookCenter }: EcosystemsProps) {
  const [selectedCenter, setSelectedCenter] = useState<EcosystemCenter | null>(null);

  const centers: EcosystemCenter[] = [
    {
      id: 'revive',
      name: 'REVIVE',
      overline: 'MEDICAL CENTER',
      tagline: '"Beyond the scalpel - we heal the whole you."',
      description: 'Our state-of-the-art surgical and physical rehabilitation alliance focuses on rebuilding physical strength and correcting mechanical issues using cutting-edge cellular medicine and customized pre-operative and post-operative workflows.',
      bullets: ['Pre-surgery optimization', 'Fast-track recovery', 'Pain management'],
      colorTheme: 'red',
      icon: 'Activity'
    },
    {
      id: 'care-me',
      name: 'CARE ME',
      overline: 'INTERNAL CARE',
      tagline: '"Precision diagnostics for a resilient gut and vibrant metabolism."',
      description: 'Your gut and metabolic pathways form the epicenter of physical vitality. We employ advanced micro-biome mapping, metabolic analysis, and customized nutrition protocols to resolve chronic internal inflammation and achieve weight optimization.',
      bullets: ['Metabolic mapping', 'Gut microbiome profiling', 'Endocrine balance optimization'],
      colorTheme: 'blue',
      icon: 'Heart'
    },
    {
      id: 'reflexo',
      name: 'REFLEXO',
      overline: 'HOLISTIC LAB',
      tagline: '"Reconnect your nervous system with ancient precision."',
      description: 'The neuromuscular grid is the circuit board of your body. Combining precise reflex therapy with modern biofeedback systems, Reflexo restores deep autonomic equilibrium to optimize heart rate variability and relieve severe stress patterns.',
      bullets: ['Stress biofeedback mapping', 'Reflexology therapy', 'Nerve pathway restoration'],
      colorTheme: 'yellow',
      icon: 'BrainCircuit'
    },
    {
      id: 'chakra',
      name: 'CHAKRA',
      overline: 'ENERGY MED',
      tagline: '"Unlock the energetic blueprints of your cellular health."',
      description: 'True vitality spans both physical matter and bio-electric fields. Through non-invasive diagnostic scanning and customized vibrational frequency modalities, Chakra restores your body’s unique energetic alignment to foster deep emotional and cell regeneration.',
      bullets: ['Bio-field & Aura scanning', 'Vibrational frequency healing', 'Spiritual alignment sessions'],
      colorTheme: 'violet',
      icon: 'Zap'
    }
  ];

  const getThemeClasses = (theme: 'red' | 'blue' | 'yellow' | 'violet') => {
    switch (theme) {
      case 'red':
        return {
          text: 'text-red-500',
          bg: 'bg-red-50',
          border: 'border-red-500',
          hoverBorderAndShadow: 'hover:border-red-400 hover:shadow-red-500/5',
          bulletIcon: 'text-red-500'
        };
      case 'blue':
        return {
          text: 'text-[#006A66]',
          bg: 'bg-[#E0F7F6]',
          border: 'border-[#006a66]',
          hoverBorderAndShadow: 'hover:border-[#006a66] hover:shadow-teal-500/5',
          bulletIcon: 'text-[#006a66]'
        };
      case 'yellow':
        return {
          text: 'text-amber-600',
          bg: 'bg-amber-50',
          border: 'border-amber-500',
          hoverBorderAndShadow: 'hover:border-amber-400 hover:shadow-amber-500/5',
          bulletIcon: 'text-amber-500'
        };
      case 'violet':
        return {
          text: 'text-violet-600',
          bg: 'bg-violet-50',
          border: 'border-violet-500',
          hoverBorderAndShadow: 'hover:border-violet-400 hover:shadow-violet-500/5',
          bulletIcon: 'text-violet-600'
        };
    }
  };

  const getIconComponent = (iconName: string, themeColor: 'red' | 'blue' | 'yellow' | 'violet') => {
    const classes = getThemeClasses(themeColor);
    const sizeClass = 'h-5 w-5';
    switch (iconName) {
      case 'Activity':
        return <Activity className={`${sizeClass} ${classes.text}`} />;
      case 'Heart':
        return <Heart className={`${sizeClass} ${classes.text}`} />;
      case 'BrainCircuit':
        return <BrainCircuit className={`${sizeClass} ${classes.text}`} />;
      case 'Zap':
        return <Zap className={`${sizeClass} ${classes.text}`} />;
      default:
        return <HeartPulse className={`${sizeClass} ${classes.text}`} />;
    }
  };

  return (
    <section id="ecosystems" className="bg-bg-azure py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading Statement */}
        <div className="mb-14 text-center space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-dark sm:text-4.5xl">
            Precision Ecosystems
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-medium text-gray-500 uppercase sm:text-base">
            Focused centers dedicated to specific pillars of your healing journey.
          </p>
        </div>

        {/* 4-Column Grid of Center Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centers.map((center) => {
            const classes = getThemeClasses(center.colorTheme);
            return (
              <div
                key={center.id}
                onClick={() => setSelectedCenter(center)}
                className={`group flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${classes.hoverBorderAndShadow} hover:border-t-4`}
              >
                <div>
                  {/* Overline & Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold tracking-wider ${classes.text}`}>
                      {center.overline}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${classes.bg}`}>
                      {getIconComponent(center.icon, center.colorTheme)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black tracking-tight text-navy-dark">
                      {center.name}
                    </h3>
                    <p className="text-xs italic leading-relaxed text-gray-500">
                      {center.tagline}
                    </p>
                  </div>

                  {/* Bullets List */}
                  <ul className="my-6 space-y-2.5 border-t border-gray-50 pt-5">
                    {center.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <Check className={`h-3.5 w-3.5 ${classes.bulletIcon} shrink-0`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <button className={`inline-flex items-center gap-1 text-[13px] font-bold tracking-wide transition group-hover:gap-2 ${classes.text}`}>
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ecosystem Detail Modals (Overlay Popup) */}
      {selectedCenter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/60 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150 sm:p-8">
            {/* Top Close bar */}
            <button
              onClick={() => setSelectedCenter(null)}
              className="absolute right-4 top-4 rounded-full bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Inner Content */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${getThemeClasses(selectedCenter.colorTheme).bg}`}>
                  {getIconComponent(selectedCenter.icon, selectedCenter.colorTheme)}
                </div>
                <div>
                  <span className={`text-xs font-black tracking-wider ${getThemeClasses(selectedCenter.colorTheme).text}`}>
                    {selectedCenter.overline}
                  </span>
                  <h3 className="text-2xl font-extrabold text-navy-dark">{selectedCenter.name}</h3>
                </div>
              </div>

              <blockquote className="border-l-4 border-gray-200 pl-4 text-sm italic text-gray-500 leading-relaxed">
                {selectedCenter.tagline}
              </blockquote>

              <p className="text-sm leading-relaxed text-gray-600">
                {selectedCenter.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-dark">Clinical Pillars Included:</h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedCenter.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 rounded-xl bg-gray-50 p-2.5 text-xs font-bold text-gray-700">
                      <ShieldCheck className={`h-4 w-4 ${getThemeClasses(selectedCenter.colorTheme).bulletIcon}`} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popup CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onBookCenter(selectedCenter.name);
                    setSelectedCenter(null);
                  }}
                  className="flex-1 rounded-full bg-orange-vitality py-3 text-center text-sm font-bold tracking-wider text-white hover:bg-orange-600"
                >
                  REQUEST CONSULTATION
                </button>
                <button
                  onClick={() => setSelectedCenter(null)}
                  className="flex-1 rounded-full border border-gray-200 py-3 text-center text-sm font-semibold text-gray-600 hover:bg-gray-50"
                >
                  CLOSE DETAILS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
