import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/pages/Footer';

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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
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
    </Router>
  );
}

export default App; 