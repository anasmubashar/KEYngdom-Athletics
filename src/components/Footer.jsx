import React from 'react';
import { ASSETS } from '../assets';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        {/* Main 4-Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Accreditation */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img src={ASSETS.logo} alt="KEYngdom Logo" className="footer-logo-img" />
              <div className="footer-brand-title">
                <span className="footer-brand-name">KEYNGDOM</span>
                <span className="footer-brand-sub">ATHLETICS</span>
              </div>
            </div>

            <p className="footer-mission-text">
              Forging elite athletes through discipline, technical training, and collegiate advocacy. We bridge the critical gap between grassroots youth performance &amp; collegiate recruitment.
            </p>

            <div className="accreditation-block">
              <span className="accreditation-label">VERIFIED ACCREDITATION</span>
              <div className="accreditation-badges">
                <span className="accreditation-pill">NCAA ELIGIBILITY APPROVED</span>
                <span className="accreditation-pill">USATF CERTIFIED</span>
              </div>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">PROGRAMS</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Sports Training</a></li>
              <li><a href="#services">Dedicated Coaching</a></li>
              <li><a href="#services">1-on-1 Mentoring</a></li>
              <li><a href="#services">College Advocacy</a></li>
              <li><a href="#services">Summer Camps</a></li>
            </ul>
          </div>

          {/* Column 3: Athlete Resources */}
          <div className="footer-col">
            <h4 className="footer-heading">ATHLETE RESOURCES</h4>
            <ul className="footer-links-list">
              <li><a href="#featured-athletes">Scouting Reports</a></li>
              <li><a href="#featured-athletes">Combine Metrics</a></li>
              <li><a href="#intake">NIL Readiness</a></li>
              <li><a href="#overview">Recruiting Calendar</a></li>
              <li><a href="#who-we-are">Biomechanics Lab</a></li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">DIRECT CONTACT</h4>
            <div className="contact-items">
              <div className="contact-line">
                <img src={ASSETS.footerLocation} alt="" className="contact-icon" />
                <span>National Training Facility HQ</span>
              </div>
              <div className="contact-line">
                <img src={ASSETS.footerEmail} alt="" className="contact-icon" />
                <a href="mailto:admissions@keyngdomathletics.com">admissions@keyngdomathletics.com</a>
              </div>
              <div className="contact-line">
                <img src={ASSETS.footerPhone} alt="" className="contact-icon" />
                <span>+1 (800) 539-6436</span>
              </div>
            </div>

            <div className="footer-social-wrap">
              <span className="social-label">NETWORK CONNECT</span>
              <div className="social-links">
                <a href="#twitter" aria-label="X / Twitter" className="social-btn">
                  <img src={ASSETS.socialTwitter} alt="" className="social-icon" />
                </a>
                <a href="#instagram" aria-label="Instagram" className="social-btn">
                  <img src={ASSETS.socialInstagram} alt="" className="social-icon" />
                </a>
                <a href="#youtube" aria-label="YouTube" className="social-btn">
                  <img src={ASSETS.socialYoutube} alt="" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            &copy; 2024 KEYNGDOM ATHLETICS LLC. ALL RIGHTS RESERVED.
          </span>
          <div className="legal-links">
            <a href="#privacy">PRIVACY POLICY</a>
            <a href="#terms">TERMS OF SERVICE</a>
            <a href="#conduct">ATHLETIC CODE OF CONDUCT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
