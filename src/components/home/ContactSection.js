import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';
import useScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "react-i18next";
import "../../styles/contactsection.css";

const ContactSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const ref = useRef(null);
  const formRef = useRef();
  const { t } = useTranslation();

  useScrollAnimation(ref);
  useScrollAnimation(leftRef, { customClass: 'left' });
  useScrollAnimation(rightRef, { customClass: 'right' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactDetails = [
    { icon: Mail, label: t('contact.details.email'), value: 'contact@patrikvision.sk' },
    { icon: Phone, label: t('contact.details.phone'), value: '+421 918 755 276' },
    { icon: MapPin, label: t('contact.details.location'), value: t('contact.details.locationValue') },
  ];

  return (
    <section className="contact-section" style={{ 
        margin: '40px 60px', 
        padding: '40px',
        backgroundColor: '#dddddd',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease'
    }}>
      <div>
        <div className="contact-heading" ref={ref}>
          <h2>{t('contact.contactMe')}</h2>
          <p>{t('contact.contactDesc')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-box" ref={leftRef}>
            <h3>{t('contact.sendMessage')}</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="section-name">{t('contact.name')}</label>
              <input
                id="section-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="section-email">{t('contact.email')}</label>
              <input
                id="section-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="section-message">{t('contact.message')}</label>
              <textarea
                id="section-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </button>

              {status === 'success' && <p className="success">{t('contact.success')}</p>}
              {status === 'error'   && <p className="error">{t('contact.error')}</p>}
            </form>
          </div>

          <div className="contact-box" ref={rightRef}>
            <h3>{t('contact.contactDetails')}</h3>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="contact-info-item">
                  <Icon />
                  <div>
                    <p>{detail.label}</p>
                    <p>{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
    </section>
  );
};

export default ContactSection;