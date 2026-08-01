import React, { useState } from 'react';
import { X, Calendar, Check, Send } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, selectedProject }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', scope: 'Standard Subscription' });

  if (!isOpen && !selectedProject) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen || selectedProject ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <X size={18} />
        </button>

        {selectedProject ? (
          <div>
            <span className="portfolio-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '12px' }}>
              {selectedProject.badge}
            </span>
            <h3 style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.05em', marginBottom: '12px' }}>
              {selectedProject.title}
            </h3>
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
            </div>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '24px' }}>
              {selectedProject.desc} Designed and engineered by Alwayzz with 48-hour iteration cycles and complete design token synchronization.
            </p>
            <div style={{ display: 'flex', gap: '20px', padding: '16px', background: 'var(--card-bg)', borderRadius: '12px', marginBottom: '24px' }}>
              <div>
                <span style={{ fontSize: '20px', fontWeight: 700, display: 'block' }}>{selectedProject.statVal}</span>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{selectedProject.statLabel}</span>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-soft)', paddingLeft: '20px' }}>
                <span style={{ fontSize: '20px', fontWeight: 700, display: 'block' }}>48 Hours</span>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>First Sprint Turnaround</span>
              </div>
            </div>
            <button className="primary-btn" style={{ width: '100%' }} onClick={() => { handleClose(); }}>
              Close Case Study
            </button>
          </div>
        ) : submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(23, 201, 100, 0.15)', color: 'var(--green)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Check size={28} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>You are on the calendar</h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.5 }}>
              Thanks {formData.name || 'there'} — an invite is on its way to <strong>{formData.email || 'your email'}</strong>. Talk soon.
            </p>
            <button className="primary-btn" style={{ width: '100%' }} onClick={handleClose}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Calendar size={20} color="var(--text)" />
              <h3 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.04em' }}>
                Book 15-Minute Intro Call
              </h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px' }}>
              Tell us what is stuck. We will say whether we can help, and how quickly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px', uppercase: 'true' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', height: '44px', borderRadius: '10px', border: '1px solid var(--border-medium)', padding: '0 14px', fontSize: '14px', fontFamily: 'Inter' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', height: '44px', borderRadius: '10px', border: '1px solid var(--border-medium)', padding: '0 14px', fontSize: '14px', fontFamily: 'Inter' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>
                  COMPANY / PRODUCT
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lumina AI"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: '100%', height: '44px', borderRadius: '10px', border: '1px solid var(--border-medium)', padding: '0 14px', fontSize: '14px', fontFamily: 'Inter' }}
                />
              </div>

              <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '8px', gap: '8px' }}>
                <span>Confirm Call Request</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
