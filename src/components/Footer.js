import { FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useRef } from 'react';
import useScrollAnimation from '../hooks/ScrollAnimation';
import { useTranslation } from 'react-i18next';
import "../styles/footer.css";

const Footer = () => {
    const ref = useRef(null);
    const { t } = useTranslation();
    useScrollAnimation(ref);

  return (
    <footer>
        <div ref={ref} className="footer-columns">
            <div className="footer-1">
                <div className="navigation-logo">
                    Patrik<span style={{color: 'var(--brand-color)'}}>Vision</span>
                </div>
            <p>
                {t('footer.description')}
            </p>
            </div>

            <div>
                <h4>{t('footer.socialMedia')}</h4>
                <ul>
                    <li>
                    <a
                        href="https://www.instagram.com/bpaatrik/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram /> Instagram
                    </a>
                    </li>
                    <li>
                    <a href="mailto:contact@patrikvision.sk">
                        <MdEmail /> Email
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://github.com/patrikbiblak"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub /> GitHub
                    </a>
                    </li>
                </ul>
            </div>

            <div>
                <h4>{t('footer.information')}</h4>
                <ul>
                    <li><a href="/about">{t('footer.about')}</a></li>
                    <li><a href="/projects">{t('footer.projects')}</a></li>
                    <li><a href="/contact">{t('footer.contact')}</a></li>
                </ul>
            </div>
        </div>

        <div className="global-footer">
            <p>
                <a href='/gdpr'>{t('footer.privacyPolicy')}</a>
            </p>
            <p>© {new Date().getFullYear()} Patrik<span style={{color: 'var(--brand-color)'}}>Vision</span>. {t('footer.rights')}</p>
        </div>
    </footer>

  );
};

export default Footer;