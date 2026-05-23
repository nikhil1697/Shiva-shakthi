import { Users, Activity, Orbit, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function PromoGlow() {
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150', alt: 'Dr Rajan Shah' },
    { src: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150', alt: 'Dr Anjali Singh' },
    { src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150', alt: 'Dr Vikram Malhotra' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="bg-bg-azure pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          
          {/* Card 1: Integrative Pioneers (Dark background image overlay) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl h-[280px] group shadow-xl flex flex-col justify-end p-6 text-left cursor-pointer border border-white/10"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
                alt="Medical precision laboratory"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy-dark/85 transition-opacity duration-500 group-hover:bg-navy-dark/80"></div>
            </div>
            
            {/* Visual accent badge */}
            <div className="absolute top-6 left-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-turquoise-brand/15 backdrop-blur-md text-turquoise-brand border border-turquoise-brand/20">
              <Orbit className="h-5 w-5 animate-spin-slow" />
            </div>

            <div className="relative z-20 space-y-2">
              <h4 className="text-xl font-serif font-bold text-white tracking-tight">
                Integrative Pioneers
              </h4>
              <p className="text-xs leading-relaxed text-gray-300">
                Seamlessly blending robotic surgical precision with functional medicine foundations to rebuild and rejuvenate.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Board-Certified Specialists (White glassmorphic card with face pile) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl bg-transparent p-6 shadow-xl border border-bronze-light/50 flex flex-col justify-between text-left cursor-pointer transition-shadow hover:shadow-2xl h-[280px]"
          >
            {/* Background Image Layer with light overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
                alt="Board-Certified Specialists"
                className="h-full w-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-15"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg-azure/40"></div>
            </div>

            {/* Badge Icon */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-turquoise-brand/10 text-turquoise-brand shadow-inner">
              <Users className="h-5 w-5" />
            </div>

            <div className="relative z-10 my-3 space-y-2">
              <h4 className="text-xl font-serif font-bold text-navy-dark tracking-tight">
                Board-Certified Specialists
              </h4>
              <p className="text-xs leading-relaxed text-gray-600 font-sans">
                Our multi-disciplinary team consists of world-renowned experts in GI, Metabolic Health, and Longevity Science.
              </p>
            </div>

            {/* Avatar Stack Facepile */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                {avatars.map((avatar, idx) => (
                  <motion.img
                    key={idx}
                    whileHover={{ y: -4, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover cursor-pointer"
                    src={avatar.src}
                    alt={avatar.alt}
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-turquoise-brand text-[11px] font-bold text-white ring-2 ring-white shadow-sm">
                  +12
                </div>
              </div>
              <span className="text-[11px] font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" /> Top Tier Care
              </span>
            </div>
          </motion.div>

          {/* Card 3: Functional Focus (Teal/Turquoise gorgeous gradient pulse card) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl h-[280px] bg-gradient-to-tr from-navy-dark via-navy-light to-turquoise-brand p-6 text-left flex flex-col justify-between group shadow-xl cursor-pointer border border-bronze-light/20"
          >
            {/* Background Image Layer with teal overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600"
                alt="Functional Focus"
                className="h-full w-full object-cover opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark/95 via-navy-light/90 to-turquoise-brand/85 z-0"></div>
            </div>

            {/* Gradient background animated glow circles */}
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/5 blur-xl group-hover:scale-120 transition-transform duration-700 z-0"></div>

            {/* Badge Icon */}
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10 shadow-inner">
              <Activity className="h-5 w-5 animate-pulse" />
            </div>

            <div className="space-y-2 z-10">
              <h4 className="text-xl font-serif font-bold text-white tracking-tight">
                Functional Focus
              </h4>
              <p className="text-xs leading-relaxed text-white/80 font-sans">
                Moving beyond symptom suppression to thoroughly address and resolve the root physiological causes of chronic dysfunction.
              </p>
            </div>

            {/* Simulated interactive pulse trace line in vector */}
            <div className="absolute bottom-6 right-6 opacity-45">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-white fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <motion.path 
                  d="M0 20 h20 l5 -15 l5 30 l8 -25 l6 18 l4 -8 h20 l4 -12 l4 24 l6 -18 h28" 
                  initial={{ pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: [0, 1, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    times: [0, 0.8, 1] 
                  }}
                />
              </svg>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
