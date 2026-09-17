import React from 'react';
import { ASSETS } from '../assets';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="streamlined-footer">
      <div className="site-container">
        {/* Top Row with Logo, Quick Links, Compliance Tag */}
        <div className="footer-top-row">
          {/* Logo */}
          <div className="footer-brand">
            <img src={ASSETS.logoCrestFooter} alt="KEYngdom Crest" className="footer-crest-img" />
            <span className="footer-brand-text">
              KEY<span className="footer-gold">NGDOM</span> ATHLETICS
            </span>
          </div>

          {/* Quick Links */}
          <nav className="footer-quick-links" aria-label="Footer Quick Links">
            <button
              type="button"
              onClick={() => scrollTo('philosophy')}
              className="footer-nav-btn"
            >
              PHILOSOPHY
            </button>
            <button
              type="button"
              onClick={() => scrollTo('pillars')}
              className="footer-nav-btn"
            >
              PILLARS
            </button>
            <button
              type="button"
              onClick={() => scrollTo('athletes')}
              className="footer-nav-btn"
            >
              ROSTER
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="footer-nav-btn"
            >
              ADMISSIONS
            </button>
          </nav>

          {/* Compliance Tag */}
          <div className="footer-compliance-tag">
            NCAA COMPLIANCE CERTIFIED • EST. 2024
          </div>
        </div>

        {/* Bottom Row with Legal Copyright & Links */}
        <div className="footer-legal-row">
          <div className="footer-copyright">
            © 2025 KEYngdom Athletics Inc. All Elite Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="footer-legal-link">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="footer-legal-link">
              Amateurism Terms
            </a>
            <a href="#conduct" onClick={(e) => e.preventDefault()} className="footer-legal-link">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
