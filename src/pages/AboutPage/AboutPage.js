import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "./AboutPage.css";

const ServicesPage = () => {
    const { t } = useTranslation();

    return (
        <div className="about-page">
            <Helmet>
                <title>{t('seo.about.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.about.description')} />
                <meta name="keywords" content={t('seo.about.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="en,sk,hu" />
                <meta name="revisit-after" content="7 days" />
                <meta name="geo.region" content="SK" />
                <meta name="geo.placename" content="Slovakia" />
                <meta name="geo.position" content="48.6690;19.6990" />
                <meta name="ICBM" content="48.6690, 19.6990" />
                <link rel="canonical" href="https://patrikvision.sk/about" />
                <meta property="og:title" content={t('seo.about.title')} />
                <meta property="og:description" content={t('seo.about.description')} />
                <meta property="og:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk/about" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.about.title')} />
                <meta name="twitter:description" content={t('seo.about.description')} />
                <meta name="twitter:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta name="twitter:site" content="@patrikvision" />
                <meta name="twitter:creator" content="@patrikvision" />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk/about" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/about" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/about" />
            </Helmet>
            <div className="about-page-content">
                <h1 className="about-heading">{t('nav.about')}</h1>
                <p className="intro-text">{t('about.intro')}</p>
                <div className="about-grid">
                    <div className="about-image-wrapper">
                        <img
                            src="/images/bpaatrik.png"
                            alt="Patrik portrait"
                            className="about-image about-image--portrait"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="about-card">
                        <h2 className="about-subheading">Vision</h2>
                        <p className="about-paragraph">To make the web simpler, faster, and more human — through clear design, purposeful engineering, and experiences that feel effortless.</p>
                    </div>

                    <div className="about-card">
                        <h2 className="about-subheading">Mission</h2>
                        <p className="about-paragraph">Deliver high‑quality, performant websites and apps that help clients grow — combining thoughtful UX, robust code, and measurable results on every project.</p>
                    </div>

                    <div className="about-image-wrapper">
                        <img
                            src="/images/avatar.png"
                            alt="Patrik avatar"
                            className="about-image about-image--avatar"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage;