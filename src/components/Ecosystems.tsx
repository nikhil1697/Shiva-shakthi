import { useState } from 'react';
import { ArrowRight, Activity, Heart, HeartPulse, X, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
          text: 'text-[#9D3B24]',
          bg: 'bg-[#9D3B24]/10',
          border: 'border-bronze-light/40 hover:border-[#9D3B24]/60',
          shadow: 'hover:shadow-[#9D3B24]/5',
          bulletIcon: 'text-[#9D3B24]',
          gradient: 'from-[#9D3B24]/5 to-transparent',
          badge: 'bg-[#9D3B24]/10 text-[#9D3B24]'
        };
      case 'blue':
        return {
          text: 'text-turquoise-brand',
          bg: 'bg-turquoise-brand/10',
          border: 'border-bronze-light/40 hover:border-turquoise-brand/50',
          shadow: 'hover:shadow-turquoise-brand/5',
          bulletIcon: 'text-turquoise-brand',
          gradient: 'from-turquoise-brand/5 to-transparent',
          badge: 'bg-turquoise-brand/10 text-turquoise-brand'
        };
      case 'yellow':
        return {
          text: 'text-[#8C6A3C]',
          bg: 'bg-[#D8CEB8]/20',
          border: 'border-bronze-light/40 hover:border-bronze-dark/60',
          shadow: 'hover:shadow-bronze-dark/5',
          bulletIcon: 'text-[#8C6A3C]',
          gradient: 'from-[#8C6A3C]/5 to-transparent',
          badge: 'bg-[#D8CEB8]/20 text-[#8C6A3C]'
        };
      case 'violet':
        return {
          text: 'text-navy-light',
          bg: 'bg-navy-light/10',
          border: 'border-bronze-light/40 hover:border-navy-light/50',
          shadow: 'hover:shadow-navy-light/5',
          bulletIcon: 'text-navy-light',
          gradient: 'from-navy-light/5 to-transparent',
          badge: 'bg-navy-light/10 text-navy-light'
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

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="ecosystems" className="bg-bg-azure py-20 lg:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading Statement */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-serif font-medium tracking-tight text-navy-dark sm:text-4.5xl">
            Precision Ecosystems
          </h2>
          <p className="mx-auto max-w-2xl text-xs font-bold text-turquoise-brand/85 uppercase tracking-widest sm:text-sm">
            Focused centers dedicated to specific pillars of your healing journey.
          </p>
          <div className="mx-auto h-0.5 w-16 bg-bronze-light/35 rounded-full" />
        </div>

        {/* 4-Column Grid of Center Cards with Staggered Entrance */}
        <motion.div 
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {centers.map((center) => {
            const classes = getThemeClasses(center.colorTheme);
            return (
              <motion.div
                key={center.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(7, 21, 36, 0.08)",
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedCenter(center)}
                className={`group flex flex-col justify-between rounded-2xl bg-transparent p-6 border ${classes.border} transition-all duration-500 cursor-pointer relative overflow-hidden`}
              >
                {/* Glow underlay gradients */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${classes.gradient} opacity-50 rounded-bl-full pointer-events-none`} />

                <div className="relative z-10">
                  {/* Overline & Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold tracking-widest uppercase ${classes.text}`}>
                      {center.overline}
                    </span>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${classes.bg} shadow-inner`}>
                      {getIconComponent(center.icon, center.colorTheme)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-semibold tracking-tight text-navy-dark group-hover:text-turquoise-brand transition-colors">
                      {center.name}
                    </h3>
                    <p className="text-xs italic leading-relaxed text-gray-500">
                      {center.tagline}
                    </p>
                  </div>

                  {/* Bullets List */}
                  <ul className="my-6 space-y-2.5 border-t border-bronze-light/20 pt-5">
                    {center.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-gray-600">
                        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-bronze-light/10`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${classes.bulletIcon}`} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div className="mt-4 pt-4 border-t border-bronze-light/20 relative z-10">
                  <span className={`inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase transition-all duration-300 group-hover:gap-2 ${classes.text}`}>
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Ecosystem Detail Modals (Overlay Popup) */}
      <AnimatePresence>
        {selectedCenter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-bg-azure p-6 shadow-2xl border border-bronze-light/40 sm:p-8 text-left"
            >
              {/* Top Close bar */}
              <button
                onClick={() => setSelectedCenter(null)}
                className="absolute right-5 top-5 rounded-full border border-bronze-light/20 bg-bg-azure/50 p-2 text-navy-dark/50 hover:bg-bronze-light/15 hover:text-navy-dark transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Inner Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${getThemeClasses(selectedCenter.colorTheme).bg} shadow-inner`}>
                    {getIconComponent(selectedCenter.icon, selectedCenter.colorTheme)}
                  </div>
                  <div>
                    <span className={`text-[10px] font-black tracking-widest uppercase ${getThemeClasses(selectedCenter.colorTheme).text}`}>
                      {selectedCenter.overline}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-navy-dark tracking-tight leading-none mt-1">{selectedCenter.name}</h3>
                  </div>
                </div>

                <blockquote className="border-l-2 border-bronze-light/40 pl-4 text-xs sm:text-sm italic text-navy-dark/70 leading-relaxed font-serif">
                  {selectedCenter.tagline}
                </blockquote>

                <p className="text-xs sm:text-sm leading-relaxed text-navy-dark/80 font-sans">
                  {selectedCenter.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-dark/80">Clinical Pillars Included:</h4>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {selectedCenter.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 rounded-xl bg-bg-azure/50 border border-bronze-light/30 p-3 text-xs font-bold text-navy-dark/80">
                        <ShieldCheck className={`h-4 w-4 ${getThemeClasses(selectedCenter.colorTheme).bulletIcon}`} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popup CTA */}
                <div className="pt-4 border-t border-bronze-light/20 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      onBookCenter(selectedCenter.name);
                      setSelectedCenter(null);
                    }}
                    className="flex-grow rounded-full bg-orange-vitality py-3.5 text-center text-xs font-bold tracking-widest uppercase text-white hover:bg-turquoise-light shadow-md shadow-turquoise-brand/10 transition-colors cursor-pointer"
                  >
                    REQUEST CONSULTATION
                  </button>
                  <button
                    onClick={() => setSelectedCenter(null)}
                    className="rounded-full border border-bronze-light/40 py-3.5 px-6 text-center text-xs font-bold tracking-widest uppercase text-navy-dark/60 hover:bg-bronze-light/15 transition-colors cursor-pointer"
                  >
                    CLOSE DETAILS
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
