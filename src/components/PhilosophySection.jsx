import React from 'react';
import { ASSETS } from '../assets';

const PILLARS_PROGRAMS = [
  {
    step: '01 / BIOMECHANICAL OPTIMIZATION',
    title: 'LASER KINEMATICS & SPEED MECHANICS',
    desc: 'Sub-second sprint deceleration, high-point tracking, and ground reaction force conditioning to unlock raw speed without injury.',
  },
  {
    step: '02 / POSITIONAL FILM IQ',
    title: 'CLASSROOM SCHEME & TACTICAL LITERACY',
    desc: 'Recruiters sign athletes who see the game before the snap or whistle. Weekly digital whiteboard sessions translate directly to live-game execution.',
  },
  {
    step: '03 / DIRECT COLLEGIATE ADVOCACY',
    title: 'VERIFIED HUDL PACKAGES & COACH OUTREACH',
    desc: 'Direct positioning into Power 4, Group of 5, Ivy, and national programs with complete NCAA Core-16 GPA verification.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="philosophy-section-redesign">
      <div className="site-container">
        {/* Section Header */}
        <div className="philosophy-header-wrap">
          <div className="philosophy-title-block">
            <span className="section-mono-kicker">THE PHILOSOPHY</span>
            <h2 className="philosophy-heading">
              BEYOND REPS. ATHLETIC<br />ARCHITECTURE.
            </h2>
          </div>

        </div>

        {/* Asymmetric Editorial Showcase: Media Left + Pillars Right */}
        <div className="philosophy-showcase-grid">
          {/* Left: Media Showcase Column */}
          <div className="philosophy-media-col">
            <div className="philosophy-media-wrapper">
              <img
                src={ASSETS.coachTabletFilm}
                alt="KEYngdom coach and athlete reviewing game film on tablet"
                className="philosophy-film-img"
              />
              <div className="philosophy-film-gradient" />

              {/* Floating Glassmorphic Badge */}
              <div className="film-floating-badge">
                <div className="badge-meta-row">
                  <span className="badge-meta-tag">COLLEGIATE FILM ROOM PROTOCOL</span>
                  <span className="badge-meta-session">SESSION: 1-ON-1 IQ</span>
                </div>
                <div className="badge-title">
                  MENTORSHIP DRIVEN BY FORMER NCAA CHAMPIONSHIP COMPETITORS
                </div>
              </div>
            </div>
          </div>

          {/* Right: Structured Timeline & Pillars */}
          <div className="philosophy-pillars-col">
            {PILLARS_PROGRAMS.map((pillar, idx) => (
              <div key={idx} className="philosophy-pillar-card">
                <span className="pillar-step-kicker">{pillar.step}</span>
                <h3 className="pillar-card-title">{pillar.title}</h3>
                <p className="pillar-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
