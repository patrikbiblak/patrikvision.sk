import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Maintenance from "../../components/common/Maintenance/Maintenance";
import "./PortfolioPage.css";

const PortfolioPage = () => {
    const { t } = useTranslation();

    return (
        <div className="portfolio-page">
            <Helmet>
                <title>{t('seo.portfolio.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.portfolio.description')} />
                <meta name="keywords" content={t('seo.portfolio.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="noindex, follow" />
                <meta name="language" content="en,sk,hu" />
                <meta name="revisit-after" content="7 days" />
                <meta name="geo.region" content="SK" />
                <meta name="geo.placename" content="Slovakia" />
                <meta name="geo.position" content="48.6690;19.6990" />
                <meta name="ICBM" content="48.6690, 19.6990" />
                <link rel="canonical" href="https://patrikvision.sk/portfolio" />
                <meta property="og:title" content={t('seo.portfolio.title')} />
                <meta property="og:description" content={t('seo.portfolio.description')} />
                <meta property="og:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk/portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.portfolio.title')} />
                <meta name="twitter:description" content={t('seo.portfolio.description')} />
                <meta name="twitter:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta name="twitter:site" content="@patrikvision" />
                <meta name="twitter:creator" content="@patrikvision" />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk/portfolio" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/portfolio" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/portfolio" />
            </Helmet>
            <Maintenance />
        </div>
    )
}

export default PortfolioPage;