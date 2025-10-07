import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import ScrollAnimation from "../../components/common/ScrollAnimation/ScrollAnimation";
import "./AboutPage.css";

const AboutPage = () => {
    const { t } = useTranslation();

    const aboutCards = [
        {
            id: 'vision',
            title: t('about.cards.vision.title'),
            icon: 'visibility',
            description: t('about.cards.vision.description'),
            gradient: 'linear-gradient(135deg, #116466 0%, #1aa1a1 100%)'
        },
        {
            id: 'mission',
            title: t('about.cards.mission.title'), 
            icon: 'rocket_launch',
            description: t('about.cards.mission.description'),
            gradient: 'linear-gradient(135deg, #116466 0%, #1aa1a1 100%)'
        },
        {
            id: 'values',
            title: t('about.cards.values.title'),
            icon: 'star',
            description: t('about.cards.values.description'),
            gradient: 'linear-gradient(135deg, #116466 0%, #1aa1a1 100%)'
        }
    ];

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
                <ScrollAnimation animation="fade" duration={0.6}>
                    <h1 className="about-heading">{t('nav.about')}</h1>
                </ScrollAnimation>
                <ScrollAnimation animation="slide-up" delay={100} duration={0.6}>
                    <p className="intro-text">{t('about.intro')}</p>
                </ScrollAnimation>
                
                {/* Values Cards Grid */}
                <div className="about-cards-grid">
                    {aboutCards.map((card, index) => (
                        <ScrollAnimation 
                            key={card.id} 
                            animation="scale" 
                            delay={index * 100}
                            duration={0.5}
                        >
                            <AboutCard card={card} index={index} />
                        </ScrollAnimation>
                    ))}
                </div>
                
                {/* Hero Section with Portrait */}
                <div className="about-hero-section">
                    <ScrollAnimation animation="slide-right" duration={0.7}>
                        <img
                            src="/images/bpaatrik.png"
                            alt={t('about.hero.portraitAlt')}
                            className="about-portrait"
                            loading="lazy"
                            decoding="async"
                        />
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-left" duration={0.7}>
                        <div className="about-hero-content">
                            <p className="about-hero-description">
                                {t('about.hero.paragraph1')} {t('about.hero.paragraph2')}
                            </p>
                            
                            {/* Professional Features Section */}
                            <div className="about-features-section">
                                <div className="about-features-grid">
                                    <div className="about-feature-item">
                                        <div className="feature-number">3+</div>
                                        <div className="feature-label">{t('about.stats.yearsLabel')}</div>
                                    </div>
                                    
                                    <div className="about-feature-item">
                                        <div className="feature-number">100%</div>
                                        <div className="feature-label">{t('about.stats.satisfactionLabel')}</div>
                                    </div>
                                    
                                    <div className="about-feature-item">
                                        <div className="feature-number">94%</div>
                                        <div className="feature-label">{t('about.clients') || 'Satisfaction'}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

const AboutCard = ({ card, index }) => {
    return (
        <div 
            className="about-card"
            style={{
                transitionDelay: `${index * 150}ms`,
                '--card-gradient': card.gradient
            }}
        >
            <div className="about-card-header">
                <div className="about-card-icon-container">
                    <span className="material-icons about-card-icon">{card.icon}</span>
                </div>
                <h3 className="about-card-title">{card.title}</h3>
            </div>
            <p className="about-card-description">{card.description}</p>
        </div>
    );
};

export default AboutPage;