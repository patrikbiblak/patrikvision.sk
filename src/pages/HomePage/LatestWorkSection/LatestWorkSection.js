import "./LatestWorkSection.css";
import { useTranslation } from "react-i18next";

const LatestWorkSection = () => {
  const { t } = useTranslation();

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
      <div className="latest-work-container">
        <div className="latest-work-layout">
          <h2 className="latest-work-heading">{t('latestWork.title')}</h2>

          <div className="project-cards">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
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

          <a href="/portfolio" className="latest-work-cta">
            {t('latestWork.viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestWorkSection;


