import React from 'react';

export default function TrustedBy() {
  const partners = [
    { name: 'Airbnb', className: 'logo-airbnb' },
    { name: 'Shopify', className: 'logo-shopify' },
    { name: 'Notion', className: 'logo-notion' },
    { name: 'Linear', className: 'logo-linear' },
    { name: 'Webflow', className: 'logo-webflow' },
    { name: 'Figma', className: 'logo-figma' },
    { name: 'Slack', className: 'logo-slack' },
    { name: 'Stripe', className: 'logo-stripe' },
    { name: 'Vercel', className: 'logo-vercel' },
    { name: 'Framer', className: 'logo-framer' },
  ];

  // Quadruple the partners list for seamless endless marquee scroll
  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="trusted-section">
      <div className="trusted-label">
        Work shipped for teams like
      </div>

      <div className="trusted-marquee-wrapper">
        <div className="trusted-marquee-track">
          {marqueePartners.map((item, idx) => (
            <span key={idx} className={item.className}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
