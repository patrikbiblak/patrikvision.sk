import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from "../../hooks/ScrollAnimation";
import "../../styles/projectssection.css";

const projects = [
  { title: "", description: "", },
  { title: "", description: "", },
  { title: "", description: "", },
];

const ProjectsSection = () => {
  const gridRef = useRef(null);
  const leftRef = useRef(null);

  ScrollAnimation(leftRef, { customClass: 'left' });

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
        }, idx * 150);
      });
    }, {
      root: null,
      threshold: 0.1,
    });

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section">
      <div className="container projects-content">
        <div className="projects-heading" ref={leftRef}>
          <h2>Vybrané projekty</h2>
          <p>Na tejto sekcii momentálne pracujem.</p>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {projects.map(project => (
            <div key={project.title} className="project-card"></div>
          ))}
        </div>

        <div className="projects-footer">
          <button className="view-all">
              <Link to="/projects">Zobraziť všetky projekty</Link>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;