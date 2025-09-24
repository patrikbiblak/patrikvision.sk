import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import ServicesSection from "../components/home/ServicesSection";
import "../styles/homepage.css";

const ServicesPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="services-page">
      <Helmet>
        <title>{t('seo.services.title')} | PatrikVision</title>
        <meta name="description" content={t('seo.services.description')} />
        <meta name="keywords" content={t('seo.services.keywords')} />
        <meta name="author" content="PatrikVision" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://patrikvision.sk/services" />
        <meta property="og:title" content={t('seo.services.title')} />
        <meta property="og:description" content={t('seo.services.description')} />
        <meta property="og:site_name" content="PatrikVision" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patrikvision.sk/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('seo.services.title')} />
        <meta name="twitter:description" content={t('seo.services.description')} />
        <link rel="alternate" hreflang="en" href="https://patrikvision.sk/services" />
        <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/services" />
        <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/services" />
      </Helmet>
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
