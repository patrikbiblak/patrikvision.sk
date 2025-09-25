import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import useVersionChecker from "./hooks/useVersionChecker";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieSettings from "./CookieConsent/CookieSettings";
import "./i18n/config";

const App = () => {
  useVersionChecker();

  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div className="content">
            <Navigation />
            <CookieSettings />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<Navigate to="/" replace />}/>
                <Route path="/portfolio" element={<Navigate to="/" replace />}/>
                <Route path="/services" element={<Navigate to="/" replace />}/>
                <Route path="/contact" element={<Navigate to="/" replace />}/>
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