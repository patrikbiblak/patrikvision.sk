import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import CookieModal from './CookieModal';
import CookieBanner from './CookieBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import './cookieconsent.css';

const CookieSettings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const prefs = Cookies.get('cookie_prefs');
    if (!prefs) {
      const timer = setTimeout(() => setBannerOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const loadAnalyticsScripts = () => {
    const GA_ID = 'G-ABC123DEF4';
    const s1 = document.createElement('script');
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    s1.async = true;
    document.head.appendChild(s1);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  };

  const loadMarketingScripts = () => {
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

  const handleAcceptAll = () => {
    const allPrefs = { necessary: true, statistics: true, marketing: true };
    Cookies.set('cookie_prefs', JSON.stringify(allPrefs), { expires: 365 });
    loadAnalyticsScripts();
    loadMarketingScripts();
    setBannerOpen(false);
  };

  const handleMoreInfo = () => {
    setBannerOpen(false);
    setModalOpen(true);
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

      {bannerOpen && (
        <CookieBanner
          onAcceptAll={handleAcceptAll}
          onMoreInfo={handleMoreInfo}
        />
      )}

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