import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
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
        <div className="services-page">
            <Helmet>
                <title>{t('seo.services.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.services.description')} />
                <meta name="keywords" content={t('seo.services.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="en,sk,hu" />
                <meta name="revisit-after" content="7 days" />
                <meta name="geo.region" content="SK" />
                <meta name="geo.placename" content="Slovakia" />
                <meta name="geo.position" content="48.6690;19.6990" />
                <meta name="ICBM" content="48.6690, 19.6990" />
                <link rel="canonical" href="https://patrikvision.sk/services" />
                <meta property="og:title" content={t('seo.services.title')} />
                <meta property="og:description" content={t('seo.services.description')} />
                <meta property="og:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk/services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.services.title')} />
                <meta name="twitter:description" content={t('seo.services.description')} />
                <meta name="twitter:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta name="twitter:site" content="@patrikvision" />
                <meta name="twitter:creator" content="@patrikvision" />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk/services" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/services" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/services" />
            </Helmet>
            <div className="services-page-content">
                <h1 className="services-heading">{t('nav.services')}</h1>
                <p className="intro-text">{t('services.intro')}</p>
                
                <div className="services-grid">
                    {services.map((serviceKey, index) => (
                        <ServiceCard key={serviceKey} serviceKey={serviceKey} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ServiceCard = ({ serviceKey, index }) => {
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

export default ServicesPage;