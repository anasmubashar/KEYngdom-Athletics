import React, { useState } from 'react';
import { ASSETS } from '../assets';

const SERVICES_DATA = [
  {
    id: 'sports-training',
    index: '01',
    kicker: 'FOUNDATIONAL MECHANICS',
    title: 'SPORTS TRAINING',
    icon: ASSETS.serviceSportsTraining,
    summary:
      'Multi-sport speed, explosive power, fast-twitch agility, and biomechanical optimization using calibrated timing equipment.',
    capsules: ['Laser 40yd & 10yd Split Timing', 'Force-Plate Ground Contact Metrics', 'Deceleration & ACL Risk Screening'],
  },
  {
    id: 'coaching',
    index: '02',
    kicker: 'POSITIONAL MASTERY',
    title: 'DEDICATED COACHING',
    icon: ASSETS.serviceDedicatedCoaching,
    summary:
      'Micro-rep technical skill development led by former collegiate tacticians with live read-and-react drills.',
    capsules: ['Position-Isolated Technical Drills', 'Game-Film Breakdown & Scheme Literacy', 'High-Pressure Situational Labs'],
  },
  {
    id: 'mentoring',
    index: '03',
    kicker: 'HOLISTIC FORTITUDE',
    title: '1-ON-1 MENTORING',
    icon: ASSETS.serviceMentoring,
    summary:
      'Mindset discipline, emotional regulation under competitive pressure, and weekly academic review for long-term growth.',
    capsules: ['Weekly GPA & NCAA Eligibility Audit', 'Mental Performance Training', 'Adversity Protocols & Recovery Support'],
  },
  {
    id: 'college-advocacy',
    index: '04',
    kicker: 'RECRUITMENT EXECUTION',
    title: 'COLLEGE ADVOCACY',
    icon: ASSETS.serviceCollegeAdvocacy,
    summary:
      'End-to-end management of your recruiting pathway, verified HUDL curation, and direct relationships across collegiate programs.',
    capsules: ['Direct Coach & Coordinator Submissions', 'Complete NCAA 16-Core Course Audit', 'Official Visit Prep & Negotiation'],
  },
  {
    id: 'summer-camps',
    index: '05',
    kicker: 'HIGH-EXPOSURE IMMERSION',
    title: 'SUMMER CAMPS',
    icon: ASSETS.serviceSummerCamps,
    summary:
      'Intensive multi-day camps featuring standardized combine testing, live showcase competition, and scout-verified certification.',
    capsules: ['Regional Combine Leaderboards', 'Scout-Verified Athletic Certificates', 'Live 7v7 / Showcase Match Play'],
  },
];

export default function ServicesSection() {
  const [activeRow, setActiveRow] = useState(null);

  const handleScrollToIntake = (serviceName) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleRow = (idx) => {
    setActiveRow(activeRow === idx ? null : idx);
  };

  return (
    <section id="services" className="services-ledger-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="services-header-wrap">
          <div className="services-title-col">
            <div className="services-mono-kicker">
              <span>PROGRAM MATRIX</span>
            </div>
            <h2 className="services-heading">CORE SERVICES</h2>
          </div>
        </div>

        {/* Editorial Architectural Ledger (Non-Card Strip) */}
        <div className="services-ledger-table" role="list">
          {SERVICES_DATA.map((service, idx) => {
            const isExpanded = activeRow === idx;
            return (
              <div
                key={service.id}
                role="listitem"
                className={`services-ledger-row ${isExpanded ? 'row-expanded' : ''}`}
                onClick={() => toggleRow(idx)}
              >
                {/* Left: Index + Gold Icon + Title */}
                <div className="row-brand-col">
                  <div className="row-index-badge">{service.index}</div>
                  <div className="row-icon-box">
                    <img src={service.icon} alt="" className="row-service-icon" />
                  </div>
                  <div className="row-headings">
                    <span className="row-kicker">{service.kicker}</span>
                    <h3 className="row-title">{service.title}</h3>
                  </div>
                </div>

                {/* Center: Distilled Summary & Key Deliverable Capsules */}
                <div className="row-content-col">
                  <p className="row-summary-text">{service.summary}</p>
                  <div className="row-capsules-wrap">
                    {service.capsules.map((capsule, cIdx) => (
                      <span key={cIdx} className="services-capsule-tag">
                        {capsule}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Direct Module Action */}
                <div className="row-action-col">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleScrollToIntake(service.title);
                    }}
                    className="row-apply-btn"
                    aria-label={`Apply for ${service.title}`}
                  >
                    <span>ENROLL MODULE</span>
                    <span className="row-arrow">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
