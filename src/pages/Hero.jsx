import React from "react";
import { ShieldCheck, Globe, Layers, Cpu } from "lucide-react";

// Local Assets
import dtuBg from "../assets/dtu.png";
import ipBg from "../assets/ipu.png";
import goiLogo from "../assets/goi.png";
import azureLogo from "../assets/azure.png";
import awsLogo from "../assets/amazon.png";

const Hero = ({
  onNavigateToArticles,
  onScrollToExp,
  onScrollToEdu,
  onScrollToCerts,
  onScrollToSkills,
  refs,
}) => {
  // Tech Stack with official Devicon CDN links
  const techStack = {
    backend: [
      {
        name: "Java 8/11/17",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      },
      { name: "Struts MVC", icon: <Cpu className="w-5 h-5 text-slate-600" /> },
      { name: "REST APIs", icon: <Globe className="w-5 h-5 text-blue-500" /> },
      {
        name: "GraphQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      },
      {
        name: "Microservices",
        icon: <Layers className="w-5 h-5 text-indigo-500" />,
      },
      {
        name: "Kafka",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
      },
    ],
    frontend: [
      {
        name: "React.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "Tailwind CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "HTML5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],
    databases: [
      {
        name: "MySQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Oracle SQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
      },
      {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Azure SQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      },
      {
        name: "GCP Firestore",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Redis",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
      {
        name: "Hibernate",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
      },
    ],
    devops: [
      {
        name: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "Podman",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/podman/podman-original.svg",
      },
      {
        name: "Kubernetes",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Jenkins",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
      {
        name: "Maven",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
      },
      {
        name: "Wildfly",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redhat/redhat-original.svg",
      },
    ],
    testing: [
      {
        name: "JUnit",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg",
      },
      {
        name: "Mockito",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      },
      { name: "Karate", icon: <Globe className="w-5 h-5 text-green-600" /> },
      {
        name: "Postman",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      },
      {
        name: "SonarQube",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
      },
    ],
    Problem: [
      {
        name: "Leetcode 666+",
        img: "https://cdn.simpleicons.org/leetcode",
      },
    ],
  };

  // Reusable component for rendering the tech pills
  const TechPill = ({ tech }) => (
    <span className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-slate-200 rounded-xl text-xs md:text-sm font-bold text-slate-700 shadow-sm hover:border-blue-400 hover:shadow-md transition-all cursor-default group">
      {tech.img ? (
        <img
          src={tech.img}
          alt={tech.name}
          className="w-4 h-4 md:w-5 md:h-5 object-contain group-hover:scale-110 transition-transform"
        />
      ) : (
        <span className="group-hover:scale-110 transition-transform">
          {tech.icon}
        </span>
      )}
      {tech.name}
    </span>
  );

  return (
    <div className="flex flex-col gap-24 md:gap-40 pb-32 md:pb-60">
      {/* --- INTRO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-40 animate-in fade-in slide-in-from-bottom-8 duration-1000 min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4 md:mb-6 leading-tight">
          Hi all, I'm <br className="block sm:hidden" />
          <span className="text-blue-600">Hardik</span>
        </h1>
        <p className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-400 leading-snug md:leading-tight max-w-5xl mb-10 md:mb-16">
          I am a <span className="text-slate-900">Full Stack Developer</span>{" "}
          with almost
          <span className="text-blue-600"> 4 years</span> of experience{" "}
          <span className="text-slate-500">
            architecting resilient backend microservices and crafting
            responsive, modern web experiences.
          </span>
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4">
          <button
            onClick={() =>
              refs.skillsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 md:px-8 md:py-4 bg-slate-100 hover:bg-slate-200 rounded-full text-sm md:text-base font-bold transition w-full sm:w-auto"
          >
            Tech Stack
          </button>
          <button
            onClick={onScrollToExp}
            className="px-6 py-3 md:px-8 md:py-4 bg-slate-100 hover:bg-slate-200 rounded-full text-sm md:text-base font-bold transition w-full sm:w-auto"
          >
            Experience
          </button>

          <button
            onClick={onScrollToEdu}
            className="px-6 py-3 md:px-8 md:py-4 bg-slate-100 hover:bg-slate-200 rounded-full text-sm md:text-base font-bold transition w-full sm:w-auto"
          >
            Education
          </button>

          {/* NEW ARTICLES BUTTON */}
          <button
            onClick={onNavigateToArticles}
            className="px-6 py-3 md:px-8 md:py-4 bg-slate-100 hover:bg-slate-200 rounded-full text-sm md:text-base font-bold transition w-full sm:w-auto"
          >
            Articles
          </button>

          <button
            onClick={onScrollToCerts}
            className="px-6 py-3 md:px-8 md:py-4 bg-slate-100 hover:bg-slate-200 rounded-full text-sm md:text-base font-bold transition w-full sm:w-auto"
          >
            Certifications
          </button>
          <a
            href="/HardikBisht_javaBackend_4.pdf"
            download="Hardik_FullStack_Developer_Resume.pdf"
            className="px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-full text-sm md:text-base font-bold transition shadow-lg shadow-blue-200 w-full sm:w-auto text-center"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section
        ref={refs.skillsRef}
        className="max-w-7xl mx-auto px-6 md:px-8 scroll-mt-24 md:scroll-mt-32"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10 md:mb-16 uppercase tracking-widest text-slate-200">
          Tech Stack
        </h2>

        <div className="space-y-8 md:space-y-10">
          <div>
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-400 mb-3 md:mb-4">
              Backend & Architecture
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStack.backend.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-400 mb-3 md:mb-4">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStack.frontend.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-400 mb-3 md:mb-4">
              Databases & ORM
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStack.databases.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-400 mb-3 md:mb-4">
                DevOps & Containers
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {techStack.devops.map((tech) => (
                  <TechPill key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-400 mb-3 md:mb-4">
                Testing & Quality
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {techStack.testing.map((tech) => (
                  <TechPill key={tech.name} tech={tech} />
                ))}
              </div>
            </div>

             <div>
            <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-400 mb-3 md:mb-4">
              Problem Solving
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {techStack.Problem.map((tech) => (
                <TechPill key={tech.name} tech={tech} />
              ))}
            </div>
          </div>




          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section
        ref={refs.experienceRef}
        className="max-w-7xl mx-auto px-6 md:px-8 scroll-mt-24 md:scroll-mt-32"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-12 md:mb-20 uppercase tracking-widest text-slate-200">
          Career Journey
        </h2>

        {/* Adjusted left padding and margin for responsive timeline */}
        <div className="space-y-24 md:space-y-32 border-l-2 md:border-l-4 border-slate-100 pl-6 md:pl-12 ml-2 md:ml-6">
          {/* EdgeVerve */}
          <div className="relative">
            {/* Timeline Dots adjusted for responsive border positioning */}
            <div className="absolute -left-[33px] md:-left-[64px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 border-4 md:border-8 border-white shadow-lg"></div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 mb-6 md:mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                  EdgeVerve Systems
                </h3>
                <p className="text-xl md:text-2xl font-bold text-blue-600 mt-1 md:mt-2">
                  Product Integration Analyst
                </p>
              </div>
              <span className="inline-block text-slate-500 text-sm md:text-base font-bold bg-slate-50 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-slate-200 self-start">
                Aug 2025 - Present
              </span>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <img
                  src={goiLogo}
                  alt="GOI"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain bg-slate-50 p-1 rounded-lg border border-slate-100"
                />
                <h4 className="text-xl md:text-2xl font-bold text-blue-600">
                  GOI
                </h4>
              </div>
              <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-slate-600 list-disc pl-5 md:pl-6 marker:text-blue-600">
                <li>
                  Maintained legacy GOI application serving millions with 99.5%
                  uptime.
                </li>
                <li>
                  Developed 10+ new features using Struts framework to improve
                  user experience.
                </li>
                <li>
                  Optimized database queries using Hibernate Criteria API,
                  reducing retrieval time by 25%.
                </li>
              </ul>
            </div>
          </div>

          {/* Infosys */}
          <div className="relative">
            <div className="absolute -left-[33px] md:-left-[64px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-300 border-4 md:border-8 border-white shadow-sm"></div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 mb-6 md:mb-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                  Infosys Limited
                </h3>
                <p className="text-xl md:text-2xl font-bold text-slate-500 mt-1 md:mt-2">
                  Specialist Programmer
                </p>
              </div>
              <span className="inline-block text-slate-500 text-sm md:text-base font-bold bg-slate-50 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-slate-200 self-start">
                July 2022 - July 2025
              </span>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="mb-3 md:mb-4">
                  <h4 className="text-lg md:text-xl font-black text-slate-900">
                    Retail Client
                  </h4>
                </div>
                <ul className="text-sm md:text-base text-slate-500 space-y-2 list-disc pl-5 md:pl-6">
                  <li>
                    Developed reusable Java library for product search, reducing
                    duplicate code by 30%.
                  </li>
                  <li>
                    Implemented 50+ integration tests using Karate, increasing
                    coverage to 90%.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="mb-3 md:mb-4">
                  <h4 className="text-lg md:text-xl font-black text-slate-900">
                    Consumer Client
                  </h4>
                </div>
                <ul className="text-sm md:text-base text-slate-500 space-y-2 list-disc pl-5 md:pl-6">
                  <li>
                    Developed microservices for food supply chain management
                    using Spring Boot.
                  </li>
                  <li>
                    Configured Podman containers, reducing local setup time by
                    50%.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="mb-3 md:mb-4">
                  <h4 className="text-lg md:text-xl font-black text-slate-900">
                    Logistics Client
                  </h4>
                </div>
                <ul className="text-sm md:text-base text-slate-500 space-y-2 list-disc pl-5 md:pl-6">
                  <li>
                    Designed 15+ API endpoints for Order Management handling
                    10,000+ daily users.
                  </li>
                  <li>
                    Improved SonarQube coverage from 65% to 90%, eliminating
                    200+ code smells.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDUCATION --- */}
      <section
        ref={refs.educationRef}
        className="max-w-7xl mx-auto px-6 md:px-8 scroll-mt-24 md:scroll-mt-32"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10 md:mb-20 uppercase tracking-widest text-slate-200">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative w-full min-h-[300px] md:min-h-[400px] rounded-[32px] md:rounded-[40px] overflow-hidden group shadow-xl md:shadow-2xl flex items-end p-6 md:p-10 border border-slate-200 bg-slate-900">
            <img
              src={dtuBg}
              alt="DTU Campus"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-white w-full">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                M.Tech - Production Engg.
              </h3>
              <p className="text-blue-300 text-lg md:text-xl font-bold mb-3 md:mb-4">
                Delhi Technological University
              </p>
              <div className="text-white/90 font-bold tracking-widest uppercase text-[10px] md:text-xs bg-black/30 inline-block px-3 py-1.5 rounded-full backdrop-blur-sm">
                8.5 CGPA | 2020 - 2022
              </div>
            </div>
          </div>

          <div className="relative w-full min-h-[300px] md:min-h-[400px] rounded-[32px] md:rounded-[40px] overflow-hidden group shadow-xl md:shadow-2xl flex items-end p-6 md:p-10 border border-slate-200 bg-slate-900">
            <img
              src={ipBg}
              alt="GGSIPU Campus"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-white w-full">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                B.Tech - Mech & Auto
              </h3>
              <p className="text-slate-300 text-lg md:text-xl font-bold mb-3 md:mb-4">
                ADGITM, GGSIPU
              </p>
              <div className="text-white/90 font-bold tracking-widest uppercase text-[10px] md:text-xs bg-black/30 inline-block px-3 py-1.5 rounded-full backdrop-blur-sm">
                7.24 CGPA | 2015 - 2019
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section
        ref={refs.certsRef}
        className="max-w-7xl mx-auto px-6 md:px-8 scroll-mt-24 md:scroll-mt-32"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10 md:mb-16 uppercase tracking-widest text-slate-200">
          Certifications
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
          <div className="px-6 py-5 md:px-8 md:py-6 rounded-[24px] md:rounded-[30px] bg-white border border-slate-200 shadow-sm font-black text-lg md:text-xl flex items-center gap-4 md:gap-6 group hover:border-blue-500 hover:shadow-lg transition-all cursor-default w-full sm:w-auto">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl flex items-center justify-center p-2 border border-slate-100 shrink-0">
              <img
                src={azureLogo}
                alt="Azure"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span>Azure Fundamentals (AZ-900)</span>
          </div>

          <div className="px-6 py-5 md:px-8 md:py-6 rounded-[24px] md:rounded-[30px] bg-white border border-slate-200 shadow-sm font-black text-lg md:text-xl flex items-center gap-4 md:gap-6 group hover:border-orange-500 hover:shadow-lg transition-all cursor-default w-full sm:w-auto">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl flex items-center justify-center p-2 border border-slate-100 shrink-0">
              <img
                src={awsLogo}
                alt="AWS"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span>AWS Cloud Practitioner</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
