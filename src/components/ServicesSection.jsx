import React from 'react';
import { ASSETS } from '../assets';

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-split">
          <div className="section-title-wrap">
            <div className="mono-tag">
              <img src={ASSETS.tagServices} alt="" className="mono-tag-icon" />
              <span>PROGRAM SUITE</span>
            </div>
            <h2 className="section-title">CORE SERVICES</h2>
          </div>

        </div>

        {/* 5-Card Matrix Grid */}
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-card-top">
              <div className="service-icon-box">
                <img src={ASSETS.serviceSportsTraining} alt="" className="service-icon" />
              </div>
              <span className="service-number">01 //</span>
            </div>
            <span className="service-kicker">FOUNDATIONAL MECHANICS</span>
            <h3 className="service-name">SPORTS TRAINING</h3>
            <p className="service-desc">
              Multi-sport speed, explosive power, fast-twitch agility, and sport-specific biomechanical optimization using calibrated timing equipment.
            </p>
            <div className="service-features">
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Laser-timed 40-yd dash &amp; shuttle splits</span>
              </div>
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Force-plate power output calibration</span>
              </div>
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Deceleration &amp; hip-cross mechanics for cutting</span>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-card-top">
              <div className="service-icon-box">
                <img src={ASSETS.serviceDedicatedCoaching} alt="" className="service-icon" />
              </div>
              <span className="service-number">02 //</span>
            </div>
            <span className="service-kicker">POSITIONAL MASTERY</span>
            <h3 className="service-name">DEDICATED COACHING</h3>
            <p className="service-desc">
              Micro-rep skill development led by former collegiate tacticians. Positional IQ, route precision, defensive leverage, and live read-and-react drills.
            </p>
            <div className="service-features">
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Position-specific technique breakdown</span>
              </div>
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Open-field leverage &amp; boundary coverage</span>
              </div>
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>High-pressure situational live scenarios</span>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-card-top">
              <div className="service-icon-box">
                <img src={ASSETS.serviceMentoring} alt="" className="service-icon" />
              </div>
              <span className="service-number">03 //</span>
            </div>
            <span className="service-kicker">HOLISTIC FORTITUDE</span>
            <h3 className="service-name">1-ON-1 MENTORING</h3>
            <p className="service-desc">
              Mindset discipline, emotional regulation under competitive pressure, weekly academic review, and leadership accountability for long-term growth.
            </p>
            <div className="service-features">
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Weekly 1-on-1 performance counseling</span>
              </div>
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Grade tracking &amp; study habit auditing</span>
              </div>
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Guided preparation for coach &amp; scout interviews</span>
              </div>
            </div>
          </div>

          {/* Service 4: Spans 2 columns */}
          <div className="service-card service-card-wide">
            <div className="wide-card-left">
              <div className="service-card-top">
                <div className="service-icon-box">
                  <img src={ASSETS.serviceCollegeAdvocacy} alt="" className="service-icon" />
                </div>
                <span className="service-number">04 //</span>
              </div>
              <span className="service-kicker">RECRUITMENT EXECUTION</span>
              <h3 className="service-name">COLLEGE ADVOCACY</h3>
              <p className="service-desc">
                End-to-end management of your collegiate recruiting pathway. We cut through the noise with verified HUDL highlight curation, NCAA Eligibility Center filing, and direct staff relationships across Power 4, Group of 5, and Ivy institutions.
              </p>
            </div>
            <div className="wide-card-right">
              <div className="feature-line-wide">
                <img src={ASSETS.checkAdvocacy} alt="" className="feature-check-wide" />
                <span>Direct representation to verified college coaching staffs</span>
              </div>
              <div className="feature-line-wide">
                <img src={ASSETS.checkAdvocacy} alt="" className="feature-check-wide" />
                <span>Complete NCAA Eligibility Center audit &amp; compliance management</span>
              </div>
              <div className="feature-line-wide">
                <img src={ASSETS.checkAdvocacy} alt="" className="feature-check-wide" />
                <span>Tailored target school recruitment radar &amp; outreach campaigns</span>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <div className="service-card-top">
              <div className="service-icon-box">
                <img src={ASSETS.serviceSummerCamps} alt="" className="service-icon" />
              </div>
              <span className="service-number">05 //</span>
            </div>
            <span className="service-kicker">HIGH-EXPOSURE IMMERSION</span>
            <h3 className="service-name">SUMMER CAMPS</h3>
            <p className="service-desc">
              Intensive multi-day camps featuring standardized combine testing, live 7v7 / showcase scrimmages, verified metric publishing, and collegiate clinician instruction.
            </p>
            <div className="service-features">
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Regional combine metric recording</span>
              </div>
              <div className="feature-line">
                <img src={ASSETS.checkSmall} alt="" className="feature-check" />
                <span>Direct evaluation from collegiate clinicians</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
