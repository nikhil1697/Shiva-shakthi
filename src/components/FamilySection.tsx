/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Landmark, Sparkles } from 'lucide-react';

interface FamilySectionProps {
  onStoryClick: () => void;
}

export default function FamilySection({ onStoryClick }: FamilySectionProps) {
  return (
    <section className="bg-bg-azure py-16 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left: Beautiful Circle Image & Hanging Stats Badge */}
          <div className="relative lg:col-span-6 flex justify-center lg:justify-start">
            
            {/* Background absolute glow shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-turquoise-brand/10 blur-3xl"></div>

            {/* Main Rounded Architectural Frame */}
            <div className="relative h-[320px] w-[320px] rounded-full p-2 bg-white shadow-xl shadow-navy-dark/5 xs:h-[380px] xs:w-[380px] sm:h-[420px] sm:w-[420px] overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800"
                alt="Shiva Shakthi Luxury Wellness Sanctuary building"
                className="h-full w-full rounded-full object-cover transition-transform duration-1000 hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Floating Orange lives badge */}
            <div className="absolute bottom-10 right-4 bg-orange-vitality text-white px-6 py-4 rounded-2xl shadow-lg shadow-orange-500/20 max-w-[150px] text-center transform rotate-3 transition-transform hover:rotate-0 flex flex-col justify-center items-center">
              <span className="text-3xl font-black tracking-tight">10k+</span>
              <span className="text-[10px] font-extrabold tracking-widest uppercase">LIVES TRANSFORMED</span>
            </div>
          </div>

          {/* Right: Narrative Story Block */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-black tracking-wider text-turquoise-brand uppercase flex items-center gap-1">
                <Landmark className="h-4 w-4" /> GENERATIONAL WISDOM
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-navy-dark sm:text-4.5xl leading-[1.15]">
                The Shiva Shakthi Family
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Founded on the bedrock of excellence in medical science, Shiva Shakthi Health represents a multi-generational legacy of trust and pioneering innovation. What commenced as a focused high-precision surgical center has evolved into a global sanctuary for proactive longevity, healing, and biological restoration.
            </p>

            {/* Beautiful customized italicized Blockquote Quote Block */}
            <div className="relative border-l-4 border-orange-vitality pl-5 py-2 my-4 bg-orange-50/20 rounded-r-xl">
              <p className="text-xs font-bold leading-relaxed text-navy-dark italic sm:text-sm">
                "Our mission is to bridge the conceptual gap between reactive modern medicine and proactive cellular longevity, ensuring every single patient awakens their inherent healing potential to live vibrantly."
              </p>
            </div>

            {/* Direct Read Story Action Link button */}
            <div>
              <button
                onClick={onStoryClick}
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy-dark shadow-sm transition hover:bg-gray-50 active:scale-98"
              >
                READ OUR STORY
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
