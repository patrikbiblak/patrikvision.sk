import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import HomeServicesSection from "../components/home/HomeServicesSection";
import WhyMeSection from "../components/home/WhyMeSection";
import ContactSection from "../components/home/ContactSection";

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Helmet>
                <title>{t('seo.home.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.home.description')} />
                <meta name="keywords" content={t('seo.home.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="en,sk,hu" />
                <meta name="revisit-after" content="7 days" />
                <meta name="geo.region" content="SK" />
                <meta name="geo.placename" content="Slovakia" />
                <meta name="geo.position" content="48.6690;19.6990" />
                <meta name="ICBM" content="48.6690, 19.6990" />
                <link rel="canonical" href="https://patrikvision.sk" />
                <meta property="og:title" content={t('seo.home.title')} />
                <meta property="og:description" content={t('seo.home.description')} />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.home.title')} />
                <meta name="twitter:description" content={t('seo.home.description')} />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk" />
            </Helmet>
            <HeroSection />
            <HomeServicesSection />
            <AboutSection />
            <WhyMeSection />
            <ContactSection />
        </div>
    )
}

export default HomePage;