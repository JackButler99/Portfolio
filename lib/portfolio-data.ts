// Edit this file first when you are ready to replace the portfolio placeholders.
// All core identity, service, project, and contact content lives here.

export const profile = {
  name: "Ridho Kurniawan",
  initials: "RK",
  role: "Full-Stack Web Developer & Data Science Engineer",
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
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const projects = [
  {
    slug: "opsflow-platform",
    number: "01",
    title: "OpsFlow Platform",
    category: "Full-stack product",
    label: "Demo case study",
    summary:
      "A focused operations workspace that replaces scattered spreadsheets with live workflows, permissions, and decision-ready reporting.",
    challenge:
      "An operations team works across disconnected tools, making ownership unclear and weekly reporting slow. The product needs to unify day-to-day work without creating another heavy system.",
    solution:
      "A role-aware web application with a fast task workspace, audit-friendly activity history, and dashboards driven by a clean API and relational data model.",
    outcome:
      "Use this section for verified results after launch—for example, reporting time saved, adoption, or fewer handoff errors.",
    metrics: [
      { value: "3", label: "Role-based workspaces" },
      { value: "1", label: "Shared source of truth" },
      { value: "Live", label: "Operational reporting" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "REST API", "Docker"],
    services: ["Product architecture", "Frontend development", "Backend & database", "Deployment"],
    accent: "lime",
  },
  {
    slug: "signallens-analytics",
    number: "02",
    title: "SignalLens Analytics",
    category: "Data product",
    label: "Demo case study",
    summary:
      "A customer-health analytics product that turns raw behavioral data into explainable risk signals and practical next actions.",
    challenge:
      "Customer teams have plenty of usage data but no dependable way to identify accounts needing attention. A useful solution must be accurate, interpretable, and simple to act on.",
    solution:
      "A reproducible Python pipeline for feature preparation and model evaluation, paired with a web dashboard that explains risk drivers instead of showing a black-box score.",
    outcome:
      "Replace this copy with validated model performance and the real business decision improved by the product.",
    metrics: [
      { value: "01", label: "Explainable risk score" },
      { value: "24h", label: "Pipeline refresh target" },
      { value: "A/B", label: "Model comparison" },
    ],
    stack: ["Python", "Pandas", "scikit-learn", "FastAPI", "Next.js"],
    services: ["Data exploration", "Model development", "API integration", "Analytics UI"],
    accent: "cyan",
  },
  {
    slug: "ledgerly-saas",
    number: "03",
    title: "Ledgerly SaaS",
    category: "SaaS application",
    label: "Demo case study",
    summary:
      "A clean subscription-finance workspace built around predictable workflows, trustworthy calculations, and quick monthly review.",
    challenge:
      "A small finance team needs a simpler way to reconcile recurring revenue and understand movement between periods without maintaining fragile spreadsheet formulas.",
    solution:
      "A multi-tenant SaaS application with secure account boundaries, import validation, reconciliation workflows, and accessible financial summaries.",
    outcome:
      "Add verified product outcomes here: processing time, error reduction, active teams, or successful reconciliations.",
    metrics: [
      { value: "CSV", label: "Validated imports" },
      { value: "RBAC", label: "Account permissions" },
      { value: "MRR", label: "Movement reporting" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Auth", "Cloud hosting"],
    services: ["SaaS architecture", "Design system", "Secure authentication", "QA & launch"],
    accent: "violet",
  },
  {
    slug: "demandcast-forecasting",
    number: "04",
    title: "DemandCast",
    category: "Forecasting system",
    label: "Demo case study",
    summary:
      "A forecasting workflow that helps a retail team compare demand scenarios, monitor model drift, and plan with clearer uncertainty.",
    challenge:
      "Planning decisions rely on manual estimates and a single unexplained forecast. The team needs a repeatable process that makes uncertainty and model performance visible.",
    solution:
      "A time-series evaluation pipeline with backtesting, baseline comparison, and a lightweight planning interface for reviewing forecasts by product and region.",
    outcome:
      "Replace with the real forecast horizon, error improvement, and planning decision supported by your project.",
    metrics: [
      { value: "MAPE", label: "Tracked by segment" },
      { value: "3", label: "Forecast scenarios" },
      { value: "Auto", label: "Backtesting workflow" },
    ],
    stack: ["Python", "SQL", "Time series", "FastAPI", "React"],
    services: ["Data cleaning", "Forecast evaluation", "API development", "Decision interface"],
    accent: "orange",
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
