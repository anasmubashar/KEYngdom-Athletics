import React from 'react';
import { ASSETS } from '../assets';

export default function PhilosophySection() {
  return (
    <section id="who-we-are" className="philosophy-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-split">
          <div className="section-title-wrap">
            <div className="mono-tag">
              <img src={ASSETS.tagPhilosophy} alt="" className="mono-tag-icon" />
              <span>INSTITUTIONAL PHILOSOPHY</span>
            </div>
            <h2 className="section-title">BEYOND THE WORKOUT</h2>
          </div>
          <div className="section-lead-wrap">
            <p className="section-lead text-gold">More than reps. A complete athletic architecture.</p>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="philosophy-grid">
          {/* Left Column: Narrative & Deliverables */}
          <div className="philosophy-card narrative-card">
            <div className="diagnostic-badge">
              <span>DIAGNOSTIC REALITY CHECK</span>
            </div>

            <h3 className="narrative-heading">
              THE WIDENING CHASM BETWEEN HIGH SCHOOL PRODUCTION AND COLLEGIATE STANDARDS
            </h3>

            <div className="narrative-body">
              <p>
                Every year, thousands of talented youth and high school athletes are overlooked. The cause is rarely lack of effort—it is an antiquated development system that prioritizes isolated gym sets over integrated collegiate preparation.
              </p>
              <p>
                KEYngdom bridges this critical gap. We refuse to run generic workouts. Instead, our athletes train inside a collegiate-grade ecosystem integrating kinematic breakdown, situational game intelligence, academic rigor, and targeted college recruiting advocacy.
              </p>
            </div>

            {/* 4-Item Deliverables Matrix */}
            <div className="deliverable-matrix">
              <div className="deliverable-box">
                <span className="deliverable-code">01 / BIOMECHANICS</span>
                <p className="deliverable-text">Kinematic video capture &amp; injury prevention models.</p>
              </div>

              <div className="deliverable-box">
                <span className="deliverable-code">02 / FILM IQ</span>
                <p className="deliverable-text">Classroom scheme analysis and tactical situational mastery.</p>
              </div>

              <div className="deliverable-box">
                <span className="deliverable-code">03 / CHARACTER</span>
                <p className="deliverable-text">Habit discipline, academic accountability, mental poise.</p>
              </div>

              <div className="deliverable-box">
                <span className="deliverable-code">04 / RECRUITMENT</span>
                <p className="deliverable-text">Direct coach outreach, NCAA registry, portfolio packaging.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Photo Showcase with Mentorship Overlay */}
          <div className="philosophy-showcase-card">
            <div className="showcase-img-wrap">
              <img
                src={ASSETS.coachTabletAnalysis}
                alt="KEYngdom coach and athlete analyzing digital playbook tablet in training weightroom"
                className="showcase-img"
              />
              <div className="showcase-gradient" />

              {/* Bottom Floating Sleek Card */}
              <div className="showcase-overlay-card">
                <div className="overlay-card-header">
                  <span className="overlay-meta">FIELD-LEVEL MENTORSHIP</span>
                  <span className="protocol-badge">PROTOCOL</span>
                </div>

                <h4 className="overlay-title">Mentor &amp; Mentee Development Model</h4>

                <p className="overlay-desc">
                  Direct peer-to-mentor interaction with former NCAA championship-caliber athletes. Real-time tablet evaluation, footwork correction, and mental conditioning before, during, and after competitive reps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
