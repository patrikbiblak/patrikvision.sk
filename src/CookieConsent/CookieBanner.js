import './cookieconsent.css';

const CookieBanner = ({ onAcceptAll, onMoreInfo }) => (
  <div className="cookie-banner">
    <span>Táto webová stránka používa cookies na analýzu návštevnosti, optimalizáciu funkcií a personalizáciu vašich preferencií.</span>
    <div className="cookie-banner__actions">
      <button className="btn btn--secondary" onClick={onMoreInfo}>
        Viac info
      </button>
      <button className="btn btn--primary" onClick={onAcceptAll}>
        Prijať všetko
      </button>
    </div>
  </div>
);

export default CookieBanner;