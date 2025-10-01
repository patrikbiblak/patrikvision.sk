import "./SkillsSection.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const SkillsSection = () => {
  const leftRef = useRef(null);
  const { t } = useTranslation();

  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 55 },
    { name: 'React', level: 50 },
    { name: 'GIT', level: 70 }
  ];

  return (
    <section className="skills-section" style={{ 
        margin: '40px 60px', 
        padding: '40px',
        backgroundColor: '#dddddd',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease'
    }}>
      <div className="container skills-content">
        <h2 ref={leftRef}>{t('skills.title')}</h2>

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

  return (
    <div
      ref={ref}
      className="skill"
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