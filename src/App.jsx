// import React, { useState, useRef } from "react";
// import Hero from "./pages/Hero";
// import About from "./pages/About";
// import Articles from "./pages/Articles";
// import Contact from "./pages/Contact";

// function App() {
//   const [currentView, setCurrentView] = useState("home");

//   // Refs for scrolling
//   const experienceRef = useRef(null);
//   const educationRef = useRef(null);
//   const certsRef = useRef(null);
//   const skillsRef = useRef(null);

//   const scrollToSection = (ref) => {
//     setCurrentView("home"); // Ensure we are on the home/hero view
//     setTimeout(() => {
//       ref.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   const renderView = () => {
//     switch (currentView) {
//       case "about":
//         return <About />;
//       case "articles":
//         return <Articles />;
//       case "contact":
//         return <Contact />;
//       default:
//         return (
//           <Hero
//             onNavigateToArticles={() => setCurrentView("articles")}
//             onScrollToExp={() => scrollToSection(experienceRef)}
//             onScrollToEdu={() => scrollToSection(educationRef)}
//             onScrollToCerts={() => scrollToSection(certsRef)}
//            onScrollToSkills={() => scrollToSection(skillsRef)}
//             refs={{ experienceRef, educationRef, certsRef, skillsRef }}
//           />
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
//       <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50">
//         <div
//           className="text-xl font-bold tracking-tighter cursor-pointer"
//           onClick={() => setCurrentView("home")}
//         >
//           Hardik.Bisht
//         </div>
//         <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
//           <button onClick={() => setCurrentView("about")}>About</button>
//           <button onClick={() => setCurrentView("articles")}>Articles</button>
//           <button onClick={() => setCurrentView("contact")}>Contact</button>
//         </div>
//       </nav>
//       {renderView()}
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef } from "react";
import { Menu, X } from "lucide-react"; // <-- Added icons for the mobile menu
import Hero from "./pages/Hero";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- Added state for mobile menu

  // Refs for scrolling
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (ref) => {
    setCurrentView("home"); // Ensure we are on the home/hero view
    setIsMobileMenuOpen(false); // Close mobile menu when a button is clicked
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleNavClick = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Close mobile menu when page changes
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
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
            onNavigateToArticles={() => handleNavClick("articles")}
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 relative">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div
          className="text-xl font-bold tracking-tighter cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          Hardik.Bisht
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => handleNavClick("about")}
            className="hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("articles")}
            className="hover:text-blue-600 transition-colors"
          >
            Articles
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Button (Hidden on Desktop) */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu (Only shows on mobile when button is clicked) */}
      {isMobileMenuOpen && (
        <div className="md:hidden sticky top-[65px] left-0 w-full bg-white border-b border-slate-100 shadow-xl px-6 py-4 flex flex-col gap-4 z-40 animate-in slide-in-from-top-2">
          <button
            onClick={() => handleNavClick("about")}
            className="text-left font-bold text-lg text-slate-700 py-2 border-b border-slate-50 hover:text-blue-600"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("articles")}
            className="text-left font-bold text-lg text-slate-700 py-2 border-b border-slate-50 hover:text-blue-600"
          >
            Articles
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="text-left font-bold text-lg text-slate-700 py-2 hover:text-blue-600"
          >
            Contact
          </button>
        </div>
      )}

      {/* Main Content */}
      {renderView()}
    </div>
  );
}

export default App;
