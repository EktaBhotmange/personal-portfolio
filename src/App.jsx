import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";


function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}


export default Home;