import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const revealRef = useReveal();

  const faqs = [
    {
      q: 'How fast does work come back?',
      a: 'Most single pages, components and brand updates land within 48 business hours. Anything bigger we scope up front, so you are never left guessing.',
    },
    {
      q: 'Is unlimited revisions actually unlimited?',
      a: 'Yes. We keep going until you are happy with it. In practice it is rarely more than two rounds, because we ask the awkward questions early.',
    },
    {
      q: 'What if we go quiet for a month?',
      a: 'Pause it. Use ten days of a cycle and the other twenty-one sit in your account until you come back for them.',
    },
    {
      q: 'Who owns the work?',
      a: 'You do. Every file, every repository, from the moment we hand it over.',
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
      <section id="faqs" className="section-container" style={{ position: 'relative', zIndex: 10, padding: '40px 20px' }} ref={revealRef}>
        <div className="section-header centered">
          <span className="section-tag liquid-glass" data-reveal style={{ color: '#ffffff', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)' }}>
            Questions
          </span>
          <h2 className="section-title grass-text" data-reveal style={{ '--reveal-delay': '110ms' }}>
            The things people <span className="serif italic">ask first</span>.
          </h2>
          <p className="section-subtitle" data-reveal style={{ '--reveal-delay': '220ms', color: 'rgba(255,255,255,0.92)', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            Turnaround, revisions, pausing, and who owns what at the end of it.
          </p>
        </div>

        <div className="faq-list" style={{ marginTop: '40px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-item liquid-glass-strong"
                data-reveal="card"
                style={{ 
                  '--reveal-delay': `${idx * 90}ms`,
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
