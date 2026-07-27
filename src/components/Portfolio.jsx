import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Portfolio({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Brand Identity', 'Web & App', 'Motion & Video'];

  const projects = [
    {
      id: 'lumina',
      title: 'Lumina AI',
      category: 'Brand Identity',
      desc: 'Complete rebrand and design system for next-gen developer AI tools.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      badge: 'Brand & Web',
      statVal: '+280%',
      statLabel: 'Signups Growth',
    },
    {
      id: 'apex',
      title: 'Apex Financial',
      category: 'Web & App',
      desc: 'High-frequency trading interface and mobile app design system.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      badge: 'Fintech App',
      statVal: '$1.4B',
      statLabel: 'Volume Processed',
    },
    {
      id: 'nexus',
      title: 'Nexus Motion',
      category: 'Motion & Video',
      desc: '3D product reveal teasers and interactive Rive web micro-animations.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
      badge: '3D & Motion',
      statVal: '4.2M',
      statLabel: 'Video Impressions',
    },
    {
      id: 'halo',
      title: 'Halo Health',
      category: 'Web & App',
      desc: 'Minimalist patient booking mobile application and web portal.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
      badge: 'Healthcare UX',
      statVal: '99.4%',
      statLabel: 'User Satisfaction',
    },
    {
      id: 'solaris',
      title: 'Solaris Energy',
      category: 'Brand Identity',
      desc: 'Clean, sustainable brand system and physical product collateral.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
      badge: 'Identity System',
      statVal: '14 Days',
      statLabel: 'Full Delivery',
    },
    {
      id: 'krypton',
      title: 'Krypton Cloud',
      category: 'Web & App',
      desc: 'Enterprise cloud dashboard with dark mode design system and UI kit.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      badge: 'SaaS Platform',
      statVal: '3.8x',
      statLabel: 'Conversion Lift',
    },
  ];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-tag">Selected Case Studies</span>
        <h2 className="section-title">
          Craft delivered <span className="serif italic">alwayzz</span> with precision.
        </h2>
        <p className="section-subtitle">
          Explore recent work across brand identity, web applications, 3D motion, and product design.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="portfolio-tabs">
        {categories.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="portfolio-card"
            onClick={() => onSelectProject(project)}
          >
            <div className="portfolio-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="portfolio-image" 
                loading="lazy"
              />
              <span className="portfolio-badge">{project.badge}</span>
            </div>

            <div className="portfolio-details">
              <div className="portfolio-title">
                <span>{project.title}</span>
                <ArrowUpRight className="portfolio-arrow" />
              </div>
              <p className="portfolio-desc">{project.desc}</p>
              
              <div className="portfolio-stats">
                <div className="stat-item">
                  <span className="stat-value">{project.statVal}</span>
                  <span className="stat-label">{project.statLabel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
