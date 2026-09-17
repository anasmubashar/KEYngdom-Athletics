import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import ServicesSection from './components/ServicesSection';
import ApproachSection from './components/ApproachSection';
import AthletesSection from './components/AthletesSection';
import IntakeSection from './components/IntakeSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  const handleOpenDossier = (athlete = null) => {
    setSelectedAthlete(athlete);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAthlete(null);
  };

  const handleNavigateToIntake = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* 1. Streamlined Brand Navigation Header */}
      <Navbar onOpenDossier={() => handleOpenDossier(null)} />

      {/* Main Sections */}
      <main id="main-content">
        {/* Section 1: Full-Bleed Cinematic Hero Section */}
        <HeroSection />

        {/* Section 2: Architecture & Philosophy (Editorial Split-View) */}
        <PhilosophySection />

        {/* Section 3: Core Services (Editorial Architectural Ledger) */}
        <ServicesSection />

        {/* Section 4: The 5 Pillars: Horizontal Kinetic Step-Strip */}
        <ApproachSection />

        {/* Section 4: Elevated Featured Athletes Showcase (Magazine-Grade Roster) */}
        <AthletesSection onOpenDossier={handleOpenDossier} />

        {/* Section 5: Streamlined Refined Athlete Evaluation Intake */}
        <IntakeSection onSubmissionSuccess={(data) => console.log('Intake submission:', data)} />
      </main>

      {/* 2. Streamlined Brand Footer */}
      <Footer />

      {/* Athlete Dossier Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        athlete={selectedAthlete}
        onNavigateToIntake={handleNavigateToIntake}
      />
    </div>
  );
}
