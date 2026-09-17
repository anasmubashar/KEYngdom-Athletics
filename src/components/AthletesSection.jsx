import React from 'react';
import { ASSETS } from '../assets';

export default function AthletesSection({ onOpenDossier }) {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="athletes" className="roster-section-redesign">
      <div className="site-container">
        {/* Section Header */}
        <div className="roster-header-wrap">
          <div className="roster-title-block">
            <span className="section-mono-kicker">VERIFIED PROOF OF CONCEPT</span>
            <h2 className="roster-heading">FEATURED ATHLETE ROSTER</h2>
          </div>
          <div className="roster-badge-wrap">
            <div className="ncaa-commit-badge">NCAA OFFICIAL COMMIT BADGES</div>
          </div>
        </div>

        {/* Heroic Showcase Layout: Hero Athlete (Left 7 cols) + 2 Secondary (Right 5 cols) */}
        <div className="roster-showcase-grid">
          {/* Left Column: Hero Spotlight Maya Sterling */}
          <div className="hero-athlete-col">
            <div className="hero-athlete-card">
              <div className="hero-athlete-media-wrap">
                <img
                  src={ASSETS.mayaSterlingHero}
                  alt="Maya Sterling track and field sprinter"
                  className="hero-athlete-img"
                />
                <div className="hero-athlete-gradient" />
                
                {/* Badges */}
                <div className="athlete-badges-row">
                  <div className="badge-d1-commit">NCAA D1 COMMITTED</div>
                  <div className="badge-class-pill">CLASS OF '25</div>
                </div>

                {/* Floating Profile Title */}
                <div className="hero-athlete-floating-title">
                  <span className="athlete-sport-mono">TRACK &amp; FIELD / SPRINTS</span>
                  <h3 className="athlete-hero-name">MAYA STERLING</h3>
                </div>
              </div>

              {/* Official Verified Metric Bar */}
              <div className="official-metric-bar">
                <div className="metric-cards-row">
                  <div className="metric-stat-box">
                    <span className="metric-stat-label">100M RECORD</span>
                    <span className="metric-stat-val gold-accent">11.38s</span>
                  </div>
                  <div className="metric-stat-box">
                    <span className="metric-stat-label">200M RECORD</span>
                    <span className="metric-stat-val gold-accent">23.41s</span>
                  </div>
                  <div className="metric-stat-box">
                    <span className="metric-stat-label">STATE CIF</span>
                    <span className="metric-stat-val">CHAMPION</span>
                  </div>
                </div>

                <div className="conference-banner-row">
                  <span className="conference-label">COMMITTED CONFERENCE:</span>
                  <span className="conference-val">SEC DIVISION-I FULL GRANT-IN-AID</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Secondary Spotlights + Roster Prompt */}
          <div className="secondary-athletes-col">
            {/* Marcus Vance */}
            <div className="secondary-athlete-card">
              <div className="secondary-card-header">
                <div className="secondary-meta">
                  <span className="secondary-sport">FOOTBALL / WIDE RECEIVER</span>
                  <h4 className="secondary-name">MARCUS VANCE</h4>
                  <span className="secondary-class">Class of '26 • National Recruit</span>
                </div>
                <div className="secondary-badge-gold-outline">14 D1 OFFERS</div>
              </div>

              <div className="secondary-stats-ribbon">
                <div className="stat-slot">
                  <span className="stat-slot-label">40-YD DASH</span>
                  <span className="stat-slot-num">4.38s</span>
                </div>
                <div className="stat-slot">
                  <span className="stat-slot-label">VERTICAL</span>
                  <span className="stat-slot-num">39.5"</span>
                </div>
                <div className="stat-slot">
                  <span className="stat-slot-label">CUM. GPA</span>
                  <span className="stat-slot-num gold-accent">3.82</span>
                </div>
              </div>

              <div className="secondary-status-footer">
                <span className="status-label">RECRUITING STATUS:</span>
                <span className="status-val">Consensus 4-Star Top 100</span>
              </div>
            </div>

            {/* Jordan Reed */}
            <div className="secondary-athlete-card">
              <div className="secondary-card-header">
                <div className="secondary-meta">
                  <span className="secondary-sport">BASKETBALL / POINT GUARD</span>
                  <h4 className="secondary-name">JORDAN REED</h4>
                  <span className="secondary-class">Class of '25 • Team Captain</span>
                </div>
                <div className="secondary-badge-solid-gold">IVY LEAGUE COMMIT</div>
              </div>

              <div className="secondary-stats-ribbon">
                <div className="stat-slot">
                  <span className="stat-slot-label">CAREER PTS</span>
                  <span className="stat-slot-num">1,420</span>
                </div>
                <div className="stat-slot">
                  <span className="stat-slot-label">AST/TO RATIO</span>
                  <span className="stat-slot-num">3.8 : 1</span>
                </div>
                <div className="stat-slot">
                  <span className="stat-slot-label">ACADEMIC INDEX</span>
                  <span className="stat-slot-num gold-accent">228</span>
                </div>
              </div>

              <div className="secondary-status-footer">
                <span className="status-label">DESTINATION:</span>
                <span className="status-val">Ivy League Division-I</span>
              </div>
            </div>

            {/* Roster Inquiry Prompt */}
            <div className="roster-inquiry-box">
              <div className="inquiry-left">
                <img src={ASSETS.rosterInquiryIcon} alt="" className="inquiry-shield-icon" />
                <p className="inquiry-text">
                  View complete registry of 450+ high school athletic files.
                </p>
              </div>
              <button
                type="button"
                onClick={handleScrollToContact}
                className="btn-join-roster"
              >
                <span>JOIN ROSTER</span>
                <img src={ASSETS.rosterJoinArrow} alt="" className="join-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
