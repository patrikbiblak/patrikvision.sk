import Cookies from 'js-cookie';

const CookieModal = ({ onClose }) => {
  const acceptCookies = () => {
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    onClose();
    window.location.reload();
  };

  const rejectCookies = () => {
    Cookies.set('cookie_consent', 'false', { expires: 365 });
    onClose();
    window.location.reload();
  };

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal">
        <h2>Nastavenia cookies</h2>
        <p>
          Tento web používa cookies na zlepšenie funkčnosti a analytiku. 
          Môžete si vybrať, či s ich používaním súhlasíte.
        </p>
        <div className="cookie-modal__actions">
          <button className="btn btn--secondary" onClick={rejectCookies}>Odmietnuť</button>
          <button className="btn btn--primary" onClick={acceptCookies}>Súhlasím</button>
        </div>
        <button className="cookie-modal__close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default CookieModal;
