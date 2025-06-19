import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Master Your Time with
              <span className="gradient-text"> TymeLyne</span>
            </h1>
            <p className="hero-subtitle">
              The ultimate time management app that helps you organize, track, and optimize your daily activities. 
              Available for iOS and Android devices.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => scrollToSection('download')}>
                Download Now
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('demo')}>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-frame">
              <img 
                src="/demo_images/tyme_home.PNG" 
                alt="TymeLyne App Screenshot" 
                className="phone-screen-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero; 