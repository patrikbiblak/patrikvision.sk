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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const closeModal = () => {
        setModal({ isOpen: false, type: '', title: '', message: '' });
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

    return (
        <div className="contact-page page-decoration">
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

            {/* Page Header */}
            <h1 className="page-heading page-heading-animate">{t('nav.contact')}</h1>
            <p className="page-intro page-intro-animate">{t('contact.intro')}</p>

            {/* Contact Content Grid */}
            <div className="contact-grid">
                {/* Left Column - Contact Info */}
                <ScrollAnimation animation="slide-right" duration={0.7}>
                    <div className="contact-left-column">
                        {/* Contact Details */}
                        <div className="contact-box u-card">
                            <h3 className="contact-box-title">{t('contact.contactDetails')}</h3>
                            <div className="contact-items">
                                {contactDetails.map((detail) => {
                                    const Icon = detail.icon;
                                    return (
                                        <div key={detail.label} className="contact-item">
                                            <Icon className="contact-item-icon" />
                                            <div className="contact-item-content">
                                                <span className="contact-item-label">{detail.label}</span>
                                                <span className="contact-item-value">{detail.value}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social Profiles */}
                        <div className="contact-box u-card">
                            <h3 className="contact-box-title">{t('contact.socialLinks')}</h3>
                            <div className="social-items">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-item"
                                            aria-label={social.label}
                                        >
                                            <Icon className="social-item-icon" />
                                            <span className="social-item-label">{social.label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Right Column - Contact Form */}
                <ScrollAnimation animation="slide-left" duration={0.7}>
                    <div className="contact-form-container u-card">
                        <h3 className="contact-box-title">{t('contact.sendMessage')}</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="contact-name" className="form-label">
                                    {t('contact.name')}
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email" className="form-label">
                                    {t('contact.email')}
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-product" className="form-label">
                                    {t('contact.productInterest')}
                                </label>
                                <select
                                    id="contact-product"
                                    name="productInterest"
                                    className="form-select"
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
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-country" className="form-label">
                                    {t('contact.country')}
                                </label>
                                <select
                                    id="contact-country"
                                    name="country"
                                    className="form-select"
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
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message" className="form-label">
                                    {t('contact.message')}
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    className="form-textarea"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

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

                            <button type="submit" className="form-submit" disabled={status === 'sending'}>
                                {status === 'sending' ? t('contact.sending') : t('contact.send')}
                            </button>
                        </form>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Google Map */}
            <div className="contact-map-wrapper">
                <GoogleMap className="contact-map" />
            </div>

            {/* Modal */}
            <Modal
                isOpen={modal.isOpen}
                onClose={closeModal}
                type={modal.type}
                title={modal.title}
                message={modal.message}
            />
        </div>
    );
};

export default ContactPage;
