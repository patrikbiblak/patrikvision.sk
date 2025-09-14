import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useTranslation } from '../contexts/TranslationContext';
import './cookieconsent.css';

const CATEGORIES = [
  { key: 'necessary', mandatory: true },
  { key: 'statistics' },
  { key: 'marketing' },
];

const ANIMATION_DURATION = 200;

const CookieModal = ({ onClose, loadAnalytics, loadMarketing }) => {
  const { t } = useTranslation();
  const [prefs, setPrefs] = useState({ necessary: true, statistics: false, marketing: false });
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const saved = Cookies.get('cookie_prefs');
    if (saved) {
      try { setPrefs(JSON.parse(saved)); }
      catch { /* ignor */ }
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
    if (prefs.marketing)  loadMarketing();
    startClose();
  };

  const handleRejectAll = () => {
    const minimal = { necessary: true, statistics: false, marketing: false };
    Cookies.set('cookie_prefs', JSON.stringify(minimal), { expires: 365 });
    startClose();
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="cookie-modal-title" aria-describedby="cookie-modal-desc" className={`cookie-modal-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`cookie-modal ${isClosing ? 'closing' : ''}`}>
        <button className="cookie-modal__close" onClick={startClose} aria-label={t('cookies.modal.closeLabel')}>
          ✕
        </button>

        <h2 id='cookie-modal-title'>{t('cookies.modal.title')}</h2>
        <p id='cookie-modal-desc'>{t('cookies.modal.description')}</p>

        <form className="cookie-modal__categories">
          {CATEGORIES.map(cat => (
            <div key={cat.key} className="category">
              <div className="category__info">
                <strong>{t(`cookies.modal.categories.${cat.key}.label`)}</strong>
                <small>{t(`cookies.modal.categories.${cat.key}.description`)}</small>
              </div>
              
              <label className="switch">
                <input
                  type="checkbox"
                  checked={prefs[cat.key]}
                  disabled={cat.mandatory}
                  onChange={() => handleToggle(cat.key)}
                />
                <span className="slider" />
              </label>
            </div>
          ))}
        </form>

        <div className="cookie-modal__actions">
          <button className="btn btn--secondary" onClick={handleRejectAll}>
            {t('cookies.modal.actions.rejectAll')}
          </button>
          <button className="btn btn--primary" onClick={handleSave}>
            {t('cookies.modal.actions.saveSettings')}
          </button>
        </div>

        <div className="cookie-modal__footer">
          <a href="/gdpr" target="_blank" rel="noopener noreferrer" className="cookie-modal__link">
            {t('cookies.modal.footer.privacyPolicy')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;