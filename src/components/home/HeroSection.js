import { useRef } from 'react';
import ScrollAnimation from "../../hooks/ScrollAnimation";
import "../../styles/herosection.css";

const HeroSection = () => {
    const ref = useRef(null);
    ScrollAnimation(ref, { immediate: true });

    return (
        <section className="hero-section">
            <div className="container hero-content" ref={ref}> 
                
                    <h1>Design. <span>Build. </span>Evolve.</h1>

                    <p>Pretváram nápady na moderné a kreatívne webové stránky, ktoré vyniknú v digitálnom svete. Vytvorme spolu online zážitok, ktorý zaujme podľa vašich predstáv.</p>
            </div>

            <div className="arrow-container">
                <div className='arrow'></div>
            </div>
        </section>
    )
}

export default HeroSection;