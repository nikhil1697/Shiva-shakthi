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

      {/* Live Tree of Life & Meditating Chakra Energy Body Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          className="w-full h-full max-w-[800px] max-h-[800px] opacity-[0.35] md:opacity-[0.45] transition-opacity duration-500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="spineGlow" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#FECACA" stopOpacity="0.5" />
              <stop offset="16%" stopColor="#FED7AA" stopOpacity="0.5" />
              <stop offset="33%" stopColor="#FDE68A" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#A7F3D0" stopOpacity="0.5" />
              <stop offset="66%" stopColor="#90CDF4" stopOpacity="0.5" />
              <stop offset="83%" stopColor="#BEE3F8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#D6BCFA" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="rootGlow" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="branchGlow" x1="0.5" y1="1" x2="0.5" y2="0">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="idaGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="pingalaGlow" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Tree of Life Roots */}
          <g strokeWidth="1" strokeLinecap="round">
            {/* Central root */}
            <motion.path 
              d="M 400 580 Q 400 640 400 700 T 400 760" 
              stroke="url(#rootGlow)"
              animate={{ strokeWidth: [1, 1.3, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M 400 640 Q 385 680 375 720" stroke="url(#rootGlow)" />
            <path d="M 400 670 Q 415 710 425 740" stroke="url(#rootGlow)" />

            {/* Left root 1 */}
            <motion.path 
              d="M 400 580 Q 370 630 330 670 T 260 710" 
              stroke="url(#rootGlow)"
              animate={{ strokeWidth: [0.8, 1.1, 0.8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <path d="M 350 650 Q 320 690 280 710" stroke="url(#rootGlow)" />

            {/* Left root 2 */}
            <path d="M 400 580 Q 340 600 280 620 T 180 630" stroke="url(#rootGlow)" />

            {/* Right root 1 */}
            <motion.path 
              d="M 400 580 Q 430 630 470 670 T 540 710" 
              stroke="url(#rootGlow)"
              animate={{ strokeWidth: [0.8, 1.1, 0.8] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <path d="M 450 650 Q 480 690 520 710" stroke="url(#rootGlow)" />

            {/* Right root 2 */}
            <path d="M 400 580 Q 460 600 520 620 T 620 630" stroke="url(#rootGlow)" strokeWidth="0.8" />
          </g>

          {/* Tree of Life Branches */}
          <g strokeWidth="1" strokeLinecap="round">
            {/* Central branch */}
            <motion.path 
              d="M 400 160 Q 400 110 400 60 T 400 10" 
              stroke="url(#branchGlow)"
              animate={{ strokeWidth: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <path d="M 400 110 Q 385 80 370 50" stroke="url(#branchGlow)" />
            <path d="M 400 80 Q 415 50 430 20" stroke="url(#branchGlow)" />

            {/* Left branch 1 */}
            <motion.path 
              d="M 400 160 Q 360 120 310 90 T 230 65" 
              stroke="url(#branchGlow)"
              animate={{ strokeWidth: [0.8, 1.1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <path d="M 335 105 Q 300 80 260 65" stroke="url(#branchGlow)" />

            {/* Left branch 2 */}
            <path d="M 400 160 Q 330 140 260 120 T 160 100" stroke="url(#branchGlow)" strokeWidth="0.8" />

            {/* Right branch 1 */}
            <motion.path 
              d="M 400 160 Q 440 120 490 90 T 570 65" 
              stroke="url(#branchGlow)"
              animate={{ strokeWidth: [0.8, 1.1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
            <path d="M 465 105 Q 500 80 540 65" stroke="url(#branchGlow)" />

            {/* Right branch 2 */}
            <path d="M 400 160 Q 470 140 540 120 T 640 100" stroke="url(#branchGlow)" strokeWidth="0.8" />
          </g>

          {/* Meditating Body Silhouette */}
          <g strokeWidth="1.2" fill="none">
            {/* Left Side Silhouette */}
            <motion.path
              d="M 400 130 C 370 130, 360 180, 360 210 C 360 230, 370 250, 370 260 C 330 270, 310 290, 305 330 C 300 370, 330 400, 330 460 C 330 500, 270 540, 260 570 C 250 600, 280 610, 320 610 C 360 610, 380 590, 400 590"
              stroke="rgba(13, 148, 136, 0.12)"
              animate={{ strokeWidth: [1, 1.3, 1], stroke: ["rgba(13, 148, 136, 0.12)", "rgba(13, 148, 136, 0.18)", "rgba(13, 148, 136, 0.12)"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right Side Silhouette */}
            <motion.path
              d="M 400 130 C 430 130, 440 180, 440 210 C 440 230, 430 250, 430 260 C 470 270, 490 290, 495 330 C 500 370, 470 400, 470 460 C 470 500, 530 540, 540 570 C 550 600, 520 610, 480 610 C 440 610, 420 590, 400 590"
              stroke="rgba(13, 148, 136, 0.12)"
              animate={{ strokeWidth: [1, 1.3, 1], stroke: ["rgba(13, 148, 136, 0.12)", "rgba(13, 148, 136, 0.18)", "rgba(13, 148, 136, 0.12)"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </g>

          {/* Central Spine Nadi (Sushumna) */}
          <line
            x1="400"
            y1="130"
            x2="400"
            y2="600"
            stroke="url(#spineGlow)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Ida Nadi (Cooling Channel, Left Wave First) */}
          <motion.path
            d="M 400 580 C 350 560, 350 530, 400 510 C 450 490, 450 460, 400 440 C 350 420, 350 390, 400 370 C 450 350, 450 320, 400 300 C 350 280, 350 250, 400 230 C 450 210, 450 180, 400 160"
            fill="none"
            stroke="url(#idaGlow)"
            strokeWidth="1.5"
            strokeDasharray="6, 6"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Pingala Nadi (Heating Channel, Right Wave First) */}
          <motion.path
            d="M 400 580 C 450 560, 450 530, 400 510 C 350 490, 350 460, 400 440 C 450 420, 450 390, 400 370 C 350 350, 350 320, 400 300 C 450 280, 450 250, 400 230 C 350 210, 350 180, 400 160"
            fill="none"
            stroke="url(#pingalaGlow)"
            strokeWidth="1.5"
            strokeDasharray="6, 6"
            animate={{ strokeDashoffset: [0, 120] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Sacred Geometry: Concentric Rings around Heart and Crown */}
          {/* Heart Chakra Rings */}
          <g>
            <motion.circle
              cx={400}
              cy={370}
              r={40}
              fill="none"
              stroke="rgba(110, 231, 183, 0.16)"
              strokeWidth="0.8"
              strokeDasharray="6, 4"
              style={{ transformOrigin: "400px 370px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx={400}
              cy={370}
              r={28}
              fill="none"
              stroke="rgba(110, 231, 183, 0.12)"
              strokeWidth="0.8"
              strokeDasharray="3, 5"
              style={{ transformOrigin: "400px 370px" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
          </g>

          {/* Crown Chakra Rings */}
          <g>
            <motion.circle
              cx={400}
              cy={160}
              r={36}
              fill="none"
              stroke="rgba(214, 188, 250, 0.16)"
              strokeWidth="0.8"
              strokeDasharray="5, 3"
              style={{ transformOrigin: "400px 160px" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              cx={400}
              cy={160}
              r={22}
              fill="none"
              stroke="rgba(214, 188, 250, 0.12)"
              strokeWidth="0.8"
              strokeDasharray="2, 4"
              style={{ transformOrigin: "400px 160px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </g>

          {/* Chakras */}
          {[
            { name: "Crown", y: 160, color: "#D6BCFA" },
            { name: "Third Eye", y: 230, color: "#90CDF4" },
            { name: "Throat", y: 300, color: "#67E8F9" },
            { name: "Heart", y: 370, color: "#6EE7B7" },
            { name: "Solar Plexus", y: 440, color: "#FCD34D" },
            { name: "Sacral", y: 510, color: "#FDBA74" },
            { name: "Root", y: 580, color: "#FCA5A5" }
          ].map((chakra, idx) => (
            <g key={`chakra-${chakra.name}`}>
              {/* Outer pulsing energy field */}
              <motion.circle
                cx={400}
                cy={chakra.y}
                r={11}
                fill={chakra.color}
                opacity={0.25}
                animate={{
                  scale: [1, 1.45, 1],
                  opacity: [0.15, 0.45, 0.15]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.4
                }}
              />
              {/* Core solid energy node */}
              <circle
                cx={400}
                cy={chakra.y}
                r={3.5}
                fill={chakra.color}
                stroke="#FFF"
                strokeWidth="0.8"
              />
            </g>
          ))}

          {/* Rising Prana Sparkles */}
          {[...Array(12)].map((_, i) => {
            const size = 1.2 + (i % 2) * 0.8; // 1.2px to 2px
            const delay = i * 1.5;
            const startX = 385 + (i * 7) % 30; // clustered around the spine (x=385 to 415)
            const startY = 570 - (i * 35) % 380; // start at various heights
            
            return (
              <motion.circle
                key={`prana-${i}`}
                cx={startX}
                cy={startY}
                r={size}
                fill="rgba(110, 231, 183, 0.55)"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 0.7, 0.7, 0],
                  y: [-90, -180],
                  x: [0, (i % 2 === 0 ? 10 : -10), 0]
                }}
                transition={{
                  duration: 7 + (i % 3) * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay,
                }}
              />
            );
          })}
        </svg>
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
