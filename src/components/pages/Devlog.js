import React from 'react';
import '../styling/Devlog.css';

const Devlog = () => {
  const devlogEntries = [
    {
      id: 1,
      date: '2025-01-15',
      title: 'TymeLyne Demo Website Launch',
      content: 'We\'re excited to announce the launch of our demo website! This landing page showcases the key features and capabilities of TymeLyne, giving users a preview of what\'s to come.',
      tags: ['Website', 'Launch', 'Demo']
    },
    {
      id: 2,
      date: '2025-01-10', 
      title: 'AI-Powered Learning Courses Development',
      content: 'Working on the core AI functionality that will allow users to create personalized learning paths. This feature leverages machine learning to adapt content based on user preferences and progress.',
      tags: ['AI', 'Learning', 'Development']
    },
    {
      id: 3,
      date: '2025-01-05',
      title: 'Mobile App UI/UX Design Completion',
      content: 'Completed the initial design phase for the mobile application. The interface focuses on simplicity and efficiency, making time management intuitive for all users.',
      tags: ['Design', 'Mobile', 'UX']
    },
    {
      id: 4,
      date: '2025-01-01',
      title: 'Project Kickoff and Vision',
      content: 'New year, new project! TymeLyne was born from the idea that time management should be personalized and intelligent. We\'re building something that adapts to you, not the other way around.',
      tags: ['Vision', 'Planning', 'Kickoff']
    }
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section id="devlog" className="section devlog">
      <div className="container">
        <h2 className="section-title">Development Blog</h2>
        <p className="section-subtitle">
          Follow our journey as we build TymeLyne from concept to reality
        </p>
        
        <div className="devlog-timeline">
          {devlogEntries.map((entry, index) => (
            <article key={entry.id} className="devlog-entry">
              <div className="devlog-date">
                <time dateTime={entry.date}>{formatDate(entry.date)}</time>
              </div>
              <div className="devlog-content">
                <h3 className="devlog-title">{entry.title}</h3>
                <p className="devlog-text">{entry.content}</p>
                <div className="devlog-tags">
                  {entry.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="devlog-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devlog; 