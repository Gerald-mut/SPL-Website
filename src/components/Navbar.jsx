import React, { useEffect, useState } from 'react';
import './components.css';
import logo from '/assets/logo.png'; 

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      let current = 'hero';
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="SPL Logo"
          style={{ width: 80, height: 80, margin: 0, padding: 0 }}
        />
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
