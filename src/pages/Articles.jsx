import React from "react";

const articles = [
  {
    title: "Mastering the Circuit Breaker Pattern in Spring Boot",
    description:
      "How to prevent cascading failures in distributed systems using Resilience4j.",
    link: "https://www.linkedin.com/pulse/your-article-link-1",
    tags: ["Microservices", "Java", "System Design"],
    date: "March 2026",
  },
  {
    title: "API Gateway vs. Load Balancer: Which one do you need?",
    description:
      "Deep dive into request routing, authentication, and traffic management.",
    link: "https://www.linkedin.com/pulse/your-article-link-2",
    tags: ["Architecture", "Scalability"],
    date: "February 2026",
  },
  {
    title: "Optimistic vs. Pessimistic Locking in Distributed Databases",
    description:
      "Choosing the right concurrency control model for high-traffic applications.",
    link: "https://www.linkedin.com/pulse/your-article-link-3",
    tags: ["Databases", "Java", "System Design"],
    date: "January 2026",
  },
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Technical Writing & Insights
          </h1>
          <p className="text-lg text-slate-600">
            Deep dives into backend architecture, system design patterns, and
            Java performance.
          </p>
        </header>

        <div className="grid gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-slate-400 font-medium">
                  {article.date}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 mb-3 transition-colors">
                {article.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {article.description}
              </p>

              <div className="flex items-center text-blue-600 font-bold text-sm">
                Read on LinkedIn
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
