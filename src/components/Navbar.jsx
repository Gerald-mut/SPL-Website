import React, { useEffect, useState } from 'react';
import './components.css';
import logo from '/assets/logo.png'; 
import throttle from 'lodash/throttle';

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
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
    }, []);

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="SPL Logo" className="navbar-logo"
          style={{ width: 60, height: 60, margin: 0, padding: 0 }}
        />
      </div>
      <button   aria-controls="mobile-menu"
  aria-expanded="false" className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} >
        &#9776;
      </button>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </div>
    </nav>
  );
}

export default Navbar;
