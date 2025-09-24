import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactSection from "../components/home/ContactSection";

const HomePage = () => {

    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

export default HomePage;