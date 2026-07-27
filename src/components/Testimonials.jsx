import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Alwayzz completely replaced our $18k/mo agency retainer. The turnaround speed is mind-blowing and the typography craft is top 1%.",
      name: "Julian Vance",
      role: "Founder & CEO, Lumina AI",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "The ability to pause our subscription when we enter quiet building phases has saved us tens of thousands of dollars. Outstanding partnership.",
      name: "Elena Rostova",
      role: "Head of Product, Apex Fintech",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "From Figma prototypes to production-ready React components with custom CSS, Alwayzz hits the mark on every single submission.",
      name: "Marcus Chen",
      role: "CTO, Krypton Cloud",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "Our seed round landing page built by Alwayzz converted at 8.4%. Investors specifically complimented the sleek black-and-white design.",
      name: "Sarah Jenkins",
      role: "Co-Founder, Halo Health",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "The 3D motion teasers they created for our Product Hunt launch went viral on Twitter. We hit #1 Product of the Day thanks to Alwayzz.",
      name: "David K.",
      role: "Founder, Nexus Motion",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "Consistent 48-hour turnarounds, no fluff, no corporate meetings—just elite design delivered exactly when we need it.",
      name: "Amara Okezie",
      role: "Design Lead, Solaris Energy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="section-container">
      <div className="section-header" style={{ textAlign: 'center', alignItems: 'center' }}>
        <span className="section-tag">Wall of Love</span>
        <h2 className="section-title">
          Trusted by world-class <span className="serif italic">founders</span>.
        </h2>
        <p className="section-subtitle">
          Here is what VC-backed startups and high-growth agencies say about working with Alwayzz.
        </p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((rev, idx) => (
          <div key={idx} className="testimonial-card">
            <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--button-bg)" color="var(--button-bg)" />
              ))}
            </div>

            <p className="testimonial-quote">"{rev.quote}"</p>

            <div className="testimonial-author">
              <img src={rev.avatar} alt={rev.name} className="author-avatar" />
              <div className="author-info">
                <span className="author-name">{rev.name}</span>
                <span className="author-role">{rev.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
