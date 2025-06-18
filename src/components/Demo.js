import React, { useState } from 'react';
import './Demo.css';

const Demo = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalImageSelect = (index) => {
    setActiveImage(index);
  };

  const visibleThumbnails = screenshots.slice(0, 3);
  const hasMoreThumbnails = screenshots.length > 3;

  return (
    <section id="demo" className="section demo">
      <div className="container">
        <h2 className="section-title">Demo</h2>
        <p className="section-subtitle">
          Take a look at the beautiful and intuitive interface of TymeLyne
        </p>
        
        <div className="demo-container">
          <div className="demo-main">
            <div className="phone-frame" onClick={openModal}>
              <img 
                src={screenshots[activeImage].image} 
                alt={screenshots[activeImage].title}
                className="demo-image"
                loading="eager"
                decoding="async"
                sizes="(max-width: 480px) 200px, (max-width: 768px) 250px, 300px"
              />
            </div>
            <div className="demo-info">
              <h3>{screenshots[activeImage].title}</h3>
              <p>{screenshots[activeImage].description}</p>
            </div>
            <div className="demo-controls">
              <button className="control-btn" onClick={prevImage}>
                ‹
              </button>
              <div className="demo-dots">
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
          
          <div className="demo-thumbnails">
            {visibleThumbnails.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
                data-number={index + 1}
              >
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
            {hasMoreThumbnails && (
              <div
                className="thumbnail more-button"
                onClick={openModal}
              >
                <div className="plus-icon">+</div>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              
              <div className="modal-body">
                <div className="modal-image-section">
                  <div className="modal-phone-frame">
                    <img 
                      src={screenshots[activeImage].image} 
                      alt={screenshots[activeImage].title}
                      className="modal-demo-image"
                    />
                  </div>
                  <div className="modal-image-info">
                    <h3>{screenshots[activeImage].title}</h3>
                    <p>{screenshots[activeImage].description}</p>
                  </div>
                </div>
                
                <div className="modal-thumbnails-section">
                  <h4>All Screenshots</h4>
                  <div className="modal-thumbnails">
                    {screenshots.map((screenshot, index) => (
                      <div
                        key={screenshot.id}
                        className={`modal-thumbnail ${index === activeImage ? 'active' : ''}`}
                        onClick={() => handleModalImageSelect(index)}
                        data-number={index + 1}
                      >
                        <img 
                          src={screenshot.image} 
                          alt={screenshot.title}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo; 