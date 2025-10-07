import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import GoogleMap from '../../components/common/GoogleMap/GoogleMap';
import Modal from '../../components/common/Modal/Modal';
import ScrollAnimation from '../../components/common/ScrollAnimation/ScrollAnimation';
import "./ContactPage.css";

const ContactPage = () => {
    const { t } = useTranslation();
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const formRef = useRef();
    
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
    ];

    const socialLinks = [
        { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/bpaatrik/' },
        { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/patrikbiblak/' },
    ];

    // Bratislava, Slovakia coordinates
    const mapCenter = { lat: 48.1485965, lng: 17.1077478 };

    return (
        <div className="contact-page">
            <Helmet>
                <title>{t('seo.contact.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.contact.description')} />
                <meta name="keywords" content={t('seo.contact.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="en,sk,hu" />
                <meta name="revisit-after" content="7 days" />
                <meta name="geo.region" content="SK" />
                <meta name="geo.placename" content="Bratislava, Slovakia" />
                <meta name="geo.position" content="48.1485965;17.1077478" />
                <meta name="ICBM" content="48.1485965, 17.1077478" />
                <link rel="canonical" href="https://patrikvision.sk/contact" />
                <meta property="og:title" content={t('seo.contact.title')} />
                <meta property="og:description" content={t('seo.contact.description')} />
                <meta property="og:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk/contact" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.contact.title')} />
                <meta name="twitter:description" content={t('seo.contact.description')} />
                <meta name="twitter:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta name="twitter:site" content="@patrikvision" />
                <meta name="twitter:creator" content="@patrikvision" />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk/contact" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/contact" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/contact" />
            </Helmet>
            <div className="contact-page-content">
                <ScrollAnimation animation="fade" duration={0.6}>
                    <h1 className="contact-heading">{t('nav.contact')}</h1>
                </ScrollAnimation>
                <ScrollAnimation animation="slide-up" delay={100} duration={0.6}>
                    <p className="intro-text">{t('contact.intro')}</p>
                </ScrollAnimation>

                <div className="contact-page-content-grid">
                    <ScrollAnimation animation="slide-right" duration={0.7}>
                        <div className="contact-info-wrapper">
                            <div className="contact-page-info-box" ref={leftRef}>
                            <h3>{t('contact.contactDetails')}</h3>
                            {contactDetails.map((detail) => {
                                const Icon = detail.icon;
                                return (
                                    <div key={detail.label} className="contact-page-info-item">
                                        <Icon />
                                        <div>
                                            <p>{detail.label}</p>
                                            {detail.isLink ? (
                                                <a 
                                                    href={detail.value.startsWith('http') ? detail.value : `https://${detail.value}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="contact-page-link"
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
                        </div>
                        
                        <div className="contact-page-social-box">
                            <h3 className="social-links-heading">{t('contact.socialLinks')}</h3>
                            <div className="social-links-container">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-page-social-item"
                                            aria-label={social.label}
                                        >
                                            <Icon />
                                            <div>
                                                <span>{social.label}</span>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="slide-left" duration={0.7}>
                        <div className="contact-page-form-box" ref={rightRef}>
                            <h3>{t('contact.sendMessage')}</h3>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            {/* Personal Information */}
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

                            {/* Project Information */}
                            <label htmlFor="page-product">{t('contact.productInterest')}</label>
                            <select
                                id="page-product"
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

                            <label htmlFor="page-country">{t('contact.country')}</label>
                            <select
                                id="page-country"
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
                            <label htmlFor="page-message">{t('contact.message')}</label>
                            <textarea
                                id="page-message"
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
                </div>

                <ScrollAnimation animation="zoom" duration={0.6}>
                    <div className="contact-page-map-container">
                        <GoogleMap 
                        center={mapCenter}
                        zoom={10}
                        className="contact-map"
                        />
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
        </div>
    )
}

export default ContactPage;
