import React, { useState } from 'react';
import { ASSETS } from '../assets';

export default function IntakeSection({ onSubmissionSuccess }) {
  const [formData, setFormData] = useState({
    athleteName: '',
    guardianContact: '',
    primarySport: '',
    gradYear: '',
    developmentFocus: '',
    statsNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.athleteName || !formData.guardianContact) {
      setErrorMsg('Please enter both the athlete name and parent/guardian contact.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
    if (onSubmissionSuccess) {
      onSubmissionSuccess(formData);
    }
  };

  return (
    <section id="contact" className="intake-section">
      {/* Background Watermark */}
      <div className="watermark-text" aria-hidden="true">
        KEYNGDOM
      </div>

      <div className="site-container intake-container">
        {/* Left Column: Command Call to Action & Trust Markers */}
        <div className="intake-cta-col">
          <div className="mono-tag">
            <img src={ASSETS.tagCta} alt="" className="mono-tag-icon" />
            <span>ACCELERATE ADMISSIONS PROCESS</span>
          </div>

          <h2 className="intake-title">
            YOUR RECRUITING<br />
            CLOCK IS RUNNING.<br />
            <span className="text-gold">START YOUR DEVELOPMENT TODAY.</span>
          </h2>

          <p className="intake-subtitle">
            Whether your goal is varsity leadership, national combine recognition, or an NCAA athletic scholarship, KEYngdom provides the blueprint. Every week spent in unguided repetition is recruiting equity lost.
          </p>

          {/* Trust Badges */}
          <div className="trust-badges-list">
            <div className="trust-badge-item">
              <div className="trust-icon-box">
                <img src={ASSETS.trustPipeline} alt="" className="trust-icon" />
              </div>
              <div className="trust-text-wrap">
                <h4 className="trust-item-title">DIRECT PIPELINE TO POWER 4 &amp; GROUP OF 5</h4>
                <p className="trust-item-desc">
                  Direct athletic director and recruiting coordinator channels for uncommitted prospects.
                </p>
              </div>
            </div>

            <div className="trust-badge-item">
              <div className="trust-icon-box">
                <img src={ASSETS.trustNcaa} alt="" className="trust-icon" />
              </div>
              <div className="trust-text-wrap">
                <h4 className="trust-item-title">NCAA COMPLIANCE VETTED</h4>
                <p className="trust-item-desc">
                  Zero compromise to eligibility status. Complete NIL compliance frameworks and academic oversight.
                </p>
              </div>
            </div>

            <div className="trust-badge-item">
              <div className="trust-icon-box">
                <img src={ASSETS.trustLimited} alt="" className="trust-icon" />
              </div>
              <div className="trust-text-wrap">
                <h4 className="trust-item-title">LIMITED ATHLETE INTAKE PER COHORT</h4>
                <p className="trust-item-desc">
                  Strict 1:6 coach-to-athlete maximum ensuring uncompromising individual mechanical attention.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Performance Intake Form */}
        <div className="intake-form-col">
          <div className="intake-card" id="intake">
            <div className="intake-card-accent-strip" />

            <div className="intake-card-header">
              <span className="intake-card-tag">ATHLETE EVALUATION INTAKE</span>
              <h3 className="intake-card-title">SUBMIT ATHLETE PROFILE</h3>
              <p className="intake-card-sub">
                Complete for parents, guardians, or student-athletes seeking admission.
              </p>
            </div>

            {submitted ? (
              <div className="intake-success-box">
                <span className="success-pulse-dot" />
                <h4 className="success-title">EVALUATION APPLICATION RECEIVED</h4>
                <p className="success-text">
                  Thank you, <strong>{formData.athleteName}</strong>. Your dossier has been logged into the KEYngdom evaluation queue. An admissions director will review your profile within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary-athletic reset-btn"
                >
                  SUBMIT ANOTHER PROFILE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="athlete-form">
                {errorMsg && <div className="form-error-banner">{errorMsg}</div>}

                {/* Row 1: Name & Contact */}
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="form-label" htmlFor="athleteName">
                      ATHLETE FULL NAME *
                    </label>
                    <input
                      id="athleteName"
                      name="athleteName"
                      type="text"
                      required
                      placeholder="e.g. Jordan Miller"
                      value={formData.athleteName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="guardianContact">
                      PARENT / GUARDIAN CONTACT *
                    </label>
                    <input
                      id="guardianContact"
                      name="guardianContact"
                      type="text"
                      required
                      placeholder="parent@domain.com or phone"
                      value={formData.guardianContact}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2: Sport & Grad Year */}
                <div className="form-row-2">
                  <div className="form-field">
                    <label className="form-label" htmlFor="primarySport">
                      PRIMARY SPORT *
                    </label>
                    <select
                      id="primarySport"
                      name="primarySport"
                      value={formData.primarySport}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Sport</option>
                      <option value="Football">Football</option>
                      <option value="Basketball">Basketball</option>
                      <option value="Track & Field">Track &amp; Field</option>
                      <option value="Baseball">Baseball</option>
                      <option value="Soccer">Soccer</option>
                      <option value="Multi-Sport / Other">Multi-Sport / Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="gradYear">
                      GRADUATION YEAR *
                    </label>
                    <select
                      id="gradYear"
                      name="gradYear"
                      value={formData.gradYear}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Class Year</option>
                      <option value="2025">Class of 2025 (Senior)</option>
                      <option value="2026">Class of 2026 (Junior)</option>
                      <option value="2027">Class of 2027 (Sophomore)</option>
                      <option value="2028">Class of 2028 (Freshman)</option>
                      <option value="2029+">Class of 2029+ (Middle School)</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Development Focus */}
                <div className="form-field">
                  <label className="form-label" htmlFor="developmentFocus">
                    PRIMARY DEVELOPMENT FOCUS *
                  </label>
                  <select
                    id="developmentFocus"
                    name="developmentFocus"
                    value={formData.developmentFocus}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select Core Need</option>
                    <option value="Speed & Kinematic Biomechanics">Speed &amp; Kinematic Biomechanics</option>
                    <option value="Positional IQ & Dedicated Skill Coaching">Positional IQ &amp; Skill Coaching</option>
                    <option value="Collegiate Advocacy & HUDL Portfolio">Collegiate Advocacy &amp; HUDL Portfolio</option>
                    <option value="Mental Fortitude & 1-on-1 Mentorship">Mental Fortitude &amp; Mentorship</option>
                    <option value="Summer Combine & Showcase Preparation">Summer Combine &amp; Showcase Prep</option>
                  </select>
                </div>

                {/* Row 4: Stats & HUDL Link */}
                <div className="form-field">
                  <label className="form-label" htmlFor="statsNotes">
                    CURRENT ATHLETIC STATS / SCHOOL / HUDL LINK (OPTIONAL)
                  </label>
                  <textarea
                    id="statsNotes"
                    name="statsNotes"
                    rows="3"
                    placeholder="e.g. Lincoln High School, 40-yd dash time, varsity starter, or HUDL link..."
                    value={formData.statsNotes}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn-primary-athletic form-submit-btn">
                  <span>SUBMIT ATHLETE PROFILE FOR REVIEW</span>
                  <img src={ASSETS.formSubmitArrow} alt="" className="submit-arrow-icon" />
                </button>

                {/* Trust Footer */}
                <div className="form-footer-specs">
                  <span className="spec-confidential">100% CONFIDENTIAL RECORD</span>
                  <span className="spec-response">DIRECT STAFF RESPONSE WITHIN 24H</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
