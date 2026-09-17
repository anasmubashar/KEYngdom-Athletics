import React from 'react';
import { ASSETS } from '../assets';

export default function HeroSection() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="hero-section">
      {/* Background Stadium Grid Glow */}
      <div className="hero-bg-grid" aria-hidden="true" />

      <div className="site-container hero-container">
        <div className="hero-grid">
          {/* Left Column: Copy & Command Center */}
          <div className="hero-content">
            {/* Enrollment Badge */}
            <div className="hero-cohort-badge">
              <span className="badge-pulse-dot" />
              <span className="badge-highlight">COHORT 2025 SUMMER &amp; FALL ENROLLING</span>
              <span className="badge-sep">/</span>
              <span className="badge-sub">42 SEATS REMAINING</span>
            </div>

            {/* Display H1 */}
            <h1 className="hero-title">
              WHERE DISCIPLINE<br />
              MEETS<br />
              <span className="text-gold">RECRUITING REALITY.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Comprehensive sports development, technical skill coaching, and collegiate advocacy built specifically for driven youth and high school athletes.
            </p>

            {/* Dual CTA Buttons */}
            <div className="hero-cta-group">
              <button
                type="button"
                onClick={() => scrollTo('intake')}
                className="btn-primary-athletic hero-btn"
              >
                <span>WORK WITH KEYNGDOM</span>
                <img src={ASSETS.heroCtaFlag} alt="" className="hero-btn-icon" />
              </button>
              
              <button
                type="button"
                onClick={() => scrollTo('approach')}
                className="btn-secondary-athletic hero-btn"
              >
                <img src={ASSETS.heroCtaCompass} alt="" className="hero-btn-icon" />
                <span>EXPLORE DEVELOPMENT PATHWAYS</span>
              </button>
            </div>

            {/* Micro Spec Bar */}
            <div className="micro-spec-bar">
              <div className="spec-item">
                <img src={ASSETS.specShield} alt="" className="spec-icon" />
                <span>Verified High-Performance Architecture</span>
              </div>
              <div className="spec-item">
                <img src={ASSETS.specStopwatch} alt="" className="spec-icon" />
                <span>Sub-Second Metric Tracking</span>
              </div>
              <div className="spec-item">
                <img src={ASSETS.specTarget} alt="" className="spec-icon" />
                <span>D1-D3 &amp; NAIA Pipeline</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Framing with Athletic Gold Angles */}
          <div className="hero-visual-col">
            <div className="visual-glow-backdrop" />
            <div className="visual-master-box">
              {/* Corner Gold Markers */}
              <div className="corner-marker top-left" aria-hidden="true" />
              <div className="corner-marker bottom-right" aria-hidden="true" />

              {/* Action Media */}
              <div className="hero-image-wrap">
                <img
                  src={ASSETS.heroTurfLadderDrills}
                  alt="KEYngdom Athletics athletes sprinting through ladder drills on turf"
                  className="hero-action-img"
                />
                <div className="hero-img-gradient" />

                {/* Floating Live Card Overlay */}
                <div className="floating-live-card">
                  <div className="live-card-top">
                    <div className="live-pill">
                      <span className="live-indicator-dot" />
                      <span className="live-pill-text">LIVE COMBINE FIELD</span>
                    </div>
                    <span className="session-id">SESSION ID: #KD-904</span>
                  </div>

                  <h3 className="live-card-title">KINETIC AGILITY &amp; ACCELERATION LABS</h3>

                  <div className="live-card-bottom">
                    <span className="drill-label">Speed: Ladder Transitions</span>
                    <span className="readiness-tag">100% Full Readiness</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Ribbon */}
        <div className="stats-ribbon">
          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-unit-label">COLLEGIATE SUCCESS</span>
            </div>
            <div className="stat-value-box">
              <span className="stat-number">98</span>
              <span className="stat-suffix">%</span>
            </div>
            <div className="stat-footer">
              <span className="stat-footer-text">PLACEMENT RATE TO NEXT-LEVEL</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-unit-label">CUMULATIVE IMPACT</span>
            </div>
            <div className="stat-value-box">
              <span className="stat-number">450</span>
              <span className="stat-suffix">+</span>
            </div>
            <div className="stat-footer">
              <span className="stat-footer-text">STUDENT ATHLETES MENTORED</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-unit-label">RECRUITING MATRIX</span>
            </div>
            <div className="stat-value-box">
              <span className="stat-number">12</span>
            </div>
            <div className="stat-footer">
              <span className="stat-footer-text">D1 &amp; D2 SPORT PATHWAYS</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span className="stat-unit-label">INSTRUCTION RIGOR</span>
            </div>
            <div className="stat-value-box">
              <span className="stat-number">1:6</span>
            </div>
            <div className="stat-footer">
              <span className="stat-footer-text">COACH-TO-ATHLETE FOCUS RATIO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
