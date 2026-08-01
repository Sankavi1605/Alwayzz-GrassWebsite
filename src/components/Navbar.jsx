import React, { useState, useEffect } from 'react';
import { ChevronUp, X } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Plans', href: '#plans' },
    { label: 'Team', href: '#capabilities' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Get in Touch', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setDrawerOpen(false);
    if (href === '#contact') {
      onBookClick();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <a href="#" className="logo-text">
            Alwayzz<span className="logo-reg">®</span>
          </a>

          {/* Right Menu Button */}
          <button 
            className="menu-pill"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle Menu"
          >
            <span>{drawerOpen ? 'Close' : 'Menu'}</span>
            <ChevronUp className={`chevron-icon ${drawerOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Full-screen Drawer Overlay */}
      <div className={`nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <a href="#" className="logo-text" onClick={() => setDrawerOpen(false)}>
            Alwayzz<span className="logo-reg">®</span>
          </a>
          <button 
            className="menu-pill" 
            onClick={() => setDrawerOpen(false)}
            style={{ background: '#0a0a0a', color: '#ffffff' }}
          >
            <span>Close</span>
            <X size={16} />
          </button>
        </div>

        <div className="drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="drawer-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="drawer-footer">
          <p>© {new Date().getFullYear()} Alwayzz Inc. Made in New York.</p>
        </div>
      </div>
    </>
  );
}
