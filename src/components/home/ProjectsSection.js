import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/ScrollAnimation";
import { useTranslation } from "../../contexts/TranslationContext";
import "../../styles/projectssection.css";

const projects = [
  { title: "", description: "", },
  { title: "", description: "", },
  { title: "", description: "", },
];

const ProjectsSection = () => {
  const gridRef = useRef(null);
  const leftRef = useRef(null);
  const { t } = useTranslation();

  useScrollAnimation(leftRef, { customClass: 'left' });

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = Array.from(gridRef.current.querySelectorAll('.project-card'));
    const observer = new IntersectionObserver((entries, obs) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);

      visible.forEach((entry, idx) => {
        setTimeout(() => {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }, idx * 300);
      });
    }, {
      root: null,
      threshold: 0.6,
    });

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" style={{ 
        margin: '40px 60px', 
        padding: '40px',
        backgroundColor: '#dddddd',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease'
    }}>
      <div className="container projects-content">
        <div className="projects-heading" ref={leftRef}>
          <h2>{t('projects.selectedProjects')}</h2>
          <p>{t('projects.workingOnSection')}</p>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {projects.map(project => (
            <div key={project.title} className="project-card"></div>
          ))}
        </div>

        <div className="projects-footer">
          <button className="view-all">
              <Link to="/projects">{t('projects.viewAllProjects')}</Link>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;