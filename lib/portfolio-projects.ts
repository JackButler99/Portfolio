export { processSteps, profile, services } from "./portfolio-data";

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
  accent: string;
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
      "A browser-based game hub for couples, combining five distinct two-player experiences with private rooms, synchronized state, and zero-account onboarding.",
    challenge: 
      `Building five games from the start required one multiplayer foundation that could support very different mechanics without duplicating room, player, and chat logic. Each game needed an isolated state model, while onboarding and session behavior had to remain consistent across the platform.

      The main technical challenge was coordinating two browsers through server-backed state: keeping submissions private until both players were ready, preserving active turns after reloads, and tracking shared resources and maze progress. The data model therefore had to separate relational room and player records from flexible game-specific JSONB state.`,      
    solution: 
      `I built a shared multiplayer layer in Next.js for room creation, player identity, chat, game selection, and session lifecycle. A game registry connects this layer to five isolated modules, each responsible for its own rules, state transitions, and UI. This keeps shared behavior consistent without coupling one game’s logic to another.

      Neon Postgres stores the shared session state, with Drizzle providing typed queries and schema mapping. Relational fields handle rooms, players, messages, turns, and status, while JSONB stores game-specific state. Both browsers read and update the same server-backed session, allowing hidden submissions, active turns, shared resources, and maze progress to survive reloads.`,
    outcome: 
      `The deployed platform delivers five playable game modes through one shared room flow. Room creation, player identity, chat, and persistence are handled at the platform level, allowing each game module to focus on its own mechanics and interface. New modes can use the existing game registry and multiplayer layer instead of rebuilding them.

      The production application runs on Vercel with Neon Postgres. A smoke test confirmed room creation, game-board loading, and session restoration after a full-page reload, verifying that the shared persistence flow works outside local development.`,
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
        { label: "Product", value: "Private Two-player browser game platform" },
        { label: "My role", value: "Product design, system architecture, and full-stack engineering" },
        { label: "Delivery", value: "Independent build, deployed on Vercel" },
      ],
      highlights: [
        {
          number: "01",
          title: "Five games on one shared platform",
          text: "The catalog includes a story-led board game, two hidden-answer couple quizzes, a choice-and-streak game, and a cooperative 7×7 maze. A game registry connects each catalog entry to an isolated game module, while room and chat behavior stays shared.",
        },
        {
          number: "02",
          title: "Private rooms without user accounts",
          text: "A host creates a room with a nickname and shares a short code. The second player joins from another device, so the couple reaches the activity before setup becomes a chore.",
        },
        {
          number: "03",
          title: "Mechanics designed for two players",
          text: "Hidden answers, synchronized reveals, streaks, shared resources, protective skills, and story prompts turn each game into a reason to talk—not only a score to chase.",
        },
      ],
      decisions: [
        {
          title: "Separate shared platform concerns from game rules",
          text: "Room, chat, reusable components, configurable question counts, and the game registry live in a platform layer. Each game keeps its own engine and UI, making new modes easier to add without copying infrastructure.",
        },
        {
          title: "Use a flexible persistence model",
          text: "Relational columns cover room identity, players, turns, status, and messages, while a JSONB game-state field accommodates mechanics that differ substantially between a board game, quiz, and RPG.",
        },
        {
          title: "Explain complex play before the room is created",
          text: "Simple games move directly to room setup; the more strategic modes explain hidden information, resources, scoring, and turn flow first so both players enter with the same mental model.",
        },
      ],
      validation: [
        "The production deployment tracks feature/multi-game-foundation and is publicly playable.",
        "All five catalog entries and their room-onboarding flows were reviewed in the live build.",
        "Vitest covers shared configurable question-selection behavior, alongside lint and TypeScript checks.",
      ],
      nextSteps: [
        "Measure room creation, successful joins, completion, and reconnect drop-off per game.",
        "Add explicit room-expiry and reconnect guidance for interrupted sessions.",
        "Audit keyboard, focus, motion, and screen-reader behavior across every game board.",
      ],
    },
  },
  {
    slug: "learn-toefl",
    number: "02",
    title: "ITP Practice Lab",
    shortTitle: "ITP Practice",
    category: "Full-stack assessment platform",
    label: "Live independent product",

    summary:
      "A production-ready TOEFL ITP practice platform with custom authentication, persistent assessment state, answer-level autosave, server-controlled timing, progress history, and detailed review.",

    challenge: `Building a credible assessment platform required more than displaying a question bank. The application needed to support focused practice and a complete 140-question simulation, preserve progress during long sessions, and guide learners through separately timed Listening, Structure, and Reading sections.

  The main engineering challenge was maintaining reliable state across the browser, server, and database. A page refresh could not reset the timer or remove submitted answers, authentication had to remain secure across serverless requests, and the application needed durable storage that would work correctly when deployed on Vercel.`,

    solution: `I designed the application around a persistent assessment workflow rather than keeping test state only in React. Next.js and TypeScript handle the user interface, authentication flow, server-side validation, assessment lifecycle, and communication with the database.

  Neon Postgres stores users, sessions, questions, attempts, individual answers, active sections, deadlines, and completion state. Every answer is written independently as the learner progresses. The server reads the persisted deadline before accepting transitions, preventing a browser refresh or modified client timer from extending an expired section.

  I also replaced the original local SQLite setup with a deployment-safe Postgres implementation and an idempotent schema initializer. Passwords use per-user salts and scrypt hashes, while session tokens are hashed before database storage and delivered through HttpOnly cookies.`,

    outcome: `The deployed application now supports account registration, secure sign-in, focused section practice, a complete 115-minute simulation, automatic section progression, autosaved answers, attempt history, and explanation-based review through one full-stack assessment system.

  A production smoke test covered account creation, practice initialization, answer submission, database persistence, and restoration after a full page reload. TypeScript checks, linting, and the production build also passed before deployment.`,

    metrics: [
      { value: "140", label: "Original practice questions" },
      { value: "3", label: "Assessment sections" },
      { value: "115m", label: "Full simulation duration" },
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Neon Postgres",
      "Node.js",
      "Web Speech API",
      "Vercel",
    ],

    services: [
      "Full-stack architecture",
      "Authentication & session security",
      "Assessment state management",
      "Database migration & deployment",
    ],

    accent: "cyan",
    kind: "repository",

    repositoryName: "JackButler99/LearnToefl",
    repositoryUrl: "https://github.com/JackButler99/LearnToefl",
    liveUrl: "https://learn-toefl.vercel.app/",

    image: "/projects/learn-toefl-landing.jpg",
    imageAlt:
      "ITP Practice Lab interface presenting its TOEFL ITP practice and full simulation modes",

    caseStudy: {
      overview: [
        {
          label: "Product",
          value: "Full-stack TOEFL ITP assessment platform",
        },
        {
          label: "My role",
          value: "Frontend, backend, database, security, and deployment",
        },
        {
          label: "Delivery",
          value: "Independent product deployed on Vercel",
        },
      ],

      highlights: [
        {
          number: "01",
          title: "One assessment engine, two learning modes",
          text:
            "Focused practice and full simulation reuse the same question, attempt, answer, and review system. Different timing and section rules are applied without duplicating the assessment workflow.",
        },
        {
          number: "02",
          title: "Persistent progress across requests",
          text:
            "Attempts, answers, active sections, and deadlines are stored in PostgreSQL. The application reconstructs the learner's current state from the database after a reload or interrupted session.",
        },
        {
          number: "03",
          title: "Secure accounts and responsible results",
          text:
            "Custom authentication protects learner history, while the review interface reports raw practice performance without presenting an unofficial result as an ETS score or certificate.",
        },
      ],

      decisions: [
        {
          title: "Make the server authoritative for timing",
          text:
            "The browser displays the countdown, but the database stores the actual section deadline. The server checks that deadline before accepting answers or moving an attempt to the next section.",
        },
        {
          title: "Persist answers incrementally",
          text:
            "Each answer is saved independently instead of waiting for final submission. This limits data loss during a long assessment and allows the interface to restore selected answers after a reload.",
        },
        {
          title: "Move persistence from SQLite to Neon Postgres",
          text:
            "A local database file was suitable for development but not for Vercel's ephemeral serverless environment. Neon provides durable shared storage across function instances and deployments.",
        },
        {
          title: "Build a compact authentication system",
          text:
            "Passwords are protected with unique salts and scrypt hashes. Random session tokens are hashed before storage, while the original token reaches the browser only through an HttpOnly cookie.",
        },
        {
          title: "Keep schema initialization idempotent",
          text:
            "The database initializer can run repeatedly without recreating existing structures. This allows a new serverless instance to verify its required schema safely during startup.",
        },
      ],

      validation: [
        "Ran TypeScript, lint, and production-build checks before deployment.",
        "Tested registration, sign-in, practice creation, answer saving, and attempt restoration in production.",
        "Confirmed that a selected answer remained available after a full page reload.",
        "Verified that production persistence uses Neon Postgres instead of a local database file.",
      ],

      nextSteps: [
        "Add integration tests for section deadlines, concurrent answer writes, session expiry, and attempt completion.",
        "Add email verification, password recovery, rate limiting, session management, and a documented database backup policy.",
        "Replace browser speech synthesis with reviewed audio files served through reliable object storage or a CDN.",
        "Introduce structured logging and error monitoring for failed answer writes, expired sessions, and database connectivity issues.",
      ],
    },
  },
  {
    slug: "signallens-analytics",
    number: "03",
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
    number: "04",
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
