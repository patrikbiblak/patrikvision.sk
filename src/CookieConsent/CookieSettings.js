import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import CookieModal from './CookieModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import './cookieconsent.css'; // Uistite sa, že importujete aj tu aj v CookieModal.js

const INITIAL_OPEN_DELAY = 3000;

const CookieSettings = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const prefs = Cookies.get('cookie_prefs');

    if (prefs) {
      const { statistics } = JSON.parse(prefs);
      if (statistics) loadAnalyticsScripts();
    } else {
      const timer = setTimeout(() => setModalOpen(true), INITIAL_OPEN_DELAY);
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
      <button
        className="cookie-settings-button"
        onClick={() => setModalOpen(true)}
        aria-label="Nastavenia cookies"
        aria-haspopup="dialog"
      >
        <FontAwesomeIcon icon={faCookieBite} />
      </button>

      {modalOpen && (
        <CookieModal onClose={() => setModalOpen(false)} loadAnalytics={loadAnalyticsScripts} />
      )}
    </>
  );
};

export default CookieSettings;