import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/TranslationContext";
import "../styles/aboutpage.css";

const AboutPage = () => {
    const { t } = useTranslation();
    
    return (
        <div className="about-page container">
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