import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

import arka_logo from "@/assets/images/logos/arka_Nexus.png";
import training from "@/assets/images/training.png";
import energy from "@/assets/images/energy_audit.png";
import harmonic from "@/assets/images/harmonic_audit.jpg";
import solar from "@/assets/images/solar.jpg";
import vibration from "@/assets/images/vibration.jpg";

const serviceImages: Record<string, string> = {
  'energy-audit': energy,
  'power-quality': 'https://5.imimg.com/data5/FL/OW/EJ/SELLER-18659820/power-quality-analysis-services-500x500.jpg',
  'harmonic-study': harmonic,
  'solar-panel-study': solar,
  'thermal-study': 'https://th.bing.com/th/id/OIP.Ydng70W3djzKrcksUbF13AHaEr?rs=1&pid=ImgDetMain',
  'vibration-audit': vibration,
  'safety-audit': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=250&fit=crop',
  'training': training,
};

const services = [
  { title: 'Energy Audit', link: '/energy-audit', image: serviceImages['energy-audit'] },
  { title: 'Power Quality Audit', link: '/power-quality', image: serviceImages['power-quality'] },
  { title: 'Harmonic Audit', link: '/harmonic-study', image: serviceImages['harmonic-study'] },
  { title: 'Solar Plant Audit', link: '/solar-panel-study', image: serviceImages['solar-panel-study'] },
  { title: 'Thermal Study', link: '/thermal-study', image: serviceImages['thermal-study'] },
  { title: 'Vibration Audit', link: '/vibration-audit', image: serviceImages['vibration-audit'] },
  { title: 'Industrial Safety Audit', link: '/industrial-safety-audit', image: serviceImages['safety-audit'] },
  { title: 'Industrial Training Program', link: '/industrial-training', image: serviceImages['training'] }
];

const aboutItems = [
  { title: 'Vision & Mission', link: '/about#vision' },
  { title: 'Objectives', link: '/about#objectives' },
  { title: 'Our Team', link: '/about#team' },
  { title: 'USPs', link: '/about#usps' },
  { title: 'Core Values', link: '/about#values' },
];

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const location = useLocation();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1400);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && target && !target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
        setIsAboutDropdownOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <motion.img
            src={arka_logo}
            alt="Arka Nexus Logo"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          <ul className="navbar-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li className="dropdown-item">
              <Link
                to="/about"
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About Us
                <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>
              <div className="dropdown-menu">
                {aboutItems.map((item, index) => (
                  <HashLink key={index} to={item.link} className="dropdown-link">
                    {item.title}
                  </HashLink>
                ))}
              </div>
            </li>

            {/* Services Mega Menu */}
            <li
              className="dropdown-item mega-menu-trigger"
              onMouseEnter={() => !isMobile && setIsMegaMenuOpen(true)}
              onMouseLeave={() => !isMobile && setIsMegaMenuOpen(false)}
            >
              <Link
                to="/services"
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              >
                Our Services
                <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>

              {isMegaMenuOpen && (
                <div className="mega-menu">
                  <div className="mega-menu-content">
                    {services.map((service, index) => (
                      <div key={index} className="service1-card">
                        <div className="service-image">
                          <img src={service.image} alt={service.title} />
                          <Link to={service.link} className="service-overlay">
                            <span>View Details</span>
                          </Link>
                        </div>
                        <Link to={service.link} className="service-title">
                          {service.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <HashLink to="/#clients" className="nav-link">
                Valuable Clients
              </HashLink>
            </li>

            <li>
              <HashLink to="/instruments" className="nav-link">
                Instruments Used
              </HashLink>
            </li>

            {/* <li>
              <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                Projects
              </Link>
            </li> */}

            <li>
              <Link to="/snap-shot" className={location.pathname === '/snap-shot' ? 'active' : ''}>
                Snap Shots
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-btn"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>

              {/* Mobile About */}
              <li className="mobile-dropdown">
                <button
                  className="mobile-dropdown-toggle about-toggle"
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                >
                  About Us
                  <svg className={`dropdown-icon ${isAboutDropdownOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {isAboutDropdownOpen && (
                  <div className="mobile-dropdown-content">
                    {aboutItems.map((item, index) => (
                      <HashLink
                        key={index}
                        to={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </HashLink>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Services */}
              <li className="mobile-dropdown">
                <div className="mobile-dropdown-header">
                  {/* Clicking text navigates to /services */}
                  <Link
                    to="/services"
                    className="mobile-dropdown-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Services
                  </Link>

                  {/* Clicking the arrow toggles the dropdown */}
                  <button
                    className="mobile-dropdown-toggle"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    aria-label="Toggle Services Dropdown"
                  >
                    <svg
                      className={`dropdown-icon ${isServicesDropdownOpen ? 'open' : ''}`}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </button>
                </div>

                {isServicesDropdownOpen && (
                  <div className="mobile-dropdown-content">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>


              <li>
                <HashLink to="/#clients" onClick={() => setIsMobileMenuOpen(false)}>
                  Valuable Clients
                </HashLink>
              </li>

              <li>
                <HashLink to="/instruments" onClick={() => setIsMobileMenuOpen(false)}>
                  Instruments Used
                </HashLink>
              </li>

              {/* <li>
                <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </Link>
              </li> */}

              <li>
                <Link to="/snap-shot" onClick={() => setIsMobileMenuOpen(false)}>
                  Snap Shots
                </Link>
              </li>

              <li>
                <button
                  className="mobile-contact-btn"
                  onClick={handleContactClick}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;