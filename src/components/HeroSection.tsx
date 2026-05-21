/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartJourneyClick: () => void;
  onExploreScienceClick: () => void;
}

export default function HeroSection({ onStartJourneyClick, onExploreScienceClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-bg-azure py-12 lg:py-20">
      {/* Decorative Aurora Ambient Glow */}
      <div className="aurora-glow h-96 w-96 bg-cyan-100/40 opacity-70 top-10 left-10 animate-aurora-slow blur-3xl"></div>
      <div className="aurora-glow h-96 w-96 bg-orange-100/30 opacity-60 bottom-10 right-10 animate-aurora-slow blur-3xl" style={{ animationDelay: '-10s' }}></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Text Narrative */}
          <div className="z-10 lg:col-span-6 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F7F6] px-4 py-1.5 text-xs font-bold tracking-wider text-[#006A66] uppercase">
              <Sparkles className="h-3 w-3 animate-pulse text-[#006a66]" />
              PRECISION LONGEVITY
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-navy-dark sm:text-5xl lg:text-6xl leading-[1.1]">
              Are You Ready to <br />
              <span className="relative inline-block text-turquoise-brand italic font-black">
                Awaken
                <span className="absolute bottom-1 left-0 h-1.5 w-full bg-turquoise-brand/15 rounded-full"></span>
              </span>{' '}
              Your Inner <br />
              Healing Power?
            </h1>

            {/* Subheading */}
            <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Experience a revolutionary fusion of advanced medical science and holistic wisdom 
              designed to optimize your health span, enhance cognitive clarity, and restore cellular vitality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onStartJourneyClick}
                className="group flex items-center justify-center gap-2 rounded-full bg-orange-vitality px-8 py-3.5 text-sm font-bold tracking-wider text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-103 hover:bg-orange-600 hover:shadow-orange-600/30 active:scale-98"
              >
                START YOUR JOURNEY
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onExploreScienceClick}
                className="flex items-center justify-center gap-2 rounded-full border border-turquoise-brand/55 px-8 py-3.5 text-sm font-bold tracking-wider text-turquoise-brand transition-all hover:bg-turquoise-brand/5 hover:border-turquoise-brand active:scale-98"
              >
                EXPLORE SCIENCE
              </button>
            </div>
          </div>

          {/* Right Visual Image & Overlay */}
          <div className="relative lg:col-span-6 flex justify-center items-center">
            {/* Underlay glow shadow */}
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-cyan-400 to-emerald-400 opacity-20 blur-2xl"></div>

            {/* Main Chamber Frame */}
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-2.5 shadow-2xl shadow-navy-dark/10">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Shiva Shakthi Luxury Bio-Hacking Treatment Room"
                className="h-[300px] w-full rounded-[1.7rem] object-cover sm:h-[400px] md:w-[600px]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Glassmorphic Restoration Stat Card */}
            <div className="glassmorphic-card absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl p-5 sm:-left-10 sm:right-auto sm:max-w-xs transition-transform hover:scale-102">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E0F7F6]/80 text-turquoise-brand shadow-inner">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-black text-navy-dark tracking-tight">98%</div>
                <div className="text-xs font-semibold leading-snug text-gray-600">
                  Vitality restoration rate for patients in our longevity programs.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
