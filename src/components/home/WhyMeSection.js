import { useRef } from 'react';
import { useTranslation } from "react-i18next";
import "../../styles/whymesection.css";

const WhyMeSection = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  const reasons = [
    t('whyChooseMe.reason1.title'),
    t('whyChooseMe.reason2.title'),
    t('whyChooseMe.reason3.title'),
    t('whyChooseMe.reason4.title')
  ];

  const offers = [
    {
      title: t('whyChooseMe.offers.offer1.title'),
      description: t('whyChooseMe.offers.offer1.description')
    },
    {
      title: t('whyChooseMe.offers.offer2.title'),
      description: t('whyChooseMe.offers.offer2.description')
    },
    {
      title: t('whyChooseMe.offers.offer3.title'),
      description: t('whyChooseMe.offers.offer3.description')
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
              <div className="offers-cards">
                {offers.map((offer, index) => (
                  <div key={index} className="offer-card">
                    <div className="offer-title">{offer.title}</div>
                    <div className="offer-description">{offer.description}</div>
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
