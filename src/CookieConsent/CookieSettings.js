// src/components/CookieConsent/CookieSettings.jsx
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import CookieModal from './CookieModal';
import './cookieconsent.css';

const INITIAL_OPEN_DELAY = 3000; // čas v ms, po ktorom sa modal otvorí pri prvej návšteve

const CookieSettings = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');

    if (consent === 'true') {
      // Ak už používateľ súhlasil, načítaj analytiku ihneď
      loadAnalyticsScripts();
    } else if (!consent) {
      // Ak ešte nemá nastavené cookies, otvor modal po oneskorení
      const timer = setTimeout(() => {
        setModalOpen(true);
      }, INITIAL_OPEN_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  const loadAnalyticsScripts = () => {
    const GA_ID = 'G-ABC123DEF4';

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  };

  return (
    <>
      {/* Fixný button v ľavom dolnom rohu */}
      <button
        className="cookie-settings-button"
        onClick={() => setModalOpen(true)}
        aria-label="Nastavenia cookies"
      >
        🍪
      </button>

      {/* Modal sa zobrazí buď automaticky po oneskorení, alebo po kliknutí */}
      {modalOpen && (
        <CookieModal onClose={() => setModalOpen(false)} />
      )}
    </>
  );
};

export default CookieSettings;
