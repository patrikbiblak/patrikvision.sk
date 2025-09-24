import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/navigation.css";

const Navigation = () => {

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: "/", label: t('nav.home') },
    { path: "/about", label: t('nav.about') },
    { path: "/portfolio", label: t('nav.portfolio') },
    { path: "/services", label: t('nav.services') },
    { path: "/contact", label: t('nav.contact') },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
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
            <li className="mobile-language-switcher">
              <div className="custom-select mobile">
                <div 
                  className="select-trigger"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <span>{i18n.language.toUpperCase()}</span>
                  <span className={`arrow ${isLanguageOpen ? 'open' : ''}`}></span>
                </div>
                {isLanguageOpen && (
                  <div className="select-options">
                    <div 
                      className={`option ${i18n.language === 'en' ? 'selected' : ''}`}
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setIsLanguageOpen(false);
                      }}
                    >
                      EN
                    </div>
                    <div 
                      className={`option ${i18n.language === 'sk' ? 'selected' : ''}`}
                      onClick={() => {
                        i18n.changeLanguage('sk');
                        setIsLanguageOpen(false);
                      }}
                    >
                      SK
                    </div>
                    <div 
                      className={`option ${i18n.language === 'hu' ? 'selected' : ''}`}
                      onClick={() => {
                        i18n.changeLanguage('hu');
                        setIsLanguageOpen(false);
                      }}
                    >
                      HU
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
        
        <div className="navbar-right">
          <div className="language-switcher">
            <div className="custom-select">
              <div 
                className="select-trigger"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span>{i18n.language.toUpperCase()}</span>
                <span className={`arrow ${isLanguageOpen ? 'open' : ''}`}></span>
              </div>
              {isLanguageOpen && (
                <div className="select-options">
                  <div 
                    className={`option ${i18n.language === 'en' ? 'selected' : ''}`}
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setIsLanguageOpen(false);
                    }}
                  >
                    EN
                  </div>
                  <div 
                    className={`option ${i18n.language === 'sk' ? 'selected' : ''}`}
                    onClick={() => {
                      i18n.changeLanguage('sk');
                      setIsLanguageOpen(false);
                    }}
                  >
                    SK
                  </div>
                  <div 
                    className={`option ${i18n.language === 'hu' ? 'selected' : ''}`}
                    onClick={() => {
                      i18n.changeLanguage('hu');
                      setIsLanguageOpen(false);
                    }}
                  >
                    HU
                  </div>
                </div>
              )}
            </div>
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