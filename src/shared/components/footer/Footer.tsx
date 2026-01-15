import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import arka_logo from "@/assets/images/logos/arka_Nexus.png";
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
    <footer className="bg-brand-primary-blue pt-10 px-0 pb-0">
      <div className="max-w-arka mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr_2fr] gap-8 mb-8">
        
        {/* Brand Section */}
        <div className="flex flex-col lg:items-center md:items-start">
          <Link to="/" className="mb-4">
            <motion.img
              className="bg-white rounded-md p-1 h-[60px]"
              src={arka_logo}
              alt="Arka Nexus Logo"
              whileHover={{ scale: 1.02 }}
            />
          </Link>

          <p className="text-neutral-textMuted text-body leading-relaxed lg:text-center md:text-left mb-5 font-semibold">
            Engineering Intelligence Empowering Industry
          </p>

          <div className="flex gap-3">
            <motion.a href="https://www.linkedin.com/company/arka-nexus/" whileHover={{ scale: 1.2 }} className="text-neutral-textMuted text-2xl hover:text-brand-primary transition-colors">
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-neutral-textMuted text-2xl hover:text-brand-primary transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-brand-primary text-h3 font-bold uppercase tracking-wider mb-4 lg:text-center">Links</h3>
          <ul className="space-y-2 list-none p-0">
            {['Home', 'About', 'Services'].map((link) => (
              <li key={link} className="lg:text-center md:text-left">
                <Link to={`/${link.toLowerCase()}`} className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-brand-primary text-h3 font-bold uppercase tracking-wider mb-4">Services</h3>
          <ul className="space-y-3 list-none p-0">
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <Link to="/services/energy-audit" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Energy Audit</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <Link to="/services/power-quality" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Power Quality Audit</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                <path d="M8 12l2 2 4-4" />
              </svg>
              <Link to="/services/harmonic-study" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Harmonic Audit</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
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
              <Link to="/services/solar-panel-study" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Solar Plant Audit</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
              <Link to="/services/thermal-study" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Thermal Study</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <Link to="/services/vibration-audit" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Vibration Audit</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3c0 .552.448 1 1 1h18zM21 16c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18z" />
              </svg>
              <Link to="/services/industrial-safety-audit" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Industrial Safety Audit</Link>
            </li>
            <li className="flex items-center gap-2 group">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              <Link to="/services/industrial-training" className="text-body-sm text-neutral-textMuted hover:text-brand-primary transition-colors">Industrial Training Program</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-brand-primary text-xl font-bold uppercase tracking-wider mb-4">Contact Info</h3>
          <ul className="space-y-4 list-none p-0 text-body-sm">
            {contact.emails?.map((email, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="text-brand-primary mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-neutral-textMuted text-body-sm break-all">{email}</span>
              </li>
            ))}

            {contact.phoneNumbers?.map((num, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg className="text-brand-primary mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-neutral-textMuted text-body-sm break-all">{num}</span>
              </li>
            ))}

            {contact.address && (
              <li className="flex items-start gap-2">
                <svg className="text-brand-primary mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-neutral-textMuted text-body-sm">{contact.address}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-border py-6 mt-10 bg-black/10">
        <p className="text-center text-neutral-textMuted text-body-sm">
          © 2025 Arka Nexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
