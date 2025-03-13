import React from 'react';
import '../DemoPage.css';
import Header from '../components/ui/header'; 

const DemoPage: React.FC = () => {
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
            <img src="hoppingImage.jpeg" alt="Point of Sale" className="timeline-image"/>
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
            <img src="/production.png" alt="Production" className="timeline-image"/>
          </div>

          <div className="timeline-item">
            <img src="/dyeing.png" alt="Dyeing Process" className="timeline-image"/>
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
            <img src="/assembly.png" alt="Garment Assembly" className="timeline-image"/>
          </div>

          <div className="timeline-item">
            <img src="/material.png" alt="Material Provenance" className="timeline-image"/>
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
