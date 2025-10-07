import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navigation.css";

// Language Switcher Component
const LanguageSwitcher = ({ isMobile }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'sk', label: 'SK' },
    { code: 'hu', label: 'HU' }
  ];

  const currentLang = i18n.language.split('-')[0];

  return (
    <div className={`custom-select ${isMobile ? 'mobile' : ''}`}>
      <div 
        className="select-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLang.toUpperCase()}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <div className="select-options">
          {languages.map(({ code, label }) => (
            <div 
              key={code}
              className={`option ${currentLang === code ? 'selected' : ''}`}
              onClick={() => {
                i18n.changeLanguage(code);
                setIsOpen(false);
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t('nav.home') },
    { path: "/about", label: t('nav.about') },
    { path: "/portfolio", label: t('nav.portfolio') },
    { path: "/services", label: t('nav.services') },
    { path: "/contact", label: t('nav.contact') },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

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

        <nav className={`nav-menu-wrapper ${isOpen ? "open" : ""}`}>
          <div className="mobile-language-switcher">
            <LanguageSwitcher isMobile={true} />
          </div>
          <ul className="navigation-links">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink
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
        </nav>
        
        <div className="navbar-right">
          <div className="language-switcher">
            <LanguageSwitcher isMobile={false} />
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
        </div>
      </div>
    </header>
  );
};

export default Navigation;