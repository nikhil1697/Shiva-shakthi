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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-8 text-left relative min-h-[500px] flex flex-col justify-center">
            {/* Live Goddess Dhanvantari Elixir of Life Background Animation - placed behind text, away from right image */}
            <div className="absolute inset-0 lg:-left-24 lg:-right-24 xl:-left-32 xl:-right-32 -z-10 pointer-events-none flex items-center justify-center overflow-visible">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 800"
                className="w-full h-full max-w-[650px] max-h-[650px] opacity-95 md:opacity-100 transition-opacity duration-500 scale-[1.05] sm:scale-115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="spineGlow" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="1.0" />
                    <stop offset="16%" stopColor="#FB923C" stopOpacity="1.0" />
                    <stop offset="33%" stopColor="#FBBF24" stopOpacity="1.0" />
                    <stop offset="50%" stopColor="#34D399" stopOpacity="1.0" />
                    <stop offset="66%" stopColor="#22D3EE" stopOpacity="1.0" />
                    <stop offset="83%" stopColor="#60A5FA" stopOpacity="1.0" />
                    <stop offset="100%" stopColor="#C084FC" stopOpacity="1.0" />
                  </linearGradient>
                  <linearGradient id="lotusGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#059669" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#064E3B" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="elixirGrad" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                  <radialGradient id="haloGrad" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="idaGlow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="pingalaGlow" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="elixirGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Lotus Flower Base */}
                <g opacity="0.9" strokeWidth="2" strokeLinecap="round">
                  {/* Back/Outer Petals */}
                  <path d="M 350 670 C 270 680, 240 640, 230 610 C 260 620, 310 650, 350 670 Z" fill="url(#lotusGrad)" stroke="#10B981" />
                  <path d="M 350 670 C 430 680, 460 640, 470 610 C 440 620, 390 650, 350 670 Z" fill="url(#lotusGrad)" stroke="#10B981" />
                  
                  {/* Mid Petals */}
                  <path d="M 350 670 C 290 680, 270 630, 280 595 C 300 615, 330 645, 350 670 Z" fill="url(#lotusGrad)" stroke="#34D399" />
                  <path d="M 350 670 C 410 680, 430 630, 420 595 C 400 615, 370 645, 350 670 Z" fill="url(#lotusGrad)" stroke="#34D399" />
                  
                  {/* Front/Center Petals */}
                  <path d="M 350 670 C 320 675, 305 635, 320 590 C 330 615, 340 645, 350 670 Z" fill="url(#lotusGrad)" stroke="#6EE7B7" />
                  <path d="M 350 670 C 380 675, 395 635, 380 590 C 370 615, 360 645, 350 670 Z" fill="url(#lotusGrad)" stroke="#6EE7B7" />
                  <path d="M 350 670 C 335 660, 335 600, 350 575 C 365 600, 365 660, 350 670 Z" fill="url(#lotusGrad)" stroke="#FBBF24" strokeWidth="2.5" />
                </g>

                {/* Meditating Body Silhouette */}
                <g strokeWidth="3.2" fill="none">
                  {/* Left Side Silhouette */}
                  <motion.path
                    d="M 350 190 C 320 190, 310 240, 310 270 C 310 290, 320 310, 320 320 C 280 330, 260 350, 255 390 C 250 430, 280 460, 280 520 C 280 560, 220 600, 210 630 C 200 660, 230 670, 270 670 C 310 670, 330 650, 350 650"
                    stroke="rgba(13, 148, 136, 0.65)"
                    animate={{ strokeWidth: [3, 4.2, 3], stroke: ["rgba(13, 148, 136, 0.6)", "rgba(13, 148, 136, 0.85)", "rgba(13, 148, 136, 0.6)"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Right Side Silhouette */}
                  <motion.path
                    d="M 350 190 C 380 190, 390 240, 390 270 C 390 290, 380 310, 380 320 C 420 330, 440 350, 445 390 C 450 430, 420 460, 420 520 C 420 560, 480 600, 490 630 C 500 660, 470 670, 430 670 C 390 670, 370 650, 350 650"
                    stroke="rgba(13, 148, 136, 0.65)"
                    animate={{ strokeWidth: [3, 4.2, 3], stroke: ["rgba(13, 148, 136, 0.6)", "rgba(13, 148, 136, 0.85)", "rgba(13, 148, 136, 0.6)"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </g>

                {/* Central Spine Nadi (Sushumna) */}
                <line
                  x1="350"
                  y1="220"
                  x2="350"
                  y2="640"
                  stroke="url(#spineGlow)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Ida Nadi (Cooling Channel, Left Wave First) */}
                <motion.path
                  d="M 350 640 C 300 620, 300 590, 350 570 C 400 550, 400 520, 350 500 C 300 480, 300 450, 350 430 C 400 410, 400 380, 350 360 C 300 340, 300 310, 350 290 C 400 270, 400 240, 350 220"
                  fill="none"
                  stroke="url(#idaGlow)"
                  strokeWidth="3.8"
                  strokeDasharray="10, 5"
                  animate={{ strokeDashoffset: [0, -120] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Pingala Nadi (Heating Channel, Right Wave First) */}
                <motion.path
                  d="M 350 640 C 400 620, 400 590, 350 570 C 300 550, 300 520, 350 500 C 400 480, 400 450, 350 430 C 300 410, 300 380, 350 360 C 400 340, 400 310, 350 290 C 300 270, 300 240, 350 220"
                  fill="none"
                  stroke="url(#pingalaGlow)"
                  strokeWidth="3.8"
                  strokeDasharray="10, 5"
                  animate={{ strokeDashoffset: [0, 120] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Sacred Geometry: Concentric Rings around Heart and Crown */}
                {/* Heart Chakra Rings */}
                <g>
                  <motion.circle
                    cx={350}
                    cy={430}
                    r={45}
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.75)"
                    strokeWidth="1.8"
                    strokeDasharray="8, 4"
                    style={{ transformOrigin: "350px 430px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx={350}
                    cy={430}
                    r={32}
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.55)"
                    strokeWidth="1.8"
                    strokeDasharray="4, 6"
                    style={{ transformOrigin: "350px 430px" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  />
                </g>

                {/* Crown Chakra Rings */}
                <g>
                  <motion.circle
                    cx={350}
                    cy={220}
                    r={42}
                    fill="none"
                    stroke="rgba(168, 85, 247, 0.75)"
                    strokeWidth="1.8"
                    strokeDasharray="7, 3"
                    style={{ transformOrigin: "350px 220px" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx={350}
                    cy={220}
                    r={26}
                    fill="none"
                    stroke="rgba(168, 85, 247, 0.55)"
                    strokeWidth="1.8"
                    strokeDasharray="3, 4"
                    style={{ transformOrigin: "350px 220px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                </g>

                {/* Chakras */}
                {[
                  { name: "Crown", y: 220, color: "#C084FC" },
                  { name: "Third Eye", y: 290, color: "#60A5FA" },
                  { name: "Throat", y: 360, color: "#22D3EE" },
                  { name: "Heart", y: 430, color: "#34D399" },
                  { name: "Solar Plexus", y: 500, color: "#FBBF24" },
                  { name: "Sacral", y: 570, color: "#FB923C" },
                  { name: "Root", y: 640, color: "#EF4444" }
                ].map((chakra, idx) => (
                  <g key={`chakra-${chakra.name}`}>
                    {/* Outer pulsing energy field */}
                    <motion.circle
                      cx={350}
                      cy={chakra.y}
                      r={24}
                      fill={chakra.color}
                      opacity={0.65}
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.35, 0.85, 0.35]
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
                      cx={350}
                      cy={chakra.y}
                      r={7.5}
                      fill={chakra.color}
                      stroke="#FFF"
                      strokeWidth="1.8"
                    />
                  </g>
                ))}

                {/* Rising Prana Sparkles */}
                {[...Array(12)].map((_, i) => {
                  const size = 2.5 + (i % 2) * 1.5;
                  const delay = i * 1.5;
                  const startX = 335 + (i * 7) % 30;
                  const startY = 630 - (i * 35) % 380;
                  
                  return (
                    <motion.circle
                      key={`prana-${i}`}
                      cx={startX}
                      cy={startY}
                      r={size}
                      fill="rgba(16, 185, 129, 0.95)"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1.0, 1.0, 0],
                        y: [-90, -180],
                        x: [0, (i % 2 === 0 ? 12 : -12), 0]
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

                {/* Lord/Goddess Dhanvantari Silhouette & Divine Aura */}
                <g>
                  {/* Outer Golden Aura */}
                  <motion.circle
                    cx={600}
                    cy={110}
                    r={95}
                    fill="url(#haloGrad)"
                    animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Glowing Halo Rings */}
                  <motion.circle
                    cx={600}
                    cy={110}
                    r={75}
                    fill="none"
                    stroke="rgba(245, 158, 11, 0.3)"
                    strokeWidth="1.2"
                    strokeDasharray="6, 8"
                    style={{ transformOrigin: "600px 110px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Divine Arms Silhouette */}
                  <path
                    d="M 760 60 C 700 90, 660 120, 605 130"
                    stroke="rgba(245, 158, 11, 0.75)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 720 30 C 670 55, 620 75, 570 95"
                    stroke="rgba(245, 158, 11, 0.75)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Bracelets */}
                  <circle cx="630" cy="118" r="5" stroke="#FBBF24" strokeWidth="1.5" fill="none" />
                  <circle cx="625" cy="115" r="5" stroke="#FBBF24" strokeWidth="1.5" fill="none" />
                  <circle cx="590" cy="85" r="5" stroke="#FBBF24" strokeWidth="1.5" fill="none" />
                  <circle cx="585" cy="82" r="5" stroke="#FBBF24" strokeWidth="1.5" fill="none" />
                </g>

                {/* Tilted Kalasha (Golden Pot of Amrita) */}
                <g transform="translate(600, 110) rotate(-55)">
                  {/* Mango Leaves inside Rim */}
                  <path d="M -15 -30 C -25 -50, -15 -60, -8 -35 Z" fill="#10B981" stroke="#047857" strokeWidth="1" />
                  <path d="M 15 -30 C 25 -50, 15 -60, 8 -35 Z" fill="#10B981" stroke="#047857" strokeWidth="1" />
                  <path d="M 0 -32 C 0 -58, 5 -55, 0 -32 Z" fill="#059669" stroke="#047857" strokeWidth="1" />

                  {/* Kalasha Body */}
                  <path
                    d="M -25 -10 C -25 15, -40 30, -35 50 C -30 70, -15 80, 0 80 C 15 80, 30 70, 35 50 C 40 30, 25 15, 25 -10 C 25 -20, 15 -25, 20 -32 L -20 -32 C -15 -25, -25 -20, -25 -10 Z"
                    fill="url(#goldGrad)"
                    stroke="#D97706"
                    strokeWidth="2.5"
                    filter="url(#goldGlow)"
                  />
                  {/* Decorative bands on pot */}
                  <path d="M -26 15 C 0 25, 0 25, 26 15" stroke="#FFF" strokeWidth="1.2" fill="none" opacity="0.4" />
                  <path d="M -33 35 C 0 45, 0 45, 33 35" stroke="#D97706" strokeWidth="1.8" fill="none" opacity="0.8" />
                  
                  {/* Rim of the pot */}
                  <ellipse cx="0" cy="-32" rx="20" ry="4" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
                </g>

                {/* The Flowing Elixir (Amrita Stream) */}
                <g>
                  {/* Outer glowing stream */}
                  <motion.path
                    d="M 575 95 C 480 85, 400 120, 350 220"
                    stroke="rgba(16, 185, 129, 0.4)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#elixirGlow)"
                  />
                  {/* Middle flowing stream */}
                  <motion.path
                    d="M 575 95 C 480 85, 400 120, 350 220"
                    stroke="url(#elixirGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="30 15"
                    animate={{ strokeDashoffset: [0, -90] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Core white light stream */}
                  <motion.path
                    d="M 575 95 C 480 85, 400 120, 350 220"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="15 30"
                    animate={{ strokeDashoffset: [0, -90] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Flowing Droplets along the path */}
                  <circle r="4" fill="#FFFFFF" filter="url(#elixirGlow)">
                    <animateMotion
                      path="M 575 95 C 480 85, 400 120, 350 220"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="0s"
                    />
                  </circle>
                  <circle r="3" fill="#FBBF24" filter="url(#elixirGlow)">
                    <animateMotion
                      path="M 575 95 C 480 85, 400 120, 350 220"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>
                  <circle r="3.5" fill="#34D399" filter="url(#elixirGlow)">
                    <animateMotion
                      path="M 575 95 C 480 85, 400 120, 350 220"
                      dur="3s"
                      repeatCount="indefinite"
                      begin="2s"
                    />
                  </circle>
                </g>
              </svg>
            </div>

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
