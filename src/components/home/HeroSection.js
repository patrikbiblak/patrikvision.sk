import { useRef, useState, useEffect } from 'react';
import ScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "../../contexts/TranslationContext";
import "../../styles/herosection.css";

const HeroSection = () => {
    const ref = useRef(null);
    const arrowRef = useRef(null);
    const codeRef = useRef(null);
    const { t } = useTranslation();
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    ScrollAnimation(arrowRef, { immediate: true });
    ScrollAnimation(ref, { immediate: true });
    ScrollAnimation(codeRef, { immediate: true });

    const sampleCode = `// PatrikVision
const developer = {
  name: "Patrik",
  interests: ["UI/UX Design", "SEO", "Analytics", "Performance"],
  passion: "Creating amazing web experiences",
  motto: "Code with vision"
};

console.log("Let's build something great!");`;

    useEffect(() => {
        const codeLines = sampleCode.split('\n');
        let currentIndex = 0;
        let currentLine = 0;
        let currentText = '';

        const typeNextCharacter = () => {
            if (currentLine < codeLines.length) {
                const currentLineText = codeLines[currentLine];
                
                if (currentIndex < currentLineText.length) {
                    currentText += currentLineText[currentIndex];
                    setDisplayedCode(currentText);
                    currentIndex++;
                    setTimeout(typeNextCharacter, 50);
                } else {
                    currentText += '\n';
                    setDisplayedCode(currentText);
                    currentLine++;
                    currentIndex = 0;
                    setTimeout(typeNextCharacter, 50);
                }
            } else {
                setIsTyping(false);
            }
        };

        setIsTyping(true);
        setTimeout(typeNextCharacter, 500);
    }, [sampleCode]);

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="code-space" ref={codeRef}>
                    <div className="code-header">
                        <div className="code-buttons">
                            <span className="code-btn red"></span>
                            <span className="code-btn yellow"></span>
                            <span className="code-btn green"></span>
                        </div>
                        <span className="code-title">portfolio.js</span>
                    </div>
                    <pre className={`code-content ${isTyping ? 'typing-active' : ''}`}>
                        <code>
                            {displayedCode}
                            {isTyping && <span className="typing-cursor">|</span>}
                        </code>
                    </pre>
                </div>

                <div className="hero-content" ref={ref}> 
                    <h1 dangerouslySetInnerHTML={{ __html: t('hero.title') }}></h1>
                    <p>{t('hero.description')}</p>
                </div>
            </div>

            <div className='arrow-icon' ref={arrowRef}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </section>
    )
}

export default HeroSection;