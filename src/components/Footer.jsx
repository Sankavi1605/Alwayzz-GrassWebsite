import React, { useState, useEffect } from 'react';

export default function Footer({ onBookClick }) {
  const [estTime, setEstTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setEstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="logo-text">
            Alwayzz<span className="logo-reg">®</span>
          </a>
          <p className="footer-desc">
            A flexible design & engineering partnership for founders, brands, and agencies who demand craft.
          </p>
          <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '8px' }}>
            New York, NY — <span style={{ fontFamily: 'monospace', color: 'var(--text)' }}>{estTime || '10:00 AM EST'}</span>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">Navigation</span>
          <a href="#projects" className="footer-link">Selected Work</a>
          <a href="#capabilities" className="footer-link">Capabilities</a>
          <a href="#plans" className="footer-link">Pricing & Plans</a>
          <a href="#faqs" className="footer-link">Frequently Asked</a>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">Socials</span>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-link">Twitter / X</a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="footer-link">Dribbble</a>
          <a href="https://read.cv" target="_blank" rel="noreferrer" className="footer-link">Read.cv</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">Legal & Contact</span>
          <a href="#" onClick={(e) => { e.preventDefault(); onBookClick(); }} className="footer-link">Book Intro Call</a>
          <a href="mailto:hello@alwayzz.design" className="footer-link">hello@alwayzz.design</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Alwayzz Studio Inc. All rights reserved.</span>
        <span>Crafted with tight negative letter-spacing & React + Vite.</span>
      </div>
    </footer>
  );
}
