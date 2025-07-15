import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './cookieconsent.css'; // Uistite sa, že CSS je globálne načítané

const CATEGORIES = [
  { key: 'necessary', label: 'Nevyhnutné', description: 'Základné cookies nevyhnutné pre fungovanie webu.', mandatory: true },
  { key: 'statistics', label: 'Štatistické', description: 'Meranie návštevnosti a zlepšovanie UX.' },
  { key: 'marketing', label: 'Marketingové', description: 'Cielenie reklám a sledovanie kampaní.' },
];

const ANIMATION_DURATION = 200; // ms

const CookieModal = ({ onClose, loadAnalytics }) => {
  const [prefs, setPrefs] = useState({ necessary: true, statistics: false, marketing: false });
  const [isClosing, setIsClosing] = useState(false);

  // Načítanie existujúcich preferencií
  useEffect(() => {
    const saved = Cookies.get('cookie_prefs');
    if (saved) {
      try {
        setPrefs(JSON.parse(saved));
      } catch {
        /* ignoruj */
      }
    }
  }, []);

  const startClose = () => {
    setIsClosing(true);
    setTimeout(onClose, ANIMATION_DURATION);
  };

  const handleToggle = (key) => {
    if (key === 'necessary') return;
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    Cookies.set('cookie_prefs', JSON.stringify(prefs), { expires: 365 });
    if (prefs.statistics) loadAnalytics();
    startClose();
  };

  const handleRejectAll = () => {
    const minimal = { necessary: true, statistics: false, marketing: false };
    Cookies.set('cookie_prefs', JSON.stringify(minimal), { expires: 365 });
    startClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
      aria-describedby="cookie-modal-desc"
      className={`cookie-modal-overlay ${isClosing ? 'closing' : ''}`}
    >
      <div className={`cookie-modal ${isClosing ? 'closing' : ''}`}>        
        <button
          className="cookie-modal__close"
          onClick={startClose}
          aria-label="Zavrieť nastavenia cookies"
        >✕</button>

        <h2 id="cookie-modal-title">🍪 Cookie. Cookie.</h2>
        <p id="cookie-modal-desc">
          Pomáhame webu fungovať rýchlejšie a poskytovať relevantný obsah. Vyberte, ktoré cookies povolíte.
        </p>

        {/* Vymazali sme staré <input> mimo formulára */}
        <form className="cookie-modal__categories">
          {CATEGORIES.map(cat => (
            <div key={cat.key} className="category">
              <div className="category__info">
                <strong>{cat.label}</strong>
                <small>{cat.description}</small>
              </div>

              <label
                className="switch"
                htmlFor={`toggle-${cat.key}`}
                aria-label={`Prepínač kategórie ${cat.label}`}
              >
                <input
                  id={`toggle-${cat.key}`}
                  type="checkbox"
                  role="switch"
                  checked={prefs[cat.key]}
                  disabled={cat.mandatory}
                  onChange={() => handleToggle(cat.key)}
                  aria-checked={prefs[cat.key]}
                  aria-label={cat.label}
                />
                <span className="slider" aria-hidden="true" />
              </label>
            </div>
          ))}
        </form>

        <div className="cookie-modal__actions">
          <button className="btn btn--secondary" onClick={handleRejectAll}>
            Odmietnuť všetko
          </button>
          <button className="btn btn--primary" onClick={handleSave}>
            Uložiť nastavenia
          </button>
        </div>

        <div className="cookie-modal__footer">
          <a
            href="/gdpr"
            target="_blank"
            rel="noopener"
            className="cookie-modal__link"
          >
            Zásady ochrany osobných údajov
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;