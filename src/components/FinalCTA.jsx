import React from 'react';

export default function FinalCTA({ onBookClick, onViewPlansClick }) {
  return (
    <section className="final-cta-section section-container" style={{ paddingBottom: '60px', overflow: 'visible' }}>
      <div className="final-cta-frame-wrapper">
        {/* Wooden Frame Image (100% Fully Visible & Unblurred Overlay) */}
        <img 
          src="https://pub-04643188b78b434d8c44735a34b1fe23.r2.dev/ChatGPT%20Image%20Jul%2030%2C%202026%2C%2004_24_21%20PM-Photoroom.png" 
          alt="Natural Wooden Branch Frame" 
          className="final-cta-frame-img"
        />

        {/* Glass Card Content (Sitting Under / Inside the Wooden Branch Frame) */}
        <div className="final-cta-card glass-card-under">
          <div className="cta-slot-badge">
            <span className="green-dot" /> 2 slots available for this month
          </div>

          <h2 className="final-cta-title" style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
            Supercharge your brand output with <span className="serif italic">alwayzz</span>.
          </h2>

          <p className="final-cta-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)', textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)' }}>
            Join leading founders and agencies who get senior-level craft delivered on demand.
          </p>

          <div className="cta-row" style={{ marginTop: '8px' }}>
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
                  <span className="green-dot" /> Instant scheduling
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
