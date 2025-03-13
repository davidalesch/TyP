import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/header'; // Importing the Header component
import '../LearnMore.css'; // Import your custom CSS for the page
import Hands from '../Animations/Hands';
import { BadgeCheck, Cuboid, Eye, Globe, Lock } from 'lucide-react';


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
          <Cuboid 
            size={100} // You can adjust the size based on your layout
            color="black" // You can change the color if needed
            /> 
          </div>
          <div className="text-box">
          <h3 className="bold-orange">Understanding Blockchain</h3>
            <p>Blockchain is like a shared digital logbook that securely records every step a product takes in the fashion supply chain. Once information is added, it can't be changed, ensuring accuracy and trust between suppliers, brands, and consumers.</p>
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
            <h3 className="bold-orange">Decentralization</h3>
            <p>Instead of one company controlling all the records, blockchain works like a network of digital checkpoints. Every supplier, manufacturer, and retailer involved has access to the same verified information, preventing misinformation or hidden practices.</p>
            <p style={{ fontStyle: "italic" }}>Example: A clothing brand sources organic cotton for a new clothing line. Each stage—harvesting, dyeing, weaving, and manufacturing—is recorded on the blockchain, proving its authenticity and ethical sourcing.</p>
          </div>
          <div className="image-box">
          <Globe 
            size={100} // You can adjust the size based on your layout
            color="black" // You can change the color if needed
            /> 
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
          <BadgeCheck 
            size={100} // You can adjust the size based on your layout
            color="black" // You can change the color if needed
            /> 
          </div>
          <div className="text-box">
            <h3 className="bold-orange">Immutability</h3>
            <p>Once a transaction is recorded on the blockchain, it cannot be changed or deleted. This ensures that key details—such as where materials were sourced, who manufactured them, and when they were shipped—are permanently stored and verifiable.</p>
            <p style={{ fontStyle: "italic" }}>Example: A high-end handbag brand claims its leather is sourced sustainably. With blockchain, every step in the production process is logged, making it impossible to falsely label products as "sustainable" without proof.</p>
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
            <h3 className="bold-orange">Transparency</h3>
            <p>Every transaction is stored in a digital ledger that all authorized participants can access. This allows brands and consumers to track a product’s journey in real time.</p>
            <p style={{ fontStyle: "italic" }}> Example: A customer scans a QR code on a dress tag and sees its full journey—from raw materials to factory production to store shelves—ensuring it was ethically made.</p>
          </div>
          <div className="image-box">
          <Eye 
            size={100} // You can adjust the size based on your layout
            color="black" // You can change the color if needed
            /> 
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
          <Lock 
            size={100} // You can adjust the size based on your layout
            color="black" // You can change the color if needed
            /> 
          </div>
          <div className="text-box">
            <h3 className="bold-orange">Security</h3>
            <p>Blockchain uses advanced encryption to protect data, ensuring that supply chain information remains tamper-proof. This reduces the risk of counterfeiting, unethical labor practices, and false product claims.</p>
            <p style={{ fontStyle: "italic" }}>Example: A sneaker company combats counterfeiting by assigning each authentic pair a unique blockchain-verified ID. Customers can check this ID to confirm they’re buying a genuine product.</p>
          </div>
        </motion.div>
      </section>
    );
  };

  const WhySection = () => {
    return (
      <motion.section
        className="what-section dark-bg section-flex"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="section-text">
          <h2 className="section-title">Why We Do It</h2>
          <p>
            Our mission is to transform the way supply chains operate by making them more transparent, secure, and efficient.
            We believe that consumers deserve to know the story behind every product they purchase. By providing transparency at
            every step of the journey, we aim to promote sustainability and consumer trust, while empowering businesses to
            enhance their operations and make smarter decisions.
          </p>
        </div>
        <div className="section-image">
          <Hands />
        </div>
      </motion.section>
    );
  };
  // Footer with copyright information
const Footer = () => {
    return (
      <footer className="footer white-bg" id="contact">
        <p>&copy; {new Date().getFullYear()} Trace Your Products. All rights reserved.</p>
      </footer>
    );
  };

export default LearnMore;
