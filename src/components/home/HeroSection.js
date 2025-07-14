import { Link } from "react-router-dom";
import { useRef } from 'react';
import "../../styles/herosection.css";
import ScrollAnimation from "../../hooks/ScrollAnimation";

const HeroSection = () => {
    const ref = useRef(null);
    ScrollAnimation(ref, { immediate: true });

    return (
        <section className="hero-section">
            <div className="container hero-content" ref={ref}> 
                
                    <h1>Patrik<span>Vision</span></h1>

                    <p>Pretváram nápady na moderné a kreatívne webové stránky, ktoré vyniknú v digitálnom svete. Vytvorme spolu online zážitok, ktorý zaujme podľa vašich predstáv.</p>

                    <div className="hero-buttons">
                        <Link to="/projects" className="hero-btn">Projekty</Link>
                        <Link to="/contact" className="hero-btn">Kontakt</Link>
                    </div>
            </div>
        </section>
    )
}

export default HeroSection;