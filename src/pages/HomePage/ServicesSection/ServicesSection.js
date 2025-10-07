import "./ServicesSection.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "../../../components/common/ScrollAnimation/ScrollAnimation";

const ServicesSection = () => {
  const services = [
    'webpages',
    'ai', 
    'seo',
    'analytics',
    'support',
    'marketing'
  ];

  return (
    <section className="home-services-section">
      <div className="home-services-content">
        <div className="home-services-grid">
          {services.map((serviceKey, index) => (
            <ScrollAnimation 
              key={serviceKey} 
              animation="scale" 
              delay={index * 80}
              duration={0.5}
              threshold={0.15}
            >
              <HomeServiceItem serviceKey={serviceKey} index={index} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeServiceItem = ({ serviceKey, index }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  
  const service = t(`services.${serviceKey}`, { returnObjects: true });

  if (!service || typeof service !== 'object') {
    return null;
  }

  return (
    <div
      ref={ref}
      className="home-service-card"
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="home-service-header">
        <div className="home-service-icon-container">
          <span className="material-icons home-service-icon">{service.icon || ''}</span>
        </div>
        <div className="home-service-tag">{service.tag || ''}</div>
      </div>
      
      <div className="home-service-main">
        <h3 className="home-service-title">{service.name || ''}</h3>
        <p className="home-service-description">{service.description || ''}</p>
      </div>
    </div>
  );
};

export default ServicesSection;


