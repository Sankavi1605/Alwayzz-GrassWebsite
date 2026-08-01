import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Capabilities from './components/Capabilities';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initial loading page display for 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleBookClick = () => {
    setSelectedProject(null);
    setBookingModalOpen(true);
  };

  const handleViewPlansClick = () => {
    const plansElem = document.querySelector('#plans');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate 20 lines array for global side curved lines animation (shared across all sections)
  const sideLinesCount = 20;
  const linesArray = Array.from({ length: sideLinesCount }, (_, i) => i);

  return (
    <div className="app-main">
      {/*
        TURF FILTER — the fringe of blades that breaks the letter silhouette.

        The speckled, pixelly look came from baseFrequency being too HIGH
        (0.8-1.2). At that frequency the noise changes every pixel, so the
        displacement scatters lone pixels instead of moving blade-sized
        clumps: measured 131 disconnected fragments, 126 of them under 4px.

        Two changes fix it:
          - coarse noise (0.30), so displacement moves coherent ~3px chunks
          - a gooey pass: blur, then crush the alpha ramp back to hard edges.
            Neighbouring fragments merge into solid clumps and strays vanish.
            Same measurement after: ONE connected shape, zero specks.

        feMorphology radius, displacement scale and the goo blur are all in
        ABSOLUTE px, so one filter cannot serve a 108px hero word and a 25px
        phone heading — hence three, tuned to the sizes actually in use.
      */}
      <svg aria-hidden="true" focusable="false" width="0" height="0" className="svg-filter-defs">
        <defs>
          {[
            { id: 'turf-lg', freq: 0.3, dilate: 2.2, scale: 13, goo: 1.0 },
            { id: 'turf-md', freq: 0.34, dilate: 1.1, scale: 6, goo: 0.75 },
            { id: 'turf-sm', freq: 0.4, dilate: 0.6, scale: 3, goo: 0.35 },
          ].map(({ id, freq, dilate, scale, goo }) => (
            <filter
              key={id}
              id={id}
              x="-30%" y="-34%" width="160%" height="168%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence type="turbulence" baseFrequency={freq} numOctaves="3" seed="4" result="noise" />
              <feMorphology in="SourceGraphic" operator="dilate" radius={dilate} result="fat" />
              <feDisplacementMap in="fat" in2="noise" scale={scale} xChannelSelector="R" yChannelSelector="G" result="rough" />
              <feGaussianBlur in="rough" stdDeviation={goo} result="softened" />
              <feColorMatrix
                in="softened"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -5"
                result="fringe"
              />
              <feMerge>
                <feMergeNode in="fringe" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>
      </svg>

      {/* 3-Layer Dot Circle Fullscreen Loading Page */}
      <LoadingScreen isLoading={isLoading} />
      {/* Global Hero Pulse Curve Lines (Running across ALL page sections) */}
      <div className="global-side-lines left">
        {linesArray.map((i) => (
          <div
            key={`g-left-${i}`}
            className="curved-line"
            style={{
              width: `${60 + i * 10}px`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      <div className="global-side-lines right">
        {linesArray.map((i) => (
          <div
            key={`g-right-${i}`}
            className="curved-line"
            style={{
              width: `${60 + i * 10}px`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* Global Top Curved Lines for Mobile */}
      <div className="global-top-lines">
        {linesArray.map((i) => (
          <div
            key={`g-top-${i}`}
            className="top-curved-line"
            style={{
              height: `${40 + i * 12}px`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* 1. Navbar */}
      <Navbar onBookClick={handleBookClick} />

      {/* 2. Hero Section */}
      <Hero 
        onBookClick={handleBookClick} 
        onViewPlansClick={handleViewPlansClick} 
      />

      {/* 3. TrustedBy Section */}
      <TrustedBy />

      {/* 4. Floating Island Background Section (178512684152f2-Photoroom.png on Right) */}
      <div className="middle-bg-section-1">
        <section className="section-container">
          <div className="section-header split-left-header">
            <span className="section-tag">The craft</span>
            <h2 className="section-title grass-text">
              Design and engineering, <span className="serif italic">same room</span>.
            </h2>
            <p className="section-subtitle">
              The people drawing it are the people building it, so nothing gets lost on the handoff.
            </p>
          </div>
        </section>
      </div>

      {/* Core Capabilities Section with Middle Image 3 Background */}
      <div className="middle-bg-section-3">
        <Capabilities />
      </div>

      {/* 5. UNCROPPED Middle Image Section (1785125759f7fc-Photoroom.png) */}
      <div className="middle-bg-section-2">
        <section className="section-container" style={{ padding: '0 20px' }}>
          <div className="section-header centered stone-sign-header">
            <span className="section-tag">Why we are quick</span>
            <h2 className="section-title carved-text">
              Move fast, <span className="serif italic">keep the craft</span>.
            </h2>
            <p className="section-subtitle">
              Senior hands on your work from day one. No onboarding month, no change orders, no year-long contract.
            </p>
          </div>
        </section>
      </div>

      {/* 6. Pricing & Subscription Plans (Liquid Glass Cards) */}
      <Pricing onBookClick={handleBookClick} />

      {/* 7. Essential FAQs (Liquid Glass Cards) */}
      <FAQ />

      {/* 8. Final CTA Hero Banner */}
      <FinalCTA 
        onBookClick={handleBookClick} 
        onViewPlansClick={handleViewPlansClick} 
      />

      {/* 9. Footer with footer.avif Background Image */}
      <Footer onBookClick={handleBookClick} />

      {/* Booking Modal Overlay */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setSelectedProject(null);
        }}
        selectedProject={selectedProject}
      />
    </div>
  );
}
