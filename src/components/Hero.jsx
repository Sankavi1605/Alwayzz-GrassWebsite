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
          <h1 className="hero-giant-title top-title grass-text" data-reveal>
            PREMIUM creative
          </h1>

          {/* Interactive 3D Moss Globe Artwork (Positioned to overlap & partially hide heading letters) */}
          {/* position + z-index here are REQUIRED, not decoration. This
              wrapper carries a transform for the reveal animation, which makes
              it a stacking context — that traps the globe's own z-index:3
              inside it and leaves the wrapper itself at auto (0), so the
              titles painted OVER the artwork. Lifting the wrapper to 3 puts
              the wording back behind the images, as designed. */}
          <div
            data-reveal
            style={{ '--reveal-delay': '160ms', width: '100%', position: 'relative', zIndex: 3 }}
          >
            <HeroBeforeAfter />
          </div>

          <h1 className="hero-giant-title bottom-title grass-text" data-reveal style={{ '--reveal-delay': '320ms' }}>
            alwayzz<sup>®</sup> ON DEMAND
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
