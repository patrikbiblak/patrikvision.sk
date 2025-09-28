import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import useVersionChecker from "./hooks/useVersionChecker";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieSettings from "./CookieConsent/CookieSettings";
import LoadingScreen from "./components/LoadingScreen";
import "./i18n/config";

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
                <Route path="/gdpr" element={<PrivacyPolicy />}/>
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