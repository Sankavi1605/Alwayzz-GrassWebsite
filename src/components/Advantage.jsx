import React from 'react';
import { Check, X } from 'lucide-react';

export default function Advantage() {
  const rows = [
    {
      feature: 'Speed of Delivery',
      agency: '4 - 8 weeks per project',
      inhouse: '2 - 4 weeks per sprint',
      alwayzz: 'Avg 48 hours per task',
    },
    {
      feature: 'Pricing Model',
      agency: '$25,000+ fixed contract',
      inhouse: '$140k+ salary + benefits',
      alwayzz: 'Flat monthly subscription',
    },
    {
      feature: 'Flexibility',
      agency: 'Strict scope change orders',
      inhouse: 'Overhead during slow periods',
      alwayzz: 'Pause or cancel anytime',
    },
    {
      feature: 'Revisions',
      agency: 'Limited to 2 rounds',
      inhouse: 'Depends on backlog',
      alwayzz: 'Unlimited until 100% satisfied',
    },
    {
      feature: 'Skills Covered',
      agency: 'Narrow specialization',
      inhouse: '1-2 designer skillsets',
      alwayzz: 'Full design + dev squad',
    },
    {
      feature: 'Contract Requirement',
      agency: '6 - 12 month minimum',
      inhouse: 'Full-time employment',
      alwayzz: 'Zero long-term contract',
    },
  ];

  return (
    <section className="section-container">
      <div className="section-header">
        <span className="section-tag">Why Alwayzz</span>
        <h2 className="section-title">
          Built for speed, flexibility & <span className="serif italic">craft</span>.
        </h2>
        <p className="section-subtitle">
          See how our subscription model compares to hiring in-house senior talent or traditional bloated agencies.
        </p>
      </div>

      <div className="comparison-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Traditional Agency</th>
              <th>In-House Senior Designer</th>
              <th className="highlight-col">Alwayzz Subscription</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="feature-title">{row.feature}</td>
                <td>{row.agency}</td>
                <td>{row.inhouse}</td>
                <td className="highlight-col" style={{ color: 'var(--text)', fontWeight: 600 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} className="check-icon" />
                    {row.alwayzz}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
