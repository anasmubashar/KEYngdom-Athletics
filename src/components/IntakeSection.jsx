import React, { useState } from 'react';
import { ASSETS } from '../assets';

export default function IntakeSection({ onSubmissionSuccess }) {
  const [formData, setFormData] = useState({
    athleteName: '',
    primarySport: '',
    gradYear: '',
    hudlUrl: '',
    guardianContact: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (
      !formData.athleteName ||
      !formData.primarySport ||
      !formData.gradYear ||
      !formData.hudlUrl ||
      !formData.guardianContact
    ) {
      setErrorMessage('Please complete all 4 required fields before submission.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSubmissionSuccess) {
        onSubmissionSuccess(formData);
      }
    }, 800);
  };

  return (
    <section id="contact" className="intake-section-redesign">
      {/* Subtle Background Watermark Motif */}
      <div className="intake-watermark-bg" aria-hidden="true">
        KEYNGDOM
      </div>

      <div className="site-container">
        <div className="intake-layout-grid">
          {/* Left Column: Copy & High-Trust Assurance */}
          <div className="intake-copy-col">
            <div className="intake-status-pill">
              <span className="status-indicator-dot" />
              <span className="status-pill-text">DIRECT COACHING STAFF INTAKE</span>
            </div>

            <h2 className="intake-headline">
              YOUR RECRUITING<br />
              CLOCK IS RUNNING.<br />
              <span className="gold-text">START DEVELOPMENT.</span>
            </h2>

            <p className="intake-lead-p">
              Every inquiry is evaluated personally by our technical coaches, not automated algorithms or sales reps. We review film, evaluate academic standing, and reply within 24 hours.
            </p>

            <div className="intake-trust-stack">
              <div className="trust-item">
                <img src={ASSETS.trustNcaaCompliance} alt="" className="trust-icon" />
                <span className="trust-text">100% NCAA Amateurism &amp; Recruiting Compliance</span>
              </div>
              <div className="trust-item">
                <img src={ASSETS.trustReviewGuarantee} alt="" className="trust-icon" />
                <span className="trust-text">24-Hour Evaluation Review Guarantee</span>
              </div>
              <div className="trust-item">
                <img src={ASSETS.trustConfidential} alt="" className="trust-icon" />
                <span className="trust-text">Strictly Confidential Student-Athlete Dossier</span>
              </div>
            </div>
          </div>

          {/* Right Column: Focused 4-Field High-End Terminal Form */}
          <div className="intake-terminal-col">
            <div className="terminal-card">
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="terminal-header-title">
                  <span className="terminal-tag">OFFICIAL REGISTRY</span>
                  <h3 className="terminal-h3">ATHLETE EVALUATION INTAKE</h3>
                </div>
                <div className="terminal-cohort-tag">COHORT 2025</div>
              </div>

              {submitted ? (
                <div className="terminal-success-state">
                  <div className="success-icon-wrap">
                    <span className="success-check-mark">✓</span>
                  </div>
                  <h4 className="success-title">EVALUATION INTAKE RECEIVED</h4>
                  <p className="success-body">
                    Dossier opened for <strong>{formData.athleteName}</strong>. Our recruiting staff is reviewing film packages and academic transcripts. Expect direct contact within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        athleteName: '',
                        primarySport: '',
                        gradYear: '',
                        hudlUrl: '',
                        guardianContact: '',
                      });
                    }}
                    className="btn-reset-intake"
                  >
                    SUBMIT ANOTHER ATHLETE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="terminal-form">
                  {errorMessage && (
                    <div className="terminal-error-banner">{errorMessage}</div>
                  )}

                  {/* Field 1: Athlete Name */}
                  <div className="terminal-field-group">
                    <label htmlFor="athleteName" className="terminal-label">
                      ATHLETE FULL NAME *
                    </label>
                    <input
                      type="text"
                      id="athleteName"
                      name="athleteName"
                      value={formData.athleteName}
                      onChange={handleChange}
                      placeholder="e.g. Jordan Miller"
                      className="terminal-input"
                      required
                    />
                  </div>

                  {/* Field 2: Sport & Grad Year */}
                  <div className="terminal-field-row">
                    <div className="terminal-field-col">
                      <label htmlFor="primarySport" className="terminal-label">
                        PRIMARY SPORT *
                      </label>
                      <div className="terminal-select-wrap">
                        <select
                          id="primarySport"
                          name="primarySport"
                          value={formData.primarySport}
                          onChange={handleChange}
                          className="terminal-select"
                          required
                        >
                          <option value="">Select Sport</option>
                          <option value="Track & Field">Track &amp; Field</option>
                          <option value="Football">Football</option>
                          <option value="Basketball">Basketball</option>
                          <option value="Soccer">Soccer</option>
                          <option value="Baseball / Softball">Baseball / Softball</option>
                          <option value="Volleyball">Volleyball</option>
                          <option value="Lacrosse">Lacrosse</option>
                          <option value="Other">Other Collegiate Sport</option>
                        </select>
                        <img src={ASSETS.selectArrow} alt="" className="select-arrow-icon" />
                      </div>
                    </div>

                    <div className="terminal-field-col">
                      <label htmlFor="gradYear" className="terminal-label">
                        GRADUATION YEAR *
                      </label>
                      <div className="terminal-select-wrap">
                        <select
                          id="gradYear"
                          name="gradYear"
                          value={formData.gradYear}
                          onChange={handleChange}
                          className="terminal-select"
                          required
                        >
                          <option value="">Select Year</option>
                          <option value="Class of 2025">Class of 2025</option>
                          <option value="Class of 2026">Class of 2026</option>
                          <option value="Class of 2027">Class of 2027</option>
                          <option value="Class of 2028">Class of 2028</option>
                          <option value="Class of 2029+">Class of 2029+</option>
                        </select>
                        <img src={ASSETS.selectArrow} alt="" className="select-arrow-icon" />
                      </div>
                    </div>
                  </div>

                  {/* Field 3: HUDL Link / Current Stats */}
                  <div className="terminal-field-group">
                    <label htmlFor="hudlUrl" className="terminal-label">
                      HUDL / HIGHLIGHT URL OR CURRENT STATS *
                    </label>
                    <input
                      type="text"
                      id="hudlUrl"
                      name="hudlUrl"
                      value={formData.hudlUrl}
                      onChange={handleChange}
                      placeholder="hudl.com/profile/... or stats, position, high school"
                      className="terminal-input"
                      required
                    />
                  </div>

                  {/* Field 4: Parent / Guardian Email & Phone */}
                  <div className="terminal-field-group">
                    <label htmlFor="guardianContact" className="terminal-label">
                      PARENT / GUARDIAN CONTACT (EMAIL OR PHONE) *
                    </label>
                    <input
                      type="text"
                      id="guardianContact"
                      name="guardianContact"
                      value={formData.guardianContact}
                      onChange={handleChange}
                      placeholder="parent@domain.com or (555) 000-0000"
                      className="terminal-input"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-terminal-submit"
                  >
                    <span>
                      {loading ? 'TRANSMITTING DOSSIER...' : 'SUBMIT ATHLETE PROFILE FOR REVIEW'}
                    </span>
                    <img src={ASSETS.formSubmitArrow} alt="" className="submit-arrow-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
