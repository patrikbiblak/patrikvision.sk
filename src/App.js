import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useVersionChecker from "./hooks/useVersionChecker";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsNone from "./pages/ProjectsNone";
import ContactPage from "./pages/ContactPage";
import NavigationBar from "./components/Navigation";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieSettings from "./CookieConsent/CookieSettings";

const App = () => {
  useVersionChecker();

  return (
    <Router>
      <div className="content">
        <NavigationBar />
        <CookieSettings />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/projects" element={<ProjectsNone />}/>
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/gdpr" element={<PrivacyPolicy />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;