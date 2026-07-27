import React from 'react';

export default function Workflow() {
  const steps = [
    {
      num: '1',
      title: 'Subscribe & Request',
      desc: 'Subscribe to a plan and immediately add unlimited design or dev tasks to your private Trello or Figma backlog.',
    },
    {
      num: '2',
      title: '48-Hour Delivery',
      desc: 'Receive your initial designs, motion assets, or clean React component code delivered in average 48 business hours.',
    },
    {
      num: '3',
      title: 'Unlimited Revisions',
      desc: 'We revise and refine every detail until you are 100% satisfied. No extra fees, no awkward budget conversations.',
    },
    {
      num: '4',
      title: 'Scale or Pause',
      desc: 'Finished your current sprint? Pause your membership instantly and bank your remaining days for later.',
    },
  ];

  return (
    <section className="section-container">
      <div className="section-header">
        <span className="section-tag">How It Works</span>
        <h2 className="section-title">
          The <span className="serif italic">Alwayzz</span> workflow method.
        </h2>
        <p className="section-subtitle">
          Streamlined execution designed to give high-growth teams senior agency quality without traditional friction.
        </p>
      </div>

      <div className="workflow-steps">
        {steps.map((step) => (
          <div key={step.num} className="workflow-card">
            <div className="workflow-step-num">{step.num}</div>
            <h3 className="workflow-title">{step.title}</h3>
            <p className="workflow-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
