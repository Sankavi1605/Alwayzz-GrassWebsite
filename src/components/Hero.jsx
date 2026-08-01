import React from 'react';
import HeroBeforeAfter from './HeroBeforeAfter';

export default function Hero({ onBookClick, onViewPlansClick }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Giant Layered Background Title (Letters partially hidden by 3D artwork) */}
        <div className="hero-layered-title-wrapper">
          <h1 className="hero-giant-title top-title">
            PREMIUM <span className="grass-text">creative</span>
          </h1>

          {/* Interactive 3D Moss Globe Artwork (Positioned to overlap & partially hide heading letters) */}
          <HeroBeforeAfter />

          <h1 className="hero-giant-title bottom-title">
            <span className="grass-text">alwayzz</span><sup>®</sup> ON DEMAND
          </h1>
        </div>

        {/* Action Buttons Row */}
        <div className="cta-row" style={{ marginTop: '36px' }}>
          <a 
            href="#plans" 
            className="primary-btn liquid-glass-strong"
            onClick={(e) => {
              e.preventDefault();
              onViewPlansClick();
            }}
          >
            View Plans
          </a>

          <button 
            className="book-btn liquid-glass-strong"
            onClick={onBookClick}
            type="button"
          >
            <img 
              src="https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png" 
              alt="Founder / Lead" 
              className="avatar-img"
            />
            <div className="book-text-stack">
              <span className="book-title">Chat for 15 minutes</span>
              <span className="book-sub">
                <span className="green-dot" /> Pick a slot
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
