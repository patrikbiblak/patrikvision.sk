import { useTranslation } from 'react-i18next';
import './cookieconsent.css';

const CookieBanner = ({ onAcceptAll, onMoreInfo }) => {
  const { t } = useTranslation();
  
  return (
    <div className="cookie-banner">
      <span>{t('cookies.banner.message')}</span>
      <div className="cookie-banner__actions">
        <button className="btn btn--secondary" onClick={onMoreInfo}>
          {t('cookies.banner.moreInfo')}
        </button>
        <button className="btn btn--primary" onClick={onAcceptAll}>
          {t('cookies.banner.acceptAll')}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;