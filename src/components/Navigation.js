import { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ScrollAnimation from "../hooks/ScrollAnimation";
import "../styles/navigation.css";

const Navigation = () => {
  const ref = useRef(null);
  ScrollAnimation(ref, { customClass: 'top', immediate: true });

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Domov" },
    { path: "/about", label: "O mne" },
    { path: "/projects", label: "Projekty" },
    { path: "/contact", label: "Kontakt" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navigation" ref={ref}>
      <div className="navigation-container">
          <img
            src="/logos/pv-logo.png"
            alt="patrikvision.sk"
            className="navigation-logo"
          />

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

          {/* <div className="language-buttons">
            <button className="lang-en" aria-label="Switch to English">EN</button>
              <span>|</span>
            <button className="lang-sk" aria-label="Switch to Slovak">SK</button>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;