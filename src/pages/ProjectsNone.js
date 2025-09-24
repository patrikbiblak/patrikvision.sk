import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import "../styles/projectsnone.css";

const icons = [
  { Icon: SiHtml5, className: "html-icon" },
  { Icon: SiCss3, className: "css-icon" },
  { Icon: SiJavascript, className: "js-icon" },
  { Icon: SiReact, className: "react-icon" },
  { Icon: SiGit, className: "git-icon" },
  { Icon: SiGithub, className: "github-icon" },
];

const ProjectsNone = () => {
    const { t } = useTranslation();
    
    return (
        <div className="projects-none container">
            <Helmet>
                <title>{t('seo.portfolio.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.portfolio.description')} />
                <meta name="keywords" content={t('seo.portfolio.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://patrikvision.sk/portfolio" />
                <meta property="og:title" content={t('seo.portfolio.title')} />
                <meta property="og:description" content={t('seo.portfolio.description')} />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk/portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.portfolio.title')} />
                <meta name="twitter:description" content={t('seo.portfolio.description')} />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk/portfolio" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/portfolio" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/portfolio" />
            </Helmet>
            <h1 className="projectsnone-heading" dangerouslySetInnerHTML={{ __html: t('projects.title') }}></h1>

            <div className="projectsnone-center">
                <p>{t('projects.workingOn')}</p>

                <div className="box-message">
                    <h4>{t('projects.expertQuote')}</h4>
                    <p>{t('projects.portfolioWork')}</p>
                    <p>{t('projects.joinJourney')} &nbsp;
                        <Link to='/contact'>{t('projects.contactMe')}</Link>.
                    </p>
                </div>
            </div>

            <div className="logo-carousel">
                <div className="logo-track">
                    {[...icons, ...icons].map(({ Icon, className }, i) => (
                    <div className={`icon-wrapper ${className}`} key={i}>
                        <Icon size={48} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsNone;