import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import VideoDemo from './components/VideoDemo';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <VideoDemo />
      <Download />
      <Footer />
    </div>
  );
}

export default App; 