// export default Contact;
import React from "react";
import { Mail, Phone, ExternalLink } from "lucide-react"; // Only keeping the 100% safe core icons

const Contact = () => {
  const contactDetails = {
    email: "hardikbisht0902@gmail.com",
    primaryPhone: "+91 8920008996",
    secondaryPhone: "+91 8283951479",
    linkedin: "https://www.linkedin.com/in/hardik-bisht",
    leetcode: "https://leetcode.com/u/hardikbisht/",
    github: "https://github.com/hardikbisht1998",
    insta: "https://www.instagram.com/_hardik.bisht?igsh=MWlsYmpmdWJybzYxdQ==",
  };

  // Using official brand icons directly from SimpleIcons CDN
  // Using official brand icons directly from SimpleIcons CDN (Auto-colored!)
  const socials = [
    {
      name: "LinkedIn",
      url: contactDetails.linkedin,
      img: "https://cdn.simpleicons.org/linkedin", // <-- Removed hex code
      hoverClass: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200",
    },
    {
      name: "GitHub",
      url: contactDetails.github,
      img: "https://cdn.simpleicons.org/github", // <-- Removed hex code
      hoverClass:
        "hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300",
    },
    {
      name: "LeetCode",
      url: contactDetails.leetcode,
      img: "https://cdn.simpleicons.org/leetcode", // <-- Removed hex code
      hoverClass:
        "hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200",
    },
    {
      name: "Instagram",
      url: contactDetails.insta,
      img: "https://cdn.simpleicons.org/instagram", // <-- Removed hex code
      hoverClass: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200",
    },
  ];

  return (
    <main className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-6 md:px-8 py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Header Section */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900">
          Let's <span className="text-blue-600">Connect.</span>
        </h1>
        <p className="text-slate-500 text-xl md:text-2xl leading-relaxed font-medium">
          I'm always open to discussing system design, backend architecture, or
          potential collaborations. Feel free to drop a message!
        </p>
      </div>

      {/* Primary Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        {/* Email Card */}
        <a
          href={`mailto:${contactDetails.email}`}
          className="group p-8 md:p-10 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <Mail size={28} />
          </div>
          <h3 className="font-black text-2xl mb-2 text-slate-900">Email Me</h3>
          <p className="text-slate-500 font-medium text-lg">
            {contactDetails.email}
          </p>
        </a>

        {/* Phone Card */}
        <a
          href={`tel:${contactDetails.primaryPhone.replace(/\s+/g, "")}`}
          className="group p-8 md:p-10 rounded-[32px] border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-green-300 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
            <Phone size={28} />
          </div>
          <h3 className="font-black text-2xl mb-2 text-slate-900">Call Me</h3>
          <div className="flex flex-col text-slate-500 font-medium text-lg">
            <span>{contactDetails.primaryPhone}</span>
            <span>{contactDetails.secondaryPhone}</span>
          </div>
        </a>
      </div>

      {/* Social Links Section */}
      <div className="pt-8 border-t border-slate-100">
        <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">
          Find me online
        </h4>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 bg-white text-slate-600 font-bold shadow-sm transition-all duration-300 group ${social.hoverClass}`}
            >
              <img
                src={social.img}
                alt={social.name}
                className="w-6 h-6 transition-transform group-hover:-rotate-6 group-hover:scale-110"
              />
              {social.name}
              <ExternalLink
                size={18}
                className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-slate-400"
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contact;
