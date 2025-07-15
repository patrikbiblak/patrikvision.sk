import{ useState } from 'react';
import Cookies from 'js-cookie';

const ANIMATION_DURATION = 200; // ms, musí sedieť s CSS blowOut

const CookieModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const startClose = (after) => {
    setIsClosing(true);
    setTimeout(() => {
      if (after) after();
      onClose();
    }, ANIMATION_DURATION);
  };

  const acceptCookies = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    startClose(() => window.location.reload());
  };

  const rejectCookies = () => {
    Cookies.set('cookie_consent', 'false', { expires: 365 });
    startClose(() => window.location.reload());
  };

  const handleX = () => {
    startClose();
  };

  return (
    <div className={`cookie-modal-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`cookie-modal ${isClosing ? 'closing' : ''}`}>
        <h2>🍪 Cookie. Cookie.</h2>
        <p>
          Tento web používa cookies na zlepšenie funkčnosti a analytiku. 
          Môžete si vybrať, či s ich používaním súhlasíte.
        </p>
        <div className="cookie-modal__actions">
          <button className="btn btn--secondary" onClick={rejectCookies}>
            Odmietnuť
          </button>
          <button className="btn btn--primary" onClick={acceptCookies}>
            Súhlasím
          </button>
        </div>
        <button className="cookie-modal__close" onClick={handleX}>✕</button>
      </div>
    </div>
  );
};

export default CookieModal;
