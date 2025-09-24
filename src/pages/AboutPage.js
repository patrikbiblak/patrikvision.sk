import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "../styles/aboutpage.css";

const AboutPage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="about-page container">
            <Helmet>
                <title>{t('seo.about.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.about.description')} />
                <meta name="keywords" content={t('seo.about.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://patrikvision.sk/about" />
                <meta property="og:title" content={t('seo.about.title')} />
                <meta property="og:description" content={t('seo.about.description')} />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk/about" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.about.title')} />
                <meta name="twitter:description" content={t('seo.about.description')} />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk/about" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/about" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/about" />
            </Helmet>
            <div className="aboutme-heading">
                <h1 dangerouslySetInnerHTML={{ __html: t('about.whoAmI') }}></h1>
            </div>

            <div className="about-intro">
                <div className="about-intro-item">
                    <p>{t('about.intro1')}</p>
                    <p>{t('about.intro2')}</p>
                    <p>{t('about.intro3')}</p>
                </div>

                <div className="about-intro-item">

                </div>
            </div>

            <div className="aboutme-text-row">
                <img className="aboutme-text-item" src='images/bpaatrik.png' alt="PatrikVision - Web Development & AI Solutions" />
                <div className="aboutme-text-item text-gap">
                    <h3>
                        <NavLink to="https://www.instagram.com/bpaatrik/">@bpaatrik</NavLink>
                    </h3>
                    <p>{t('about.personal1')}</p>
                    <p className="hashtags" dangerouslySetInnerHTML={{ __html: t('about.hashtags') }}></p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;