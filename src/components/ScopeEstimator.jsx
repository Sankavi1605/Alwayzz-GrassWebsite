import React, { useState } from 'react';
import { Clock, Zap, ArrowRight } from 'lucide-react';

export default function ScopeEstimator({ onBookClick }) {
  const [selectedItems, setSelectedItems] = useState(['brand', 'web']);

  const scopeOptions = [
    { id: 'brand', label: 'Brand Identity & Logo', days: 3 },
    { id: 'web', label: 'Landing Page Design', days: 2 },
    { id: 'dev', label: 'React / Vite Frontend Code', days: 3 },
    { id: 'app', label: 'Mobile App UI/UX (5 Screens)', days: 4 },
    { id: 'motion', label: '3D Product Teaser Video', days: 3 },
    { id: 'icons', label: 'Custom Iconography Set', days: 1 },
  ];

  const toggleOption = (id) => {
    if (selectedItems.includes(id)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter((i) => i !== id));
      }
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const totalDays = selectedItems.reduce((acc, id) => {
    const item = scopeOptions.find((o) => o.id === id);
    return acc + (item ? item.days : 0);
  }, 0);

  const recommendedPlan = selectedItems.length > 3 ? 'Double Power' : 'Standard';

  return (
    <section className="section-container" style={{ background: '#fafafa', borderRadius: '32px' }}>
      <div className="section-header">
        <span className="section-tag">Interactive Calculator</span>
        <h2 className="section-title">
          Estimate your scope & <span className="serif italic">delivery timeline</span>.
        </h2>
        <p className="section-subtitle">
          Select what you need done right now to see estimated turnaround time under an Alwayzz membership.
        </p>
      </div>

      <div className="estimator-box">
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)', marginBottom: '8px' }}>
          Select Deliverables:
        </h3>

        <div className="estimator-options">
          {scopeOptions.map((opt) => {
            const isSelected = selectedItems.includes(opt.id);
            return (
              <div
                key={opt.id}
                className={`estimator-option ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleOption(opt.id)}
              >
                <span>{opt.label}</span>
                <span style={{ opacity: isSelected ? 0.9 : 0.6, fontSize: '12px' }}>
                  ~{opt.days}d
                </span>
              </div>
            );
          })}
        </div>

        <div className="estimator-result">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ background: 'var(--button-bg)', color: '#ffffff', padding: '12px', borderRadius: '50%' }}>
              <Clock size={24} />
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text)' }}>
                ~{totalDays} Working Days
              </div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
                Estimated total completion time under {recommendedPlan} Plan
              </div>
            </div>
          </div>

          <button className="primary-btn" onClick={onBookClick} style={{ gap: '8px' }}>
            <span>Book 15-Min Scope Call</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
