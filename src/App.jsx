import React, { useState, useRef } from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

function App() {
  const [currentView, setCurrentView] = useState("home");

  // Refs for scrolling
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (ref) => {
    setCurrentView("home"); // Ensure we are on the home/hero view
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const renderView = () => {
    switch (currentView) {
      case "about":
        return <About />;
      case "articles":
        return <Articles />;
      case "contact":
        return <Contact />;
      default:
        return (
          <Hero
            onNavigateToArticles={() => setCurrentView("articles")}
            onScrollToExp={() => scrollToSection(experienceRef)}
            onScrollToEdu={() => scrollToSection(educationRef)}
            onScrollToCerts={() => scrollToSection(certsRef)}
           onScrollToSkills={() => scrollToSection(skillsRef)} 
            refs={{ experienceRef, educationRef, certsRef, skillsRef }}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div
          className="text-xl font-bold tracking-tighter cursor-pointer"
          onClick={() => setCurrentView("home")}
        >
          Hardik.Bisht
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <button onClick={() => setCurrentView("about")}>About</button>
          <button onClick={() => setCurrentView("articles")}>Articles</button>
          <button onClick={() => setCurrentView("contact")}>Contact</button>
        </div>
      </nav>
      {renderView()}
    </div>
  );
}

export default App;
