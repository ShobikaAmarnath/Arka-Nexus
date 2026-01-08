import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import arka_logo from "@/assets/images/logos/arka_Nexus.png";
import "./Footer.css";
import { getFooterData } from "../../../core/services/sanity/footer.service";

type ContactDetails = {
  emails?: string[];
  phoneNumbers?: string[];
  address?: string;
};

export default function Footer() {
  const [contact, setContact] = useState<ContactDetails | null>(null);

  useEffect(() => {
    getFooterData()
      .then(setContact)
      .catch(console.error);
  }, []);

  if (!contact) return null;

  return (
    <footer className="footer">
      <div className="container-footer footer-content">
        {/* Brand */}
        <div className="footer-section brand-section">
          <Link to="/" className="navbar-logo">
            <motion.img
              className="navbar-logo-footer"
              src={arka_logo}
              alt="Arka Nexus Logo"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          <p className="brand-tagline">
            Engineering Intelligence Empowering Industry
          </p>

          <div className="social-links">
            <motion.a href="https://www.linkedin.com/company/arka-nexus/" whileHover={{ scale: 1.2 }} className="social-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3 className="sectionf-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section services-section">
          <h3 className="sectionf-title-ser">Services</h3>
          <ul className="service-links">
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <Link to="/energy-audit" className="service-link">Energy Audit</Link>
            </li>
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <Link to="/power-quality" className="service-link">Power Quality Audit</Link>
            </li>
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                <path d="M8 12l2 2 4-4" />
              </svg>
              <Link to="/harmonic-study" className="service-link">Harmonic Audit</Link>
            </li>
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <Link to="/solar-panel-study" className="service-link">Solar Plant Audit</Link>
            </li>
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
              <Link to="/thermal-study" className="service-link">Thermal Study</Link>
            </li>
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <Link to="/vibration-audit" className="service-link">Vibration Audit</Link>
            </li>
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3c0 .552.448 1 1 1h18zM21 16c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18z" />
              </svg>
              <Link to="/industrial-safety-audit" className="service-link">Industrial Safety Audit</Link>
            </li>
            <li className="service-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="service-icon">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <Link to="/industrial-training" className="service-link">Industrial Training Program</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h3 className="sectionf-title">Contact Info</h3>
          <ul className="contact-info">
            {contact.emails?.map((email, i) => (
              <li key={i} className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="contact-text">{email}</span>
              </li>
            ))}

            {contact.phoneNumbers?.map((num, i) => (
              <li key={i} className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="contact-text">{num}</span>
              </li>
            ))}

            {contact.address && (
              <li className="contact-item address-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="contact-text">{contact.address}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-footer">
          <p className="copyright">
            © 2025 Arka Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
