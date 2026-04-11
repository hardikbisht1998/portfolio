import React from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactDetails = {
    email: "hardikbisht0902@gmail.com",
    phone: "+91 8920008996, +91 8283951479",
    linkedin: "https://www.linkedin.com/in/hardik-bisht",
    leetcode: "https://leetcode.com/u/hardikbisht/",
    github: "https://github.com/hardikbisht1998",
  };

  return (
    <main className="max-w-5xl mx-auto px-8 py-20 animate-in fade-in duration-500">
      <div className="max-w-2xl mb-16">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          Let's Connect.
        </h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          I'm always open to discussing system design, backend architecture, or
          potential collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Email Card */}
        <a
          href={`mailto:${contactDetails.email}`}
          className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Mail size={24} />
          </div>
          <h3 className="font-bold text-xl mb-2">Email Me</h3>
          <p className="text-slate-500 mb-4">{contactDetails.email}</p>
        </a>

        {/* Phone Card */}
        <a
          href={`tel:${contactDetails.phone}`}
          className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
            <Phone size={24} />
          </div>
          <h3 className="font-bold text-xl mb-2">Call Me</h3>
          <p className="text-slate-500 mb-4">{contactDetails.phone}</p>
        </a>
      </div>

      {/* Social Buttons without Icons to prevent crashes */}
      <div className="flex flex-wrap gap-4">
        <a
          href={contactDetails.linkedin}
          target="_blank"
          className="px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold"
        >
          LinkedIn
        </a>
        <a
          href={contactDetails.github}
          target="_blank"
          className="px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold"
        >
          GitHub
        </a>
        <a
          href={contactDetails.leetcode}
          target="_blank"
          className="px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold"
        >
          Leetcode
        </a>
      </div>
    </main>
  );
};

export default Contact;
