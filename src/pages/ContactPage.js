import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import "../styles/contactpage.css";

const ContactPage = () => {
    const formRef = useRef();
    const { t } = useTranslation();

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
      <div className="contact-page">
        <Helmet>
          <title>{t('seo.contact.title')} | PatrikVision</title>
          <meta name="description" content={t('seo.contact.description')} />
          <meta name="keywords" content={t('seo.contact.keywords')} />
          <meta name="author" content="PatrikVision" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://patrikvision.sk/contact" />
          <meta property="og:title" content={t('seo.contact.title')} />
          <meta property="og:description" content={t('seo.contact.description')} />
          <meta property="og:site_name" content="PatrikVision" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://patrikvision.sk/contact" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={t('seo.contact.title')} />
          <meta name="twitter:description" content={t('seo.contact.description')} />
          <link rel="alternate" hreflang="en" href="https://patrikvision.sk/contact" />
          <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/contact" />
          <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/contact" />
        </Helmet>
        <div className="contactpage-heading">
          <h1 dangerouslySetInnerHTML={{ __html: t('contact.title') }}></h1>
          <p>{t('contact.description')}</p>
        </div> 

        <div className="contactpage-content">
          <div className="contactpage-box">
            <h3>{t('contact.sendMessage')}</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="page-name">{t('contact.name')}</label>
              <input
                id="page-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="page-email">{t('contact.email')}</label>
              <input
                id="page-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="page-message">{t('contact.message')}</label>
              <textarea
                id="page-message"
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

          <div className="contactpage-box">
            <h3>{t('contact.contactDetails')}</h3>
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="contactpage-info-item">
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

            <div className="map-container">
                <iframe
                title="Mapa"
                src="https://maps.google.com/maps?q=Slovensko&output=embed"
                allowFullScreen
                loading="lazy"
                style={{ border: 0, width: '100%', height: '100%' }}
                />
            </div>
        </div>
  );
};

export default ContactPage;