import { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert, Globe, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookClick: () => void;
  onExploreCentersClick: () => void;
  onExploreProgramsClick: () => void;
  onWellnessClick: () => void;
  onResearchClick: () => void;
}

export default function Header({ 
  onBookClick, 
  onExploreCentersClick, 
  onExploreProgramsClick,
  onWellnessClick,
  onResearchClick
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-bg-azure/80 backdrop-blur-xl shadow-md shadow-navy-dark/3 border-b border-bronze-light/30 py-1' : 'bg-bg-azure border-b border-transparent py-2'}`}>
      {/* Super Top bar */}
      <div className={`border-b border-bronze-light/20 bg-bg-azure/50 px-4 text-[10px] text-navy-dark/60 sm:px-6 lg:px-8 transition-all duration-500 overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0 border-b-0' : 'max-h-12 py-2.5 opacity-100'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex gap-5 font-bold tracking-wider uppercase">
            <a href="#support" className="transition hover:text-turquoise-brand">Support</a>
            <a href="#locations" className="transition hover:text-navy-dark">Locations</a>
            <a href="#global" className="transition hover:text-navy-dark">Global</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-navy-dark font-bold">
              <Globe className="h-3.5 w-3.5 text-turquoise-brand/75" />
              <span>EN</span>
            </button>
            <button className="hover:text-navy-dark">
              <Search className="h-3.5 w-3.5" />
            </button>
            <a
              href="tel:+919900012345"
              className="flex items-center gap-1.5 rounded-full bg-[#9D3B24] px-3.5 py-1 text-[9px] font-black tracking-widest text-white hover:bg-[#85301E] transition-colors"
            >
              <ShieldAlert className="h-3 w-3 animate-pulse" />
              EMERGENCY
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-serif font-bold tracking-tight text-navy-dark">
                  Shiva Shakthi
                </span>
                <span className="hidden text-3xs font-black tracking-widest text-turquoise-brand uppercase sm:block border-l border-bronze-light/50 pl-2">
                  Integrated Health
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={onExploreCentersClick} 
              className="luxury-underline text-2xs font-extrabold tracking-widest text-navy-dark/70 hover:text-turquoise-brand transition-colors cursor-pointer uppercase"
            >
              CENTERS
            </button>
            <button 
              onClick={onExploreProgramsClick} 
              className="luxury-underline text-2xs font-extrabold tracking-widest text-navy-dark/70 hover:text-turquoise-brand transition-colors cursor-pointer uppercase"
            >
              PROGRAMS
            </button>
            <button 
              onClick={onWellnessClick} 
              className="luxury-underline text-2xs font-extrabold tracking-widest text-navy-dark/70 hover:text-turquoise-brand transition-colors cursor-pointer uppercase"
            >
              WELLNESS
            </button>
            <button 
              onClick={onResearchClick} 
              className="luxury-underline text-2xs font-extrabold tracking-widest text-navy-dark/70 hover:text-turquoise-brand transition-colors cursor-pointer uppercase"
            >
              RESEARCH
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={onBookClick}
              className="rounded-full bg-orange-vitality px-6 py-2.5 text-2xs font-black tracking-widest text-white shadow-md shadow-turquoise-brand/10 hover:bg-turquoise-light hover:shadow-lg hover:shadow-turquoise-brand/20 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              BOOK APPOINTMENT
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full z-40 border-b border-bronze-light/30 bg-bg-azure/95 backdrop-blur-xl shadow-lg md:hidden overflow-hidden"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              <button
                onClick={() => {
                  onExploreCentersClick();
                  setIsOpen(false);
                }}
                className="block w-full py-2.5 text-left text-sm font-bold text-gray-700 hover:text-turquoise-brand"
              >
                CENTERS
              </button>
              <button
                onClick={() => {
                  onExploreProgramsClick();
                  setIsOpen(false);
                }}
                className="block w-full py-2.5 text-left text-sm font-bold text-gray-700 hover:text-turquoise-brand"
              >
                PROGRAMS
              </button>
              <button
                onClick={() => {
                  onWellnessClick();
                  setIsOpen(false);
                }}
                className="block w-full py-2.5 text-left text-sm font-bold text-gray-700 hover:text-turquoise-brand cursor-pointer"
              >
                WELLNESS
              </button>
              <button
                onClick={() => {
                  onResearchClick();
                  setIsOpen(false);
                }}
                className="block w-full py-2.5 text-left text-sm font-bold text-gray-700 hover:text-turquoise-brand cursor-pointer"
              >
                RESEARCH
              </button>
              <div className="pt-4 border-t border-bronze-light/20">
                <button
                  onClick={() => {
                    onBookClick();
                    setIsOpen(false);
                  }}
                  className="w-full rounded-full bg-orange-vitality py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-turquoise-light"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
