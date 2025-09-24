import "../../styles/servicessection.css";
import useScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const ServicesSection = () => {
  const leftRef = useRef(null);
  const { t } = useTranslation();
  useScrollAnimation(leftRef, { customClass: 'left' });

  const services = [
    { 
      name: t('services.seo.name'), 
      description: t('services.seo.description'),
      icon: 'search'
    },
    { 
      name: t('services.analytics.name'), 
      description: t('services.analytics.description'),
      icon: 'analytics'
    },
    { 
      name: t('services.ai.name'), 
      description: t('services.ai.description'),
      icon: 'auto_awesome'
    },
    { 
      name: t('services.support.name'), 
      description: t('services.support.description'),
      icon: 'support_agent'
    },
    { 
      name: t('services.webpages.name'), 
      description: t('services.webpages.description'),
      icon: 'language'
    },
    { 
      name: t('services.marketing.name'), 
      description: t('services.marketing.description'),
      icon: 'campaign'
    }
  ];

  return (
    <section className="services-section" style={{ 
        margin: '40px 60px', 
        padding: '40px',
        backgroundColor: '#dddddd',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease'
    }}>
      <div className="container services-content">
        <h2 ref={leftRef}>{t('services.title')}</h2>

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
  const isVisible = useScrollAnimation(ref);

  return (
    <div
      ref={ref}
      className={`service ${isVisible ? 'animate-service' : ''}`}
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
