import { useRef } from 'react';
import useScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "react-i18next";
import "../../styles/whymesection.css";

const WhyMeSection = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  useScrollAnimation(ref);

  const reasons = [
    t('whyChooseMe.reason1.title'),
    t('whyChooseMe.reason2.title'),
    t('whyChooseMe.reason3.title'),
    t('whyChooseMe.reason4.title')
  ];

  const stats = [
    {
      number: "50+",
      label: t('whyChooseMe.stats.projects')
    },
    {
      number: "100%",
      label: t('whyChooseMe.stats.satisfaction')
    },
    {
      number: "3+",
      label: t('whyChooseMe.stats.experience')
    }
  ];

  return (
    <section className="why-choose-me-section">
      <div className="container">
        <div className="why-choose-me-content" ref={ref}>
          <div className="content-wrapper">
            <div className="left-column">
              <h2>{t('whyChooseMe.title')}</h2>
              <p className="section-description">{t('whyChooseMe.subtitle')}</p>
              
              <div className="reasons-list">
                {reasons.map((reason, index) => (
                  <div key={index} className="reason-item">
                    <span className="checkmark">✓</span>
                    <span className="reason-text">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="right-column">
              <div className="stats-cards">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;