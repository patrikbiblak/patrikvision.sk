import "../../styles/aboutsection.css";
import { useRef } from 'react';
import useScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { t } = useTranslation();

  useScrollAnimation(leftRef, { customClass: 'left' });
  useScrollAnimation(rightRef, { customClass: 'right' });

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-layout">
          <div className="about-left">
            <h2 className="about-heading">{t('about.aboutMe')}</h2>
          </div>
          <div className="about-right">
            <div className="about-content">
              <p ref={leftRef}>{t('about.desc1')}</p>
              <p ref={rightRef}>{t('about.desc2')}</p>
              <p>{t('about.desc3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;