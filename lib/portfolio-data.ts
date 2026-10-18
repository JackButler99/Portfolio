// Edit this file first when you are ready to replace the portfolio placeholders.
// All core identity, service, project, and contact content lives here.

export const profile = {
  name: "Ridho Kurniawan",
  initials: "RK",
  role: "Full-Stack Developer & Data/AI Engineer",
  location: "Indonesia · Available worldwide",
  availability: "Open for freelance projects",
  email: "ridhokurniawan32@gmail.com",
  intro:
    "I build dependable web products and data systems—from the interface clients use to the pipelines and models working behind it.",
  shortBio:
    "An independent engineer focused on useful software, clear communication, and solutions that remain maintainable after launch.",
  upworkUrl: "https://www.upwork.com/freelancers/~01a56113f2390a9378",
  githubUrl: "https://github.com/JackButler99",
  linkedinUrl: "#replace-with-your-linkedin-profile",
};

export const navItems = [
  { href: "/", label: "Home", external: false },
  { href: "/projects", label: "Projects", external: false },
  { href: "/services", label: "Services", external: false },
  { href: "/about", label: "About", external: false },
  { href: "/contact", label: "Contact", external: false },
  { href: profile.githubUrl, label: "GitHub", external: true },
];

export type ProjectCaseStudy = {
  overview: Array<{ label: string; value: string }>;
  highlights: Array<{ number: string; title: string; text: string }>;
  decisions: Array<{ title: string; text: string }>;
  validation: string[];
  nextSteps: string[];
};

export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  shortTitle?: string;
  category: string;
  label: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: Array<{ value: string; label: string }>;
  stack: string[];
  services: string[];
  accent: "lime" | "cyan" | "violet" | "orange";
  kind: "repository" | "concept";
  repositoryName: string | null;
  repositoryUrl: string | null;
  liveUrl: string | null;
  image?: string;
  imageAlt?: string;
  caseStudy?: ProjectCaseStudy;
};

export const projects: PortfolioProject[] = [
  {
    slug: "ular-tangga-v2",
    number: "01",
    title: "Main Berdua",
    shortTitle: "Main Berdua",
    category: "Multiplayer game platform",
    label: "Live independent product",
    summary:
      "Main Berdua is a private, browser-based game platform for couples. Two players enter a shared room with a nickname and room code, then choose from five games ranging from quick hidden-answer prompts to a cooperative maze. The platform reuses the same room, player, and chat system while each game keeps its own rules and interface.",
    challenge:
      "The project began as a single snakes-and-ladders game. Turning it into a five-game platform introduced a larger engineering problem: every game needed different rules and state, but players should not have to relearn how to create a room, invite a partner, chat, or continue a session.\n\nSome games also depend on hidden information. One player’s answer must remain private until both players submit. Turn-based games must keep two browsers on the same room state, while the cooperative maze must track movement, resources, and shared progress.",
    solution:
      "I separated the shared multiplayer system from the individual game engines.\n\nNext.js handles the interface and server-side operations. A common platform layer manages rooms, players, chat, game selection, and session status. Each game module owns its own rules, state transitions, and UI.\n\nDrizzle maps the data model to Neon Postgres. Stable data such as room identity, players, messages, turns, and status uses relational columns. Game-specific state is stored as JSONB because the board game, quizzes, streak game, and maze require different data structures.",
    outcome:
      "The production application now supports five playable experiences through one room flow. A new game can reuse the existing room, player, chat, and deployment infrastructure instead of rebuilding those concerns from the beginning.\n\nThe application is deployed on Vercel with Neon Postgres. A production smoke test successfully created a room, loaded the game board, and confirmed that its data remained available after a full page reload.",
    metrics: [
      { value: "5", label: "Playable game modes" },
      { value: "2", label: "Players in each room" },
      { value: "0", label: "Accounts required" },
    ],
    stack: ["Next.js", "TypeScript", "Neon Postgres", "Drizzle ORM", "Tailwind CSS", "Vitest"],
    services: ["Product architecture", "Multi-game UX", "State synchronization", "Database & deployment"],
    accent: "lime",
    kind: "repository",
    repositoryName: "JackButler99/ular-tangga-v2",
    repositoryUrl: "https://github.com/JackButler99/ular-tangga-v2",
    liveUrl: "https://ular-tangga-v2.vercel.app/",
    image: "/projects/ular-tangga-v2-landing.jpg",
    imageAlt: "Main Berdua catalog showing five games for couples",
    caseStudy: {
      overview: [
        { label: "Product", value: "Private two-player game platform" },
        { label: "Role", value: "Product design, system architecture, and full-stack engineering" },
        { label: "Delivery", value: "Independent product deployed on Vercel" },
      ],
      highlights: [
        {
          number: "01",
          title: "Private rooms without user accounts",
          text: "A host chooses a game, enters a nickname, and receives a room code to share. The second player joins from another browser without creating an account. Both clients connect to the same room record and persisted game session.",
        },
        {
          number: "02",
          title: "Five games on one shared platform",
          text: "The catalog includes a story-led board game, two hidden-answer couple quizzes, a choice-and-streak game, and a cooperative 7×7 maze. A game registry connects each catalog entry to an isolated game module, while room and chat behavior stays shared.",
        },
        {
          number: "03",
          title: "Mechanics designed for two players",
          text: "Hidden-answer games store each submission separately and reveal the result only when both players are ready. Turn-based games persist the active player and current state. The maze adds shared resources, protective abilities, and cooperative progress without requiring a separate multiplayer foundation.",
        },
      ],
      decisions: [
        {
          title: "Separate platform responsibilities from game rules",
          text: "Room creation, joining, chat, reusable UI, and the game registry belong to the shared platform. Rules and state transitions stay inside each game module. This limits coupling and makes individual games easier to change.",
        },
        {
          title: "Combine relational data with flexible game state",
          text: "Rooms, players, turns, and messages have predictable structures, so they use relational fields. JSONB stores the parts that vary between games. This avoids forcing five different rule systems into one rigid schema.",
        },
        {
          title: "Use server-backed state without mandatory accounts",
          text: "A room code and player identity provide enough context for a short private session. Removing account creation reduces onboarding friction, while the server still keeps both players connected to the same persisted state.",
        },
        {
          title: "Test reusable game behavior",
          text: "Vitest covers shared configurable question-selection behavior. TypeScript and production builds catch integration problems across the platform and individual game modules.",
        },
      ],
      validation: [
        "Verified the five game entries and their room-onboarding flows in the deployed application.",
        "Created a production room and confirmed that its state survived a browser reload.",
        "Ran TypeScript, lint, production-build, and targeted Vitest checks before deployment.",
      ],
      nextSteps: [
        "Measure room creation, successful joins, game completion, and reconnect failures for each game.",
        "Add clearer room-expiration and reconnection behavior for interrupted sessions.",
        "Audit keyboard navigation, focus states, motion, and screen-reader behavior across every game.",
      ],
    },
  },
  {
    slug: "learn-toefl",
    number: "02",
    title: "ITP Practice Lab",
    shortTitle: "ITP Practice",
    category: "Full-stack learning platform",
    label: "Live independent product",
    summary:
      "An independent TOEFL ITP practice platform with secure accounts, focused practice sessions, a timed full simulation, progress history, and answer review.",
    challenge:
      "Independent learners need more than a static question list: they need realistic section timing, saved progress, clear explanations, and an honest distinction between practice results and official TOEFL scoring.",
    solution:
      "I developed a full-stack Next.js application with original question content, section-specific practice, a server-enforced 115-minute simulation, Neon/PostgreSQL persistence, scrypt password hashing, HttpOnly sessions, and post-test review.",
    outcome:
      "The deployed product covers registration, focused practice, full simulation, autosaved answers, progress history, section summaries, and detailed explanations. A production smoke test confirmed that an answer remained selected after a full page reload.",
    metrics: [
      { value: "140", label: "Original practice questions" },
      { value: "3", label: "Test sections" },
      { value: "115m", label: "Full simulation" },
    ],
    stack: ["Next.js", "TypeScript", "Neon Postgres", "Node.js", "Web Speech API"],
    services: ["Product architecture", "Secure authentication", "Assessment workflow", "Data migration & deployment"],
    accent: "cyan",
    kind: "repository",
    repositoryName: "JackButler99/LearnToefl",
    repositoryUrl: "https://github.com/JackButler99/LearnToefl",
    liveUrl: "https://learn-toefl.vercel.app/",
    image: "/projects/learn-toefl-landing.jpg",
    imageAlt: "ITP Practice Lab landing page showing its 140-question study experience",
    caseStudy: {
      overview: [
        { label: "Product", value: "Independent TOEFL ITP practice platform" },
        { label: "My role", value: "Product design, content, and full-stack engineering" },
        { label: "Delivery", value: "Next.js and Neon, live on Vercel" },
      ],
      highlights: [
        {
          number: "01",
          title: "Practice for focus, simulation for rhythm",
          text: "Learners can choose a short untimed set for one section or complete all 140 questions through separately timed Listening, Structure, and Reading sections.",
        },
        {
          number: "02",
          title: "Progress survives the session",
          text: "Accounts, attempts, answers, section state, and deadlines are stored in PostgreSQL. A learner can leave a practice session, return later, and continue from saved work.",
        },
        {
          number: "03",
          title: "Useful feedback without false authority",
          text: "Review screens explain original practice questions and report raw results, while the product clearly avoids presenting percentages as an official ETS scaled score or certificate.",
        },
      ],
      decisions: [
        {
          title: "Enforce exam time on the server",
          text: "The database stores section deadlines and the server controls section transitions, preventing a refreshed browser or edited client timer from reopening completed sections.",
        },
        {
          title: "Treat scoring boundaries as a product feature",
          text: "The interface distinguishes independent practice from certification and does not invent a 310–677 score from an uncalibrated question bank.",
        },
        {
          title: "Move persistence from local SQLite to serverless Postgres",
          text: "The production branch replaces ephemeral local-file storage with Neon and an idempotent schema initializer, making accounts and attempts durable across Vercel function instances.",
        },
        {
          title: "Keep authentication small and inspectable",
          text: "Passwords use per-user salts and scrypt hashes; sessions store token hashes server-side and reach the browser through HttpOnly cookies.",
        },
      ],
      validation: [
        "TypeScript checking and a production Next.js build passed before deployment.",
        "The live smoke test covered registration, practice creation, answer saving, and persistence after reload.",
        "The deployed feature branch uses a Production-only DATABASE_URL secret linked to Neon.",
      ],
      nextSteps: [
        "Replace browser speech synthesis with reviewed, properly licensed human-recorded audio.",
        "Add email verification, password recovery, rate limiting, and a documented backup policy.",
        "Expand and review the question bank before making stronger learning-outcome claims.",
      ],
    },
  },
  {
    slug: "physics-studio",
    number: "03",
    title: "Physics Studio",
    shortTitle: "Physics Studio",
    category: "Interactive physics learning platform",
    label: "Live independent product",
    summary:
      "An interactive physics learning platform combining guided courses, numerical simulations, structured practice, and technical explanations across seven physics topic areas.",
    challenge:
      "Physics software needs to do more than animate diagrams. The application had to connect mathematical models, explanations, experiments, questions, and saved learner progress without presenting simplified simulations as complete physical reality.\n\nThe larger engineering challenge was coordinating a Next.js interface with separate curriculum and physics services. Interactive animations needed immediate browser-side performance, while lesson content, answer checking, and reference calculations still required clear server boundaries and consistent model constraints.",
    solution:
      "I structured Physics Studio as a TypeScript monorepo containing a Next.js web application, separate curriculum and physics services, shared runtime contracts, and a reusable numerical physics package.\n\nThe browser imports the same physics kernel used by the calculation service, keeping interactive experiments and server-generated reference values consistent. Canvas animation runs through requestAnimationFrame outside React’s render cycle, while throttled readouts prevent simulation updates from causing unnecessary component renders.\n\nNext.js Route Handlers connect the interface to the curriculum and physics services. KaTeX renders equations with accessible MathML, browser storage preserves course progress and reasoning notes, and Docker Compose provides a reproducible three-process deployment environment.",
    outcome:
      "The application now combines seven physics topic areas, a seventeen-unit classical mechanics course, guided discovery activities, interactive laboratories, answer checking, notebook exports, and saved browser progress through one consistent interface.\n\nAutomated checks cover numerical limits, conserved quantities, curriculum validation, component behavior, API failures, production builds, and live HTTP integration across the web, curriculum, and physics processes.",
    metrics: [
      { value: "7", label: "Physics topic areas" },
      { value: "17", label: "Mechanics course units" },
      { value: "3", label: "Runtime services" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Canvas API",
      "KaTeX",
      "Docker",
    ],
    services: [
      "Full-stack architecture",
      "Physics-model integration",
      "Interactive learning UX",
      "Testing & deployment",
    ],
    accent: "violet",
    kind: "repository",
    repositoryName: "JackButler99/physics-studio",
    repositoryUrl: "https://github.com/JackButler99/physics-studio",
    liveUrl: "https://physics-studio.vercel.app/",
    image: "/projects/physics-studio-landing.png",
    imageAlt: "Physics Studio interactive learning platform preview",
    caseStudy: {
      overview: [
        {
          label: "Product",
          value: "Interactive physics learning and simulation platform",
        },
        {
          label: "My role",
          value: "Product design, full-stack architecture, and physics-model integration",
        },
        {
          label: "Delivery",
          value: "Independent TypeScript monorepo deployed through Vercel",
        },
      ],
      highlights: [
        {
          number: "01",
          title: "Guided learning beyond isolated simulations",
          text:
            "Courses connect prediction, experimentation, mathematical explanation, calculation practice, and review. Learners can record observations and export their reasoning instead of only adjusting animation controls.",
        },
        {
          number: "02",
          title: "Shared numerical models",
          text:
            "The browser and physics service use the same tested model package. Interactive playback remains responsive while server reference calculations follow identical parameter ranges and assumptions.",
        },
        {
          number: "03",
          title: "Separated curriculum and computation",
          text:
            "Lesson content and answer checking run in the curriculum service, while model validation and reference calculations belong to the physics service. The Next.js application exposes both through controlled Route Handlers.",
        },
      ],
      decisions: [
        {
          title: "Use explicit service boundaries",
          text:
            "The web application does not own answer keys or reference calculations. Curriculum and physics responsibilities remain in separate processes, connected through documented HTTP contracts.",
        },
        {
          title: "Share the physics kernel",
          text:
            "A reusable physics-core package prevents browser animations and server calculations from implementing the same equations independently and gradually producing different results.",
        },
        {
          title: "Keep simulation updates outside React rendering",
          text:
            "Canvas playback uses requestAnimationFrame while interface readouts update at a lower frequency. Hidden tabs stop time advancement, and reduced-motion preferences start experiments paused.",
        },
        {
          title: "Expose assumptions and limitations",
          text:
            "Each model describes its units, approximations, parameter limits, and physical assumptions. The product presents practice evidence without claiming validated mastery or complete classroom readiness.",
        },
      ],
      validation: [
        "Tested energy conservation, wave limits, Maxwell-distribution normalization, quantum boundary conditions, relativistic calculations, and invalid parameter handling.",
        "Used simulated-DOM tests for guided activities, playback controls, saved progress, keyboard interaction, and API-failure recovery.",
        "Ran TypeScript checking, production builds, and HTTP integration checks across the web, curriculum, and physics processes.",
        "Confirmed successful deployment through the connected Vercel project while keeping browser visual review as a separate manual check.",
      ],
      nextSteps: [
        "Add accounts and a durable backend for synchronized learner progress across devices.",
        "Conduct educator review, learner think-aloud sessions, and delayed-transfer evaluation.",
        "Complete browser-based accessibility and responsive-layout testing.",
        "Move heavier numerical workloads into workers or queued compute services when model complexity requires it.",
      ],
    },
  },
  {
    slug: "signallens-analytics",
    number: "04",
    title: "SignalLens Analytics",
    category: "Data product concept",
    label: "Concept case study",
    summary:
      "A customer-health analytics concept that turns behavioral data into explainable risk signals and practical next actions.",
    challenge:
      "Customer teams can have plenty of usage data but no dependable way to identify accounts needing attention. A useful solution must be accurate, interpretable, and simple to act on.",
    solution:
      "A proposed Python pipeline for feature preparation and model evaluation, paired with a web dashboard that explains risk drivers instead of showing a black-box score.",
    outcome:
      "This concept is ready to be developed against a real dataset and validated with measurable model performance and a clearly defined customer-success decision.",
    metrics: [
      { value: "01", label: "Explainable risk score" },
      { value: "24h", label: "Pipeline refresh target" },
      { value: "A/B", label: "Model comparison" },
    ],
    stack: ["Python", "Pandas", "scikit-learn", "FastAPI", "Next.js"],
    services: ["Data exploration", "Model development", "API integration", "Analytics UI"],
    accent: "violet",
    kind: "concept",
    repositoryName: null,
    repositoryUrl: null,
    liveUrl: null,
  },
  {
    slug: "demandcast-forecasting",
    number: "05",
    title: "DemandCast",
    category: "Forecasting system",
    label: "Concept case study",
    summary:
      "A forecasting workflow that helps a retail team compare demand scenarios, monitor model drift, and plan with clearer uncertainty.",
    challenge:
      "Planning decisions rely on manual estimates and a single unexplained forecast. The team needs a repeatable process that makes uncertainty and model performance visible.",
    solution:
      "A time-series evaluation pipeline with backtesting, baseline comparison, and a lightweight planning interface for reviewing forecasts by product and region.",
    outcome:
      "This concept is ready to be implemented with a real retail dataset, then evaluated against a documented baseline, forecast horizon, and planning decision.",
    metrics: [
      { value: "MAPE", label: "Tracked by segment" },
      { value: "3", label: "Forecast scenarios" },
      { value: "Auto", label: "Backtesting workflow" },
    ],
    stack: ["Python", "SQL", "Time series", "FastAPI", "React"],
    services: ["Data cleaning", "Forecast evaluation", "API development", "Decision interface"],
    accent: "orange",
    kind: "concept",
    repositoryName: null,
    repositoryUrl: null,
    liveUrl: null,
  },
];

export const services = [
  {
    number: "01",
    title: "Full-stack web development",
    description:
      "Production-ready web applications with thoughtful interfaces, clear backend boundaries, and data models built for change.",
    deliverables: [
      "Responsive frontend implementation",
      "API and database architecture",
      "Authentication and role-based access",
      "Testing, deployment, and handoff",
    ],
    bestFor: "MVPs, SaaS products, internal tools, and platform modernization.",
  },
  {
    number: "02",
    title: "Data science & analytics",
    description:
      "Reliable analysis and models that connect to a real decision—not notebooks that stop before the work becomes useful.",
    deliverables: [
      "Exploratory analysis and data quality review",
      "Feature engineering and model evaluation",
      "Forecasting or classification workflows",
      "Clear findings and reproducible code",
    ],
    bestFor: "Forecasting, customer analytics, operational insights, and model prototypes.",
  },
  {
    number: "03",
    title: "Data-powered product engineering",
    description:
      "The bridge between both disciplines: turning a model, dataset, or manual report into a usable web product.",
    deliverables: [
      "Model-serving APIs",
      "Interactive dashboards and reporting",
      "Data pipelines and scheduled workflows",
      "Monitoring and maintainable documentation",
    ],
    bestFor: "Teams that need their data work shipped inside a dependable product.",
  },
];

export const skillGroups = [
  {
    title: "Product & frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
  {
    title: "Backend & systems",
    skills: ["Node.js", "Python", "REST APIs", "PostgreSQL", "Authentication", "Docker"],
  },
  {
    title: "Data & machine learning",
    skills: ["Pandas", "SQL", "scikit-learn", "EDA", "Forecasting", "Model evaluation"],
  },
  {
    title: "Delivery",
    skills: ["Git", "Testing", "CI/CD", "Cloud deployment", "Documentation", "Async communication"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Clarify",
    text: "We define the user, the decision to improve, and what a successful first release must do.",
  },
  {
    number: "02",
    title: "Shape",
    text: "I map the system, surface risks early, and turn the scope into visible milestones.",
  },
  {
    number: "03",
    title: "Build",
    text: "You get working increments, concise updates, and room to steer before details harden.",
  },
  {
    number: "04",
    title: "Ship",
    text: "I test the critical path, deploy carefully, and leave the product understandable after handoff.",
  },
];
