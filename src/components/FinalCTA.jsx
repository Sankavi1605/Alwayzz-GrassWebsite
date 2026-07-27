import React from 'react';

export default function FinalCTA({ onBookClick, onViewPlansClick }) {
  return (
    <section className="section-container" style={{ paddingBottom: '60px' }}>
      <div className="final-cta-card liquid-glass-strong" style={{ background: '#0a0a0a' }}>
        <div className="liquid-glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: 500, color: '#ffffff' }}>
          <span className="green-dot" /> 2 slots available for this month
        </div>

        <h2 className="final-cta-title" style={{ color: '#ffffff' }}>
          Supercharge your brand output with <span className="serif italic">alwayzz</span>.
        </h2>

        <p className="final-cta-subtitle">
          Join leading founders and agencies who get senior-level craft delivered on demand.
        </p>

        <div className="cta-row" style={{ marginTop: '12px' }}>
          <button 
            className="primary-btn liquid-glass-strong" 
            style={{ background: '#ffffff', color: '#0a0a0a' }}
            onClick={onViewPlansClick}
          >
            See Pricing & Plans
          </button>
          
          <button 
            className="book-btn liquid-glass-strong" 
            onClick={onBookClick}
            style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff' }}
          >
            <img 
              src="https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png" 
              alt="Founder / Lead" 
              className="avatar-img"
            />
            <div className="book-text-stack">
              <span className="book-title" style={{ color: '#ffffff' }}>Book a 15-Min Intro Call</span>
              <span className="book-sub" style={{ color: '#a1a1aa' }}>
                <span className="green-dot" /> Instant scheduling
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
