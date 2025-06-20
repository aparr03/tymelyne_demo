import React from 'react';
import '../styling/Download.css';

const Download = () => {
  const handleDownload = (platform) => {
    // Placeholder for actual download links
    if (platform === 'ios') {
      window.open('https://apps.apple.com', '_blank');
    } else if (platform === 'android') {
      window.open('https://play.google.com', '_blank');
    }
  };

  return (
    <section id="download" className="section download">
      <div className="container">
        <h2 className="section-title">Download TymeLyne Today</h2>
        <p className="section-subtitle">
          Start managing your time more effectively. Available for iOS and Android devices.
        </p>
        
        <div className="download-content">
          <div className="download-info">
            <h3>Ready to Transform Your Productivity?</h3>
            <p>
              Join thousands of users who have already improved their time management 
              with TymeLyne. Download now and experience the difference.
            </p>
            
            <div className="download-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">4.8★</div>
                <div className="stat-label">App Store Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
          
          <div className="download-buttons">
            <button 
              className="download-btn ios-btn"
              onClick={() => handleDownload('ios')}
            >
              <div className="btn-content">
                <div className="btn-icon">🍎</div>
                <div className="btn-text">
                  <div className="btn-label">Download on the</div>
                  <div className="btn-platform">App Store</div>
                </div>
              </div>
            </button>
            
            <button 
              className="download-btn android-btn"
              onClick={() => handleDownload('android')}
            >
              <div className="btn-content">
                <div className="btn-icon">🤖</div>
                <div className="btn-text">
                  <div className="btn-label">Get it on</div>
                  <div className="btn-platform">Google Play</div>
                </div>
              </div>
            </button>
          </div>
        </div>
        
        <div className="download-features">
          <div className="feature-highlight">
            <div className="highlight-icon">🚀</div>
            <h4>Free to Start</h4>
            <p>Download and try TymeLyne completely free</p>
          </div>
          
          <div className="feature-highlight">
            <div className="highlight-icon">🔒</div>
            <h4>Privacy Protected</h4>
            <p>Your data stays private and secure</p>
          </div>
          
          <div className="feature-highlight">
            <div className="highlight-icon">📱</div>
            <h4>Cross-Platform</h4>
            <p>Sync seamlessly across all your devices</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download; 