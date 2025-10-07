import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import "./Footer.css";

const Footer = () => {
    const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
                    <div className="footer-logo">
                        Patrik<span className="brand-accent">Vision</span>
                    </div>
                    <p className="footer-description">
                        {t('footer.description')}
                    </p>
                    <div className="footer-social">
                        <a
                            href="https://www.instagram.com/bpaatrik/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://github.com/patrikbiblak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:contact@patrikvision.sk"
                            className="social-link"
                            aria-label="Email"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/patrikbiblak/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h4 className="footer-title">{t('footer.quickLinks')}</h4>
                    <ul className="footer-links">
                        <li><a href="/about" className="footer-link">{t('footer.about')}</a></li>
                        <li><a href="/services" className="footer-link">{t('footer.services')}</a></li>
                        <li><a href="/portfolio" className="footer-link">{t('footer.portfolio')}</a></li>
                        <li><a href="/contact" className="footer-link">{t('footer.contact')}</a></li>
                    </ul>
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
                    <div className="contact-info">
                        <div className="contact-item">
                            <MdEmail className="contact-icon" />
                            <span>contact@patrikvision.sk</span>
                        </div>
                        <div className="contact-item">
                            <MdPhone className="contact-icon" />
                            <span>+421 918 755 276</span>
                        </div>
                        <div className="contact-item">
                            <MdLocationOn className="contact-icon" />
                            <span>Slovakia</span>
                        </div>
                    </div>
                </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="copyright">
                        © {new Date().getFullYear()} PatrikVision. {t('footer.rights')}
                    </p>
                    <a href="/gdpr" className="footer-bottom-link">{t('footer.privacyPolicy')}</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;