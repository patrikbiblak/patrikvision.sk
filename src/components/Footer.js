import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useRef } from 'react';
import ScrollAnimation from '../hooks/ScrollAnimation';
import "../styles/footer.css";

const Footer = () => {
    const ref = useRef(null);
    ScrollAnimation(ref);

  return (
    <footer>
    <div ref={ref} className="footer-columns">
    <div className="footer-1">
        <img
                src="logos/pv-logo.png"
                alt="patrikvision.sk"
                className="navigation-logo"
        />
      <p>
        Front-end developer, zapálený pre tvorbu úžasných webových
        zážitkov.
      </p>
    </div>

    <div>
        <h4>Sociálne siete</h4>
        <ul>
            <li>
            <a
                href="https://www.instagram.com/patrikvision.sk"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram /> Instagram
            </a>
            </li>
            <li>
            <a
                href="https://www.linkedin.com/in/patrikbiblak"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin /> LinkedIn
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
            <h4>Informácie</h4>
            <ul>
                <li><a href="/about">O mne</a></li>
                <li><a href="/projects">Projekty</a></li>
                <li><a href="/contact">Kontakt</a></li>
            </ul>
        </div>
    </div>

        <p>© {new Date().getFullYear()} PatrikVision. Všetky práva vyhradené.</p>
    </footer>

  );
};

export default Footer;