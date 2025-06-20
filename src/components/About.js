import React from 'react';
import Devlog from './Devlog';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="section about-hero">
        <div className="container">
          <h1 className="section-title">About TymeLyne</h1>
          <p className="section-subtitle">
            Learn more about our mission, the team, and our development journey
          </p>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                TymeLyne was created with a simple yet powerful vision: to make learning 
                personal, intelligent, and engaging. We believe that everyone deserves tools 
                that adapt to their unique lifestyle and learning preferences.
              </p>
              <p>
                Our AI-powered approach to learning goes beyond traditional scheduling 
                apps. We're building a platform that understands your goals, learns from your 
                habits, and helps you create meaningful progress in all areas of your life.
              </p>
            </div>
            
            <div className="about-team">
              <h2>The Team</h2>
              <div className="team-members">
                <div className="team-member">
                  <h3>Marc De Jesus</h3>
                  <p>Co-Founder & Developer</p>
                  <a href="https://marcdejesusdev.com" target="_blank" rel="noopener noreferrer">
                    marcdejesusdev.com
                  </a>
                </div>
                <div className="team-member">
                  <h3>Andrew Parr</h3>
                  <p>Co-Founder & Developer</p>
                  <a href="https://parrportfolio.vercel.app" target="_blank" rel="noopener noreferrer">
                    parrportfolio.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Devlog />
    </div>
  );
};

export default About; 