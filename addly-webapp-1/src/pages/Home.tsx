import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="addly-landing">
      <section className="hero">
        <h1>Addly</h1>
        <p>All-in-one Facebook & Web Management Super App</p>
        <a href="#features" className="cta-btn">Get Started</a>
      </section>
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Facebook Automation</h3>
            <p>Bulk friend management, group posting, auto-like, and more.</p>
          </div>
          <div className="feature">
            <h3>Website Management</h3>
            <p>Manage your web presence, analytics, and integrations easily.</p>
          </div>
          <div className="feature">
            <h3>Modular & Multilanguage</h3>
            <p>Enable only the modules you need. Use Addly in your language.</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2>Ready to supercharge your Facebook and web management?</h2>
        <a href="#" className="cta-btn">Sign Up Free</a>
      </section>
    </div>
  );
}