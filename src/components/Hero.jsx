import React from 'react';
import HeroBeforeAfter from './HeroBeforeAfter';
import useReveal from '../hooks/useReveal';

export default function Hero({ onBookClick, onViewPlansClick }) {
  const ref = useReveal();

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-content">
        {/* Giant Layered Background Title (Letters partially hidden by 3D artwork) */}
        <div className="hero-layered-title-wrapper">
          <h1 className="hero-giant-title top-title" data-reveal>
            PREMIUM <span className="grass-text">creative</span>
          </h1>

          {/* Interactive 3D Moss Globe Artwork (Positioned to overlap & partially hide heading letters) */}
          <div data-reveal style={{ '--reveal-delay': '160ms', width: '100%' }}>
            <HeroBeforeAfter />
          </div>

          <h1 className="hero-giant-title bottom-title" data-reveal style={{ '--reveal-delay': '320ms' }}>
            <span className="grass-text">alwayzz</span><sup>®</sup> ON DEMAND
          </h1>
        </div>

        {/* Action Buttons Row */}
        <div className="cta-row" data-reveal style={{ marginTop: '36px', '--reveal-delay': '460ms' }}>
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
                Pick a slot
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
