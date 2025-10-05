import React, { Suspense, useState, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import useVersionChecker from "./components/hooks/useVersionChecker";
import Navigation from "./components/layout/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";
import CookieSettings from "./components/features/cookies/CookieSettings";
import LoadingScreen from "./components/common/LoadingScreen/LoadingScreen";
import "./i18n/config";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage/PortfolioPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const Gdpr = lazy(() => import("./pages/gdpr/gdpr"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useVersionChecker();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <HelmetProvider>
      <Suspense fallback={<LoadingScreen />}>
        <Router>
          <div className="content">
            <Navigation />
            <CookieSettings />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/portfolio" element={<PortfolioPage />}/>
                <Route path="/services" element={<ServicesPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/gdpr" element={<Gdpr />}/>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </HelmetProvider>
  )
}

export default App;