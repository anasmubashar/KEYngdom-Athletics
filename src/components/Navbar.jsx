import React, { useState, useEffect } from 'react';
import { ASSETS } from '../assets';

const NAV_ITEMS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'who-we-are', label: 'WHO WE ARE' },
  { id: 'services', label: 'SERVICES' },
  { id: 'approach', label: 'THE APPROACH' },
  { id: 'featured-athletes', label: 'FEATURED ATHLETES' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ onOpenDossier }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

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

  // Scroll spy: detect which section is in view on scroll
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const handleScroll = () => {
      // If user has scrolled near bottom of page, activate contact section
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const headerOffset = 180; // trigger point slightly below sticky header
      let currentActive = 'overview';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            currentActive = id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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

        {/* Desktop Navigation Links with Active Scroll Spy */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
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
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
          
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
