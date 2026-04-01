import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* Navigation - Simple & Clean */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter uppercase">
          Hardik.dev
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            Software Developer • 3.5+ Years Exp
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
            Building <span className="text-blue-600">Resilient</span> Systems.
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            Specializing in **Java Backend Development**, Microservices, and
            Scalable Architecture. I bridge the gap between complex system
            design and clean, maintainable code.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-200">
              View My Projects
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:border-slate-400 transition-all">
              Read Technical Articles
            </button>
          </div>
        </div>

        {/* Feature Grid - Great for showing Backend Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-lg mb-3">Backend Master</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Proficient in **Spring Boot**, Struts, and building distributed
              systems that scale.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-lg mb-3">System Design</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Implementing **Circuit Breakers**, Rate Limiters, and Load
              Balancers for high availability.
            </p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-lg mb-3">Frontend Learning</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Currently expanding into **React** and modern CSS to become a true
              Full-Stack engineer.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
