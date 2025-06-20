import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Demo from './Demo';
import VideoDemo from './VideoDemo';
import Download from './Download';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Demo />
      <VideoDemo />
      <Download />
    </div>
  );
};

export default Home; 