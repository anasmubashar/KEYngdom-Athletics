import React from 'react';
import { ASSETS } from '../assets';

const STEPS = [
  {
    num: '01',
    phase: 'PHASE 1',
    title: 'DEVELOPMENT',
    desc: 'Functional biomechanical screening and kinetic baseline metrics to establish foundation.',
    isHighlighted: false,
  },
  {
    num: '02',
    phase: 'PHASE 2',
    title: 'DISCIPLINE',
    desc: 'Habit formation, nutritional regimens, and non-negotiable classroom GPA standards.',
    isHighlighted: false,
  },
  {
    num: '03',
    phase: 'PHASE 3',
    title: 'GUIDANCE',
    desc: '1-on-1 mentorship with former championship athletes who know the collegiate recruiting trail.',
    isHighlighted: false,
  },
  {
    num: '04',
    phase: 'PHASE 4',
    title: 'COMPETITION',
    desc: 'Pressure-tested situational labs, showcase tournaments, and verified combine testing.',
    isHighlighted: false,
  },
  {
    num: '05',
    phase: 'PHASE 5',
    title: 'PREPARATION',
    desc: 'Interview coaching for official visits, recruitment dossiers, and National Letter of Intent signing.',
    isHighlighted: true,
  },
];

export default function ApproachSection() {
  return (
    <section id="pillars" className="trajectory-section-redesign">
      <div className="site-container ">
        {/* Section Header */}
        <div className="trajectory-header">
          <div className="trajectory-kicker-row flex flex-col gap-4">
            <span className="section-mono-kicker">THE SEQUENTIAL METHOD</span>
          </div>
          <h2 className="trajectory-heading">THE KEYNGDOM 5-STEP TRAJECTORY</h2>
        </div>

        {/* Horizontal Kinetic Step Track */}
        <div className="horizontal-step-track">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`trajectory-step-box ${step.isHighlighted ? 'step-highlighted' : ''}`}
            >
              <div className="step-num-display">{step.num}</div>
              <div className="step-phase-tag">{step.phase}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
