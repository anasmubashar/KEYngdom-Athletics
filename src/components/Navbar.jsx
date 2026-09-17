import React, { useState, useEffect } from 'react';
import { ASSETS } from '../assets';

const NAV_ITEMS = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'philosophy', label: 'PHILOSOPHY' },
  { id: 'services', label: 'SERVICES' },
  { id: 'pillars', label: 'THE 5 PILLARS' },
  { id: 'athletes', label: 'ATHLETES' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navbar({ onOpenDossier }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Close mobile drawer on desktop breakpoint resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll spy detecting which section is active
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    const handleScroll = () => {
      // Top of page activates overview
      if (window.scrollY < 150) {
        setActiveSection('overview');
        return;
      }

      // Bottom of page activates contact section
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        return;
      }

      const headerOffset = 180;
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    if (id === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="redesign-header">
      <div className="site-container redesign-nav-inner">
        {/* Brand Logo Component with SVG Crest */}
        <a 
          href="#overview" 
          onClick={(e) => { e.preventDefault(); scrollTo('overview'); }} 
          className="brand-logo-link"
          aria-label="KEYngdom Athletics Home"
        >
          <img src={ASSETS.logoCrestHeader} alt="KEYngdom Crest" className="brand-crest-img" />
          <div className="brand-text-block">
            <span className="brand-name-split">
              <span className="brand-key">KEY</span>
              <span className="brand-gold">NGDOM</span>
            </span>
            <span className="brand-sub-tag">ATHLETICS ARCHITECTURE</span>
          </div>
        </a>

        {/* Desktop Streamlined Navigation */}
        <nav className="streamlined-nav desktop-only" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.id);
              }}
              className={`nav-text-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Header Button & Mobile Toggle */}
        <div className="nav-action-wrap">
          <button 
            type="button" 
            onClick={() => scrollTo('contact')}
            className="btn-apply-header desktop-only"
          >
            <span>APPLY FOR DEVELOPMENT</span>
            <img src={ASSETS.navCtaArrow} alt="" className="nav-btn-icon" />
          </button>

          {/* Mobile Hamburger Button */}
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

      {/* Mobile Drawer Menu */}
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
            onClick={() => scrollTo('contact')}
            className="btn-apply-header mobile-drawer-btn"
          >
            <span>APPLY FOR DEVELOPMENT</span>
            <img src={ASSETS.navCtaArrow} alt="" className="nav-btn-icon" />
          </button>
        </div>
      )}
    </header>
  );
}
