import React, { useState, useRef } from 'react';

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260713_140344_79e1296a-86d7-43fd-9b5f-63ffe560f291.png&w=1280&q=85";
const FRONT_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_162101_0d7498c5-29bb-47bf-a99f-2773c0a880a9.mp4";
const OVERLAY_IMAGE = "https://soft-zoom-63098134.figma.site/_assets/v11/3f10f1876e118f72a396e05a6c2d099569478272.png";

export default function Capabilities() {
  const [mousePos, setMousePos] = useState({ x: 600, y: 400 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const capabilities = [
    {
      num: '01',
      title: 'Brand & Visual Systems',
      desc: 'We construct timeless visual identities, typography frameworks, logo systems, and comprehensive brand guidelines that scale across every touchpoint.',
      tags: ['Logo Design', 'Design Systems', 'Brand Guidelines', 'Typography', 'Iconography', 'Packaging'],
    },
    {
      num: '02',
      title: 'Web & App Development',
      desc: 'High-performance React, Next.js, and Webflow websites built with pixel perfection, fast load speeds, fluid micro-interactions, and tight typography.',
      tags: ['React / Vite', 'Next.js', 'Webflow', 'Tailwind & Custom CSS', 'Headless CMS', 'SEO Optimization'],
    },
    {
      num: '03',
      title: 'Motion & Creative Video',
      desc: 'Engaging 3D animations, product launch videos, interactive Rive web animations, and promotional graphics that capture attention instantly.',
      tags: ['3D Motion Design', 'Rive Animations', 'Product Launch Teasers', 'Lottie Icons', 'UI Micro-Interactions'],
    },
    {
      num: '04',
      title: 'Product Design & UX',
      desc: 'End-to-end Figma UI/UX prototypes, user journey mapping, design system components, and intuitive SaaS app dashboards built for conversion.',
      tags: ['Figma Libraries', 'User Flow', 'SaaS Dashboards', 'Mobile Apps', 'Design Tokens', 'Usability Audits'],
    },
  ];

  // Calculate subtle parallax offset for grid background image
  const parallaxX = (mousePos.x - 600) * 0.012;
  const parallaxY = (mousePos.y - 400) * 0.012;

  return (
    <div
      ref={containerRef}
      className="capabilities-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '40px 0 60px' }}
    >
      {/* Background Interactive Layer */}
      <div className="cap-bg-container">
        {/* Parallax Grid Background Image */}
        <img
          src={BG_IMAGE_1}
          alt="Grid Background"
          className="cap-bg-image"
          style={{
            transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.03)`,
          }}
        />

        {/* Haze Depth Overlay */}
        <img
          src={OVERLAY_IMAGE}
          alt="Haze Overlay"
          className="cap-overlay-haze"
        />

        {/* Spotlight Video Reveal Layer */}
        <div
          className="cap-video-reveal-wrapper"
          style={{
            clipPath: isHovered
              ? `circle(200px at ${mousePos.x}px ${mousePos.y}px)`
              : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
          }}
        >
          <video
            src={FRONT_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="cap-video-element"
          />
        </div>

        {/* Spotlight Ring Glow */}
        {isHovered && (
          <div
            className="cap-spotlight-ring"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          />
        )}
      </div>

      {/* Content Layer (Over Interactive Background) */}
      <section id="capabilities" className="section-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title1">
            Full-spectrum design & tech <span className="serif italic">expertise</span>.
          </h2>
          <p className="section-subtitle">
            Everything your brand needs to look world-class and launch faster without managing multiple freelancers.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap) => (
            <div key={cap.num} className="capability-card liquid-glass">
              <span className="capability-num">{cap.num}</span>
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-desc">{cap.desc}</p>
              <div className="capability-tags">
                {cap.tags.map((tag) => (
                  <span key={tag} className="capability-pill liquid-glass">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
