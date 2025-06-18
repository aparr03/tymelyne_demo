import React, { useState } from 'react';
import './VideoDemo.css';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section id="demo" className="section video-demo">
      <div className="container">
        <h2 className="section-title">See TymeLyne in Action</h2>
        <p className="section-subtitle">
          Watch how TymeLyne transforms your daily time management experience
        </p>
        
        <div className="video-container">
          <div className="video-wrapper">
            {!isPlaying ? (
              <div className="video-placeholder" onClick={handlePlayVideo}>
                <div className="play-button">
                  <div className="play-icon">▶</div>
                </div>
                <div className="video-overlay">
                  <h3>Watch Demo Video</h3>
                  <p>Click to play the TymeLyne app demonstration</p>
                </div>
                <img 
                  src="https://via.placeholder.com/800x450/667eea/ffffff?text=Video+Thumbnail" 
                  alt="Video thumbnail"
                  className="video-thumbnail"
                />
              </div>
            ) : (
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="TymeLyne Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          
          <div className="video-features">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-content">
                <h4>Smart Task Management</h4>
                <p>See how easy it is to create and organize your daily tasks</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <div className="feature-content">
                <h4>Real-time Analytics</h4>
                <p>Discover insights about your productivity patterns</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">⏰</div>
              <div className="feature-content">
                <h4>Intuitive Scheduling</h4>
                <p>Learn how to efficiently plan your day with smart suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo; 