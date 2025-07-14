import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from 'lucide-react';
import PropTypes from "prop-types";
import "../styles/contactmodal.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const contactDetails = [
      { icon: Mail, label: 'Email', value: 'contact@patrikvision.sk' },
      { icon: Phone, label: 'Telefon', value: '+421 918 755 276' },
      { icon: MapPin, label: 'Poloha', value: 'Slovensko' },
    ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? "fade-out" : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Close contact modal"
      onClick={handleClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Escape") handleClose();
      }}
    >
      <div
        className={`modal-container ${isClosing ? "blow-down" : "blow-up"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h3 id="modal-title">Kontaktuj ma</h3>
        <p className="modal-subtitle">Ste pripravení začať nový projekt? Poďme sa porozprávať!</p>

        <div className="modal-grid">
          <form onSubmit={handleSubmit} className="modal-contact-form">
            <h4>Pošli správu</h4>
            <label htmlFor="nameModal">Meno</label>
            <input onChange={handleChange} id="nameModal" name="name" type="text" required />

            <label htmlFor="emailModal">Email</label>
            <input onChange={handleChange} id="emailModal" name="email" type="email" required />

            <label htmlFor="messageModal">Správa</label>
            <textarea onChange={handleChange} id="messageModal" name="message" rows="5" required />

            <button type="submit" className="submit-btn">Poslať správu</button>
          </form>

          <div className="contact-details">
              <h4>Kontaktné údaje</h4>
              <ul className="contact-info-list">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <div key={detail.label} className="contact-info-item">
                      <Icon className="icon" />
                      <div>
                        <p>{detail.label}</p>
                        <p>{detail.value}</p>
                      </div>
                    </div>
                  );
                })}
              </ul>

              <div className="why-work">
                <h4>Prečo spolupracovať so mnou?</h4>
                <p>• Rýchla odozva (zvyčajne do 24 hodín)</p>
                <p>• Riešenia na mieru podľa vašich potrieb</p>
                <p>• Pokračujúca podpora a údržba</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;