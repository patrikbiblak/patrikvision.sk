import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useVersionChecker from "./hooks/useVersionChecker";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsNone from "./pages/ProjectsNone";
import ContactPage from "./pages/ContactPage";
import NavigationBar from "./components/Navigation";
import Footer from "./components/Footer";
import ContactModal from "./hooks/ContactModal";

const App = () => {
  useVersionChecker();

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="content">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/projects" element={<ProjectsNone />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
        </main>
        <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;