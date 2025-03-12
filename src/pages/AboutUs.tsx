import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/ui/header'; // Assuming your header is stored here
import '../AboutUs.css'; // Custom CSS file for styling

function AboutUs() {
  return (
    <div className="App">
      <Header />
      <VisionSection />
      <ContactSection />
      <FoundersSection />
      <Footer />
    </div>
  );
}

// Vision Section (Added as the first section of the page)
const VisionSection = () => {
    return (
      <motion.section
        className="vision-section dark-bg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="vision-intro">
          <h2>Our Vision</h2>
          <p className="vision-text">
            A shared vision for ethical sourcing and conscious consumer choices. 
            We believe in leveraging technology to create a more transparent, responsible, and sustainable future.
          </p>
        </div>
      </motion.section>
    );
  };

// Contact Information Section (Moved to the top)
const ContactSection = () => {
  return (
    <motion.section
      className="contact-section white-bg"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Contact Info (Left side) */}
        <div className="contact-info">
          <div className="contact-item">
            <h3>Our Office</h3>
            <p>123 Business Ave, Suite 456, City, Country</p>
          </div>

          <div className="contact-item">
            <h3>Sales Inquiries</h3>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          <div className="contact-item">
            <h3>Reach Out to Us</h3>
            <p>Email: <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a></p>
          </div>
        </div>

        {/* Send Us a Message (Right side) */}
        <div className="message-form">
          <h3>Send Us a Message</h3>
          <form action="mailto:contact@yourcompany.com" method="POST" encType="text/plain">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

// Founders Section (Placed below with dark background)
const FoundersSection = () => {
  return (
    <motion.section
      className="founders-section dark-bg section-flex"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Meet the Founders</h2>
      <div className="founders-container">
        {/* Founder 1 */}
        <div className="founder">
          <img
            src="profile.jpg" // Replace with your image paths
            alt="Vera Eusébio"
            className="founder-image"
          />
          <p className="founder-name">Vera Eusébio</p>
            <p className="founder-role">Digital Marketing & Fashion</p> {/* Subtitle/Role */}
            <p className="founder-bio">
          With experience at Chanel and a background in Management and Digital Innovation, Vera bridges fashion industry insights with cutting-edge technology and marketing strategies.
          </p>
        </div>

        {/* Founder 2 (Center) */}
        <div className="founder center">
          <img
            src="profile.jpg" // Replace with your image paths
            alt="David Alesch"
            className="founder-image"
          />
          <p className="founder-name">David Alesch</p>
            <p className="founder-role">Blockchain & Optimization</p> {/* Subtitle/Role */}
            <p className="founder-bio">
          David specializes in blockchain technology with a focus on sustainability. His research on energy-efficient ledger systems drives our commitment to eco-friendly innovation.
          </p>
        </div>

        {/* Founder 3 */}
        <div className="founder">
          <img
            src="profile.jpg" // Replace with your image paths
            alt="Paula Dröghoff"
            className="founder-image"
          />
          <p className="founder-name">Paula Dröghoff</p>
            <p className="founder-role">Data & Enterprise Strategy</p> {/* Subtitle/Role */}
            <p className="founder-bio">
          Paula’s expertise in technology consulting and data-driven decision-making ensures our solutions align with business needs, driving innovation and adoption.
          </p>
        </div>
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

export default AboutUs;
