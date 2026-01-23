import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { HashLink } from "react-router-hash-link";

import arka_logo from "@/assets/images/logos/arka_Nexus.png";
import training from "@/assets/images/nav_img/training.png";
import energy from "@/assets/images/nav_img/energy_audit.png";
import harmonic from "@/assets/images/nav_img/harmonic_audit.jpg";
import solar from "@/assets/images/nav_img/solar.jpg";
import vibration from "@/assets/images/nav_img/vibration.jpg";

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
  { title: 'Energy Audit', link: '/services/energy-audit', image: serviceImages['energy-audit'] },
  { title: 'Power Quality Audit', link: '/services/power-quality', image: serviceImages['power-quality'] },
  { title: 'Harmonic Audit', link: '/services/harmonic-study', image: serviceImages['harmonic-study'] },
  { title: 'Solar Plant Audit', link: '/services/solar-panel-study', image: serviceImages['solar-panel-study'] },
  { title: 'Thermal Study', link: '/services/thermal-study', image: serviceImages['thermal-study'] },
  { title: 'Vibration Audit', link: '/services/vibration-audit', image: serviceImages['vibration-audit'] },
  { title: 'Industrial Safety Audit', link: '/services/industrial-safety-audit', image: serviceImages['safety-audit'] },
  { title: 'Industrial Training Program', link: '/services/industrial-training', image: serviceImages['training'] }
];

const aboutItems = [
  { title: 'Vision & Mission', link: '/about#vision-mission' },
  { title: 'Objectives', link: '/about#objectives' },
  { title: 'Our Team', link: '/about#team' },
  { title: 'USPs', link: '/about#usp' },
  { title: 'Core Values', link: '/about#values' },
];

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const location = useLocation();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b 
      ${isScrolled
        ? 'h-nav-h-scroll bg-neutral-offWhite shadow-lg'
        : 'h-nav-h bg-neutral-offWhite backdrop-blur-md border-neutral-border'}`}>
      <div className="max-w-arka mx-auto px-safe-x flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center z-[1100]">
          <motion.img
            src={arka_logo}
            alt="Arka Nexus Logo"
            whileHover={{ scale: 1.02 }}
            className={`transition-all duration-300 ${isScrolled ? 'h-[55px]' : 'h-[65px]'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-[1401px]:flex items-center gap-8">
          <ul className="flex items-center gap-dropdown-gap list-none m-0 p-0">
            <li>
              <Link to="/" className={`flex items-center gap-2 px-4 py-3 rounded-nav-link text-nav-link transition-all font-medium
                ${location.pathname === '/'
                  ? 'text-brand-primary'
                  : 'text-neutral-textMain hover:text-brand-primary'}`}>
                Home
              </Link>
            </li>

            {/* About Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link
                to="/about"
                className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link hover:text-brand-primary transition-all font-medium"
              >
                About Us
                <svg className="transition-transform duration-300 hover:rotate-180" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 bg-white rounded-dropdown shadow-dropdown p-2 min-w-[200px] hover:opacity-100 hover:visible transition-all">
                {aboutItems.map((item, index) => (
                  <HashLink key={index} to={item.link} onClick={() => setIsAboutDropdownOpen(false)} className="block p-3 text-dropdown-link text-neutral-textMain hover:text-brand-primary rounded-md transition-all font-medium">
                    {item.title}
                  </HashLink>
                ))}
              </div>
              )}
            </li>

            {/* Services Mega Menu */}
            <li
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link
                to="/services"
                className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link hover:text-brand-primary transition-all font-medium"
              >
                Our Services
                <svg className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} width="12" height="12" viewBox="0 0 12 12">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </Link>

              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-mega-menu-w max-w-mega 
                  bg-white rounded-mega shadow-mega p-8 border border-neutral-border z-[1002]">
                  <div className="grid grid-cols-4 gap-card-gap">
                    {services.map((service, index) => (
                      <div key={index} className="group rounded-card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <div className="relative h-[140px] overflow-hidden rounded-card mb-3">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg" />
                          <Link to={service.link} className="absolute inset-0 flex items-center justify-center 
                         opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="text-neutral-white font-semibold text-body-sm px-4 py-2 bg-brand-secondary backdrop-blur-sm rounded-md">View Details</span>
                          </Link>
                        </div>
                        <Link to={service.link} className="text-dropdown-link font-semibold text-neutral-textMain leading-tight transition-colors hover:text-brand-primary">
                          {service.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li className="relative group">
              <HashLink to="/#clients" className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link group-hover:text-brand-primary transition-all font-medium">
                Valuable Clients
              </HashLink>
            </li>

            <li className="relative group">
              <HashLink to="/instruments" className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link group-hover:text-brand-primary transition-all font-medium">
                Instruments Used
              </HashLink>
            </li>

            {/* <li className="relative group">
              <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
                Projects
              </Link>
            </li> */}

            <li className="relative group">
              <Link to="/snapshots" className="flex items-center gap-2 px-4 py-3 text-neutral-textMain text-nav-link group-hover:text-brand-primary transition-all font-medium">
                Snap Shots
              </Link>
            </li>
          </ul>

          {/* Contact Button */}
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-brand-primary to-brand-secondary text-neutral-white px-7 py-3 rounded-button font-semibold shadow-button text-sm"
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="min-[1401px]:hidden flex flex-col gap-1.5 p-2 z-[1100] relative pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation(); // Prevents click from bubbling to the nav
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-neutral-textMain transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-textMain transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-neutral-textMain transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {/* Mobile Menu Container */}
        <div className={`fixed inset-0 w-full h-screen bg-neutral-offWhite z-[1050] transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="pt-24 px-8 pb-8 max-w-[500px] mx-auto overflow-y-auto h-full">
            <ul className="flex flex-col list-none m-0 p-0">

              {/* 1. Home Link */}
              <li className="border-b border-neutral-border">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-5 text-mobile-link font-medium text-neutral-textMain text-center hover:text-brand-primary transition-colors">
                  Home
                </Link>
              </li>

              {/* 2. About Us - TEXT navigates, ICON toggles */}
              <li className="border-b border-neutral-border">
                <div className="flex items-center justify-between w-full py-5 relative">
                  <Link
                    to="/about"
                    className="flex-1 text-center pl-8 text-mobile-link font-medium text-neutral-textMain hover:text-brand-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <button
                    className="p-1 hover:bg-neutral-light rounded-full transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsAboutDropdownOpen(!isAboutDropdownOpen);
                    }}
                  >
                    <svg
                      className={`transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </button>
                </div>

                {/* About Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 bg-neutral-light/20 rounded-lg ${
                    isAboutDropdownOpen ? 'max-h-96 opacity-100 my-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {aboutItems.map((item, index) => (
                    <HashLink
                      key={index}
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-6 text-neutral-textMain hover:text-brand-primary text-center"
                    >
                      {item.title}
                    </HashLink>
                  ))}
                </div>
              </li>

              {/* 3. Our Services - TEXT navigates, ICON toggles */}
              <li className="border-b border-neutral-border">
                <div className="flex items-center justify-between w-full py-5 relative">
                  <Link
                    to="/services"
                    className="flex-1 text-center pl-8 text-mobile-link font-medium text-neutral-textMain hover:text-brand-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Our Services
                  </Link>
                  <button
                    className="p-1 hover:bg-neutral-light rounded-full transition-colors"
                    onClick={(e) => { e.preventDefault(); setIsServicesDropdownOpen(!isServicesDropdownOpen); }}
                  >
                    <svg className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} width="16" height="16" viewBox="0 0 12 12">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </button>
                </div>

                {/* Services Dropdown Content */}
                <div className={`overflow-hidden transition-all duration-300 bg-neutral-light/20 rounded-lg ${isServicesDropdownOpen ? 'max-h-[500px] opacity-100 my-2' : 'max-h-0 opacity-0'}`}>
                  {services.map((service, index) => (
                    <Link key={index} to={service.link} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 px-6 text-neutral-textMain hover:text-brand-primary text-center">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </li>

              {/* 4. Other Links */}
              <li className="border-b border-neutral-border">
                <HashLink to="/#clients" onClick={() => setIsMobileMenuOpen(false)} className="block py-5 text-mobile-link font-medium text-neutral-textMain text-center hover:text-brand-primary">
                  Valuable Clients
                </HashLink>
              </li>
              <li className="border-b border-neutral-border">
                <HashLink to="/instruments" onClick={() => setIsMobileMenuOpen(false)} className="block py-5 text-mobile-link font-medium text-neutral-textMain text-center hover:text-brand-primary">
                  Instruments Used
                </HashLink>
              </li>
              <li className="border-b border-neutral-border">
                <Link to="/snapshots" onClick={() => setIsMobileMenuOpen(false)} className="block py-5 text-mobile-link font-medium text-neutral-textMain text-center hover:text-brand-primary">
                  Snap Shots
                </Link>
              </li>

              {/* 5. Contact Us Button */}
              <li className="mt-8">
                <button
                  className="w-full bg-gradient-to-br from-brand-primary to-brand-secondary text-neutral-white py-4 rounded-button font-semibold text-lg shadow-button hover:opacity-90 transition-all active:scale-95"
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