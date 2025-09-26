import "../../styles/servicessection.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    'webpages',
    'ai', 
    'seo',
    'analytics',
    'support',
    'marketing'
  ];

  return (
    <section className="services-section">
      <div className="services-content">
        <div className="services-grid">
          {services.map((serviceKey, index) => (
            <ServiceItem key={serviceKey} serviceKey={serviceKey} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ serviceKey, index }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  
  const service = t(`services.${serviceKey}`, { returnObjects: true });

  // Add safety checks to prevent undefined errors
  if (!service || typeof service !== 'object') {
    return null;
  }

  return (
    <div
      ref={ref}
      className="service-card"
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="service-header">
        <div className="service-icon-container">
          <span className="material-icons service-icon">{service.icon || ''}</span>
        </div>
        <div className="service-tag">{service.tag || ''}</div>
      </div>
      
      <div className="service-main">
        <h3 className="service-title">{service.name || ''}</h3>
        <p className="service-description">{service.description || ''}</p>
      </div>

      <div className="service-details">
        {service.challenge && (
          <div className="service-detail">
            <h4 className="detail-title">{service.challenge.title || ''}</h4>
            <p className="detail-content">{service.challenge.content || ''}</p>
          </div>
        )}
        
        {service.solution && (
          <div className="service-detail">
            <h4 className="detail-title">{service.solution.title || ''}</h4>
            <p className="detail-content">{service.solution.content || ''}</p>
          </div>
        )}
        
        {service.outcome && (
          <div className="service-detail">
            <h4 className="detail-title">{service.outcome.title || ''}</h4>
            <p className="detail-content">{service.outcome.content || ''}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;
