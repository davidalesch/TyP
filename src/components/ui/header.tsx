import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="favicon.ico" alt="TYP Logo" className="logo" style={{ height: '50px', width: 'auto' }} />
      </div>
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/demo" className="nav-link">Demo</a>
        <a href="/learn-more" className="nav-link">Learn More</a>
        <a href="/aboutus" className="nav-link">About Us</a>
      </nav>
    </header>
  );
};

export default Header;
