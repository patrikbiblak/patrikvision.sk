import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import "./Footer.css";

const Footer = () => {
    const { t } = useTranslation();

  return (
    <footer className="footer" role="contentinfo">
        <div className="footer-container">
            <div className="footer-main">
                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        Patrik<span className="brand-accent">Vision</span>
                    </div>
                    <p className="footer-description">
                        {t('footer.description')}
                    </p>
                    <div className="footer-social" role="list" aria-label="Social media links">
                        <a
                            href="https://www.instagram.com/bpaatrik/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Follow us on Instagram"
                            role="listitem"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://github.com/patrikbiblak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="View our GitHub profile"
                            role="listitem"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:info@patrikvision.sk"
                            className="social-link"
                            aria-label="Send us an email"
                            role="listitem"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/patrikbiblak/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Connect with us on LinkedIn"
                            role="listitem"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="footer-section">
                    <h4 className="footer-title">{t('footer.quickLinks')}</h4>
                    <nav className="footer-nav" aria-label="Footer navigation">
                        <ul className="footer-links">
                            <li><a href="/about" className="footer-link">{t('footer.about')}</a></li>
                            <li><a href="/services" className="footer-link">{t('footer.services')}</a></li>
                            <li><a href="/portfolio" className="footer-link">{t('footer.portfolio')}</a></li>
                            <li><a href="/contact" className="footer-link">{t('footer.contact')}</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Services */}
                <div className="footer-section">
                    <h4 className="footer-title">{t('footer.services')}</h4>
                    <ul className="footer-links">
                        <li><span className="footer-link-text">{t('footer.webDevelopment')}</span></li>
                        <li><span className="footer-link-text">{t('footer.uiUxDesign')}</span></li>
                        <li><span className="footer-link-text">{t('footer.seoOptimization')}</span></li>
                        <li><span className="footer-link-text">{t('footer.consulting')}</span></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h4 className="footer-title">{t('footer.contactInfo')}</h4>
                    <address className="contact-info">
                        <div className="contact-item">
                            <MdEmail className="contact-icon" aria-hidden="true" />
                            <a href="mailto:info@patrikvision.sk" className="contact-link">
                                info@patrikvision.sk
                            </a>
                        </div>
                        <div className="contact-item">
                            <MdPhone className="contact-icon" aria-hidden="true" />
                            <a href="tel:+421918755276" className="contact-link">
                                +421 918 755 276
                            </a>
                        </div>
                        <div className="contact-item">
                            <MdLocationOn className="contact-icon" aria-hidden="true" />
                            <span className="contact-text">Slovakia</span>
                        </div>
                    </address>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="copyright">
                        © {new Date().getFullYear()} PatrikVision. {t('footer.rights')}
                    </p>
                    <div className="footer-bottom-links">
                        <a href="/gdpr" className="footer-bottom-link">{t('footer.privacyPolicy')}</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;