import React from 'react';
import { ASSETS } from '../assets';

export default function TopNoticeBar() {
  return (
    <div className="top-notice-bar">
      <div className="site-container top-notice-inner">
        {/* Desktop View */}
        <div className="notice-desktop-wrap">
          <div className="notice-left">
            <span className="notice-pulse-dot" />
            <span className="notice-label">ADMISSIONS NOTICE:</span>
            <span className="notice-text">RECRUITING &amp; TRAINING COHORTS OPEN</span>
          </div>
          <div className="notice-right">
            <div className="ncaa-badge">
              <img src={ASSETS.ncaaLightning} alt="" className="ncaa-icon" />
              <span>NCAA COMPLIANCE READY</span>
            </div>
            <span className="notice-sep">|</span>
            <span className="notice-est">EST. 2024</span>
          </div>
        </div>

        {/* Mobile Compact View (Clean single-line ticker) */}
        <div className="notice-mobile-wrap">
          <span className="notice-pulse-dot" />
          <span className="notice-mobile-label">ADMISSIONS:</span>
          <span className="notice-mobile-text">2025 COHORTS OPEN</span>
          <span className="notice-mobile-dot">•</span>
          <span className="notice-mobile-badge">NCAA READY</span>
        </div>
      </div>
    </div>
  );
}
