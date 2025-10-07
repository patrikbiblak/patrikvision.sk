import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from "react-i18next";
import Particles from '../../../components/common/Particles/Particles';
import GoogleMap from '../../../components/common/GoogleMap/GoogleMap';
import Modal from '../../../components/common/Modal/Modal';
import ScrollAnimation from '../../../components/common/ScrollAnimation/ScrollAnimation';
import "./ContactSection.css";

const ContactSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const ref = useRef(null);
  const formRef = useRef();
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productInterest: '',
    country: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [modal, setModal] = useState({ isOpen: false, type: '', title: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', productInterest: '', country: '', message: '' });
        setModal({
          isOpen: true,
          type: 'success',
          title: t('contact.modal.success.title'),
          message: t('contact.modal.success.message')
        });
      })
      .catch((err) => {
        console.error(err);
        setStatus('idle');
        setModal({
          isOpen: true,
          type: 'error',
          title: t('contact.modal.error.title'),
          message: t('contact.modal.error.message')
        });
      });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: '', title: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const productOptions = [
    { value: '', label: t('contact.selectProduct') },
    { value: 'webpages', label: t('services.webpages.name') },
    { value: 'ai', label: t('services.ai.name') },
    { value: 'seo', label: t('services.seo.name') },
    { value: 'analytics', label: t('services.analytics.name') },
    { value: 'support', label: t('services.support.name') },
    { value: 'marketing', label: t('services.marketing.name') },
    { value: 'consultation', label: t('contact.consultation') },
    { value: 'other', label: t('contact.other') },
  ];

  const countryOptions = [
    { value: '', label: t('contact.selectCountry') },
    { value: 'slovakia', label: 'Slovakia' },
    { value: 'czech-republic', label: 'Czech Republic' },
    { value: 'hungary', label: 'Hungary' },
    { value: 'austria', label: 'Austria' },
    { value: 'poland', label: 'Poland' },
    { value: 'germany', label: 'Germany' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'other', label: t('contact.other') },
  ];

  const contactDetails = [
    { icon: Mail, label: t('contact.details.email'), value: 'contact@patrikvision.sk' },
    { icon: Phone, label: t('contact.details.phone'), value: '+421 918 755 276' },
    { icon: MapPin, label: t('contact.details.location'), value: t('contact.details.locationValue') },
    { icon: Clock, label: t('contact.details.responseTime'), value: t('contact.details.responseTimeValue') },
  ];

  return (
    <section className="homepage-contact-section">
      <Particles />
      <ScrollAnimation animation="fade" duration={0.6}>
        <div className="homepage-contact-heading" ref={ref}>
          <h2>{t('contact.contactMe')}</h2>
          <p>{t('contact.contactDesc')}</p>
        </div>
      </ScrollAnimation>

      <div className="homepage-contact-content">
        <ScrollAnimation animation="slide-right" duration={0.7}>
          <div className="homepage-contact-box" ref={leftRef}>
          <h3>{t('contact.sendMessage')}</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
              {/* Personal Information */}
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

              {/* Project Information */}
              <label htmlFor="section-product">{t('contact.productInterest')}</label>
              <select
                id="section-product"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                required
              >
                {productOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <label htmlFor="section-country">{t('contact.country')}</label>
              <select
                id="section-country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Message */}
              <label htmlFor="section-message">{t('contact.message')}</label>
              <textarea
                id="section-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Hidden fields for human-readable labels */}
              <input
                type="hidden"
                name="productInterestLabel"
                value={(productOptions.find((o) => o.value === formData.productInterest)?.label) || ''}
              />
              <input
                type="hidden"
                name="countryLabel"
                value={(countryOptions.find((o) => o.value === formData.country)?.label) || ''}
              />

              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-left" duration={0.7}>
            <div className="homepage-contact-box" ref={rightRef}>
            <h3>{t('contact.contactDetails')}</h3>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="homepage-contact-info-item">
                  <Icon />
                  <div>
                    <p>{detail.label}</p>
                    {detail.isLink ? (
                      <a 
                        href={detail.value.startsWith('http') ? detail.value : `https://${detail.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="homepage-contact-link"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p>{detail.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="homepage-contact-map">
              <GoogleMap 
                center={{ lat: 48.1485965, lng: 17.1077478 }}
                zoom={10}
                className="contact-map"
              />
            </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <Modal
          isOpen={modal.isOpen}
          onClose={closeModal}
          type={modal.type}
          title={modal.title}
          message={modal.message}
        />
    </section>
  );
};

export default ContactSection;


