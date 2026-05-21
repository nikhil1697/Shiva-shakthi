import { ArrowRight, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

interface FamilySectionProps {
  onStoryClick: () => void;
}

export default function FamilySection({ onStoryClick }: FamilySectionProps) {
  return (
    <section className="bg-bg-azure py-20 lg:py-28 overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          
          {/* Left: Beautiful Circle Image & Hanging Stats Badge */}
          <div className="relative lg:col-span-6 flex justify-center lg:justify-start">
            
            {/* Background absolute glow shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-turquoise-brand/10 blur-3xl"></div>

            {/* Rotating Decorative Outer Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-bronze-light/35 pointer-events-none xs:h-[400px] xs:w-[400px] sm:h-[445px] sm:w-[445px] z-0"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute h-[350px] w-[350px] rounded-full border border-double border-turquoise-brand/10 pointer-events-none xs:h-[410px] xs:w-[410px] sm:h-[455px] sm:w-[455px] z-0"
            />

            {/* Main Rounded Architectural Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.01 }}
              className="relative h-[320px] w-[320px] rounded-full p-2.5 bg-white shadow-xl shadow-navy-dark/6 xs:h-[380px] xs:w-[380px] sm:h-[420px] sm:w-[420px] overflow-hidden flex items-center justify-center z-10 cursor-pointer group"
            >
              {/* Light reflection sheer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 group-hover:left-[120%] left-[-120%] transition-all duration-1000 z-20" />
              
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800"
                alt="Shiva Shakthi Luxury Wellness Sanctuary building"
                className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Overlapping Floating Orange lives badge */}
            <motion.div 
              initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute bottom-10 right-4 bg-orange-vitality text-white px-6 py-4 rounded-2xl shadow-lg shadow-orange-500/20 max-w-[155px] text-center transform z-20 cursor-pointer flex flex-col justify-center items-center"
            >
              <span className="text-3xl font-serif font-bold tracking-tight">10k+</span>
              <span className="text-[9px] font-bold tracking-widest leading-tight uppercase font-sans">LIVES TRANSFORMED</span>
            </motion.div>
          </div>

          {/* Right: Narrative Story Block */}
          <div className="lg:col-span-6 text-left space-y-6 z-10">
            
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-turquoise-brand uppercase flex items-center gap-1.5 font-sans">
                <Landmark className="h-4 w-4" /> GENERATIONAL WISDOM
              </span>
              <h2 className="text-3xl font-serif font-medium tracking-tight text-navy-dark sm:text-4.5xl leading-[1.15]">
                The Shiva Shakthi Family
              </h2>
              <div className="h-0.5 w-12 bg-bronze-light/35 rounded-full" />
            </div>

            <p className="text-sm leading-relaxed text-gray-600 sm:text-base font-sans">
              Founded on the bedrock of excellence in medical science, Shiva Shakthi Health represents a multi-generational legacy of trust and pioneering innovation. What commenced as a focused high-precision surgical center has evolved into a global sanctuary for proactive longevity, healing, and biological restoration.
            </p>

            {/* Beautiful customized italicized Blockquote Quote Block */}
            <div className="relative border-l-2 border-orange-vitality pl-5 py-3 my-4 bg-orange-50/15 rounded-r-xl border-y border-y-transparent">
              <p className="text-sm sm:text-base font-serif italic leading-relaxed text-navy-dark/90">
                "Our mission is to bridge the conceptual gap between reactive modern medicine and proactive cellular longevity, ensuring every single patient awakens their inherent healing potential to live vibrantly."
              </p>
            </div>

            {/* Direct Read Story Action Link button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#f9fafb" }}
                whileTap={{ scale: 0.98 }}
                onClick={onStoryClick}
                className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-navy-dark shadow-sm transition hover:bg-gray-50 cursor-pointer font-sans"
              >
                READ OUR STORY
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
