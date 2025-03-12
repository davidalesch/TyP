import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/header'; // Importing the Header component
import '../LearnMore.css'; // Import your custom CSS for the page

function LearnMore() {
  return (
    <div className="App">
      <Header />
      <WhatSection />
      <WhySection /> 
      <HowSection />
      <Footer />
    </div>
  );
}

// "What" Section (Video Placeholder for Product Description)
const WhatSection = () => {
  return (
    <motion.section
      className="what-section white-bg section-flex"
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
      <div className="section-video">
        {/* Placeholder for "What" Video - product description */}
        <div className="video-placeholder">
          <p>Video placeholder for product description (later add your marketing video here)</p>
        </div>
      </div>
    </motion.section>
  );
};

const HowSection = () => {
    return (
      <section className="how-section white-bg">
        <h2 className="section-title">How We Do It</h2>
  
        {/* Introduction */}
        <motion.div
          className="how-row left-aligned"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-box">
            <p>We use blockchain technology to ensure transparency, security, and trust throughout the supply chain. But what exactly is blockchain, and how does it work?</p>
          </div>
          <div className="image-box">
            <div className="image-placeholder">[Animation / Image]</div>
          </div>
        </motion.div>
  
        {/* Understanding Blockchain */}
        <motion.div
          className="how-row right-aligned"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="image-box">
            <div className="image-placeholder">[Animation / Image]</div>
          </div>
          <div className="text-box">
            <h3>Understanding Blockchain</h3>
            <p>At its core, blockchain is a digital ledger that records transactions securely, transparently, and tamper-proof. Unlike traditional databases controlled by a single entity, blockchain is decentralized. Instead, transactions are verified by a network of computers, making it incredibly difficult to alter or manipulate the data.</p>
          </div>
        </motion.div>
  
        {/* Decentralization */}
        <motion.div
          className="how-row left-aligned"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-box">
            <h3>Decentralization</h3>
            <p>Instead of relying on a central authority, blockchain operates on a peer-to-peer network where all participants have access to the same information.</p>
          </div>
          <div className="image-box">
            <div className="image-placeholder">[Animation / Image]</div>
          </div>
        </motion.div>
  
        {/* Immutability */}
        <motion.div
          className="how-row right-aligned"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="image-box">
            <div className="image-placeholder">[Animation / Image]</div>
          </div>
          <div className="text-box">
            <h3>Immutability</h3>
            <p>Once a transaction is recorded on the blockchain, it cannot be changed or deleted, ensuring data integrity.</p>
          </div>
        </motion.div>
  
        {/* Transparency */}
        <motion.div
          className="how-row left-aligned"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-box">
            <h3>Transparency</h3>
            <p>Every transaction is stored in a publicly accessible ledger, making it easy to track and verify information.</p>
          </div>
          <div className="image-box">
            <div className="image-placeholder">[Animation / Image]</div>
          </div>
        </motion.div>
  
        {/* Security */}
        <motion.div
          className="how-row right-aligned"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="image-box">
            <div className="image-placeholder">[Animation / Image]</div>
          </div>
          <div className="text-box">
            <h3>Security</h3>
            <p>Transactions are encrypted and verified using advanced cryptographic techniques, protecting data from fraud or unauthorized changes.</p>
          </div>
        </motion.div>
      </section>
    );
  };
  

/*// "How" Section (Video Placeholder for Blockchain Explanation)
const HowSection = () => {
  return (
    <motion.section
      className="how-section dark-bg section-flex"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="section-text">
        <h2>How We Do It</h2>
        <p>
          Blockchain technology powers our supply chain solution, ensuring that each transaction is transparent,
          secure, and verifiable. Learn how blockchain revolutionizes product tracking and verification.
        </p>
      </div>
      <div className="section-video">
        {/* Placeholder for "How" Video - blockchain explanation *//*}
        <div className="video-placeholder">
          <p>Video placeholder for blockchain technology explanation (later add your blockchain video here)</p>
        </div>
      </div>
    </motion.section>
  );
}; */

// "Why" Section (Text explaining why we do it)
const WhySection = () => {
  return (
    <motion.section
      className="why-section dark-bg section-flex"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="section-text">
        <h2>Why We Do It</h2>
        <p>
          Our mission is to transform the way supply chains operate by making them more transparent, secure, and efficient. 
          We believe that consumers deserve to know the story behind every product they purchase. By providing transparency at 
          every step of the journey, we aim to promote sustainability and consumer trust, while empowering businesses to 
          enhance their operations and make smarter decisions.
        </p>
      </div>
      <div className="section-video">
        {/* Placeholder for "Why" Video */}
        <div className="video-placeholder">
          <p>Video placeholder explaining why we do it (later add your video here)</p>
        </div>
      </div>
    </motion.section>
  );
};

// Footer with basic copyright information
const Footer = () => {
  return (
    <footer className="footer white-bg" id="contact">
      <p>&copy; {new Date().getFullYear()} Trace Your Products. All rights reserved.</p>
    </footer>
  );
};

export default LearnMore;
