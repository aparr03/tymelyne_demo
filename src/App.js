import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import VideoDemo from './components/VideoDemo';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if user has already acknowledged the disclaimer
    const hasAcknowledged = localStorage.getItem('tymelyne-disclaimer-acknowledged');
    if (!hasAcknowledged) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem('tymelyne-disclaimer-acknowledged', 'true');
    setShowDisclaimer(false);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <VideoDemo />
      <Download />
      <Footer />

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="disclaimer-overlay">
          <div className="disclaimer-content">
            <div className="disclaimer-header">
              <h2>🚧 Page Under Construction</h2>
            </div>
            <div className="disclaimer-body">
              <p>
                Welcome to TymeLyne! Please note that this website is currently under construction.
              </p>
              <p>
                <strong>Only the following content is accurate and final:</strong>
              </p>
              <ul>
                <li>✅ App screenshots and images</li>
                <li>✅ Demo video content</li>
              </ul>
              <p>
                All other information, features, and content are placeholder and subject to change.
              </p>
            </div>
            <div className="disclaimer-footer">
              <button className="acknowledge-btn" onClick={handleAcknowledge}>
                I Understand, Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 