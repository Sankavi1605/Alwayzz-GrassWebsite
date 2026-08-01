import React, { useState } from 'react';

export default function Pricing({ onBookClick }) {
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <section id="plans" className="section-container" style={{ scrollMarginTop: '120px', paddingTop: '120px' }}>
      <div className="section-header" style={{ textAlign: 'center', alignItems: 'center' }}>
        <span className="section-tag">Transparent Pricing</span>
        <h2 className="section-title">
          Simple plans, <span className="serif italic">no hidden fees</span>.
        </h2>
        <p className="section-subtitle">
          One predictable flat rate. Pause or cancel whenever your design needs decrease.
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
            <h3 className="plan-name" style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>Standard</h3>
            <p className="plan-desc" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '12px', marginBottom: '10px', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>
              Ongoing design speed for growing brands.
            </p>
            
            <div className="plan-price-wrapper" style={{ marginBottom: '12px' }}>
              <span className="plan-price" style={{ color: '#ffffff', fontSize: '36px', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.95)' }}>
                ${isQuarterly ? '4,240' : '4,990'}
              </span>
              <span className="plan-period" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px' }}>/ mo</span>
            </div>

            <ul className="plan-features-list" style={{ gap: '6px', marginBottom: '16px', listStyle: 'none', padding: 0 }}>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                1 active request at a time
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Avg 48-hour delivery turnaround
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Unlimited revisions & scope edits
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Pause or cancel anytime
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
            <h3 className="plan-name" style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>Double Power</h3>
            <p className="plan-desc" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '12px', marginBottom: '10px', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>
              High design volume with double output.
            </p>
            
            <div className="plan-price-wrapper" style={{ marginBottom: '12px' }}>
              <span className="plan-price" style={{ color: '#ffffff', fontSize: '36px', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.95)' }}>
                ${isQuarterly ? '7,640' : '8,990'}
              </span>
              <span className="plan-period" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px' }}>/ mo</span>
            </div>

            <ul className="plan-features-list" style={{ gap: '6px', marginBottom: '16px', listStyle: 'none', padding: 0 }}>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                2 active requests simultaneously
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Priority 24-48h turnaround
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Dedicated Creative Director
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Private Slack/Discord channel
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
            <h3 className="plan-name" style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>Custom Scope</h3>
            <p className="plan-desc" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '12px', marginBottom: '10px', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>
              Tailored sprints for major launches.
            </p>
            
            <div className="plan-price-wrapper" style={{ marginBottom: '12px' }}>
              <span className="plan-price" style={{ color: '#ffffff', fontSize: '36px', fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.95)' }}>Custom</span>
              <span className="plan-period" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '12px' }}>/ project</span>
            </div>

            <ul className="plan-features-list" style={{ gap: '6px', marginBottom: '16px', listStyle: 'none', padding: 0 }}>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Dedicated full agency pod
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Guaranteed launch deadline SLA
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12.5px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Complete brand + web overhaul
              </li>
              <li className="plan-feature-item" style={{ color: '#ffffff', fontSize: '12px', fontWeight: 600, textShadow: '0 1px 2px rgba(0,0,0,0.9)', textAlign: 'center' }}>
                Enterprise NDA & contracts
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
