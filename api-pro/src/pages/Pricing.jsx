import React from 'react';
import '../styles/Pricing.css';

const plans = [
  {
    title: 'Starter',
    price: '$0',
    period: '/month',
    features: [
      'Up to 1,000 API calls/month',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    title: 'Pro',
    price: '$49',
    period: '/month',
    features: [
      'Up to 1,000,000 API calls/month',
      'Advanced analytics',
      'Priority email support',
      'OAuth 2.0 security',
    ],
    cta: 'Start Pro',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    title: 'Enterprise',
    price: "Let's Talk",
    period: '',
    features: [
      'Unlimited API calls',
      'Custom analytics & SLAs',
      'Dedicated support',
      'Enterprise security',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const Pricing = () => (
  <main className="pricing-container">
    <h1 className="pricing-title">Pricing Plans</h1>
    <div className="pricing-cards">
      {plans.map((plan, idx) => (
        <section
          className={`pricing-card${plan.highlight ? ' pricing-card-popular' : ''}`}
          key={plan.title}
          aria-label={plan.title}
        >
          {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
          <h2 className="plan-title">{plan.title}</h2>
          <div className="plan-price">
            <span className="price-amount">{plan.price}</span>
            <span className="price-period">{plan.period}</span>
          </div>
          <ul className="plan-features">
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="plan-cta">{plan.cta}</button>
        </section>
      ))}
    </div>
  </main>
);

export default Pricing;
