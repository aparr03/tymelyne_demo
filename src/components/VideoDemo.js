import React, { useState } from 'react';
import './VideoDemo.css';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    console.error('Video failed to load. This may be due to browser compatibility with .mov files.');
  };

  const handleVideoLoad = () => {
    setVideoError(false);
    console.log('Video loaded successfully');
  };

  return (
    <section id="demo" className="section video-demo">
      <div className="container">
        <h2 className="section-title">See TymeLyne in Action</h2>
        <p className="section-subtitle">
          Watch how TymeLyne revolutionizes your learning experience
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
                  src="/demo_images/TymeLyne_thumbnail.png" 
                  alt="Video thumbnail"
                  className="video-thumbnail"
                />
              </div>
            ) : (
              <div className="video-frame">
                {videoError ? (
                  <div className="video-error">
                    <div className="error-content">
                      <h3>Video Unavailable</h3>
                      <p>The demo video cannot be played in this browser.</p>
                      <p><strong>Note:</strong> .MOV files have limited web browser support.</p>
                      <p>Please convert the video to .MP4 format for better compatibility.</p>
                      <button 
                        className="retry-btn" 
                        onClick={() => window.open('/video/TymeLyne_Demo.mp4', '_blank')}
                      >
                        Download Video
                      </button>
                    </div>
                  </div>
                ) : (
                  <video
                    controls
                    autoPlay
                    muted
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '15px' }}
                    onError={handleVideoError}
                    onLoadedData={handleVideoLoad}
                    onLoadStart={() => console.log('Video loading started')}
                  >
                    <source src="/video/TymeLyne_Demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
          
          <div className="video-features">
            <div className="feature-item">
              <div className="feature-content">
                <h4>Level Up Your Learning</h4>
                <p>Earn experience and level up to compete with your friends!</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-content">
                <h4>Track Your Progress</h4>
                <p>View your current and completed courses, along with tracking your daily/weekly/monthly use!</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-content">
                <h4>Intuitive Scheduling</h4>
                <p>Learn how to efficiently plan your day with smart suggestions!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo; 