// Edit this file first when you are ready to replace the portfolio placeholders.
// All core identity, service, project, and Upwork contact content lives here.

export const profile = {
  name: "Ridho Kurniawan",
  initials: "RK",
  role: "Full-Stack Developer",
  location: "Indonesia · Available worldwide",
  availability: "Open for freelance projects",
  intro:
    "I work on the interface, server logic, and database. My projects include learning platforms, multiplayer games, and tools for exploring data.",
  shortBio:
    "I’m based in Indonesia. My background in engineering and research informs how I work with software, data, and numerical models.",
  upworkUrl: "https://www.upwork.com/freelancers/~01a56113f2390a9378",
  contactLabel: "Contact me on Upwork",
  githubUrl: "https://github.com/JackButler99",
};

export const navItems = [
  { href: "/", label: "Home", external: false },
  { href: "/projects", label: "Projects", external: false },
  { href: "/services", label: "Services", external: false },
  { href: "/about", label: "About", external: false },
  { href: profile.upworkUrl, label: profile.contactLabel, external: true },
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
    label: "Independent project",
    summary:
      "A browser game platform for two people, with five games, private rooms, and chat. Players join with a nickname and room code, and each game shares the same session system.",
    challenge:
      "The project started as a single snakes-and-ladders game. As I added more games, I needed a shared system for rooms, players, and chat, while keeping each game’s rules separate.\n\nBoth browsers also needed the same current state. Quiz answers had to stay hidden until both players submitted, turn-based games had to track the active player, and the maze needed to save shared resources and progress.",
    solution:
      "I separated the shared multiplayer system from the individual game engines.\n\nNext.js handles the interface and server-side operations. A common platform layer manages rooms, players, chat, game selection, and session status. Each game module owns its own rules, state transitions, and UI.\n\nDrizzle maps the data model to Neon Postgres. Stable data such as room identity, players, messages, turns, and status uses relational columns. Game-specific state is stored as JSONB because the board game, quizzes, streak game, and maze require different data structures.",
    outcome:
      "The app has five playable games using the same room, player, and chat system. New games can reuse that foundation.\n\nI deployed it on Vercel with Neon Postgres. A production smoke test covered creating a room, loading the board, and checking that its data remained available after a page reload.",
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
        { label: "Delivery", value: "Personal project, deployed on Vercel" },
      ],
      highlights: [
        {
          number: "01",
          title: "Join a private room",
          text: "A host chooses a game, enters a nickname, and receives a room code to share. The second player joins from another browser without creating an account. Both clients connect to the same room record and persisted game session.",
        },
        {
          number: "02",
          title: "Choose from five games",
          text: "The catalog includes a story-led board game, two hidden-answer couple quizzes, a choice-and-streak game, and a cooperative 7×7 maze. A game registry connects each catalog entry to an isolated game module, while room and chat behavior stays shared.",
        },
        {
          number: "03",
          title: "Keep both players in sync",
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
          title: "Save sessions without requiring accounts",
          text: "Players join with a room code and nickname. The server stores the session state so both browsers use the same room data.",
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
    label: "Independent project",
    summary:
      "An independent TOEFL ITP practice app with 140 original questions, timed sections, saved answers, and review explanations. I built the interface, authentication, and database workflow.",
    challenge:
      "I wanted learners to practise individual sections, complete a timed simulation, and return to saved answers. The app also needed to explain results clearly and distinguish practice feedback from official TOEFL scores.",
    solution:
      "I developed a full-stack Next.js application with original question content, section-specific practice, a server-enforced 115-minute simulation, Neon/PostgreSQL persistence, scrypt password hashing, HttpOnly sessions, and post-test review.",
    outcome:
      "Learners can create an account, choose a practice session or full simulation, and review their answers afterwards. The app saves answers, progress, and section results. A production smoke test confirmed that a saved answer stayed selected after a page reload.",
    metrics: [
      { value: "140", label: "Original practice questions" },
      { value: "3", label: "Test sections" },
      { value: "115m", label: "Full simulation" },
    ],
    stack: ["Next.js", "TypeScript", "Neon Postgres", "Node.js", "Web Speech API"],
    services: ["Product architecture", "Authentication", "Assessment workflow", "Data migration & deployment"],
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
          title: "Choose a short practice or a full simulation",
          text: "Learners can choose a short untimed set for one section or complete all 140 questions through separately timed Listening, Structure, and Reading sections.",
        },
        {
          number: "02",
          title: "Saved answers and progress",
          text: "Accounts, attempts, answers, section state, and deadlines are stored in PostgreSQL. A learner can leave a practice session, return later, and continue from saved work.",
        },
        {
          number: "03",
          title: "Review answers and explanations",
          text: "The review screen shows correct answers, explanations, and practice results. Results are reported as raw scores and percentages, with no official ETS score or certificate.",
        },
      ],
      decisions: [
        {
          title: "Enforce exam time on the server",
          text: "The database stores section deadlines and the server controls section transitions, preventing a refreshed browser or edited client timer from reopening completed sections.",
        },
        {
          title: "Report practice results accurately",
          text: "The app reports correct-answer counts and percentages. The original question bank has not been calibrated to produce an official 310–677 scaled score.",
        },
        {
          title: "Use PostgreSQL for the Vercel deployment",
          text: "I moved the production branch from local SQLite files to Neon PostgreSQL and added an idempotent schema initializer. Accounts and attempts are shared across Vercel function instances.",
        },
        {
          title: "Hash passwords and session tokens",
          text: "Passwords use per-user salts and scrypt hashes; sessions store token hashes server-side and reach the browser through HttpOnly cookies.",
        },
      ],
      validation: [
        "TypeScript checking and a production Next.js build passed before deployment.",
        "The live smoke test covered registration, practice creation, answer saving, and persistence after reload.",
        "Configured the Vercel production deployment to use Neon PostgreSQL.",
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
    label: "Independent project",
    summary:
      "An interactive physics app with guided lessons, simulations, and practice across seven topic areas. The web interface connects to separate services for lesson content and physics calculations.",
    challenge:
      "I wanted the lessons to connect mathematical explanations, experiments, practice questions, and saved progress. Each simulation also needed to state the assumptions and limits of its physical model.\n\nThe browser animations needed to respond to changes immediately. Lesson content, answer checking, and reference calculations ran in separate services, which had to use the same model constraints as the interface.",
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
          title: "Lessons with experiments and practice",
          text:
            "Learners make predictions, adjust a simulation, work through the equations, and answer questions. They can record observations and export notes for later review.",
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
          title: "Separate lessons from calculations",
          text:
            "The curriculum service handles lessons and answer checking; the physics service handles reference calculations. The web application calls both through documented HTTP contracts.",
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
          title: "Document each model’s assumptions",
          text:
            "Each model lists its units, approximations, parameter ranges, and assumptions. Progress indicators record practice activity; learning effectiveness still needs educator and learner review.",
        },
      ],
      validation: [
        "Tested energy conservation, wave limits, Maxwell-distribution normalization, quantum boundary conditions, relativistic calculations, and invalid parameter handling.",
        "Used simulated-DOM tests for guided activities, playback controls, saved progress, keyboard interaction, and API-failure recovery.",
        "Ran TypeScript checking, production builds, and HTTP integration checks across the web, curriculum, and physics processes.",
        "Confirmed the Vercel deployment. Browser layout and accessibility still need a separate visual review.",
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
    "slug": "market-lab",
    "number": "04",
    "title": "Signal Market Lab",
    "shortTitle": "Market Lab",
    "category": "Interactive forecasting and market research",
    "label": "Independent project",
    "summary": "A market research dashboard for exploring prices, running forecasts, and comparing models. It combines Python data workflows with a Next.js demo where visitors can import CSV files and run calculations in their browser.",
    "challenge": "I wanted people to be able to inspect a forecast: the data behind it, the prediction horizon, and whether it improved on repeating the last price. Stocks, currencies, and Bitcoin also needed different explanations of their fundamental data.\n\nThe first version used a Python API, SQLite, and background workers. For the public demo, I needed visitors to run experiments without an always-on application server or access to provider credentials.",
    "solution": "I built the initial research engine in Python, with versioned datasets, CSV validation, walk-forward backtesting, and saved experiments in SQLite. It compares a rolling 30-observation log-linear trend with a last-price naive model, reporting MAE over the same evaluation dates and observation horizon.\n\nFor v2, I separated data refresh from visitor computation. GitHub Actions fetches provider data on a six-hour schedule and publishes normalized JSON snapshots. Next.js on Vercel serves those snapshots, while TypeScript calculates visitor experiments in the browser. CSV imports remain on the visitor's device, along with up to 20 saved experiments and the datasets needed to replay them.\n\nThe interface starts with historical prices. Run experiment reveals the forecast, backtest metrics, and completion status; Compare models evaluates both models on the same dataset. A separate fundamentals workspace uses charts, source dates, mathematical notation, and Beginner, Intermediate, and Expert explanations tailored to each asset class.",
    "outcome": "The v2 workflow supports AAPL, MSFT, EURUSD, and BTCUSD price research through one interface. Visitors can change models and horizons, run their own calculations, import CSVs, and replay saved experiments without changing the shared public data.\n\nThe deployment no longer requires an always-on application backend. Scheduled refreshes retain the last successful data when a provider fails, and credentials stay in GitHub Actions. The local Python and SQLite workflow remains available. The EURUSD fundamental feed still needs an upstream FRED error resolved; its price-data workflow is separate.",
    "metrics": [
      {
        "value": "4",
        "label": "Price datasets across 3 asset classes"
      },
      {
        "value": "2",
        "label": "Models with walk-forward evaluation"
      },
      {
        "value": "32",
        "label": "Python–TypeScript parity test cases"
      }
    ],
    "stack": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "SQLite",
      "GitHub Actions",
      "Vercel"
    ],
    "services": [
      "Full-stack architecture",
      "Forecasting and backtesting",
      "Data pipeline engineering",
      "Interactive data visualization"
    ],
    "accent": "orange",
    "kind": "repository",
    "repositoryName": "JackButler99/market-lab",
    "repositoryUrl": "https://github.com/JackButler99/market-lab",
    "liveUrl": "https://market-lab-pi.vercel.app/",
    "image": "/projects/market-lab-v2-landing.png",
    "imageAlt": "Signal Market Lab v2 interface for price research, forecast experiments, and model comparison",
    "caseStudy": {
      "overview": [
        {
          "label": "Product",
          "value": "Market research and forecasting portfolio demo"
        },
        {
          "label": "My role",
          "value": "Product design, full-stack development, data pipelines, and model evaluation"
        },
        {
          "label": "Architecture",
          "value": "Python and SQLite locally; scheduled snapshots and browser computation in v2"
        }
      ],
      "highlights": [
        {
          "number": "01",
          "title": "Run an experiment and inspect the result",
          "text": "Visitors select an asset, model, and horizon of 1, 7, 14, or 30 observations. Running the experiment reveals the forecast, historical residual band, and walk-forward error metrics. Compare models places trend and naive results side by side on the same dataset and evaluation origins."
        },
        {
          "number": "02",
          "title": "Bring a dataset without uploading it",
          "text": "The browser validates date-and-close CSVs, sorts observations, resolves duplicate dates, and assigns a content-derived dataset ID. Imports stay on the device. Up to 20 experiments retain the data needed for replay, with controls to return to published prices or clear browser storage."
        },
        {
          "number": "03",
          "title": "Explore the data behind each asset",
          "text": "Separate modules interpret company financial statements, the two economies behind EURUSD, and Bitcoin network activity. Reading levels, a glossary, charts, and source evidence help users move from a plain-language explanation to the underlying figures. These explanations do not enter the price forecasting model."
        }
      ],
      "decisions": [
        {
          "title": "Keep the baseline visible",
          "text": "The trend model is evaluated against a last-price baseline using identical dates and horizons. Results show MAE, the evaluation sample count, and improvement or deterioration against that baseline. Residual bands are labeled exploratory and uncalibrated."
        },
        {
          "title": "Separate scheduled data work from interactive analysis",
          "text": "GitHub Actions performs finite refresh jobs; Vercel reads the published snapshots; the visitor's browser runs experiments. This removed the need for an always-on backend in the public demo while preserving the local Python research workflow. The six-hour refresh schedule is best effort, not a real-time feed."
        },
        {
          "title": "Save the dataset with each experiment",
          "text": "Results are tied to the asset, dataset version, model, and horizon. Changing the selection hides the previous output. Saved browser experiments retain their original observations, and stock replays preserve published exchange-calendar dates."
        },
        {
          "title": "Show data dates and refresh failures",
          "text": "Provider data carries source and observation dates. A failed refresh preserves available prior snapshots and exposes a safe diagnostic category. Missing observations remain unavailable; the scheduled public workflow does not substitute synthetic prices when a fetch fails."
        }
      ],
      "validation": [
        "Compared TypeScript experiment outputs with Python reference outputs in 32 cases spanning both models, all four horizons, and stock, forex, and calendar-day date policies.",
        "Tested CSV parsing, invalid observations, duplicate-date handling, dataset identity, saved-dataset replay, and the 20-run browser-history limit.",
        "Used offline request tests to confirm that visitor experiment and CSV-import actions issue no HTTP write requests, and that storage-quota failures preserve previously saved data.",
        "Ran TypeScript checks and backend regression tests during development, and added GitHub Actions checks for backend tests, browser-demo tests, and the frontend production build."
      ],
      "nextSteps": [
        "Add more market indexes and forex pairs, then compare additional models against the existing baseline.",
        "Add an untouched final evaluation window before extending the forecasting models or making stronger performance claims.",
        "Move heavier browser calculations into a Web Worker as dataset sizes and model complexity grow.",
        "Complete browser-based usability, accessibility, and responsive-layout checks for the public experiment flow."
      ]
    }
  },
  {
    slug: "signallens-analytics",
    number: "05",
    title: "SignalLens Analytics",
    category: "Data product concept",
    label: "Concept case study",
    summary:
      "A proposal for a customer analytics dashboard that uses product usage data to flag accounts that may need attention.",
    challenge:
      "This concept explores how a customer success team could use product usage data to identify accounts that may need attention and understand the reasons behind each flag.",
    solution:
      "The proposed design uses Python to prepare usage features and evaluate models. A web dashboard would show each account’s risk score and the factors behind it.",
    outcome:
      "This is a concept, with no deployed app or validated model yet. The next step is to obtain a dataset, define the customer-success decision, and evaluate model performance.",
    metrics: [
      { value: "01", label: "Proposed risk score" },
      { value: "24h", label: "Target refresh interval" },
      { value: "A/B", label: "Planned model comparison" },
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
    number: "06",
    title: "DemandCast",
    category: "Demand forecasting concept",
    label: "Concept case study",
    summary:
      "A proposed demand forecasting tool for comparing retail sales scenarios, reviewing uncertainty, and tracking model performance.",
    challenge:
      "This concept explores how a retail team could compare forecasts by product and region, understand uncertainty, and track model performance.",
    solution:
      "The proposed system would combine a forecasting pipeline with backtesting, baseline comparison, and a web interface for reviewing forecasts by product and region.",
    outcome:
      "The design needs a real retail dataset, an agreed forecast horizon, and a baseline for evaluation. Model performance and its usefulness for planning still need to be tested.",
    metrics: [
      { value: "MAPE", label: "Proposed error metric" },
      { value: "3", label: "Planned forecast scenarios" },
      { value: "Auto", label: "Planned backtesting" },
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
      "I build web applications with React and Next.js, including the APIs, database, and user accounts behind the interface.",
    deliverables: [
      "Responsive pages and application screens",
      "APIs and database integration",
      "User accounts and access controls",
      "Tests, deployment, and setup notes",
    ],
    bestFor: "MVPs, learning platforms, multiplayer apps, and internal tools.",
  },
  {
    number: "02",
    title: "Data analysis & forecasting",
    description:
      "I use Python and SQL to prepare datasets, compare models, and explain the results. The starting point is a specific question the analysis needs to answer.",
    deliverables: [
      "Dataset cleaning and validation",
      "Exploratory analysis",
      "Forecast backtesting and baseline comparisons",
      "Reproducible scripts and a written explanation",
    ],
    bestFor: "Research tools, forecasting prototypes, and data quality reviews.",
  },
  {
    number: "03",
    title: "Dashboards & data tools",
    description:
      "I turn datasets and analysis scripts into web interfaces where people can explore results, compare scenarios, or run their own calculations.",
    deliverables: [
      "APIs for data and calculations",
      "Interactive charts and dashboards",
      "Scheduled data refreshes",
      "CSV imports and exports",
    ],
    bestFor: "Dashboards, research tools, and applications that use an existing dataset or model.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI", "Accessibility"],
  },
  {
    title: "Backend & systems",
    skills: ["Node.js", "Python", "REST APIs", "PostgreSQL", "Authentication", "Docker"],
  },
  {
    title: "Data & analysis",
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
    title: "Define the scope",
    text: "We agree on the users, required features, existing code, and what the first version needs to do.",
  },
  {
    number: "02",
    title: "Plan the work",
    text: "I break the scope into milestones and flag dependencies before building.",
  },
  {
    number: "03",
    title: "Build and review",
    text: "I share working features for review and explain what changed, what is pending, and where I need your input.",
  },
  {
    number: "04",
    title: "Test and hand over",
    text: "I check the main user flows, prepare the deployment, and leave setup notes so you can run and maintain the project.",
  },
];
