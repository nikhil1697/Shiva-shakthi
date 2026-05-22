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
                className="w-full h-full max-w-[650px] max-h-[650px] opacity-45 md:opacity-60 transition-opacity duration-500 scale-[1.05] sm:scale-115"
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
                  <linearGradient id="sariGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#16827D" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0B413E" stopOpacity="0.2" />
                  </linearGradient>
                  <radialGradient id="whiteShield" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#EFF4F0" stopOpacity="0.95" />
                    <stop offset="65%" stopColor="#EFF4F0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#EFF4F0" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="haloGrad" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.2" />
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

                {/* Backdrop Shield to maintain text readability and high contrast */}
                <circle cx="400" cy="420" r="300" fill="url(#whiteShield)" />

                {/* Lotus Flower Base */}
                <g opacity="0.45" strokeWidth="2" strokeLinecap="round">
                  {/* Back/Outer Petals */}
                  <path d="M 400 720 C 320 730, 290 690, 280 660 C 310 670, 360 700, 400 720 Z" fill="url(#lotusGrad)" stroke="#10B981" />
                  <path d="M 400 720 C 480 730, 510 690, 520 660 C 490 670, 440 700, 400 720 Z" fill="url(#lotusGrad)" stroke="#10B981" />
                  
                  {/* Mid Petals */}
                  <path d="M 400 720 C 340 730, 320 680, 330 645 C 350 665, 380 695, 400 720 Z" fill="url(#lotusGrad)" stroke="#34D399" />
                  <path d="M 400 720 C 460 730, 480 680, 470 645 C 450 665, 420 695, 400 720 Z" fill="url(#lotusGrad)" stroke="#34D399" />
                  
                  {/* Front/Center Petals */}
                  <path d="M 400 720 C 370 725, 355 685, 370 640 C 380 665, 390 695, 400 720 Z" fill="url(#lotusGrad)" stroke="#6EE7B7" />
                  <path d="M 400 720 C 430 725, 445 685, 430 640 C 420 665, 410 695, 400 720 Z" fill="url(#lotusGrad)" stroke="#6EE7B7" />
                  <path d="M 400 720 C 385 710, 385 650, 400 625 C 415 650, 415 710, 400 720 Z" fill="url(#lotusGrad)" stroke="#FBBF24" strokeWidth="2.5" />
                </g>

                {/* Tree of Life Canopy & Roots */}
                <g id="treeOfLife">
                  {/* Roots at the base */}
                  <path d="M 400 720 C 380 725, 340 730, 320 745" stroke="url(#goldGrad)" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
                  <path d="M 400 720 C 420 725, 460 730, 480 745" stroke="url(#goldGrad)" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
                  <path d="M 400 720 C 390 725, 370 735, 360 750" stroke="url(#goldGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
                  <path d="M 400 720 C 410 725, 430 735, 440 750" stroke="url(#goldGrad)" strokeWidth="4" strokeLinecap="round" opacity="0.3" />

                  {/* Main Trunk running behind the spine */}
                  <path d="M 400 720 C 400 600, 400 480, 400 380" stroke="url(#goldGrad)" strokeWidth="9" strokeLinecap="round" opacity="0.35" />

                  {/* Symmetrical Branches extending from above the head / crown chakra at y=380 */}
                  {/* Major Left and Right branches */}
                  <path d="M 400 380 C 370 340, 310 300, 260 300" stroke="url(#goldGrad)" strokeWidth="6.5" strokeLinecap="round" opacity="0.35" />
                  <path d="M 400 380 C 430 340, 490 300, 540 300" stroke="url(#goldGrad)" strokeWidth="6.5" strokeLinecap="round" opacity="0.35" />

                  {/* Middle Left and Right branches */}
                  <path d="M 400 380 C 390 320, 360 260, 350 200" stroke="url(#goldGrad)" strokeWidth="5.5" strokeLinecap="round" opacity="0.35" />
                  <path d="M 400 380 C 410 320, 440 260, 450 200" stroke="url(#goldGrad)" strokeWidth="5.5" strokeLinecap="round" opacity="0.35" />

                  {/* Secondary branch splits - Left side */}
                  <path d="M 330 310 C 300 270, 240 250, 180 260" stroke="url(#goldGrad)" strokeWidth="4.5" strokeLinecap="round" opacity="0.35" />
                  <path d="M 270 300 C 250 250, 200 210, 150 210" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.35" />
                  <path d="M 240 280 C 230 230, 260 190, 290 170" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
                  
                  {/* Secondary branch splits - Right side */}
                  <path d="M 470 310 C 500 270, 560 250, 620 260" stroke="url(#goldGrad)" strokeWidth="4.5" strokeLinecap="round" opacity="0.35" />
                  <path d="M 530 300 C 550 250, 600 210, 650 210" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.35" />
                  <path d="M 560 280 C 570 230, 540 190, 510 170" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.35" />

                  {/* Tertiary twigs - Top Center */}
                  <path d="M 380 250 C 350 210, 350 170, 360 120" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
                  <path d="M 420 250 C 450 210, 450 170, 440 120" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
                  <path d="M 400 200 L 400 100" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />

                  {/* Dynamic pulsing glowing leaves of the Tree of Life */}
                  {[
                    // Left major canopy
                    { x: 150, y: 260, r: 8, color: "#10B981", delay: 0.1 },
                    { x: 180, y: 260, r: 12, color: "#34D399", delay: 0.5 },
                    { x: 200, y: 230, r: 10, color: "#FBBF24", delay: 0.9 },
                    { x: 150, y: 210, r: 9, color: "#10B981", delay: 0.3 },
                    { x: 230, y: 210, r: 11, color: "#6EE7B7", delay: 0.7 },
                    { x: 260, y: 180, r: 7, color: "#FBBF24", delay: 1.1 },
                    { x: 290, y: 170, r: 13, color: "#10B981", delay: 0.2 },
                    { x: 250, y: 260, r: 8, color: "#34D399", delay: 0.6 },
                    { x: 220, y: 280, r: 10, color: "#16827D", delay: 0.8 },

                    // Right major canopy
                    { x: 650, y: 210, r: 9, color: "#10B981", delay: 0.4 },
                    { x: 620, y: 260, r: 12, color: "#34D399", delay: 0.8 },
                    { x: 600, y: 230, r: 10, color: "#FBBF24", delay: 0.1 },
                    { x: 570, y: 210, r: 11, color: "#6EE7B7", delay: 0.6 },
                    { x: 540, y: 180, r: 7, color: "#FBBF24", delay: 1.2 },
                    { x: 510, y: 170, r: 13, color: "#10B981", delay: 0.3 },
                    { x: 550, y: 260, r: 8, color: "#34D399", delay: 0.7 },
                    { x: 580, y: 280, r: 10, color: "#16827D", delay: 0.9 },
                    { x: 650, y: 260, r: 8, color: "#10B981", delay: 0.2 },

                    // Center top canopy
                    { x: 400, y: 120, r: 11, color: "#34D399", delay: 0.5 },
                    { x: 370, y: 150, r: 10, color: "#10B981", delay: 0.9 },
                    { x: 430, y: 150, r: 10, color: "#10B981", delay: 0.2 },
                    { x: 360, y: 120, r: 8, color: "#FBBF24", delay: 0.7 },
                    { x: 440, y: 120, r: 8, color: "#FBBF24", delay: 1.1 },
                    { x: 380, y: 90, r: 9, color: "#6EE7B7", delay: 0.3 },
                    { x: 420, y: 90, r: 9, color: "#6EE7B7", delay: 0.8 },
                    { x: 400, y: 70, r: 7, color: "#34D399", delay: 1.3 },
                    
                    // Mid canopy transitions
                    { x: 310, y: 240, r: 12, color: "#10B981", delay: 0.4 },
                    { x: 490, y: 240, r: 12, color: "#10B981", delay: 0.8 },
                    { x: 330, y: 140, r: 9, color: "#34D399", delay: 0.6 },
                    { x: 470, y: 140, r: 9, color: "#34D399", delay: 1.0 },
                  ].map((leaf, idx) => (
                    <g key={`tree-leaf-${idx}`}>
                      {/* Pulsing Leaf Glow */}
                      <motion.circle
                        cx={leaf.x}
                        cy={leaf.y}
                        r={leaf.r * 1.6}
                        fill={leaf.color}
                        opacity="0.1"
                        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: leaf.delay }}
                      />
                      {/* Leaf Shape Path (curved organic almond) */}
                      <motion.path
                        d={`M ${leaf.x} ${leaf.y - leaf.r} C ${leaf.x + leaf.r} ${leaf.y - leaf.r / 2}, ${leaf.x + leaf.r} ${leaf.y + leaf.r}, ${leaf.x} ${leaf.y + leaf.r} C ${leaf.x - leaf.r} ${leaf.y + leaf.r}, ${leaf.x - leaf.r} ${leaf.y - leaf.r / 2}, ${leaf.x} ${leaf.y - leaf.r} Z`}
                        fill={leaf.color}
                        opacity="0.45"
                        stroke="rgba(255, 255, 255, 0.25)"
                        strokeWidth="0.8"
                        style={{ transformOrigin: `${leaf.x}px ${leaf.y}px` }}
                        animate={{ rotate: [0, 6, -6, 0], scale: [1, 1.05, 0.95, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: leaf.delay }}
                      />
                    </g>
                  ))}
                </g>

                {/* Meditating Body Silhouette */}
                <g strokeWidth="2.5" fill="none">
                  {/* Left Side Silhouette */}
                  <motion.path
                    d="M 400 360 C 377.5 360, 370 397.5, 370 420 C 370 435, 377.5 450, 377.5 457.5 C 347.5 465, 332.5 480, 328.75 510 C 325 540, 347.5 562.5, 347.5 607.5 C 347.5 637.5, 302.5 667.5, 295 690 C 287.5 712.5, 310 720, 340 720 C 340 720, 385 705, 400 705"
                    stroke="rgba(13, 148, 136, 0.35)"
                    animate={{ strokeWidth: [2.5, 3.5, 2.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Right Side Silhouette */}
                  <motion.path
                    d="M 400 360 C 422.5 360, 430 397.5, 430 420 C 430 435, 422.5 450, 422.5 457.5 C 452.5 465, 467.5 480, 471.25 510 C 475 540, 452.5 562.5, 452.5 607.5 C 452.5 637.5, 497.5 667.5, 505 690 C 512.5 712.5, 490 720, 460 720 C 460 720, 415 705, 400 705"
                    stroke="rgba(13, 148, 136, 0.35)"
                    animate={{ strokeWidth: [2.5, 3.5, 2.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </g>

                {/* Central Spine Nadi (Sushumna) */}
                <line
                  x1="400"
                  y1="380"
                  x2="400"
                  y2="705"
                  stroke="url(#spineGlow)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.45"
                />

                {/* Ida Nadi (Cooling Channel, Left Wave First) */}
                <motion.path
                  d="M 400 705 C 350 690, 350 665, 400 650 C 450 635, 450 610, 400 595 C 350 580, 350 555, 400 540 C 450 525, 450 500, 400 485 C 350 470, 350 445, 400 430 C 450 415, 450 395, 400 380"
                  fill="none"
                  stroke="url(#idaGlow)"
                  strokeWidth="3"
                  strokeDasharray="10, 5"
                  opacity="0.3"
                  animate={{ strokeDashoffset: [0, -120] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Pingala Nadi (Heating Channel, Right Wave First) */}
                <motion.path
                  d="M 400 705 C 450 690, 450 665, 400 650 C 350 635, 350 610, 400 595 C 450 580, 450 555, 400 540 C 350 525, 350 500, 400 485 C 450 470, 450 445, 400 430 C 350 415, 350 395, 400 380"
                  fill="none"
                  stroke="url(#pingalaGlow)"
                  strokeWidth="3"
                  strokeDasharray="10, 5"
                  opacity="0.3"
                  animate={{ strokeDashoffset: [0, 120] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />

                {/* Sacred Geometry: Concentric Rings around Heart and Crown */}
                {/* Heart Chakra Rings */}
                <g opacity="0.4">
                  <motion.circle
                    cx={400}
                    cy={540}
                    r={45}
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.75)"
                    strokeWidth="1.8"
                    strokeDasharray="8, 4"
                    style={{ transformOrigin: "400px 540px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx={400}
                    cy={540}
                    r={32}
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.55)"
                    strokeWidth="1.8"
                    strokeDasharray="4, 6"
                    style={{ transformOrigin: "400px 540px" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  />
                </g>

                {/* Crown Chakra Rings */}
                <g opacity="0.4">
                  <motion.circle
                    cx={400}
                    cy={380}
                    r={42}
                    fill="none"
                    stroke="rgba(168, 85, 247, 0.75)"
                    strokeWidth="1.8"
                    strokeDasharray="7, 3"
                    style={{ transformOrigin: "400px 380px" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx={400}
                    cy={380}
                    r={26}
                    fill="none"
                    stroke="rgba(168, 85, 247, 0.55)"
                    strokeWidth="1.8"
                    strokeDasharray="3, 4"
                    style={{ transformOrigin: "400px 380px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  />
                </g>

                {/* Chakras */}
                {[
                  { name: "Crown", y: 380, color: "#C084FC" },
                  { name: "Third Eye", y: 430, color: "#60A5FA" },
                  { name: "Throat", y: 485, color: "#22D3EE" },
                  { name: "Heart", y: 540, color: "#34D399" },
                  { name: "Solar Plexus", y: 595, color: "#FBBF24" },
                  { name: "Sacral", y: 650, color: "#FB923C" },
                  { name: "Root", y: 705, color: "#EF4444" }
                ].map((chakra, idx) => (
                  <g key={`chakra-${chakra.name}`}>
                    {/* Outer pulsing energy field */}
                    <motion.circle
                      cx={400}
                      cy={chakra.y}
                      r={24}
                      fill={chakra.color}
                      opacity={0.25}
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.15, 0.35, 0.15]
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
                      r={7.5}
                      fill={chakra.color}
                      stroke="#FFF"
                      strokeWidth="1.8"
                      opacity={0.6}
                    />
                  </g>
                ))}

                {/* Rising Prana Sparkles */}
                {[...Array(12)].map((_, i) => {
                  const size = 2.5 + (i % 2) * 1.5;
                  const delay = i * 1.5;
                  const startX = 385 + (i * 7) % 30;
                  const startY = 700 - (i * 30) % 350;
                  
                  return (
                    <motion.circle
                      key={`prana-${i}`}
                      cx={startX}
                      cy={startY}
                      r={size}
                      fill="rgba(16, 185, 129, 0.45)"
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
