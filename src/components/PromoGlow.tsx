/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Activity, Orbit, Sparkles, Star } from 'lucide-react';

export default function PromoGlow() {
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150', alt: 'Dr Rajan Shah' },
    { src: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150', alt: 'Dr Anjali Singh' },
    { src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150', alt: 'Dr Vikram Malhotra' }
  ];

  return (
    <section className="bg-bg-azure pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* Card 1: Integrative Pioneers (Dark background image overlay) */}
          <div className="relative overflow-hidden rounded-3xl h-[280px] group shadow-inner flex flex-col justify-end p-6 text-left">
            <div className="absolute inset-0 z-0 bg-navy-dark/75 transition-opacity duration-300 group-hover:opacity-85"></div>
            <img
              src="https://images.unsplash.com/photo-1579684389781-75601b228122?auto=format&fit=crop&q=80&w=600"
              alt="Medical precision robotics"
              className="absolute inset-0 h-full w-full object-cover mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Visual accent badge */}
            <div className="absolute top-6 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-turquoise-brand/20 backdrop-blur-md text-turquoise-brand">
              <Orbit className="h-5 w-5 animate-spin-slow" />
            </div>

            <div className="relative z-10 space-y-2">
              <h4 className="text-xl font-bold text-white tracking-tight">
                Integrative Pioneers
              </h4>
              <p className="text-xs leading-relaxed text-gray-300">
                Seamlessly blending robotic surgical precision with functional medicine foundations to rebuild and rejuvenate.
              </p>
            </div>
          </div>

          {/* Card 2: Board-Certified Specialists (White card with face pile) */}
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col justify-between text-left transition-all hover:shadow-lg">
            
            {/* Badge Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0F7F6] text-[#006A66]">
              <Users className="h-5 w-5" />
            </div>

            <div className="my-5 space-y-2">
              <h4 className="text-xl font-bold text-navy-dark tracking-tight">
                Board-Certified Specialists
              </h4>
              <p className="text-xs leading-relaxed text-gray-500">
                Our multi-disciplinary team consists of world-renowned experts in GI, Metabolic Health, and Longevity Science.
              </p>
            </div>

            {/* Avatar Stack Facepile */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                {avatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src={avatar.src}
                    alt={avatar.alt}
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-turquoise-brand text-[11px] font-bold text-white ring-2 ring-white">
                  +12
                </div>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-gray-600 uppercase flex items-center gap-1">
                <Star className="h-3 w-3 fill-amber-400 text-amber-500" /> Top Tier Care
              </span>
            </div>
          </div>

          {/* Card 3: Functional Focus (Teal/Turquoise gorgeous gradient pulse card) */}
          <div className="relative overflow-hidden rounded-3xl h-[280px] bg-gradient-to-tr from-[#004D4A] to-[#2FB7B1] p-6 text-left flex flex-col justify-between group shadow-lg">
            {/* Gradient background animated glow circles */}
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-xl group-hover:scale-120 transition-transform"></div>

            {/* Badge Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
              <Activity className="h-5 w-5 animate-pulse" />
            </div>

            <div className="space-y-2 z-10">
              <h4 className="text-xl font-bold text-white tracking-tight">
                Functional Focus
              </h4>
              <p className="text-xs leading-relaxed text-cyan-50">
                Moving beyond symptom suppression to thoroughly address and resolve the root physiological causes of chronic dysfunction.
              </p>
            </div>

            {/* Simulated interactive pulse trace line in vector */}
            <div className="absolute bottom-4 right-6 opacity-30">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-white fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 20 h20 l5 -15 l5 30 l8 -25 l6 18 l4 -8 h20 l4 -12 l4 24 l6 -18 h28" className="animate-pulse" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
