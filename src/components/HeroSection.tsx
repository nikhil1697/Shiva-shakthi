import { TrendingUp, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onStartJourneyClick: () => void;
  onExploreScienceClick: () => void;
}

export default function HeroSection({ onStartJourneyClick, onExploreScienceClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-bg-azure py-16 lg:py-24 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {/* Decorative Aurora Ambient Glow with nature-inspired green-teal tints - made more visible */}
      <motion.div 
        animate={{
          scale: [1, 1.25, 0.85, 1],
          x: [0, 45, -35, 0],
          y: [0, -55, 35, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="aurora-glow h-96 w-96 bg-emerald-200/40 top-10 left-10"
      />
      <motion.div 
        animate={{
          scale: [1, 0.8, 1.25, 1],
          x: [0, -55, 45, 0],
          y: [0, 45, -45, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="aurora-glow h-96 w-96 bg-teal-200/30 bottom-10 right-10"
      />

      {/* Floating Organic Leaves & Bokeh Bubbles Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Leaves */}
        {[...Array(8)].map((_, i) => {
          const size = 20 + (i * 8); // varied sizes from 20px to 76px
          const delay = i * 1.5;
          const duration = 18 + (i * 4);
          // Distribute across horizontal and vertical space
          const startX = [ "8%", "25%", "85%", "60%", "15%", "90%", "45%", "70%" ][i];
          const startY = [ "15%", "75%", "20%", "65%", "40%", "80%", "30%", "85%" ][i];
          const moveX = [35, -45, 40, -30, 45, -20, 30, -35];
          const moveY = [-70, -90, -65, -80, -100, -75, -85, -95];
          
          return (
            <motion.div
              key={`leaf-${i}`}
              initial={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
              animate={{
                opacity: [0, 0.35, 0.35, 0], // beautifully visible but subtle
                scale: [0.8, 1.1, 1, 0.8],
                x: [0, moveX[i], moveX[i] * 1.6, moveX[i] * 2],
                y: [0, moveY[i], moveY[i] * 1.8, moveY[i] * 2.2],
                rotate: [0, 60, 140, 220]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
              className="absolute text-turquoise-light"
              style={{
                left: startX,
                top: startY,
              }}
            >
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L2.18,21C4.3,15.89 6.1,9.35 15,7C10.96,6.38 7.31,7.37 4.54,8.82L3.46,6.82C6.67,5.14 11.23,4.24 16,5C12.44,3.72 8.53,3.74 5.37,5L4.63,3.13C8.42,1.38 13.17,1.4 17.5,3C19.24,5.62 19.33,9.03 17,12.5C18.67,9.67 18.67,8.33 17,8Z" />
              </svg>
            </motion.div>
          );
        })}

        {/* Floating Bokeh Bubbles (nature energy orbs) */}
        {[...Array(6)].map((_, i) => {
          const size = 12 + (i * 6); // size 12px to 42px
          const delay = i * 2;
          const duration = 15 + (i * 5);
          const startX = [ "12%", "80%", "40%", "92%", "20%", "70%" ][i];
          const startY = [ "85%", "70%", "90%", "30%", "50%", "40%" ][i];
          const moveX = [20, -30, 15, -20, 25, -15];
          const moveY = [-120, -100, -140, -90, -110, -130];
          
          return (
            <motion.div
              key={`bubble-${i}`}
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{
                opacity: [0, 0.4, 0.4, 0],
                scale: [0.8, 1.2, 1, 0.8],
                x: [0, moveX[i], moveX[i] * 1.5, moveX[i] * 2],
                y: [0, moveY[i], moveY[i] * 1.5, moveY[i] * 2],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
              className="absolute rounded-full bg-emerald-400/20 blur-[1.5px]"
              style={{
                width: size,
                height: size,
                left: startX,
                top: startY,
              }}
            />
          );
        })}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Pill Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#E0F7F6]/85 backdrop-blur-md px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-wider text-[#006A66] uppercase border border-turquoise-brand/10 shadow-sm"
            >
              <Sparkles className="h-3 w-3 animate-pulse text-[#006a66]" />
              PRECISION LONGEVITY
            </motion.div>

            {/* Display Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-serif font-medium tracking-tight text-navy-dark sm:text-5xl lg:text-6.5xl leading-[1.08]"
            >
              Are You Ready to <br />
              <span className="relative inline-block text-turquoise-brand italic font-serif font-light">
                Awaken
                <span className="absolute bottom-2 left-0 h-1.5 w-full bg-turquoise-brand/10 rounded-full"></span>
              </span>{' '}
              Your Inner <br />
              Healing Power?
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg font-sans"
            >
              Experience a revolutionary fusion of advanced medical science and holistic wisdom 
              designed to optimize your health span, enhance cognitive clarity, and restore cellular vitality.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartJourneyClick}
                className="group flex items-center justify-center gap-2 rounded-full bg-orange-vitality px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-white shadow-xl shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-600/35 transition-all duration-300 cursor-pointer"
              >
                START YOUR JOURNEY
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(30, 158, 152, 0.08)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onExploreScienceClick}
                className="flex items-center justify-center gap-2 rounded-full border border-turquoise-brand/40 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider text-turquoise-brand transition-all duration-300 cursor-pointer bg-transparent"
              >
                EXPLORE SCIENCE
              </motion.button>
            </motion.div>
          </div>

          {/* Right Visual Image & Overlay */}
          <div className="relative lg:col-span-6 flex justify-center items-center">
            {/* Underlay glow shadow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-cyan-300/20 to-emerald-300/20 opacity-40 blur-2xl"></div>

            {/* Main Chamber Frame with custom border accents */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-navy-dark/8 border border-white/40 cursor-pointer group"
            >
              {/* Gold light sheen border effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-bronze-light/30 rounded-[2rem] transition-all duration-700 pointer-events-none z-20"></div>
              
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
                alt="Shiva Shakthi Luxury Bio-Hacking Treatment Room"
                className="h-[300px] w-full rounded-[1.7rem] object-cover sm:h-[420px] md:w-[600px] transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Glassmorphic Restoration Stat Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5 }}
              className="glassmorphic-card absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl p-5 sm:-left-10 sm:right-auto sm:max-w-xs transition-shadow hover:shadow-xl border border-white/80"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E0F7F6]/90 text-turquoise-brand shadow-inner">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-serif font-bold text-navy-dark tracking-tight leading-none mb-1">98%</div>
                <div className="text-[11px] font-medium leading-normal text-gray-500 font-sans">
                  Vitality restoration rate for patients in our longevity programs.
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Smooth scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex flex-col items-center gap-1 mt-auto pt-6 text-[10px] font-bold tracking-widest text-navy-dark/30 cursor-pointer z-10"
        onClick={onExploreScienceClick}
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
