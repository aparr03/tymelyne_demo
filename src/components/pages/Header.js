import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styling/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>TymeLyne</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <Link to="/" onClick={handleNavClick}>Home</Link>
              </li>
              {location.pathname === '/' && (
                <>
                  <li><button onClick={() => scrollToSection('features')}>Features</button></li>
                  <li><button onClick={() => scrollToSection('demo')}>Demo</button></li>
                  <li><button onClick={() => scrollToSection('download')}>Download</button></li>
                </>
              )}
              <li>
                <Link to="/about" onClick={handleNavClick}>About</Link>
              </li>
            </ul>
          </nav>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 