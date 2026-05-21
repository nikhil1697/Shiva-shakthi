/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Heart, Shield, Landmark } from 'lucide-react';

export default function Footer() {
  const scienceLinks = [
    { label: 'Quick Nav', href: '#' },
    { label: 'Longevity Science', href: '#programs' },
    { label: 'Precision GI', href: '#ecosystems' }
  ];

  const servicesLinks = [
    { label: 'Surgical Center', href: '#ecosystems' },
    { label: 'Wellness Lab', href: '#programs' },
    { label: 'Chakra Care', href: '#ecosystems' }
  ];

  const specialtiesLinks = [
    { label: 'Endocrinology', href: '#' },
    { label: 'Diabetes Reversal', href: '#programs' },
    { label: 'Gut Health Protocols', href: '#programs' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Accessibility Standard', href: '#' },
    { label: 'Terms of Use', href: '#' }
  ];

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-16">
          
          {/* Brand Presentation (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-2xl font-black tracking-tight text-white block">
                Shiva Shakthi Health
              </span>
              <p className="text-xs leading-relaxed text-gray-300 max-w-sm">
                Pioneering the precise future of proactive medical longevity, diagnostic excellence, and holistic healing systems for a vibrant human lifespan experience.
              </p>
            </div>

            {/* Quality Standard Badges Icons */}
            <div className="flex items-center gap-4 text-turquoise-brand">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/5 title='Global standards'">
                <Globe className="h-4 w-4" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/5 title='Cellular wellness'">
                <Heart className="h-4 w-4" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/5 title='Legitimacy standards'">
                <Shield className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Nav Lists (Col Span 8 Divided In 4 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4 text-left">
            
            {/* Science */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#2FB7B1]">
                SCIENCE
              </h4>
              <ul className="space-y-2 text-xs">
                {scienceLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#2FB7B1]">
                SERVICES
              </h4>
              <ul className="space-y-2 text-xs">
                {servicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#2FB7B1]">
                SPECIALTIES
              </h4>
              <ul className="space-y-2 text-xs">
                {specialtiesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#2FB7B1]">
                LEGAL
              </h4>
              <ul className="space-y-2 text-xs">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-300 hover:text-white transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Outer bottom strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between text-2xs text-gray-500 font-semibold tracking-wider uppercase">
          <span>
            © 2026 SHIVA SHAKTHI HEALTH, LONGEVITY & PRECISION SCIENCE. ALL RIGHTS RESERVED.
          </span>
          <span>
            DESIGNED FOR VITALITY | BENGALURU, INDIA
          </span>
        </div>

      </div>
    </footer>
  );
}
