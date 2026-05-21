/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ShieldAlert, Globe, Search, Heart } from 'lucide-react';

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

  return (
    <header className="relative z-50 w-full bg-white">
      {/* Super Top bar */}
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-2 text-xs text-gray-500 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex gap-4 font-medium">
            <a href="#support" className="transition hover:text-navy-dark">Support</a>
            <a href="#locations" className="transition hover:text-navy-dark">Locations</a>
            <a href="#global" className="transition hover:text-navy-dark">Global</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-navy-dark">
              <Globe className="h-3.5 w-3.5" />
              <span>EN</span>
            </button>
            <button className="hover:text-navy-dark">
              <Search className="h-3.5 w-3.5" />
            </button>
            <a
              href="tel:+919900012345"
              className="flex items-center gap-1.5 rounded-sm bg-red-600 px-3 py-0.5 font-bold tracking-wider text-white hover:bg-red-700"
            >
              <ShieldAlert className="h-3 w-3" />
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
                <span className="text-xl font-extrabold tracking-tight text-navy-dark sm:text-2xl">
                  Shiva Shakthi Health
                </span>
                <span className="hidden text-2xs font-bold tracking-widest text-turquoise-brand uppercase sm:block border-l border-gray-300 pl-2">
                  Integrated Care
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={onExploreCentersClick} 
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-turquoise-brand transition-colors cursor-pointer"
            >
              CENTERS
            </button>
            <button 
              onClick={onExploreProgramsClick} 
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-turquoise-brand transition-colors cursor-pointer"
            >
              PROGRAMS
            </button>
            <button 
              onClick={onWellnessClick} 
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-turquoise-brand transition-colors cursor-pointer"
            >
              WELLNESS
            </button>
            <button 
              onClick={onResearchClick} 
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-turquoise-brand transition-colors cursor-pointer"
            >
              RESEARCH
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={onBookClick}
              className="rounded-full bg-orange-vitality px-6 py-2.5 text-sm font-bold tracking-wide text-white shadow-md shadow-orange-500/10 transition-all hover:scale-102 hover:bg-orange-600 active:scale-98"
            >
              BOOK APPOINTMENT
            </button>
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
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-b border-gray-100 bg-white shadow-lg md:hidden">
          <div className="space-y-1 px-4 py-3 sm:px-6">
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
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  onBookClick();
                  setIsOpen(false);
                }}
                className="w-full rounded-full bg-orange-vitality py-3 text-center text-sm font-bold text-white shadow-sm hover:bg-orange-600"
              >
                BOOK APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
