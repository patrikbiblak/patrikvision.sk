import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { Link } from 'react-router';
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
    return (
        <div className="projects-none container">
            <h1 className="projectsnone-heading">Moje projekty</h1>

            <div className="projectsnone-center">
                <p>Na tejto podstránke momentálne pracujem. Medzitým si môžete pozrieť môj profil alebo ma kontaktovať.</p>

                <div className="box-message">
                    <h4>Každý expert niekde začínal..</h4>
                    <p>Pracujem na portfóliu a budujem základy silného brandu.</p>
                    <p>Chcete sa stať súčasťou mojej cesty? &nbsp;
                        <Link to='/contact'>Ozvite sa</Link>.
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