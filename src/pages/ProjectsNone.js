import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { Link } from 'react-router';
import { useTranslation } from '../contexts/TranslationContext';
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