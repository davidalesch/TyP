import React from 'react';
import { motion } from 'framer-motion';
import '../WelcomePage.css';
import SupplyChainAnimation from '../Animations/SupplyChainAnimation';
import BlockchainAnimation from '../Animations/BlockChainAnimation';
import AdvantageAnimation from '../Animations/AdvantageAnimation';
import ImplementationAnimation from '../Animations/ImplementationAnimation';

function WelcomePage() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhatWeDo />
      <WhyInnovative />
      <OurAdvantage />
      <HowToImplement />
      <DemoContact />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <img src="favicon.ico" alt="TYP Logo" className="logo" style={{ height: '50px', width: 'auto' }} />
      </div>
      <nav className="nav">
        <a href="#about" className="nav-link">About Us</a>
      </nav>
    </header>
  );
};


// Hero section with animated text and pop letters for T, Y, P
const HeroSection = () => {
  return (
    <motion.section
      className="hero-section dark-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="pop-letter" style={{ 
            fontWeight: 'bold', 
            fontSize: '1.2em', 
            color: '#fff',
            textShadow: '-1px -1px 0 #000, 5px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>T</span>race{' '}
          <span className="pop-letter" style={{ 
            fontWeight: 'bold', 
            fontSize: '1.2em', 
            color: '#fff',
            textShadow: '-1px -1px 0 #000, 5px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>Y</span>our{' '}
          <span className="pop-letter" style={{ 
            fontWeight: 'bold', 
            fontSize: '1.2em', 
            color: '#fff',
            textShadow: '-1px -1px 0 #000, 5px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
          }}>P</span>roduct
        </motion.h1>
        <motion.h2 
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Experience innovation, total transparency, and effortless integration in every step.
        </motion.h2>
        <div className="hero-buttons">
            <motion.button 
            className="btn demo-btn"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = '/demo'}
            >
            View Demo
            </motion.button>
          <button className="btn contact-btn">Get in Touch</button>
        </div>
      </div>
    </motion.section>
  );
};

// "What We Do" section with side-by-side layout (text left, image right)
const WhatWeDo = () => {
  return (
    <motion.section
      className="what-we-do white-bg section-flex"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="section-text">
        <h2>What We Do</h2>
        <p>
          We leverage blockchain technology to build a transparent and secure supply chain management solution.
          Track the entire journey of your product and verify its authenticity through a unique QR code system.
        </p>
      </div>
      <div className="section-image">
        <SupplyChainAnimation />
      </div>
    </motion.section>
  );
};

// "Why It's Innovative" section with text above and image below layout
const WhyInnovative = () => {
  return (
    <motion.section
      className="why-innovative dark-bg"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="section-flex">
        <div className="section-text">
          <h2>Why It's Innovative</h2>
          <ul>
        <li>Blockchain ensures unmatched transparency and security.</li>
        <li>Real-time tracking with QR code verification for consumers.</li>
        <li>Seamless integration with existing business systems.</li>
          </ul>
        </div>
        <div className="section-image">
          <BlockchainAnimation />
        </div>
      </div>
    </motion.section>
  );
};

// New section "Our Advantage" explaining why we're better than current solutions
const OurAdvantage = () => {
  return (
    <motion.section
      className="our-advantage white-bg section-flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="section-text">
        <h2>Our Advantage</h2>
        <p>
          Unlike traditional solutions, we use a single lightweight ledger that handles proofs of inclusion for every step in your product's supply chain.
          This innovative approach makes our solution more scalable, sustainable, and efficient.
        </p>
      </div>
      <div className="section-image">
        <AdvantageAnimation />
      </div>
    </motion.section>
  );
};

// "How to Implement" section with side-by-side layout reversed (image left, text right)
const HowToImplement = () => {
  return (
    <motion.section
      className="how-to-implement white-bg section-flex"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="section-image">
        <ImplementationAnimation />
      </div>
      <div className="section-text">
        <h2>How to Implement</h2>
        <ol>
          <li>Schedule a consultation to assess your current supply chain setup.</li>
          <li>Integrate our API with your existing systems seamlessly.</li>
          <li>Deploy the QR code system on your products for real-time tracking.</li>
          <li>Monitor and manage your supply chain with our user-friendly dashboard.</li>
        </ol>
      </div>
    </motion.section>
  );
};

// Demo and Contact section with enhanced button styles and extra animation
const DemoContact = () => {
  return (
    <motion.section
      className="demo-contact dark-bg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1, rotate: [0, 2, 0] }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="demo"
    >
      <h2>Experience the Future</h2>
      <p>Interested in a demo or have questions? Get in touch with us!</p>
      <div className="demo-contact-buttons">
        <motion.button 
            className="btn demo-btn"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = '/demo'}
            >
            View Demo
        </motion.button>

        <button className="btn contact-btn">Get in Touch</button>
      </div>
    </motion.section>
  );
};

// Footer with basic copyright information.
const Footer = () => {
  return (
    <footer className="footer white-bg" id="contact">
      <p>&copy; {new Date().getFullYear()} Trace Your Products. All rights reserved.</p>
    </footer>
  );
};

export default WelcomePage;
