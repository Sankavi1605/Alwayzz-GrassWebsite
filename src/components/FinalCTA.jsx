import React from 'react';
import useReveal from '../hooks/useReveal';

export default function FinalCTA({ onBookClick, onViewPlansClick }) {
  const revealRef = useReveal();

  return (
    <section className="final-cta-section section-container" style={{ paddingBottom: '60px', overflow: 'visible' }} ref={revealRef}>
      <div className="final-cta-frame-wrapper">
        {/* Wooden Frame Image (100% Fully Visible & Unblurred Overlay) */}
        <img 
          src="https://pub-04643188b78b434d8c44735a34b1fe23.r2.dev/ChatGPT%20Image%20Jul%2030%2C%202026%2C%2004_24_21%20PM-Photoroom.png" 
          alt="Natural Wooden Branch Frame" 
          className="final-cta-frame-img"
        />

        {/* Glass Card Content (Sitting Under / Inside the Wooden Branch Frame) */}
        <div className="final-cta-card glass-card-under">
          <div className="cta-slot-badge" data-reveal>
            Taking on two new projects this month
          </div>

          <h2 className="final-cta-title grass-text" data-reveal style={{ '--reveal-delay': '120ms' }}>
            Let us make something <span className="serif italic">worth keeping</span>.
          </h2>

          <p className="final-cta-subtitle" data-reveal style={{ '--reveal-delay': '240ms', color: 'rgba(255, 255, 255, 0.85)', textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            Fifteen minutes, no deck. We will tell you honestly whether we are the right fit.
          </p>

          <div className="cta-row" data-reveal style={{ marginTop: '8px', '--reveal-delay': '360ms' }}>
            <button 
              className="primary-btn see-plans-btn" 
              onClick={onViewPlansClick}
            >
              See Pricing & Plans
            </button>
            
            <button 
              className="book-btn intro-call-btn" 
              onClick={onBookClick}
            >
              <img 
                src="https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png" 
                alt="Founder / Lead" 
                className="avatar-img"
              />
              <div className="book-text-stack">
                <span className="book-title" style={{ color: '#ffffff', fontWeight: 600 }}>Book a 15-Min Intro Call</span>
                <span className="book-sub" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                  Pick a time that suits
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
