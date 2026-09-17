import React from 'react';
import { ASSETS } from '../assets';

export default function HeroSection({ onExploreBlueprint }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPhilosophy = () => {
    const el = document.getElementById('philosophy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="cinematic-hero-section">
      {/* Background Composite with Deep Obsidian Gradient Blending */}
      <div className="hero-composite-bg" aria-hidden="true">
        <div className="hero-img-scaler">
          <img
            src={ASSETS.heroAgilityComposite}
            alt=""
            className="hero-composite-img"
          />
          <div className="hero-composite-multiply" />
        </div>
        <div className="hero-mask-vignette-h" />
        <div className="hero-mask-vignette-v" />
        <div className="hero-gold-radial" />
      </div>

      {/* Editorial Centerpiece Content */}
      <div className="site-container hero-content-container">
        <div className="hero-editorial-centerpiece">
          {/* Status Indicator Pill */}
          <div className="hero-status-pill">
            <span className="status-indicator-dot" />
            <span className="status-text-cohort">COLLEGIATE ADMISSIONS &amp; TRAINING COHORTS</span>
            <span className="status-divider">/</span>
            <span className="status-text-class">Class of '25 - '28</span>
          </div>

          {/* Heading 1 - Hero Headline */}
          <h1 className="hero-headline">
            <span className="headline-row-white">WHERE DISCIPLINE MEETS</span>
            <span className="headline-row-gold">RECRUITING REALITY.</span>
          </h1>

          {/* Crisp Subtext */}
          <p className="hero-subtext">
            Collegiate athletic architecture engineered for driven youth and high school athletes. We bridge the gap between high school potential and Division-I scholarship reality through technical biomechanics, film intelligence, and verified recruitment advocacy.
          </p>

          {/* Strong Single Focal Action */}
          <div className="hero-actions-row">
            <button
              type="button"
              onClick={scrollToContact}
              className="btn-hero-primary"
            >
              <span>APPLY FOR DEVELOPMENT</span>
              <img src={ASSETS.heroArrow} alt="" className="hero-btn-arrow" />
            </button>

            <button
              type="button"
              onClick={scrollToPhilosophy}
              className="btn-hero-secondary"
            >
              <img src={ASSETS.heroExplore} alt="" className="hero-explore-icon" />
              <span>EXPLORE THE BLUEPRINT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sleek Inline Benchmark Strip (Seamless Baseline) */}
      <div className="hero-benchmark-strip">
        <div className="site-container">
          <div className="benchmark-grid">
            {/* Metric 1 */}
            <div className="benchmark-col">
              <div className="benchmark-num">
                98<span className="gold-accent">%</span>
              </div>
              <div className="benchmark-label">COLLEGIATE PLACEMENT RATE</div>
            </div>

            {/* Metric 2 */}
            <div className="benchmark-col">
              <div className="benchmark-num">
                450<span className="gold-accent">+</span>
              </div>
              <div className="benchmark-label">ATHLETES PLACED &amp; MENTORED</div>
            </div>

            {/* Metric 3 */}
            <div className="benchmark-col">
              <div className="benchmark-num">1:6</div>
              <div className="benchmark-label">COACH-TO-ATHLETE RATIO CAP</div>
            </div>

            {/* Metric 4 */}
            <div className="benchmark-col">
              <div className="benchmark-num">
                100<span className="gold-accent">%</span>
              </div>
              <div className="benchmark-label">NCAA COMPLIANCE REGISTRY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
