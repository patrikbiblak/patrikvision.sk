import "../../styles/aboutsection.css";
import { useRef } from 'react';
import ScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "../../contexts/TranslationContext";

const AboutSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { t } = useTranslation();

  ScrollAnimation(leftRef, { customClass: 'left' });
  ScrollAnimation(rightRef, { customClass: 'right' });

  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-item" ref={leftRef}>
          <h2>{t('about.aboutMe')}</h2>
          <p>{t('about.desc1')}</p>
          <p>{t('about.desc2')}</p>
          <p>{t('about.desc3')}</p>
        </div>
        <div className="about-item" ref={rightRef}>
          <img src="images/profile1.png" alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;