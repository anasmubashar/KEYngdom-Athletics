import React from 'react';
import { ASSETS } from '../assets';

export default function AthletesSection({ onOpenDossier }) {
  const athletes = [
    {
      id: 'maya-sterling',
      name: 'MAYA STERLING',
      sport: 'TRACK & FIELD / SPRINTS',
      badges: ['CLASS 2025', 'D1 COMMITTED'],
      image: ASSETS.athleteMayaSterling,
      metrics: [
        { label: '100M RECORD', value: '11.18s' },
        { label: '200M RECORD', value: '23.12s' },
      ],
      desc: 'Central State Record Holder. Key development focus: block acceleration dynamics & recruitment positioning.',
      status: 'STATUS: ACTIVE',
      actionText: 'VIEW DOSSIER → (ORU)',
    },
    {
      id: 'marcus-vance',
      name: 'MARCUS VANCE',
      sport: 'FOOTBALL / WIDE RECEIVER',
      badges: ['CLASS 2026', '4-STAR RECRUIT'],
      image: ASSETS.athleteMarcusVance,
      metrics: [
        { label: '40-YD DASH', value: '4.38s' },
        { label: 'CUMULATIVE GPA', value: '3.92' },
      ],
      desc: 'Targeted release technique, high-point catch radius mechanics, and direct weekly college coordinator film submissions.',
      status: 'RECRUIT STATUS: OPEN',
      actionText: 'EVALUATION: 8 OFFERS',
    },
    {
      id: 'jordan-reed',
      name: 'JORDAN REED',
      sport: 'BASKETBALL / POINT GUARD',
      badges: ['CLASS 2025', 'ALL-AMERICAN'],
      image: ASSETS.athleteJordanReed,
      metrics: [
        { label: 'CAREER SCORING', value: '2,120 PTS' },
        { label: 'HONORS', value: '1ST TEAM ALL-STATE' },
      ],
      desc: 'High-IQ pick-and-roll dissection, mental endurance, and academic compliance positioning for Ivy League qualification.',
      status: 'STATUS: COMMITTED',
      actionText: 'IVY LEAGUE REPORT →',
    },
  ];

  return (
    <section id="featured-athletes" className="athletes-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-split">
          <div className="section-title-wrap">
            <div className="mono-tag">
              <img src={ASSETS.tagAthletes} alt="" className="mono-tag-icon" />
              <span>VERIFIED TALENT PIPELINE</span>
            </div>
            <h2 className="section-title">FEATURED ATHLETES</h2>
          </div>
          <div className="section-lead-wrap">
            <div className="dossier-status-pill">
              <span>ACTIVE SCOUTING DOSSIERS</span>
            </div>
          </div>
        </div>

        {/* 3 Athlete Cards Grid */}
        <div className="athletes-grid">
          {athletes.map((athlete) => (
            <div key={athlete.id} className="athlete-card">
              {/* Photo & Badges */}
              <div className="athlete-photo-wrap">
                <img src={athlete.image} alt={athlete.name} className="athlete-img" />
                <div className="athlete-photo-gradient" />

                {/* Top Badges */}
                <div className="athlete-badges">
                  <span className="athlete-badge primary">{athlete.badges[0]}</span>
                  <span className="athlete-badge secondary">{athlete.badges[1]}</span>
                </div>

                {/* Bottom Photo Nameplate */}
                <div className="athlete-nameplate">
                  <span className="athlete-sport">{athlete.sport}</span>
                  <h3 className="athlete-name">{athlete.name}</h3>
                </div>
              </div>

              {/* Technical Metrics Box */}
              <div className="athlete-metrics-box">
                <div className="metrics-row">
                  {athlete.metrics.map((m, idx) => (
                    <div key={idx} className="metric-cell">
                      <span className="metric-cell-label">{m.label}</span>
                      <span className="metric-cell-val">{m.value}</span>
                    </div>
                  ))}
                </div>

                <p className="athlete-desc">{athlete.desc}</p>

                <div className="athlete-card-footer">
                  <span className="athlete-status-code">{athlete.status}</span>
                  <button 
                    type="button" 
                    onClick={() => onOpenDossier && onOpenDossier(athlete)}
                    className="athlete-action-link"
                  >
                    {athlete.actionText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Roster Action Bar */}
        <div className="roster-action-bar">
          <div className="roster-bar-left">
            <img src={ASSETS.shieldCompliance} alt="" className="compliance-shield-icon" />
            <span className="compliance-note">
              Inquire on active high school athletes without compromise to recruiting compliance.
            </span>
          </div>
          <button 
            type="button" 
            onClick={() => onOpenDossier && onOpenDossier(null)}
            className="dossier-vault-btn"
          >
            <span>ACCESS FULL DOSSIER VAULT</span>
            <img src={ASSETS.arrowDossier} alt="" className="vault-arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
