import "../../styles/skillssection.css";
import ScrollAnimation from "../../hooks/ScrollAnimation";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useRef } from "react";

const SkillsSection = () => {
  const leftRef = useRef(null);
  ScrollAnimation(leftRef, { customClass: 'left' });

  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 55 },
    { name: 'React', level: 50 },
    { name: 'GIT', level: 70 }
  ];

  return (
    <section className="skills-section">
      <div className="container skills-content">
        <h2 ref={leftRef}>Zručnosti</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill, index }) => {
  const ref = useRef(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <div
      ref={ref}
      className={`skill ${isVisible ? 'animate-skill' : ''}`}
      style={{
        '--level': `${skill.level}%`,
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div>
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
    </div>
  );
};

export default SkillsSection;