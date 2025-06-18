import React, { useState } from 'react';
import './Screenshots.css';

const Screenshots = () => {
  const [activeImage, setActiveImage] = useState(0);

  const screenshots = [
    {
      id: 1,
      title: 'Home Screen',
      description: 'Welcome to TymeLyne - Your personal time management dashboard.',
      image: '/demo_images/tyme_home.PNG'
    },
    {
      id: 2,
      title: 'Login Screen',
      description: 'Secure and easy login to access your personalized time management experience.',
      image: '/demo_images/tyme_login.PNG'
    },
    {
      id: 3,
      title: 'Section Description',
      description: 'Detailed view of your organized sections and time blocks.',
      image: '/demo_images/tyme_section_desc.PNG'
    },
    {
      id: 4,
      title: 'Course Description',
      description: 'Track your learning progress and course management features.',
      image: '/demo_images/tyme_course_desc.PNG'
    }
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="section screenshots">
      <div className="container">
        <h2 className="section-title">App Screenshots</h2>
        <p className="section-subtitle">
          Take a look at the beautiful and intuitive interface of TymeLyne
        </p>
        
        <div className="screenshots-container">
          <div className="screenshot-main">
            <div className="phone-frame">
              <img 
                src={screenshots[activeImage].image} 
                alt={screenshots[activeImage].title}
                className="screenshot-image"
              />
            </div>
            <div className="screenshot-info">
              <h3>{screenshots[activeImage].title}</h3>
              <p>{screenshots[activeImage].description}</p>
            </div>
            <div className="screenshot-controls">
              <button className="control-btn" onClick={prevImage}>
                ‹
              </button>
              <div className="screenshot-dots">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
              <button className="control-btn" onClick={nextImage}>
                ›
              </button>
            </div>
          </div>
          
          <div className="screenshot-thumbnails">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={screenshot.image} alt={screenshot.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots; 