import React, { useState, useRef } from 'react';

export default function HeroBeforeAfter() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const maskRadius = 160; // Lens radius in px

  const updatePos = (clientX, clientY) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseMove = (e) => {
    setIsHovering(true);
    updatePos(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      setIsHovering(true);
      updatePos(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      ref={containerRef}
      className="hero-interactive-reveal-container"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      {/* Base Layer: Before Image */}
      <img 
        src="https://pub-04643188b78b434d8c44735a34b1fe23.r2.dev/before-Photoroom.png" 
        alt="Before Moss Globe" 
        className="hero-reveal-img base-before"
      />

      {/* Overlay Layer: After Image (Revealed inside Mouse Spotlight Lens) */}
      <div 
        className="hero-reveal-after-overlay"
        style={{
          clipPath: isHovering 
            ? `circle(${maskRadius}px at ${mousePos.x}px ${mousePos.y}px)`
            : `circle(0px at 50% 50%)`,
          WebkitClipPath: isHovering 
            ? `circle(${maskRadius}px at ${mousePos.x}px ${mousePos.y}px)`
            : `circle(0px at 50% 50%)`,
          transition: isHovering ? 'none' : 'clip-path 0.5s ease, -webkit-clip-path 0.5s ease'
        }}
      >
        <img 
          src="https://pub-04643188b78b434d8c44735a34b1fe23.r2.dev/after-Photoroom.png" 
          alt="After Blooming Globe" 
          className="hero-reveal-img after-overlay"
        />
      </div>

      {/* Glowing Cursor Lens Indicator */}
      {isHovering && (
        <div 
          className="reveal-spotlight-ring"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            width: `${maskRadius * 2}px`,
            height: `${maskRadius * 2}px`,
          }}
        />
      )}
    </div>
  );
}
