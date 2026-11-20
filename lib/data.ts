export const profile = {
  name: "Kartik Bajpai",
  role: "SDE & GEN-AI Enthusiast",
  location: "New Delhi, India",
  availability: "Open to full-time SDE roles as a 2027 graduate",
  tagline:
    "I build end to end backend systems and GenAI-powered products from real-time pipelines to production APIs.",
  email: "kartik.bajpai006@gmail.com",
  phone: "+91-9560332728",
  github: "https://github.com/kbajpai06",
  githubUsername: "kbajpai06",
  linkedin: "https://www.linkedin.com/in/kartik-bajpai-278420312",
  codeforces: "https://codeforces.com/profile/Kartiik.server",
  leetcode: "https://leetcode.com/u/kartikbajpaii/",
};

export const education = {
  institution: "Delhi Technological University",
  degree: "B.Tech, Software Engineering",
  period: "Aug 2023 – May 2027",
  detail: "CGPA 8.17",
  focus: "Software Development, Generative AI and System Design",
};

export const stats = [
  { label: "CGPA", value: "8.17" },
  { label: "LeetCode rating", value: "1796" },
  { label: "Problems solved", value: "700+" },
  { label: "Internships", value: "2" },
];

export const experience = [
  {
    company: "Ordnance Parachute Factory, Kanpur",
    role: "Research & Development Intern",
    period: "June 2026 – Aug 2026",
    points: [
      "Designed and built a scalable, full-stack real-time RFID file tracking system in Python (Flask), applying OOP design and multi-threading to handle concurrent multi-reader polling and data synchronization.",
      "Built a front-end dashboard integrated with a MySQL back-end to automate tag registration, edit metadata, monitor reader health, and export audit logs.",
      "Debugged and resolved TCP network instability with auto-reconnect error handling, and optimized database performance through structured indexing on high-frequency movement logs.",
    ],
  },
  {
    company: "VLED LABS, IIT Ropar",
    role: "Full Stack Development Intern",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Built an automated real-time Generative AI question-generation pipeline, integrating a local Ollama (Gemma 2B) LLM into a Node.js backend with InversifyJS for modular dependency injection.",
      "Optimized inference latency to under 3 seconds per text segment — a 30% reduction in question-generation buffering versus standard cloud-hosted APIs.",
      "Implemented custom prompt-engineering constraints, raising AI structural response accuracy to 98% and ensuring reliable JSON parsing under live-streaming conditions.",
    ],
  },
];

export const projects = [
  {
    name: "AI-Powered Fitness Platform",
    description:
      "A full-stack fitness platform combining a real-time GenAI coaching engine with on-device computer vision for rep counting — no network required for form analysis.",
    points: [
      "Secured REST endpoints via OAuth2/JWT and implemented Redis cache-aside, cutting API latency from ~500ms to under 1ms.",
      "Built a real-time coaching engine on Groq Llama 3.3 70B with dynamic context injection, using SSE streaming to bring time-to-first-token down from ~2s to under 200ms.",
      "Built an on-device computer vision form analyzer with MoveNet to count reps in real time with zero network dependency.",
      "Designed a hybrid ML-driven progression and diet engine for adaptive workout and diet targets.",
    ],
    stack: ["Flutter", "Dart", "FastAPI", "PostgreSQL", "Redis", "Groq Llama", "Computer Vision"],
    github: "https://github.com/kbajpai06/fitness-app",
  },
  {
    name: "Car Guard",
    description:
      "An embedded intrusion-detection and driver-authentication system that watches over a vehicle from ignition to drive, using sensor fusion and on-device face recognition.",
    points: [
      "Built a real-time intrusion detection system classifying sound, vibration, and pressure sensor anomalies from ESP32 devices to flag unauthorized tampering.",
      "Engineered a secure driver-authentication layer using ResNet-based face recognition (128-D dlib embeddings), with confidence-threshold logic blocking unverified access before ignition.",
      "Built a speed-triggered drowsiness-monitoring pipeline and a real-time dashboard using Firebase listeners for live event monitoring.",
    ],
    stack: ["FastAPI", "Next.js", "Firebase", "ESP32", "Docker"],
    github: "https://github.com/kbajpai06/CarGuard",
  },
    {
    name: "Market Risk & Trading Analytics Dashboard",
    description:
      "A market risk analytics platform combining SQL-based analytics, VaR calculation, ML volatility forecasting, and a Power BI dashboard, orchestrated with daily automation.",
    points: [
      "Built a SQL analytics layer with rolling volatility, correlation matrices, and anomaly-flag views on top of ingested OHLCV price data.",
      "Implemented historical and parametric Value-at-Risk (VaR) at both single-asset and portfolio level.",
      "Built an LSTM volatility forecaster and benchmarked it against a classical GARCH(1,1) baseline with a chronological train/test split to avoid look-ahead bias.",
      "Orchestrated daily ingestion, anomaly alerts, and VaR snapshots with Airflow, with automatic retries and explicit task dependencies.",
    ],
    stack: ["Python", "PostgreSQL", "SQL", "PyTorch", "Airflow", "Power BI"],
    github: "https://github.com/kbajpai06/market-risk-and-trading-analytics",
  },
    {
    name: "RealBT — Loan Processing Platform",
    description:
      "A full-stack, role-based loan processing platform connecting brokers, loan providers, and customers — from property listings and loan offers to document verification and approval tracking. Built collaboratively with a co-developer.",
    points: [
      "Designed role-based access control (RBAC) for customers, loan providers, and brokers, each with a dedicated dashboard.",
      "Built two parallel loan flows: a property-based flow where brokers list properties and providers bid with loan offers, and a direct loan-application flow for customers not tied to a property.",
      "Implemented secure authentication with JWT and bcrypt, plus a document upload and eligibility verification pipeline to filter unqualified leads before they reach providers.",
      "Structured the MERN stack app with clear separation between controllers, middleware, and Mongoose models for loan applications, offers, and profiles.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/kbajpai06/Real-Estate-Financing-Platform",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Flutter",
      "Express.js",
      "FastAPI",
      "Flask",
      "OAuth",
      "Firebase",
      
    ],
  },
  {
    category: "Databases & Middlewares",
    items: ["PostgreSQL", "MongoDB", "Dynamodb", "Firebase","Redis"],
  },
  {
    category: "Coursework",
    items: [
      "OOPs",
      "DBMS",
      "Computer Networks",
      "Machine Learning",
      "Algorithm Design",
      "Operating Systems",
      "Data Structures and Algorithms",
    ],
  },
];

export const achievements = [
  {
    title: "Codeforces — Specialist",
    detail: "Max rank 1414 under handle Kartiik.server",
    date: "Ongoing",
    link: "https://codeforces.com/profile/Kartiik.server",
  },
  {
    title: "LeetCode — Top 8%",
    detail: "700+ problems solved, contest rating 1761",
    date: "Ongoing",
    link: "https://leetcode.com/u/kartikbajpaii/",
  },
  {
    title: "Amazon ML Summer School 2025",
    detail: "Selected participant",
    date: "2025",
  },
  {
    title: "NPTEL — The Joy of Computing using Python",
    detail: "Scored 97%, ranked Top 2%",
    date: "Certificate",
  },
  {
    title: "NPTEL — Human Computer Interaction",
    detail: "Scored 99%, ranked Top 2%",
    date: "Certificate",
  },
];

export const bootLines = [
  "INITIALIZING KARTIK.SYS",
  "LOADING EDUCATION MODULE :: DTU_2027",
  "MOUNTING BACKEND_STACK :: OK",
  "MOUNTING GENAI_PIPELINE :: OK",
  "FETCHING GITHUB_ACTIVITY :: OK",
  "SYSTEM READY",
];
