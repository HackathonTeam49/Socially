import React from 'react';
import sociallyBg from '../assets/socially-bg.png'; // Desktop background 
import bgSmall from '../assets/bg-small.png'; // Mobile background 
import bubUp from '../assets/bub-up.png'; // Top bubble image for mobile
import bubD from '../assets/bub-d.png'; // Bottom bubble image for mobile
import bgLine from '../assets/bg-line.png'; // Horizontal line for mobile
import './MainBg.css';

const Bg = () => {
  return (
    <div className="bg-container">
      {/* Desktop Background Image */}
      <img src={sociallyBg} alt="Socially Background" className="bg-image desktop-bg" />

      {/* Mobile Layout */}
      <div className="mobile-bg">
        <img src={bgSmall} alt="Socially Mobile Background" className="bg-image mobile-bg-image" />
        <img src={bubUp} alt="Top Bubbles" className="bub-up" />
        <img src={bubD} alt="Bottom Bubbles" className="bub-d" />
        <img src={bgLine} alt="Horizontal Line" className="bg-line" />
      </div>
    </div>
  );
};

export default Bg; 