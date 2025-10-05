import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { generateSEOTags } from "../../config/seoDefaults";
import HeroSection from "./HeroSection/HeroSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import LatestWorkSection from "./LatestWorkSection/LatestWorkSection";
import WhyMeSection from "./WhyMeSection/WhyMeSection";
import ContactSection from "./ContactSection/ContactSection";

const HomePage = () => {
    const { t } = useTranslation();
    const seo = generateSEOTags(t('seo.home.title'), t('seo.home.description'), t('seo.home.keywords'), '/');

    return (
        <div>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords} />
                <meta name="author" content={seo.author} />
                <meta name="robots" content={seo.robots} />
                <meta name="language" content={seo.languages} />
                <meta name="revisit-after" content={seo.revisitAfter} />
                <meta name="geo.region" content={seo.geoRegion} />
                <meta name="geo.placename" content={seo.geoPlacename} />
                <meta name="geo.position" content={seo.geoPosition} />
                <meta name="ICBM" content={seo.icbm} />
                <link rel="canonical" href={seo.url} />
                
                {/* Open Graph */}
                <meta property="og:type" content={seo.type} />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:url" content={seo.url} />
                <meta property="og:site_name" content={seo.siteName} />
                <meta property="og:image" content={seo.ogImage} />
                <meta property="og:image:alt" content="PatrikVision - Professional Photography" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="sk_SK" />
                <meta property="og:locale:alternate" content="hu_HU" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content={seo.twitterSite} />
                <meta name="twitter:creator" content={seo.twitterCreator} />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content={seo.ogImage} />
                
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": seo.siteName,
                        "jobTitle": "Professional Photographer",
                        "description": seo.description,
                        "url": "https://patrikvision.sk",
                        "image": seo.ogImage,
                        "sameAs": [
                            "https://www.instagram.com/bpaatrik/",
                            "https://www.linkedin.com/in/patrikbiblak/"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Bratislava",
                            "addressCountry": "SK"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+421918755276",
                            "contactType": "customer service",
                            "email": "contact@patrikvision.sk"
                        }
                    })}
                </script>
            </Helmet>
            <HeroSection />
            <ServicesSection />
            <LatestWorkSection />
            <WhyMeSection />
            <ContactSection />
        </div>
    )
}

export default HomePage;