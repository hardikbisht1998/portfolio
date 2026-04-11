import React from "react";

const articles = [
  // --- SYSTEM DESIGN & HLD/LLD ---
  {
    title: "Mastering LLD: Designing a Scalable Parking Lot System",
    description:
      "A comprehensive guide to low-level design and object-oriented principles for a scalable parking lot architecture.",
    link: "https://www.linkedin.com/pulse/mastering-lld-designing-scalable-parking-lot-system-hardik-bisht-zwjxc",
    tags: ["LLD", "System Design", "OOD"],
    date: "2026",
  },
  {
    title: "HLD vs LLD – A Beginner-Friendly Guide to System Design",
    description:
      "Breaking down the differences between High-Level Design and Low-Level Design in software architecture.",
    link: "https://www.linkedin.com/pulse/hld-vs-lld-beginner-friendly-guide-system-design-hardik-bisht-fce2c",
    tags: ["System Design", "Architecture"],
    date: "2026",
  },
  {
    title: "How to Ace the “Design Tic-Tac-Toe” Interview Question",
    description:
      "From simple game logic to Design Patterns mastery for technical interviews.",
    link: "https://www.linkedin.com/pulse/how-ace-design-tic-tac-toe-interview-question-from-simple-bisht-tegqe",
    tags: ["LLD", "Interview Prep"],
    date: "2026",
  },

  // --- MICROSERVICES & DISTRIBUTED SYSTEMS ---
  {
    title:
      "Solving Distributed Transactions: A Deep Dive into the Saga Pattern",
    description:
      "Managing data consistency across microservices without distributed locks.",
    link: "https://www.linkedin.com/pulse/solving-distributed-transactions-deep-dive-saga-pattern-hardik-bisht-pjj5f",
    tags: ["Microservices", "Saga Pattern"],
    date: "2026",
  },
  {
    title: "The Silent Architect of Microservices: Why You Need an API Gateway",
    description:
      "Understanding request routing, rate limiting, and security at the edge of your microservices.",
    link: "https://www.linkedin.com/pulse/silent-architect-microservices-why-you-need-api-gateway-hardik-bisht-ngjlf",
    tags: ["Microservices", "API Gateway"],
    date: "2026",
  },
  {
    title: "Why your Microservices need a Distributed Message Queue",
    description:
      "Decoupling services and handling asynchronous communication effectively.",
    link: "https://www.linkedin.com/pulse/why-your-microservices-need-distributed-message-queue-hardik-bisht-saz3c",
    tags: ["Microservices", "Kafka", "Messaging"],
    date: "2026",
  },
  {
    title: "Circuit Breaker Pattern",
    description:
      "Preventing cascading failures and building fault-tolerant distributed systems.",
    link: "https://www.linkedin.com/pulse/circuit-breaker-pattern-hardik-bisht-b1bpf",
    tags: ["Microservices", "Resilience"],
    date: "2026",
  },
  {
    title: "The Silent Killer of Microservices: Cascading Failures",
    description:
      "Identifying and mitigating domino-effect crashes in distributed architectures.",
    link: "https://www.linkedin.com/pulse/silent-killer-microservices-cascading-failures-hardik-bisht-emczf",
    tags: ["Microservices", "Reliability"],
    date: "2026",
  },
  {
    title: "Stop Hardcoding Your IPs: The Power of Service Discovery",
    description:
      "Dynamic routing and service registries for modern cloud-native applications.",
    link: "https://www.linkedin.com/pulse/stop-hardcoding-your-ips-power-service-discovery-hardik-bisht-nzkgf",
    tags: ["Microservices", "Cloud"],
    date: "2026",
  },
  {
    title:
      "The Distributed Dilemma: Why the 2-Phase Commit Fails and How 3PC Fixes It",
    description:
      "Exploring consensus protocols and transaction management across nodes.",
    link: "https://www.linkedin.com/pulse/distributed-dilemma-why-2-phase-commit-fails-how-3pc-fixes-bisht-jpp1f",
    tags: ["Distributed Systems", "2PC"],
    date: "2026",
  },
  {
    title: 'The "All or Nothing" Problem: Understanding Two-Phase Commit (2PC)',
    description:
      "A deep dive into atomicity in distributed transaction processing.",
    link: "https://www.linkedin.com/pulse/all-nothing-problem-understanding-two-phase-commit-2pc-hardik-bisht-jp2if",
    tags: ["Distributed Systems", "Transactions"],
    date: "2026",
  },

  // --- SCALABILITY & ARCHITECTURE ---
  {
    title: "The Power of Distributed Caching: Scaling Your System to Millions",
    description:
      "Leveraging caching layers to dramatically reduce database load and latency.",
    link: "https://www.linkedin.com/pulse/power-distributed-caching-scaling-your-system-millions-hardik-bisht-phscc",
    tags: ["Caching", "Scalability"],
    date: "2026",
  },
  {
    title:
      "Building Systems That Never Sleep: A Developer’s Guide to High Availability",
    description:
      "Redundancy, failovers, and eliminating single points of failure.",
    link: "https://www.linkedin.com/pulse/building-systems-never-sleep-developers-guide-high-hardik-bisht-ewwlc",
    tags: ["Architecture", "Reliability"],
    date: "2026",
  },
  {
    title: "System Design 101: Mastering the Load Balancer",
    description:
      "How traffic distribution works under the hood to keep your servers alive.",
    link: "https://www.linkedin.com/pulse/system-design-101-mastering-load-balancer-hardik-bisht-8jzqf",
    tags: ["System Design", "Networking"],
    date: "2026",
  },
  {
    title: "Scaling Without the Chaos: Why You Need Consistent Hashing",
    description:
      "Distributing data evenly across nodes without massive re-hashing overhead.",
    link: "https://www.linkedin.com/pulse/scaling-without-chaos-why-you-need-consistent-hashing-hardik-bisht-joolf",
    tags: ["System Design", "Algorithms"],
    date: "2026",
  },
  {
    title: "Architecting for Scale: Understanding the CAP Theorem",
    description:
      "Balancing Consistency, Availability, and Partition Tolerance in modern systems.",
    link: "https://www.linkedin.com/pulse/architecting-scale-understanding-cap-theorem-hardik-bisht-esl7f",
    tags: ["System Design", "Theory"],
    date: "2026",
  },
  {
    title: 'The "Thundering Herd" is the silent killer of high-scale systems.',
    description:
      "How to prevent cache stampedes and server exhaustion during traffic spikes.",
    link: "https://www.linkedin.com/pulse/thundering-herd-silent-killer-high-scale-systems-hardik-bisht-chllf",
    tags: ["Scalability", "Performance"],
    date: "2026",
  },
  {
    title: "Beyond the Code: Understanding Proxies, VPNs, and Load Balancers",
    description:
      "Demystifying network intermediaries and their roles in secure architecture.",
    link: "https://www.linkedin.com/pulse/beyond-code-understanding-proxies-vpns-load-balancers-hardik-bisht-1n5pc",
    tags: ["Networking", "Security"],
    date: "2026",
  },
  {
    title:
      "Beyond the 'Pay' Button: Building Bulletproof Systems with Idempotency",
    description:
      "Ensuring safe retries and preventing duplicate actions in transactional APIs.",
    link: "https://www.linkedin.com/pulse/beyond-pay-button-building-bulletproof-systems-hardik-bisht-fdqkf",
    tags: ["API Design", "Architecture"],
    date: "2026",
  },
  {
    title: 'Stop Failing on "Flickers": The Art of the Retry',
    description:
      "Implementing exponential backoff and jitter to handle transient network faults.",
    link: "https://www.linkedin.com/pulse/stop-failing-flickers-art-retry-hardik-bisht-rxzbf",
    tags: ["Resilience", "Best Practices"],
    date: "2026",
  },
  {
    title: "Anatomy of a Domain",
    description: "A deep dive into Domain-Driven Design (DDD) concepts.",
    link: "https://www.linkedin.com/pulse/anatomy-domain-hardik-bisht-xjjef",
    tags: ["Architecture", "DDD"],
    date: "2026",
  },
  {
    title: "Beyond the Code: Why Every Developer is a Security Engineer",
    description:
      "Integrating secure coding practices into your daily development workflow.",
    link: "https://www.linkedin.com/pulse/beyond-code-why-every-developer-security-engineer-hardik-bisht-oirhf",
    tags: ["Security", "Best Practices"],
    date: "2026",
  },
  {
    title: "Understanding the Software Development Life Cycle (SDLC)",
    description:
      "A practical walkthrough of the SDLC using a real-world project example.",
    link: "https://www.linkedin.com/pulse/1-understanding-software-development-life-cycle-sdlc-real-world-okxrc",
    tags: ["Software Engineering", "SDLC"],
    date: "2026",
  },

  // --- DATABASES ---
  {
    title: "Concurrency Control: The Invisible Force Behind Stable Systems",
    description:
      "Preventing race conditions and ensuring data integrity under heavy load.",
    link: "https://www.linkedin.com/pulse/concurrency-control-invisible-force-behind-stable-systems-bisht-demce",
    tags: ["Databases", "Concurrency"],
    date: "2026",
  },
  {
    title:
      "Database Transactions & ACID (Practical Guide for Backend Engineers)",
    description:
      "Understanding Atomicity, Consistency, Isolation, and Durability in practice.",
    link: "https://www.linkedin.com/pulse/database-transactions-acid-practical-guide-backend-engineers-bisht-fkmec",
    tags: ["Databases", "ACID"],
    date: "2026",
  },
  {
    title: "Database Masterclass: Navigating the 2-Phase Locking (2PL) Family",
    description:
      "How databases handle isolation levels and lock acquisition strategies.",
    link: "https://www.linkedin.com/pulse/database-masterclass-navigating-2-phase-locking-2pl-family-bisht-pzfcc",
    tags: ["Databases", "Internals"],
    date: "2026",
  },
  {
    title: "Database Sharding: The Ultimate Guide to Scaling Beyond Limits",
    description:
      "Strategies for horizontal database partitioning to handle massive datasets.",
    link: "https://www.linkedin.com/pulse/database-sharding-ultimate-guide-scaling-beyond-limits-hardik-bisht-zitkc",
    tags: ["Databases", "Scalability"],
    date: "2026",
  },
  {
    title: "How Database Partitioning Solves Performance Problems at Scale",
    description:
      "Improving query speeds and manageability using table partitioning.",
    link: "https://www.linkedin.com/pulse/how-database-partitioning-solves-performance-problems-hardik-bisht-gxgvc",
    tags: ["Databases", "Performance"],
    date: "2026",
  },
  {
    title: "How Indexes, Scans, and Bloom Filters Actually Work in Databases",
    description: "Under the hood of database search optimization and B-Trees.",
    link: "https://www.linkedin.com/pulse/how-indexes-scans-bloom-filters-actually-work-databases-hardik-bisht-ocn3c",
    tags: ["Databases", "Internals"],
    date: "2026",
  },
  {
    title:
      "How Tables & Indexes Are Stored on Disk (Pages, Heap, I/O, Row IDs)",
    description:
      "Understanding the physical storage layer of relational databases.",
    link: "https://www.linkedin.com/pulse/how-tables-indexes-stored-disk-pages-heap-io-row-ids-hardik-bisht-jtdvc",
    tags: ["Databases", "Internals"],
    date: "2026",
  },
  {
    title: "SQL vs. NoSQL: Choosing the Right Foundation for Your Tech Stack",
    description:
      "A comparative guide to relational and document-based data modeling.",
    link: "https://www.linkedin.com/pulse/sql-vs-nosql-choosing-right-foundation-your-tech-stack-hardik-bisht-dj1pf",
    tags: ["Databases", "Architecture"],
    date: "2026",
  },

  // --- JAVA & CORE CONCEPTS ---
  {
    title: "JAR, WAR AND EAR",
    description:
      "Understanding Java application packaging and deployment formats.",
    link: "https://www.linkedin.com/pulse/jar-war-ear-hardik-bisht-pklwf",
    tags: ["Java", "Deployment"],
    date: "2026",
  },
  {
    title: "Mastering Software Design Principles: Build Smarter, Not Harder",
    description:
      "Applying SOLID and DRY principles to write maintainable code.",
    link: "https://www.linkedin.com/pulse/mastering-software-design-principles-build-smarter-harder-bisht-h7eic",
    tags: ["Software Engineering", "Java"],
    date: "2026",
  },

  // --- DESIGN PATTERNS (CREATIONAL) ---
  {
    title: "Creational Design Patterns in Java: The Complete Guide",
    description: "Mastering object instantiation and lifecycle management.",
    link: "https://www.linkedin.com/pulse/copy-creational-design-patterns-java-complete-guide-smart-bisht-wmnuc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Demystifying the Singleton Design Pattern in Java",
    description:
      "Ensuring a class has only one instance, with thread-safe implementations.",
    link: "https://www.linkedin.com/pulse/demystifying-singleton-design-pattern-java-hardik-bisht-l3ync",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Factory Method Pattern",
    description:
      "Moving from messy if-else logic to clean, extensible object creation.",
    link: "https://www.linkedin.com/pulse/mastering-factory-method-pattern-from-messy-if-else-clean-bisht-rgbgc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Abstract Factory Pattern in Java",
    description: "Creating families of related or dependent objects safely.",
    link: "https://www.linkedin.com/pulse/mastering-abstract-factory-pattern-java-creating-families-bisht-jmkqc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Builder Design Pattern in Java",
    description: "Constructing complex objects step by step with a fluent API.",
    link: "https://www.linkedin.com/pulse/mastering-builder-design-pattern-java-hardik-bisht-zfyec",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Prototype Design Pattern in Java",
    description: "Efficient object cloning for flexible configurations.",
    link: "https://www.linkedin.com/pulse/mastering-prototype-design-pattern-java-efficient-object-hardik-bisht-5qgbc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },

  // --- DESIGN PATTERNS (STRUCTURAL) ---
  {
    title:
      "The Adapter Design Pattern: Turning Incompatibility Into Collaboration",
    description: "Bridging the gap between legacy code and modern interfaces.",
    link: "https://www.linkedin.com/pulse/adapter-design-pattern-turning-incompatibility-hardik-bisht-lxxgc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Bridge Design Pattern",
    description:
      "Decoupling abstraction from implementation to let them vary independently.",
    link: "https://www.linkedin.com/pulse/mastering-bridge-design-pattern-decoupling-from-hardik-bisht-p6hlc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Composite Pattern for Shipment Pricing in Java",
    description: "Treating individual objects and compositions uniformly.",
    link: "https://www.linkedin.com/pulse/composite-pattern-shipment-pricing-java-hardik-bisht-9fdkc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Decorator Pattern in Java",
    description:
      "Adding flexibility and new behaviors to objects dynamically beyond inheritance.",
    link: "https://www.linkedin.com/pulse/mastering-decorator-pattern-java-adding-flexibility-beyond-bisht-r8vcc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Facade Pattern in Java: Simpler APIs over Complex Systems",
    description:
      "Hiding subsystem complexity behind a unified, easy-to-use interface.",
    link: "https://www.linkedin.com/pulse/facade-pattern-java-simpler-apis-over-complex-systems-hardik-bisht-jsrfc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "The Flyweight Design Pattern: Optimizing Memory Usage",
    description:
      "Saving RAM by sharing state across massive numbers of fine-grained objects.",
    link: "https://www.linkedin.com/pulse/flyweight-design-pattern-optimizing-memory-usage-shared-hardik-bisht-kledc",
    tags: ["Design Patterns", "Optimization"],
    date: "2026",
  },
  {
    title: "Mastering the Proxy Design Pattern in Java",
    description:
      "Controlling access and why Spring AOP uses it behind the scenes.",
    link: "https://www.linkedin.com/pulse/mastering-proxy-design-pattern-java-why-spring-aop-uses-hardik-bisht-lklfc",
    tags: ["Design Patterns", "Spring AOP"],
    date: "2026",
  },

  // --- DESIGN PATTERNS (BEHAVIORAL) ---
  {
    title: "Mastering the Chain of Responsibility Design Pattern",
    description:
      "Passing requests along a chain of handlers for flexible processing.",
    link: "https://www.linkedin.com/pulse/mastering-chain-responsibility-design-pattern-hardik-bisht-o0d3c",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Command Design Pattern",
    description:
      "Why turning actions into objects matters for undo/redo functionality.",
    link: "https://www.linkedin.com/pulse/mastering-command-design-pattern-why-turning-actions-objects-bisht-atxac",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Iterator Design Pattern: Clean Traversal, Clean Code",
    description: "Standardizing how you loop through complex collections.",
    link: "https://www.linkedin.com/pulse/iterator-design-pattern-clean-traversal-code-hardik-bisht-laegc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Untangling Spaghetti Code with the Mediator Pattern",
    description: "Centralizing complex communications between objects.",
    link: "https://www.linkedin.com/pulse/untangling-spaghetti-code-mediator-pattern-hardik-bisht-fmjxc",
    tags: ["Design Patterns", "Architecture"],
    date: "2026",
  },
  {
    title: "Mastering the Memento Design Pattern with a Chess Game Example",
    description: "Capturing and restoring object states cleanly.",
    link: "https://www.linkedin.com/pulse/mastering-memento-design-pattern-chess-game-example-hardik-bisht-gnuqc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Observer Design Pattern in Java: From Concept to Clean Code",
    description:
      "Building reactive, event-driven systems using publish/subscribe mechanisms.",
    link: "https://www.linkedin.com/pulse/observer-design-pattern-java-from-concept-clean-code-hardik-bisht-ql9xc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the State Design Pattern: Real-World Example",
    description:
      "Managing object behavior changes based on internal state transitions.",
    link: "https://www.linkedin.com/pulse/mastering-state-design-pattern-real-world-aadhaar-address-bisht-bphqc",
    tags: ["Design Patterns", "State Pattern"],
    date: "2026",
  },
  {
    title:
      "The Strategy Design Pattern: Swapping Algorithms Without Rewriting Code",
    description:
      "Encapsulating algorithms to make them interchangeable at runtime.",
    link: "https://www.linkedin.com/pulse/strategy-design-pattern-swapping-algorithms-without-rewriting-bisht-q7goc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Template Method Pattern in Java",
    description:
      "Defining the skeleton of an algorithm while letting subclasses fill in the blanks.",
    link: "https://www.linkedin.com/pulse/mastering-template-method-pattern-java-real-example-hardik-bisht-rz6tc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
  {
    title: "Mastering the Visitor Design Pattern",
    description:
      "Adding operations to object structures without breaking production code.",
    link: "https://www.linkedin.com/pulse/mastering-visitor-design-pattern-adding-operations-without-bisht-wlvmc",
    tags: ["Design Patterns", "Java"],
    date: "2026",
  },
];

export default function Articles() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-8">
      <div className="max-w-6xl mx-auto mt-10">
        <header className="mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Technical Writing & <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Deep dives into backend architecture, system design patterns, and
            Java performance. I write to clarify complex concepts and share
            practical engineering solutions.
          </p>
        </header>

        {/* Masonry-style Grid for 50+ Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 mb-4 leading-snug transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm mb-8">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">
                  {article.date}
                </span>
                <div className="flex items-center text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Read Article
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
