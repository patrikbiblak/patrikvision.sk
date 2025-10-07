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
      description: "Modern React-based online store with AI-powered recommendations and advanced analytics.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "AI Dashboard",
      description: "Intelligent business dashboard with real-time data visualization and automated insights.",
      image: "/api/placeholder/300/200",
      technologies: ["React", "Python", "TensorFlow"],
      link: "#"
    }
  ];

  return (
    <section className="latest-work-section">
      <div className="latest-work-content">
        <h2 className="latest-work-heading" ref={headingRef}>{t('latestWork.title')}</h2>

        <div className="project-cards" ref={gridRef}>
            {projects.map((project, index) => (
              <div key={project.id} className="project-card" data-index={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">
                      View Project
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
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


