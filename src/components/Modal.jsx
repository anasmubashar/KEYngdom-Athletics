import React from 'react';

export default function Modal({ isOpen, onClose, athlete, onNavigateToIntake }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-accent-strip" />

        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-tag">KEYNGDOM ATHLETICS VERIFIED DOSSIER</span>
            <h3 className="modal-title">
              {athlete ? athlete.name : 'ALL ACTIVE RECRUIT DOSSIERS'}
            </h3>
          </div>
          <button type="button" onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-content">
          {athlete ? (
            <div className="dossier-single-view">
              <div className="dossier-meta-row">
                <span className="dossier-badge primary">{athlete.sport}</span>
                {athlete.badges.map((b, i) => (
                  <span key={i} className="dossier-badge secondary">{b}</span>
                ))}
              </div>

              <div className="dossier-metrics-grid">
                {athlete.metrics.map((m, idx) => (
                  <div key={idx} className="dossier-metric-item">
                    <span className="metric-lbl">{m.label}</span>
                    <span className="metric-val">{m.value}</span>
                  </div>
                ))}
              </div>

              <p className="dossier-bio">{athlete.desc}</p>

              <div className="dossier-compliance-notice">
                <span>NCAA ELIGIBILITY ID: #NCAA-KY-{athlete.id.toUpperCase().slice(0, 4)}</span>
                <span className="verified-stamp">VERIFIED BY COMBINE RADAR</span>
              </div>
            </div>
          ) : (
            <div className="dossier-vault-view">
              <p className="vault-intro">
                Access verified scouting packages, laser split telemetry, kinematic breakdown footage, and academic compliance records for NCAA collegiate scouts and athletic directors.
              </p>
              <div className="vault-stats-bar">
                <div className="vault-stat">
                  <span className="vault-num">450+</span>
                  <span className="vault-label">Mentored Athletes</span>
                </div>
                <div className="vault-stat">
                  <span className="vault-num">12</span>
                  <span className="vault-label">Sport Pathways</span>
                </div>
                <div className="vault-stat">
                  <span className="vault-num">98%</span>
                  <span className="vault-label">Placement Rate</span>
                </div>
              </div>
            </div>
          )}

          <div className="modal-actions">
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateToIntake();
              }}
              className="btn-primary-athletic modal-cta-btn"
            >
              REQUEST ATHLETE RECRUITMENT PACKAGE
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary-athletic modal-cancel-btn"
            >
              CLOSE DOSSIER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
