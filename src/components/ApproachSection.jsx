import React from 'react';
import { ASSETS } from '../assets';

export default function ApproachSection() {
  const pillars = [
    {
      num: '01',
      title: 'DEVELOPMENT',
      kicker: 'FOUNDATION',
      desc: 'Foundational movement screening, strength profiling, and kinetic baseline tracking to identify physical deficits before they limit ceiling.',
      stage: 'Stage: Functional Testing',
      isGoldAccent: true,
    },
    {
      num: '02',
      title: 'DISCIPLINE',
      kicker: 'EXECUTION',
      desc: 'Uncompromising habit formation, film review routines, nutrition protocols, and non-negotiable academic rigor inside the classroom.',
      stage: 'Stage: Daily Accountability',
      isGoldAccent: false,
    },
    {
      num: '03',
      title: 'GUIDANCE',
      kicker: 'MENTORSHIP',
      desc: 'Direct mentorship from former collegiate and professional athletes who walked the exact recruiting landscape and survived its pitfalls.',
      stage: 'Stage: 1-on-1 Counsel',
      isGoldAccent: false,
    },
    {
      num: '04',
      title: 'COMPETITION',
      kicker: 'PRESSURE TESTING',
      desc: 'High-stakes situational reps against elite peer groups, national showcase tournament stages, and validated regional combines.',
      stage: 'Stage: Live Combine Exposure',
      isGoldAccent: false,
    },
    {
      num: '05',
      title: 'PREPARATION',
      kicker: 'PLACEMENT',
      desc: 'Complete recruiting dossiers, interview poise prep for official coach visits, and mental readiness for collegiate freshman year survival.',
      stage: 'Stage: Letter of Intent Signing',
      isGoldAccent: true,
    },
  ];

  return (
    <section id="approach" className="approach-section">
      <div className="site-container">
        {/* Section Header Centered */}
        <div className="section-header-center">
          <div className="mono-tag">
            <img src={ASSETS.tagApproach} alt="" className="mono-tag-icon" />
            <span>THE PATH TO SIGNING</span>
          </div>
          <h2 className="section-title">THE KEYNGDOM APPROACH</h2>
          <p className="section-lead-center">
            A rigid, sequential development progression that eliminates guesswork from the recruiting lifecycle.
          </p>
        </div>

        {/* 5-Pillar Timeline Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.num} className={`pillar-card ${pillar.isGoldAccent ? 'accent-gold' : ''}`}>
              <div className="pillar-accent-bar" />
              <div className="pillar-num">{pillar.num}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <span className="pillar-kicker">{pillar.kicker}</span>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-stage-badge">
                <span>{pillar.stage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tactical Crucible Tier Meter */}
        <div className="crucible-tier-bar">
          <div className="crucible-left">
            <span className="crucible-label">CRUCIBLE CERTIFICATION:</span>
            <div className="crucible-blocks" aria-label="5 out of 5 blocks active">
              <span className="crucible-block active" />
              <span className="crucible-block active" />
              <span className="crucible-block active" />
              <span className="crucible-block active" />
              <span className="crucible-block active" />
            </div>
            <span className="crucible-status">TIER 1 DIVISION-READY</span>
          </div>
          <div className="crucible-right">
            <span>VERIFIED BY KEYNGDOM COMBINE PROTOCOLS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
