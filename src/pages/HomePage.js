import { Helmet } from "react-helmet-async";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactSection from "../components/home/ContactSection";

const HomePage = () => {

    return (
        <div>
            <Helmet>
                <title>PatrikVision | Web Development & AI Solutions | SEO, Analytics, Digital Marketing</title>
                <meta name="description" content="Professional web development and AI solutions. Specialized in SEO, Google Analytics, AI automation, and modern web technologies. Transform your business with intelligent digital solutions." />
                <meta name="keywords" content="web development, AI solutions, artificial intelligence, SEO, Google Analytics, frontend development, React, JavaScript, website design, AI automation, Slovakia" />
                <meta name="author" content="PatrikVision" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="en,sk" />
                <meta name="revisit-after" content="7 days" />
                <meta name="geo.region" content="SK" />
                <meta name="geo.placename" content="Slovakia" />
                <meta name="geo.position" content="48.6690;19.6990" />
                <meta name="ICBM" content="48.6690, 19.6990" />
                <link rel="canonical" href="https://patrikvision.sk" />
                <meta property="og:title" content="PatrikVision | Web Development & AI Solutions | SEO, Analytics, Digital Marketing" />
                <meta property="og:description" content="Professional web development and AI solutions. Specialized in SEO, Google Analytics, AI automation, and modern web technologies. Transform your business with intelligent digital solutions." />
                <meta property="og:site_name" content="PatrikVision" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://patrikvision.sk" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="PatrikVision | Web Development & AI Solutions" />
                <meta name="twitter:description" content="Professional web development and AI solutions. Specialized in SEO, Google Analytics, AI automation, and modern web technologies." />
            </Helmet>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

export default HomePage;