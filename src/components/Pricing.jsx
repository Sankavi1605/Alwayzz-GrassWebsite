import React, { useState } from 'react';

export default function Pricing({ onBookClick }) {
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <section id="plans" className="section-container pricing-section" style={{ scrollMarginTop: '120px' }}>
      <div className="section-header" style={{ textAlign: 'center', alignItems: 'center' }}>
        <span className="section-tag">Pricing</span>
        <h2 className="section-title grass-text">
          One price, <span className="serif italic">no surprises</span>.
        </h2>
        <p className="section-subtitle">
          The same number every month. Quiet quarter? Pause it and pick up where you left off.
        </p>
      </div>

      {/* Monthly / Quarterly Toggle */}
      <div className="pricing-toggle-wrapper">
        <span style={{ fontSize: '15px', fontWeight: isQuarterly ? 400 : 600, color: isQuarterly ? 'var(--muted)' : 'var(--text)' }}>
          Monthly Billing
        </span>
        
        <div 
          className={`toggle-switch ${isQuarterly ? 'active' : ''}`}
          onClick={() => setIsQuarterly(!isQuarterly)}
          role="button"
          tabIndex={0}
        >
          <div className="toggle-knob" />
        </div>

        <span style={{ fontSize: '15px', fontWeight: isQuarterly ? 600 : 400, color: isQuarterly ? 'var(--text)' : 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Quarterly Billing
          <span className="pricing-discount-badge" style={{ fontSize: '12px', fontWeight: 600, color: 'var(--green)', background: 'rgba(23, 201, 100, 0.12)', padding: '4px 10px', borderRadius: '9999px' }}>Save 15%</span>
        </span>
      </div>

      {/* Pricing Cards Grid (3 Cards horizontally with pricecard-Photoroom.png background) */}
      <div className="pricing-grid">
        {/* Standard Plan */}
        <div className="pricing-card-img-bg">
          <div className="board-card-inner">
            <h3 className="plan-name wood-script engraved-name">Standard</h3>
            <p className="plan-desc engraved-body" style={{ lineHeight: 1.5, fontSize: '13px', marginBottom: '12px', fontWeight: 700 }}>
              For teams with a steady trickle of work.
            </p>
            
            <div className="plan-price-wrapper" style={{ marginBottom: '14px' }}>
              <span className="plan-price wood-script engraved-price">
                ${isQuarterly ? '4,240' : '4,990'}
              </span>
              <span className="plan-period engraved-body" style={{ fontSize: '13px', fontWeight: 700 }}>/ mo</span>
            </div>

            <ul className="plan-features-list" style={{ gap: '8px', marginBottom: '16px', listStyle: 'none', padding: 0 }}>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                One request in flight
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                Most things back within 48 hours
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                Revisions until you are happy
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                Pause or leave whenever
              </li>
            </ul>
          </div>

          <button className="glass-board-btn" onClick={onBookClick}>
            Get Started
          </button>
        </div>

        {/* Double Power Featured Plan */}
        <div className="pricing-card-img-bg featured">
          <span className="featured-badge" style={{ top: '32px', right: 'auto', left: '50%', transform: 'translateX(-50%)' }}>
            Most Popular
          </span>
          <div className="board-card-inner">
            <h3 className="plan-name wood-script engraved-name">Double Power</h3>
            <p className="plan-desc engraved-body" style={{ lineHeight: 1.5, fontSize: '13px', marginBottom: '12px', fontWeight: 700 }}>
              For teams shipping faster than one queue allows.
            </p>
            
            <div className="plan-price-wrapper" style={{ marginBottom: '14px' }}>
              <span className="plan-price wood-script engraved-price">
                ${isQuarterly ? '7,640' : '8,990'}
              </span>
              <span className="plan-period engraved-body" style={{ fontSize: '13px', fontWeight: 700 }}>/ mo</span>
            </div>

            <ul className="plan-features-list" style={{ gap: '8px', marginBottom: '16px', listStyle: 'none', padding: 0 }}>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                Two requests in flight
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                First in the queue, 24 to 48 hours
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                A creative director who knows your brand
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                Your own Slack channel
              </li>
            </ul>
          </div>

          <button className="glass-board-btn" onClick={onBookClick}>
            Subscribe Now
          </button>
        </div>

        {/* Custom Scope / Enterprise */}
        <div className="pricing-card-img-bg">
          <div className="board-card-inner">
            <h3 className="plan-name wood-script engraved-name">Custom Scope</h3>
            <p className="plan-desc engraved-body" style={{ lineHeight: 1.5, fontSize: '13px', marginBottom: '12px', fontWeight: 700 }}>
              For a launch that needs everyone at once.
            </p>
            
            <div className="plan-price-wrapper" style={{ marginBottom: '14px' }}>
              <span className="plan-price wood-script engraved-price">Custom</span>
              <span className="plan-period engraved-body" style={{ fontSize: '13px', fontWeight: 700 }}>/ project</span>
            </div>

            <ul className="plan-features-list" style={{ gap: '8px', marginBottom: '16px', listStyle: 'none', padding: 0 }}>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                A full pod, yours for the sprint
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                Your launch date, in writing
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                Brand and site, end to end
              </li>
              <li className="plan-feature-item engraved-feature" style={{ fontSize: '13px', fontWeight: 800, textAlign: 'center', lineHeight: 1.35 }}>
                NDAs and procurement, handled
              </li>
            </ul>
          </div>

          <button className="glass-board-btn" onClick={onBookClick}>
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
