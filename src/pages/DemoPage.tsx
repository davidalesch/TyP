import React, { useState } from "react";
import { motion } from "framer-motion"; // Animation
import "../DemoPage.css";
import Header from "../components/ui/header";
import QRcode from "../Animations/QRcode";

function DemoPage() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="App">
      <Header />
      {!showDemo ? <ScanPopup onClose={() => setShowDemo(true)} /> : <Demo />}
      <Footer />
    </div>
  );
}

// **Popup Component**
const ScanPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div
      className="popup-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="popup-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Placeholder for animation */}
        <div className="section-image">
        <QRcode />
        </div>

        <h2>Scan to View Product Journey</h2>
        <p>Click the button below to unlock the details of this product.</p>

        <button className="scan-button" onClick={onClose}>
          Scan Me
        </button>
      </motion.div>
    </motion.div>
  );
};

const Demo: React.FC = () => {
  return (
    <div className="demo-page">
      <Header />  

      <div className="product-header">
        <div className="product-info">
          <img src="/navyHoodie.jpeg" alt="Sweater" className="product-image" />
          <div className="product-details">
            <h1 className="product-name">Hoodie Green</h1>
            <p className="serial-number">Serial Number: SW-12345678</p>
          </div>
        </div>
      </div>

      <div className="supply-chain-timeline">
        <h2>Supply Chain Journey</h2>
        <div className="timeline">

          {/* Timeline Steps */}
          <div className="timeline-item">
            <img src="Scanning.JPG" alt="Point of Sale" className="timeline-image"/>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Point of Sale</h3>
              <p className="timestamp">2025-03-04 10:00 AM</p>
              <p className="location">Berlin, Germany</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Production Location</h3>
              <p className="timestamp">2025-02-28 15:30</p>
              <p className="location">Bangladesh</p>
            </div>
            <div className="timeline-marker"></div>
            <img src="Sewing.JPG" alt="Production" className="timeline-image"/>
          </div>

          <div className="timeline-item">
            <img src="Dyeing.JPG" alt="Dyeing Process" className="timeline-image"/>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Dyeing</h3>
              <p className="timestamp">2025-03-01 11:00</p>
              <p className="location">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Garment Assembly</h3>
              <p className="timestamp">2025-03-02 14:00</p>
              <p className="location">Dhaka, Bangladesh</p>
            </div>
            <div className="timeline-marker"></div>
            <img src="Garment.JPG" alt="Garment Assembly" className="timeline-image"/>
          </div>

          <div className="timeline-item">
            <img src="Cotton.JPG" alt="Material Provenance" className="timeline-image"/>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Material Provenance</h3>
              <p className="timestamp">2025-02-20 09:00</p>
              <p className="location">Xinjiang, China</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Footer
const Footer = () => {
  return (
    <footer className="footer white-bg" id="contact">
      <p>&copy; {new Date().getFullYear()} Trace Your Product. All rights reserved.</p>
    </footer>
  );
};

export default DemoPage;
