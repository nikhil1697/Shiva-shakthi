/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Ecosystems from './components/Ecosystems';
import PromoGlow from './components/PromoGlow';
import FamilySection from './components/FamilySection';
import SpecializedExcellence from './components/SpecializedExcellence';
import OfferingsSection from './components/OfferingsSection';
import Clinicians from './components/Clinicians';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function App() {
  const [selectedCareCenter, setSelectedCareCenter] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookAppointment = () => {
    setSelectedCareCenter('');
    scrollToSection('booking');
  };

  const handleBookCenter = (centerName: string) => {
    setSelectedCareCenter(centerName);
    scrollToSection('booking');
  };

  const handleBookProgram = (programName: string) => {
    setSelectedCareCenter(`Program Enrollment: ${programName}`);
    scrollToSection('booking');
  };

  const handleExploreCenters = () => {
    scrollToSection('ecosystems');
  };

  const handleExplorePrograms = () => {
    scrollToSection('programs');
  };

  const handleExploreWellness = () => {
    scrollToSection('wellness');
  };

  const handleExploreResearch = () => {
    scrollToSection('research');
  };

  return (
    <div className="min-h-screen bg-bg-azure flex flex-col font-sans text-navy-dark antialiased">
      {/* Navigation Header */}
      <Header
        onBookClick={handleBookAppointment}
        onExploreCentersClick={handleExploreCenters}
        onExploreProgramsClick={handleExplorePrograms}
        onWellnessClick={handleExploreWellness}
        onResearchClick={handleExploreResearch}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <HeroSection
            onStartJourneyClick={handleBookAppointment}
            onExploreScienceClick={handleExplorePrograms}
          />
        </motion.div>

        {/* Ecosystem Centers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <Ecosystems onBookCenter={handleBookCenter} />
        </motion.div>

        {/* Triple Bento-grid Promos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <PromoGlow />
        </motion.div>

        {/* Legacy family builder bio */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <FamilySection onStoryClick={handleExploreCenters} />
        </motion.div>

        {/* Specialized dark section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <SpecializedExcellence />
        </motion.div>

        {/* Core Offering Health Programs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <OfferingsSection onBookProgram={handleBookProgram} />
        </motion.div>

        {/* Clinicians avatars headshots list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <Clinicians />
        </motion.div>

        {/* Dynamic Interactive Booking Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
        >
          <BookingForm initialCenterName={selectedCareCenter} />
        </motion.div>
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
