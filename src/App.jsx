import React, { useState } from 'react';
import './App.css';
import TopNoticeBar from './components/TopNoticeBar';
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
    const el = document.getElementById('intake');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* 1. Admissions Notice Banner */}
      <TopNoticeBar />

      {/* 2. Sticky Glassmorphic Navbar */}
      <Navbar onOpenDossier={() => handleOpenDossier(null)} />

      {/* Main Sections */}
      <main id="main-content">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* Section 2: Who KEYngdom Is ("Beyond the Workout") */}
        <PhilosophySection />

        {/* Section 3: Core Services */}
        <ServicesSection />

        {/* Section 4: The KEYngdom Approach */}
        <ApproachSection />

        {/* Section 5: Featured Athletes (Showcase Roster) */}
        <AthletesSection onOpenDossier={handleOpenDossier} />

        {/* Section 6: Evaluation Enrollment Intake & Final CTA */}
        <IntakeSection onSubmissionSuccess={(data) => console.log('Intake submission:', data)} />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* Athlete Dossier & Vault Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        athlete={selectedAthlete}
        onNavigateToIntake={handleNavigateToIntake}
      />
    </div>
  );
}
