// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import file CSS terpisah

function Header() {
  return (
    <header className="header">
      <div className="header-overlay"></div>
      <nav className="container mx-auto flex items-center py-4 relative z-10 header-nav">
        <div className="flex">
          <Link to='/' className="header-link">Home</Link>
          <Link to='/features' className="header-link">Partner</Link>
          <Link to='/contact' className="header-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
