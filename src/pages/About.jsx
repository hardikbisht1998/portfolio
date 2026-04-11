import React from "react";
import pic from "../assets/sitepic.jpeg";

const About = () => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Photo Section */}
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-2xl">
            {/* Replace the src with your actual photo path */}
            <img
              src={pic}
              alt="Hardik"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">About Me</h2>

          {}
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              I’m a{" "}
              <span className="text-slate-900 font-semibold">
                Software Developer
              </span>{" "}
              with nearly 4 years of experience specializing in Java Backend
              Development. My journey from studying engineering at{" "}
              <span className="text-slate-900">DTU</span> to building resilient
              systems at{" "}
              <span className="text-blue-600 font-medium">EdgeVerve</span>{" "}
              reflects my determination and hardworking nature. I enjoy solving
              complex architectural puzzles and am currently expanding my skill
              set into the frontend world with React and Tailwind CSS.
            </p>

            <p>
              Originally from Delhi and now based in Bangalore, I bring an
              explorer's mindset to both my work and personal life. I am
              naturally curious and love exploring new things, whether that
              means diving into technical reading or studying the Indian stock
              market.
            </p>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-slate-900 font-bold mb-3 uppercase text-xs tracking-widest">
                Outside of Coding
              </h4>
              <p className="text-base">
                When I'm not deep in system architecture, I lead a highly active
                life. I am deeply interested in{" "}
                <span className="text-slate-900 font-medium">fitness</span>,
                running , and love{" "}
                <span className="text-slate-900 font-medium">traveling</span> to
                explore new destinations. I also believe in giving back to the
                community and volunteer to teach students whenever I have the
                opportunity.
              </p>
            </div>
          </div>

          {}
        </div>
      </div>
    </main>
  );
};

export default About;
