import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How fast will I receive my designs or code?',
      a: 'Most single-page designs, UI components, brand updates, or code tasks are delivered within 48 business hours.',
    },
    {
      q: 'What does "Unlimited Revisions" mean?',
      a: 'It means we continue refining and revising your deliverables until you are 100% satisfied with the outcome.',
    },
    {
      q: 'How does the pause feature work?',
      a: 'If you use the service for 10 days and then decide to pause, the remaining 21 days stay banked in your account for later.',
    },
    {
      q: 'Who owns the intellectual property and copyright?',
      a: 'You do! You own 100% of all intellectual property, design files, code repositories, and deliverables.',
    },
  ];

  return (
    <div className="faq-video-section-wrapper">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="faq-bg-video"
      />

      {/* Gradient Tint Overlay for Contrast */}
      <div className="faq-video-overlay" />

      {/* Foreground FAQ Content */}
      <section id="faqs" className="section-container" style={{ position: 'relative', zIndex: 10, padding: '40px 20px' }}>
        <div className="section-header centered">
          <span className="section-tag liquid-glass" style={{ color: '#ffffff', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)' }}>
            Got Questions?
          </span>
          <h2 className="section-title grass-text">
            Frequently asked <span className="serif italic">questions</span>.
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.92)', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            Everything you need to know about our subscription model, turnaround times, and ownership.
          </p>
        </div>

        <div className="faq-list" style={{ marginTop: '40px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-item liquid-glass-strong" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.88)', 
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '18px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
                }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{ color: '#0a0a0a' }}
                >
                  <span style={{ fontWeight: 600 }}>{faq.q}</span>
                  {isOpen ? <Minus size={20} style={{ color: '#0a0a0a' }} /> : <Plus size={20} style={{ color: '#0a0a0a' }} />}
                </button>
                {isOpen && (
                  <div className="faq-answer" style={{ color: '#222222', fontSize: '15px', fontWeight: 500, lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
