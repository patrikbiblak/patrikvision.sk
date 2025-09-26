import "../../styles/servicessection.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { 
      name: t('services.webpages.name'), 
      description: t('services.webpages.description'),
      icon: 'language'
    },
    { 
      name: t('services.marketing.name'), 
      description: t('services.marketing.description'),
      icon: 'campaign'
    },
    { 
      name: t('services.ai.name'), 
      description: t('services.ai.description'),
      icon: 'auto_awesome'
    },
    { 
      name: t('services.seo.name'), 
      description: t('services.seo.description'),
      icon: 'search'
    },
    { 
      name: t('services.analytics.name'), 
      description: t('services.analytics.description'),
      icon: 'trending_up'
    },
    { 
      name: t('services.support.name'), 
      description: t('services.support.description'),
      icon: 'support_agent'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-content">
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ service, index }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="service"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="service-icon">
        <span className="material-icons">{service.icon}</span>
      </div>
      <div className="service-content">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServicesSection;
