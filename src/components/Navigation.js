import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "../contexts/TranslationContext";
import "../styles/navigation.css";

const Navigation = () => {

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage, t } = useTranslation();

  const navItems = [
    { path: "/", label: t('nav.home') },
    { path: "/about", label: t('nav.about') },
    { path: "/portfolio", label: t('nav.portfolio') },
    { path: "/services", label: t('nav.services') },
    { path: "/contact", label: t('nav.contact') },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleLanguageChange = (newLanguage) => {
    console.log('Navigation: Attempting to change language to', newLanguage);
    console.log('Navigation: Current language is', language);
    changeLanguage(newLanguage);
    closeMenu(); // Close mobile menu when language changes
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navigation-container">
          <div className="navigation-logo">
            Patrik<span style={{color: 'var(--brand-color)'}}>Vision</span>
          </div>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu-wrapper ${isOpen ? "open" : ""}`}>
          <ul className="navigation-links">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  key={path}
                  to={path}
                  className={`navigation-link ${
                    location.pathname === path ? "active" : ""
                  }`}
                  onClick={() => {
                  closeMenu();
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 50);
                  }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="language-buttons" key={language}>
            <button 
              className={`lang-en ${language === 'en' ? 'active' : ''}`} 
              aria-label="Switch to English"
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </button>
            <span>|</span>
            <button 
              className={`lang-sk ${language === 'sk' ? 'active' : ''}`} 
              aria-label="Switch to Slovak"
              onClick={() => handleLanguageChange('sk')}
            >
              SK
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;