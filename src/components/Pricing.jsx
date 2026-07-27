import React, { useState } from 'react';
import { Check } from 'lucide-react';

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

      {/* Pricing Cards Grid */}
      <div className="pricing-grid">
        {/* Standard Plan */}
        <div className="pricing-card liquid-glass">
          <div>
            <h3 className="plan-name">Standard</h3>
            <p className="plan-desc">Perfect for growing startups and brands needing ongoing design speed.</p>
            
            <div className="plan-price-wrapper">
              <span className="plan-price">
                ${isQuarterly ? '4,240' : '4,990'}
              </span>
              <span className="plan-period">/ month</span>
            </div>

            <ul className="plan-features-list">
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> 1 active request at a time
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Avg 48-hour delivery turnaround
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Unlimited revisions & scope edits
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> React, Next.js & Webflow code
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Pause or cancel anytime seamlessly
              </li>
            </ul>
          </div>

          <button className="plan-btn liquid-glass-strong" onClick={onBookClick}>
            Get Started
          </button>
        </div>

        {/* Double Power Featured Plan */}
        <div className="pricing-card featured liquid-glass-strong">
          <span className="featured-badge">Most Popular</span>
          <div>
            <h3 className="plan-name">Double Power</h3>
            <p className="plan-desc">For ambitious teams with high design volume requiring double output.</p>
            
            <div className="plan-price-wrapper">
              <span className="plan-price">
                ${isQuarterly ? '7,640' : '8,990'}
              </span>
              <span className="plan-period">/ month</span>
            </div>

            <ul className="plan-features-list">
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> 2 active requests simultaneously
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Priority 24 - 48h turnaround
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Dedicated Lead Creative Director
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Private Slack or Discord channel
              </li>
            </ul>
          </div>

          <button className="plan-btn liquid-glass-strong" onClick={onBookClick} style={{ background: '#ffffff', color: '#0a0a0a' }}>
            Subscribe Now
          </button>
        </div>

        {/* Custom Scope / Enterprise */}
        <div className="pricing-card liquid-glass">
          <div>
            <h3 className="plan-name">Custom Scope</h3>
            <p className="plan-desc">Fixed-scope project sprints or tailored enterprise support for big launches.</p>
            
            <div className="plan-price-wrapper">
              <span className="plan-price">Custom</span>
              <span className="plan-period">/ project</span>
            </div>

            <ul className="plan-features-list">
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Dedicated full agency pod
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Guaranteed launch deadline SLA
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Complete brand + web overhaul
              </li>
              <li className="plan-feature-item">
                <Check size={16} style={{ color: 'var(--green)' }} /> Enterprise NDA & legal contracts
              </li>
            </ul>
          </div>

          <button className="plan-btn liquid-glass-strong" onClick={onBookClick}>
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
