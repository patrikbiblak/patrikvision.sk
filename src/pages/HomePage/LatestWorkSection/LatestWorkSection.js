import "./LatestWorkSection.css";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";

const LatestWorkSection = () => {
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const headingRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [headingRef.current, gridRef.current, ctaRef.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern online store with advanced filtering, payment integration, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "/portfolio"
    },
    {
      id: 2,
      title: "AI-Powered Dashboard",
      description: "Analytics dashboard with AI-driven insights, real-time data visualization, and custom reports.",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      link: "/portfolio"
    }
  ];

  return (
    <section className="latest-work-section">
      <div className="latest-work-content">
        <h2 className="latest-work-heading" ref={headingRef}>
          {t('latestWork.title')}
        </h2>

        <div className="project-cards" ref={gridRef}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href="/portfolio" className="latest-work-cta" ref={ctaRef}>
          {t('latestWork.viewAll')}
        </a>
      </div>
    </section>
  );
};

export default LatestWorkSection;


