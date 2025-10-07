import "./ServicesSection.css";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const services = [
    'webpages',
    'ai', 
    'seo',
    'analytics',
    'support',
    'marketing'
  ];
  
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('grid-animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-services-section">
      <div className="home-services-grid" ref={gridRef}>
        {services.map((serviceKey, index) => (
          <HomeServiceItem key={serviceKey} serviceKey={serviceKey} index={index} />
        ))}
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
      className="home-service-card u-card u-card-animated"
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


