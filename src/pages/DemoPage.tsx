import React from 'react';
import '../DemoPage.css';

const DemoPage: React.FC = () => {
  return (
    <div className="demo-page">
      <header className="header">
        <div className="logo-container">
            <h1 className="logo">TYP</h1>
        </div>
        <nav className="nav">
            <a href="#about" className="nav-link">About Us</a>
        </nav>
      </header>
      <div className="product-header">
        <div className="product-info">
          <img src="/sweater.jpg" alt="Sweater" className="product-image" />
          <div className="product-details">
            <h1 className="product-name">Patagonia Hoddie Blue</h1>
            <p className="serial-number">Serial Number: SW-12345678</p>
          </div>
        </div>
      </div>
      <div className="supply-chain-timeline">
        <h2>Supply Chain Journey</h2>
        <div className="timeline">
          {/* Step 1: Point of Sale */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Point of Sale</h3>
              <p className="timestamp">2025-03-04 10:00 AM</p>
              <p className="location">New York, USA</p>
            </div>
          </div>
          {/* Step 2: Production Location */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Production Location</h3>
              <p className="timestamp">2025-02-28 15:30</p>
              <p className="location">Bangladesh</p>
            </div>
          </div>
          {/* Step 3: Dyeing */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Dyeing</h3>
              <p className="timestamp">2025-03-01 11:00</p>
              <p className="location">Dhaka, Bangladesh</p>
            </div>
          </div>
          {/* Step 4: Garment Assembly */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Garment Assembly</h3>
              <p className="timestamp">2025-03-02 14:00</p>
              <p className="location">Dhaka, Bangladesh</p>
            </div>
          </div>
          {/* Step 5: Material Provenance */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Material Provenance</h3>
              <p className="timestamp">2025-02-20 09:00</p>
              <p className="location">China</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
