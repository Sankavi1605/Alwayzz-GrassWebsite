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

        In the 3D reference, blades stick out PAST the outline in every
        direction; that broken edge is most of what separates "grass letter"
        from "photo cropped to a letter". Built in two passes:

          fringe = dilate the glyph, then chew it hard with fine noise
                   -> a ragged halo of blade-coloured pixels around the letter
          core   = the glyph itself, chewed gently so its own edge is uneven

        Drawing fringe first and core over it keeps the letter readable while
        the blades scatter outward.

        feMorphology radius and feDisplacementMap scale are in ABSOLUTE px, so
        one filter cannot serve a 100px hero word and a 23px phone heading —
        hence three, tuned to the type sizes actually in use.
      */}
      <svg aria-hidden="true" focusable="false" width="0" height="0" className="svg-filter-defs">
        <defs>
          {[
            { id: 'turf-lg', freq: 0.8, dilate: 2, fringe: 15, core: 5 },
            { id: 'turf-md', freq: 1.2, dilate: 1.2, fringe: 8, core: 3 },
            { id: 'turf-sm', freq: 1.8, dilate: 0.7, fringe: 4, core: 1.5 },
          ].map(({ id, freq, dilate, fringe, core }) => (
            <filter
              key={id}
              id={id}
              x="-30%" y="-34%" width="160%" height="168%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="3" seed="4" result="fuzz" />
              <feMorphology in="SourceGraphic" operator="dilate" radius={dilate} result="fat" />
              <feDisplacementMap in="fat" in2="fuzz" scale={fringe} xChannelSelector="R" yChannelSelector="G" result="fringe" />
              <feDisplacementMap in="SourceGraphic" in2="fuzz" scale={core} xChannelSelector="R" yChannelSelector="G" result="core" />
              <feMerge>
                <feMergeNode in="fringe" />
                <feMergeNode in="core" />
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
