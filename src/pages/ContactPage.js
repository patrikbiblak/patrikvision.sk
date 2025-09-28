import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import "../styles/pages/contactpage.css";
import "../styles/contactsection.css";

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
                setStatus('success');
                setFormData({ name: '', email: '', productInterest: '', country: '', message: '' });
            })
            .catch((err) => {
                console.error(err);
                setStatus('error');
            });
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
                <meta name="geo.placename" content="Slovakia" />
                <meta name="geo.position" content="48.6690;19.6990" />
                <meta name="ICBM" content="48.6690, 19.6990" />
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
            <div className="contact-page-content">
                <h1 className="contact-heading">{t('nav.contact')}</h1>

                <div className="contact-content">
                    <ContactInfoBox 
                        ref={leftRef}
                        contactDetails={contactDetails}
                    />
                    <ContactFormBox 
                        ref={rightRef}
                        formRef={formRef}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        productOptions={productOptions}
                        countryOptions={countryOptions}
                        status={status}
                    />
                </div>
            </div>
        </div>
    )
}

const ContactFormBox = ({ ref, formRef, formData, handleChange, handleSubmit, productOptions, countryOptions, status }) => {
    const { t } = useTranslation();

    return (
        <div className="contact-box contact-form-box" ref={ref}>
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

                <button type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>

                {status === 'success' && <p className="success">{t('contact.success')}</p>}
                {status === 'error'   && <p className="error">{t('contact.error')}</p>}
            </form>
        </div>
    );
};

const ContactInfoBox = ({ ref, contactDetails }) => {
    const { t } = useTranslation();

    return (
        <div className="contact-box contact-info-box" ref={ref}>
            <h3>{t('contact.contactMe')}</h3>
            {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                    <div key={detail.label} className="contact-info-item">
                        <Icon />
                        <div>
                            <p>{detail.label}</p>
                            {detail.isLink ? (
                                <a 
                                    href={detail.value.startsWith('http') ? detail.value : `https://${detail.value}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
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
    );
};

export default ContactPage;