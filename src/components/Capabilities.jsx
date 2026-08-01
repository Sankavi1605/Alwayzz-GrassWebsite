import React, { useState, useEffect, useRef } from 'react';

const BG_IMAGE_1 = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_140344_79e1296a-86d7-43fd-9b5f-63ffe560f291.png";
const FRONT_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_162101_0d7498c5-29bb-47bf-a99f-2773c0a880a9.mp4";
const OVERLAY_IMAGE = "https://soft-zoom-63098134.figma.site/_assets/v11/3f10f1876e118f72a396e05a6c2d099569478272.png";

export default function Capabilities() {
  const containerRef = useRef(null);
  const targetPos = useRef({ x: 600, y: 400 });
  const smoothPos = useRef({ x: 600, y: 400 });
  const [renderPos, setRenderPos] = useState({ x: 600, y: 400 });
  const [isHovered, setIsHovered] = useState(false);
  const animFrameId = useRef(null);

  // Smooth lerp cursor tracking loop (0.1 factor)
  useEffect(() => {
    const loop = () => {
      smoothPos.current.x += (targetPos.current.x - smoothPos.current.x) * 0.1;
      smoothPos.current.y += (targetPos.current.y - smoothPos.current.y) * 0.1;

      setRenderPos({
        x: smoothPos.current.x,
        y: smoothPos.current.y,
      });

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
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

  const videoRef = useRef(null);

  // Eager video play handler for zero-delay rendering
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Calculate Grid Parallax Shift based on section center
  let gridTransform = 'translate(0px, 0px)';
  if (containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    const cX = rect.width / 2 || 600;
    const cY = rect.height / 2 || 400;
    const offsetX = ((renderPos.x - cX) / cX) * 16;
    const offsetY = ((renderPos.y - cY) / cY) * 16;
    gridTransform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  // Radial mask gradient (260px radius, feathered opacity steps)
  const maskStyle = isHovered
    ? `radial-gradient(circle 260px at ${renderPos.x}px ${renderPos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.12) 88%, rgba(0,0,0,0) 100%)`
    : `radial-gradient(circle 0px at ${renderPos.x}px ${renderPos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)`;

  return (
    <div
      ref={containerRef}
      className="capabilities-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '40px 0 60px' }}
    >
      {/* Layer 1 — Grid Background (z-0, opacity 0.1, SVG L-shaped 48px pattern) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.1,
          pointerEvents: 'none',
          transform: gridTransform,
          transition: 'transform 0.06s ease-out',
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern-48" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-48)" />
        </svg>
      </div>

      {/* Layer 2 — Background Image (z-10, inset-0, cover) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          backgroundImage: `url(${BG_IMAGE_1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 4 — Overlay Image (z-25, semi-transparent haze depth) */}
      <img
        src={OVERLAY_IMAGE}
        alt="Atmospheric Depth Overlay"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 25,
          pointerEvents: 'none',
          opacity: 0.85,
          mixBlendMode: 'soft-light',
        }}
      />

      {/* Layer 5 — Spotlight Reveal Video (z-30, clipped to bottom 60%, feathered radial mask) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 30,
          pointerEvents: 'none',
          clipPath: 'inset(40% 0 0 0)', /* Video clipped to bottom 60% of viewport */
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
      >
        <video
          ref={videoRef}
          src={FRONT_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Content Layer (Over Background & Video Layers) */}
      <section id="capabilities" className="section-container" style={{ position: 'relative', zIndex: 40 }}>
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
