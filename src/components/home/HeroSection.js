import { useRef } from 'react';
import ScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "../../contexts/TranslationContext";
import "../../styles/herosection.css";

const HeroSection = () => {
    const ref = useRef(null);
    const arrowRef = useRef(null);
    const { t } = useTranslation();

    ScrollAnimation(arrowRef, { immediate: true });
    ScrollAnimation(ref, { immediate: true });

    return (
        <section className="hero-section">
            <div className="container hero-content" ref={ref}> 
                
                    <h1 dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>

                    <p>{t('hero.description')}</p>
            </div>

            <div className='arrow-icon' ref={arrowRef}>&darr;</div>
        </section>
    )
}

export default HeroSection;