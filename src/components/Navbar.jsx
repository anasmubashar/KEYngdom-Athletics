import React, { useState, useEffect } from 'react';
import { ASSETS } from '../assets';

export default function Navbar({ onOpenDossier }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      <div className="site-container nav-container">
        {/* Brand Logo */}
        <a 
          href="#overview" 
          onClick={(e) => { e.preventDefault(); scrollTo('overview'); }} 
          className="nav-brand"
        >
          <div className="nav-logo-box">
            <img src={ASSETS.logo} alt="KEYngdom Athletics Logo" className="nav-logo-img" />
          </div>
          <div className="nav-brand-text">
            <span className="brand-name">KEYNGDOM</span>
            <span className="brand-sub">ATHLETICS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#overview" onClick={(e) => { e.preventDefault(); scrollTo('overview'); }} className="nav-link active">OVERVIEW</a>
          <a href="#who-we-are" onClick={(e) => { e.preventDefault(); scrollTo('who-we-are'); }} className="nav-link">WHO WE ARE</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} className="nav-link">SERVICES</a>
          <a href="#approach" onClick={(e) => { e.preventDefault(); scrollTo('approach'); }} className="nav-link">THE APPROACH</a>
          <a href="#featured-athletes" onClick={(e) => { e.preventDefault(); scrollTo('featured-athletes'); }} className="nav-link">FEATURED ATHLETES</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="nav-link">CONTACT</a>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Desktop Full CTA */}
          <button 
            type="button" 
            onClick={() => scrollTo('intake')}
            className="btn-primary-athletic nav-cta-btn desktop-only"
          >
            <img src={ASSETS.navWorkFlag} alt="" className="nav-flag-icon" />
            <span>WORK WITH KEYNGDOM</span>
          </button>
          
          {/* Avatar Icon Button */}
          <button 
            type="button" 
            className="nav-avatar-btn" 
            title="Athlete Portal / Profile"
            onClick={() => onOpenDossier && onOpenDossier()}
            aria-label="Athlete Profile Portal"
          >
            <img src={ASSETS.navUserAvatar} alt="" className="nav-avatar-icon" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`mobile-hamburger ${mobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-slide-down">
          <a href="#overview" onClick={(e) => { e.preventDefault(); scrollTo('overview'); }} className="mobile-link">OVERVIEW</a>
          <a href="#who-we-are" onClick={(e) => { e.preventDefault(); scrollTo('who-we-are'); }} className="mobile-link">WHO WE ARE</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} className="mobile-link">SERVICES</a>
          <a href="#approach" onClick={(e) => { e.preventDefault(); scrollTo('approach'); }} className="mobile-link">THE APPROACH</a>
          <a href="#featured-athletes" onClick={(e) => { e.preventDefault(); scrollTo('featured-athletes'); }} className="mobile-link">FEATURED ATHLETES</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="mobile-link">CONTACT</a>
          
          <button 
            type="button" 
            onClick={() => scrollTo('intake')}
            className="btn-primary-athletic mobile-drawer-cta"
          >
            <img src={ASSETS.navWorkFlag} alt="" className="nav-flag-icon" />
            <span>WORK WITH KEYNGDOM</span>
          </button>
        </div>
      )}
    </header>
  );
}
