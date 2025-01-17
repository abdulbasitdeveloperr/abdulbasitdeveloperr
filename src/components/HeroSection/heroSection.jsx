
import React from 'react';
import './heroSection.css';
import profilePicture from '../../assets/image.png'; // Ensure this path is correct
import { MdWavingHand } from 'react-icons/md';

const HeroSection = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-section">
        {/* Profile Picture Section */}
        <div className="hero-section-top">
          <div className="hero-section-top-image">
            <img src={profilePicture} className="profile-image" alt="Profile" />
          </div>
          {<span className="hero-section-top-text">
  Hi! I'm Abdul Basit <MdWavingHand size={34} className="waving-hand" />
</span>
}
        </div>

        {/* Middle Section */}
        <div className="hero-section-middle">
          <h1 className="hero-section-middle-heading">
            Frontend web developer based in Karachi
          </h1>
          <p className="hero-section-middle-desc">
            I am a frontend developer from Karachi, Pakistan.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="hero-section-bottom">
          <button className="hero-section-bottom-buttons">Contact Me</button>
          <button className="hero-section-bottom-buttons">My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


