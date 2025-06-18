import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⏰',
      title: 'Smart Scheduling',
      description: 'Intelligent time blocking and scheduling that adapts to your productivity patterns.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Visual analytics and insights to help you understand and improve your time management.'
    },
    {
      icon: '🔔',
      title: 'Smart Reminders',
      description: 'Contextual notifications that help you stay on track without being overwhelming.'
    },
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Set and track personal and professional goals with milestone achievements.'
    },
    {
      icon: '📱',
      title: 'Cross-Platform Sync',
      description: 'Seamlessly sync your data across all your devices in real-time.'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data stays private and secure with end-to-end encryption.'
    }
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <h2 className="section-title">Why Choose TymeLyne?</h2>
        <p className="section-subtitle">
          Discover the powerful features that make TymeLyne the ultimate time management solution
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 