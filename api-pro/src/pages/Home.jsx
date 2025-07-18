import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => (
  <main className="home-container">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-headline">Unlock the Power of Your APIs</h1>
        <p className="hero-subheadline">Seamlessly manage, secure, and analyze your APIs with next-gen tools.</p>
        <a href="/docs" className="hero-cta">Get Started for Free</a>
        <Link to="/docs" className="hero-cta hero-cta-secondary hero-cta-docs">Read Our Docs</Link>
        <Link to="/about" className="hero-cta hero-cta-secondary">Learn More About Us</Link>
        <Link to="/pricing" className="hero-cta hero-cta-secondary hero-cta-pricing">View Pricing</Link>
      </div>
    </section>
    <div className="home-contact-link-wrapper">
      <Link to="/contact" className="docs-link-button">Contact Us</Link>
    </div>
    {/* Features Section */}
    <section className="features-section">
      <div className="features-cards">
        <article className="feature-card">
          <h2>AI-Powered Analytics</h2>
          <p>Understand your API usage with real-time insights.</p>
        </article>
        <article className="feature-card">
          <h2>Bank-Grade Security</h2>
          <p>Protect endpoints with OAuth 2.0 and threat detection.</p>
        </article>
        <article className="feature-card">
          <h2>Superior Developer Experience</h2>
          <p>Auto-generated docs and CLI tools.</p>
        </article>
      </div>
    </section>
    {/* Social Proof Section */}
    <section className="social-proof-section">
      <h3 className="social-proof-heading">Trusted by the World's Most Innovative Companies</h3>
      <ul className="company-list">
        <li>InnovateCorp</li>
        <li>QuantumLeap Tech</li>
        <li>DataWeave Solutions</li>
        <li>NextGen Systems</li>
        <li>Apex Digital</li>
      </ul>
    </section>
  </main>
);

export default Home;
