import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import CookieModal from './CookieModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import './cookieconsent.css';

const INITIAL_OPEN_DELAY = 3000;

const CookieSettings = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const prefs = Cookies.get('cookie_prefs');
    if (prefs) {
      const { statistics, marketing } = JSON.parse(prefs);
      if (statistics) loadAnalyticsScripts();
      if (marketing)  loadMarketingScripts();
    } else {
      const timer = setTimeout(() => setModalOpen(true), INITIAL_OPEN_DELAY);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadAnalyticsScripts = () => {
    const GA_ID = 'G-ABC123DEF4';
    const s1 = document.createElement('script');
    s1.src   = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s1.async = true;
    document.head.appendChild(s1);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  };

  const loadMarketingScripts = () => {
    /*  
      Tu vložte kód pre Meta Pixel (alebo iné marketingové skripty), 
      napr.:
        !function(f,b,e,v,n,t,s){
          // štandardný Pixel kód 
        }(...);
    */
    const s = document.createElement('script');
    s.innerHTML = `
      !function(f,b,e,v,n,t,s){
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];
        t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'VAŠ_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(s);
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
        <CookieModal
          onClose={() => setModalOpen(false)}
          loadAnalytics={loadAnalyticsScripts}
          loadMarketing={loadMarketingScripts}
        />
      )}
    </>
  );
};

export default CookieSettings;
