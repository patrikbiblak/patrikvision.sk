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

const ProjectsNone = () => {
    return (
        <div className="projects-none container">
            <h1 className="projectsnone-heading">Moje projekty</h1>

            <div className="projectsnone-center">
                <p>Na tejto sekcii momentálne pracujem. Medzitým si môžete pozrieť môj profil alebo ma kontaktovať.</p>

                <div className="box-message">
                    <h4>Každý expert niekde začínal..</h4>
                    <p>Pracujem na portfóliu a budujem základy silného mena.</p>
                    <p>Chcete sa stať súčasťou mojej cesty? &nbsp;
                        <Link to='/contact'>Ozvite sa</Link>.
                    </p>
                </div>
            </div>

            <div className="logo-carousel">
                <div className="logo-track">
                    {[SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub].map((Icon, i) => (
                    <Icon key={i} size={48} />
                    ))}
                    {[SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub].map((Icon, i) => (
                    <Icon key={i+6} size={48} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsNone;