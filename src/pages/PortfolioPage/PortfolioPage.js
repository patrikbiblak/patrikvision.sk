import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import "./PortfolioPage.css";

const PortfolioPage = () => {
    const { t } = useTranslation();
    const gridRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('portfolio-grid-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Modern online store with advanced filtering, payment integration, and responsive design.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "#"
        },
        {
            id: 2,
            title: "AI-Powered Dashboard",
            description: "Analytics dashboard with AI-driven insights, real-time data visualization, and custom reports.",
            technologies: ["React", "Python", "TensorFlow", "D3.js"],
            link: "#"
        },
        {
            id: 3,
            title: "Corporate Website",
            description: "Professional corporate website with SEO optimization, blog system, and contact forms.",
            technologies: ["React", "Next.js", "Tailwind CSS", "CMS"],
            link: "#"
        },
        {
            id: 4,
            title: "Portfolio & Blog Platform",
            description: "Creative portfolio showcase with integrated blog, admin panel, and dynamic content management.",
            technologies: ["React", "Firebase", "Material-UI", "Markdown"],
            link: "#"
        }
    ];

    return (
        <div className="portfolio-page">
            <Helmet>
                <title>{t('seo.portfolio.title')} | PatrikVision</title>
                <meta name="description" content={t('seo.portfolio.description')} />
                <meta name="keywords" content={t('seo.portfolio.keywords')} />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="en,sk,hu" />
                <meta name="revisit-after" content="7 days" />
                <meta name="geo.region" content="SK" />
                <meta name="geo.placename" content="Slovakia" />
                <meta name="geo.position" content="48.6690;19.6990" />
                <meta name="ICBM" content="48.6690, 19.6990" />
                <link rel="canonical" href="https://patrikvision.sk/portfolio" />
                <meta property="og:title" content={t('seo.portfolio.title')} />
                <meta property="og:description" content={t('seo.portfolio.description')} />
                <meta property="og:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk/portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={t('seo.portfolio.title')} />
                <meta name="twitter:description" content={t('seo.portfolio.description')} />
                <meta name="twitter:image" content="https://patrikvision.sk/images/PatrikVision.png" />
                <meta name="twitter:site" content="@patrikvision" />
                <meta name="twitter:creator" content="@patrikvision" />
                <link rel="alternate" hreflang="en" href="https://patrikvision.sk/portfolio" />
                <link rel="alternate" hreflang="sk" href="https://patrikvision.sk/portfolio" />
                <link rel="alternate" hreflang="hu" href="https://patrikvision.sk/portfolio" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": t('seo.portfolio.title'),
                        "description": t('seo.portfolio.description'),
                        "url": "https://patrikvision.sk/portfolio",
                        "inLanguage": ["en", "sk", "hu"],
                        "author": {
                            "@type": "Person",
                            "name": "PatrikVision",
                            "url": "https://patrikvision.sk",
                            "jobTitle": "Web Developer & AI Solutions Specialist"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "PatrikVision",
                            "url": "https://patrikvision.sk",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://patrikvision.sk/images/PatrikVision.png"
                            }
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://patrikvision.sk"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Portfolio",
                                    "item": "https://patrikvision.sk/portfolio"
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>
            <div className="portfolio-page-content">
                <h1 className="portfolio-heading page-heading-animate">{t('nav.portfolio')}</h1>
                <p className="intro-text page-intro-animate">{t('latestWork.description')}</p>
                
                <div className="portfolio-grid" ref={gridRef}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ProjectCard = ({ project, index }) => {
    return (
        <div 
            className="project-card"
            style={{
                transitionDelay: `${index * 150}ms`
            }}
        >
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;