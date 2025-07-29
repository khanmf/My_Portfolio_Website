import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AcademicPage from "./pages/AcademicPage";
import FreelancePage from "./pages/FreelancePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply theme to document root
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-slate-900' : 'bg-gray-50'
    }`}>
      <BrowserRouter>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/academic" element={<AcademicPage darkMode={darkMode} />} />
            <Route path="/freelance" element={<FreelancePage darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
            <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;