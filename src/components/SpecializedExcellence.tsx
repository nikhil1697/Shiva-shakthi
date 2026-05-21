import { Activity, Droplet, HeartPulse, Check, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function SpecializedExcellence() {
  const pathways = [
    {
      id: 'gastro',
      title: 'Gastroenterology',
      tagline: 'Advanced endoscopy, gut microbiome analysis, and comprehensive digestive health protocols.',
      bullets: ['IBD Management', 'Advanced Endoscopy'],
      icon: Activity,
      themeColor: 'cyan',
      imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'diabeto',
      title: 'Diabetology',
      tagline: 'Personalized reversal programs and precision glucose monitoring for metabolic resilience.',
      bullets: ['CGM Integration', 'Reversal Protocols'],
      icon: Droplet,
      themeColor: 'orange',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'endocrino',
      title: 'Endocrinology',
      tagline: 'Optimizing hormonal balance for energy, mood, and long-term vitality.',
      bullets: ['Thyroid Health', 'Hormonal Balancing'],
      icon: HeartPulse,
      themeColor: 'violet',
      imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const getGlowBg = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'bg-turquoise-brand/5';
      case 'orange':
        return 'bg-orange-vitality/5';
      case 'violet':
        return 'bg-violet-500/5';
      default:
        return 'bg-white/5';
    }
  };

  return (
    <section id="wellness" className="relative overflow-hidden bg-navy-dark py-24 lg:py-32 text-white">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-bg-overlay opacity-30 pointer-events-none z-0"></div>

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-turquoise-brand/5 blur-[130px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-vitality/5 blur-[130px] pointer-events-none z-0"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-3xl font-serif font-medium tracking-tight sm:text-4.5xl text-white">
            Specialized Excellence
          </h2>
          <p className="mx-auto max-w-xl text-xs font-bold uppercase tracking-widest text-turquoise-brand font-sans">
            Precision care pathways for the most critical pillars of your health.
          </p>
          <div className="mx-auto h-0.5 w-16 bg-bronze-light/45 rounded-full mt-3" />
        </div>

        {/* 3-Column Dark Glass Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {pathways.map((path) => {
            const IconComp = path.icon;
            return (
              <motion.div
                key={path.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl dark-glassmorphic-card p-8 cursor-pointer transition-colors duration-500 hover:bg-navy-light/40 border border-white/10"
              >
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={path.imageUrl}
                    alt={path.title}
                    className="h-full w-full object-cover opacity-15 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-25"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/95 to-navy-dark/60"></div>
                </div>

                {/* Accent neon corner glow */}
                <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full ${getGlowBg(path.themeColor)} blur-xl group-hover:scale-150 transition-transform duration-500 z-0`} />

                {/* Left side colored border marker */}
                <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b from-turquoise-brand to-orange-vitality transition-transform duration-500 group-hover:scale-y-100 z-10"></div>

                <div className="relative z-10">
                  {/* Icon Emblem */}
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-turquoise-brand border border-white/10 transition-all duration-500 group-hover:bg-turquoise-brand group-hover:text-white group-hover:border-turquoise-brand group-hover:scale-105 shadow-inner">
                    <IconComp className="h-6 w-6 animate-pulse-slow" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-turquoise-brand">
                      {path.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-300 font-sans">
                      {path.tagline}
                    </p>
                  </div>

                  {/* Pathways Specific Targets */}
                  <div className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
                    {path.bullets.map((bullet, index) => (
                      <div key={index} className="flex items-center gap-3 text-xs font-bold text-gray-200 uppercase tracking-wider font-sans">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-turquoise-brand/30 transition-colors">
                          <Check className="h-3 w-3 text-turquoise-brand" />
                        </span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chevron Trigger slide reveal */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold tracking-widest text-[#2FB7B1] uppercase font-sans overflow-hidden z-10">
                  <span className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Pathway Protocol Active
                  </span>
                  <ChevronRight className="h-4 w-4 transform transition-all duration-500 group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
