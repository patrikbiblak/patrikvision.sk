import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useVersionChecker from "./hooks/useVersionChecker";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsNone from "./pages/ProjectsNone";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieSettings from "./CookieConsent/CookieSettings";
import "./i18n";

const App = () => {
  useVersionChecker();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="content">
          <Navigation />
          <CookieSettings />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/portfolio" element={<ProjectsNone />}/>
              <Route path="/services" element={<ServicesPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
              <Route path="/gdpr" element={<PrivacyPolicy />}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Suspense>
  )
}

export default App;