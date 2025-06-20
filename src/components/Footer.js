import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">TymeLyne</h3>
            <p>
              The ultimate time management app that helps you organize, track, 
              and optimize your daily activities.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📧</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul className="footer-links">
              {location.pathname === '/' ? (
                <>
                  <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
                  <li><a href="#demo" onClick={() => scrollToSection('demo')}>Demo</a></li>
                  <li><a href="#download" onClick={() => scrollToSection('download')}>Download</a></li>
                </>
              ) : (
                <>
                  <li><Link to="/">Features</Link></li>
                  <li><Link to="/">Demo</Link></li>
                  <li><Link to="/">Download</Link></li>
                </>
              )}
              <li><Link to="/about">Dev Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Blog</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; 2025 <a></a>Marc De Jesus and Andrew Parr. All rights reserved.</p>
          </div>
          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 