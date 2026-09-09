export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  built: string;
  technologies: string[];
  highlights: string[];
  github: string | null;
  repositoryNote?: string;
  dates: string;
  status: string;
  details: {
    problem: string;
    architecture: string[];
    engineering: string[];
  };
};

const projectOrder = [
  "league-assistant",
  "direconnect",
  "planet-story-explorer",
  "skillscan",
];

export const projects: Project[] = [
  {
    slug: "league-assistant",
    title: "League Assistant",
    eyebrow: "Desktop systems",
    description:
      "A desktop companion that turns live League of Legends champion select data into useful role, rune, and matchup recommendations.",
    built:
      "Built an Electron application that connects to the local League Client, listens for champion-select events over WebSockets, parses game data, and coordinates external sources with recommendation logic.",
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "LCU API",
    ],
    highlights: ["Real-time event handling", "Desktop client integration", "Recommendation logic"],
    github: "https://github.com/JasonInTheBox/LeagueAssistant",
    dates: "August 2026 – Present",
    status: "In progress",
    details: {
      problem:
        "Champion select moves quickly, while useful information about roles, runes, and matchups is spread across several sources. The project brings that context into a companion that responds to the local game client in real time.",
      architecture: [
        "Electron and React provide the desktop application shell and interface.",
        "Node.js connects to the local League Client through LCU REST endpoints and WebSocket events.",
        "Data Dragon and OP.GG MCP data enrich champion and matchup context.",
        "A recommendation layer combines live session state with parsed game data.",
      ],
      engineering: [
        "Responding to champion-select state changes without requiring manual refreshes.",
        "Translating client events and external data into a consistent application model.",
        "Keeping the recommendation logic separate enough to evolve as new signals are added.",
      ],
    },
  },
  {
    slug: "planet-story-explorer",
    title: "Planet Story Explorer",
    eyebrow: "UCSB capstone · In collaboration with Planet Labs",
    description:
      "An interactive geospatial search experience that makes more than 35,000 Planet Stories easier to explore, filter, and discover.",
    built:
      "Designed and built full-stack map search, database-backed filtering, an AI discovery assistant, and an MCP-powered backend for working with a large real-world story dataset.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Gemini",
      "FastMCP",
    ],
    highlights: ["35,000+ stories", "Geospatial search", "AI-assisted discovery"],
    github: null,
    repositoryNote: "Academic project · source code cannot be released publicly",
    dates: "September 2025 – March 2026",
    status: "Completed",
    details: {
      problem:
        "A collection of more than 35,000 Planet Stories was difficult to browse as a traditional archive. The capstone team created a map-first way to search the collection by place, filters, and natural-language exploration.",
      architecture: [
        "A React and TypeScript client handles map exploration, filters, and the discovery experience.",
        "FastAPI exposes the application APIs, with FastMCP supporting tool-based access.",
        "PostgreSQL and Supabase back searchable story data and geospatial workflows.",
        "Gemini powers the AI-assisted discovery and chatbot experience.",
      ],
      engineering: [
        "Turning a large real-world content collection into useful searchable data.",
        "Coordinating map state, filters, and backend results in one exploration flow.",
        "Grounding AI-assisted discovery in the application’s own dataset and APIs.",
      ],
    },
  },
  {
    slug: "direconnect",
    title: "DireConnect",
    eyebrow: "Cloud application · Practice project",
    description:
      "An unlaunched practice project for small-business owners to organize customer outreach and send SMS and email campaigns, with an emphasis on AWS and cloud architecture.",
    built:
      "Built the core business-owner workflow for managing businesses and customer data, composing SMS and email campaigns, and sending outreach through a permission-aware REST API. The project remained a learning build focused on AWS, cloud deployment, authentication, and relational data; customizable loyalty and referral features were planned but not completed.",
    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Supabase Auth",
      "Prisma",
      "Zod",
      "AWS",
    ],
    highlights: ["SMS & email campaigns", "AWS & cloud practice", "Business-owned customer data"],
    github: "https://github.com/JasonInTheBox/DireConnect",
    dates: "April 2026 – June 2026",
    status: "Paused · may revisit",
    details: {
      problem:
        "Small businesses often compete for attention without the advertising budgets or customer-engagement systems available to larger companies. DireConnect explored a direct, business-controlled way to maintain customer relationships and run repeat outreach through SMS and email.",
      architecture: [
        "Next.js and React provide the business-owner interface for contacts and campaigns.",
        "An Express REST API handles business, customer, and campaign workflows separately from the frontend.",
        "Prisma and PostgreSQL model businesses, customer records, campaigns, and ownership boundaries.",
        "Supabase Auth and Zod support authentication, authorization, and request validation.",
        "AWS services and cloud deployment work provided the project’s primary infrastructure learning focus.",
      ],
      engineering: [
        "Turning the product idea into working SMS and email campaign flows while leaving loyalty and referrals as future scope.",
        "Enforcing business ownership and validation rules beyond basic sign-in.",
        "Practicing AWS deployment and cloud integration decisions in an application that had not yet launched.",
      ],
    },
  },
  {
    slug: "skillscan",
    title: "SkillScan",
    eyebrow: "Mobile application · Team project",
    description:
      "A cross-platform mobile application connecting an Expo-based client to cloud data, a Flask service, and Gemini-powered features.",
    built:
      "Contributed to a collaborative mobile architecture spanning authenticated client flows, backend communication, persistent data, and AI integration.",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase", "Flask", "Gemini"],
    highlights: ["Cross-platform mobile", "Cloud data", "AI integration"],
    github: null,
    repositoryNote: "Academic project · source code cannot be released publicly",
    dates: "January 2024 – March 2026",
    status: "Completed",
    details: {
      problem:
        "SkillScan explores how a mobile experience can capture information, persist it, and return useful AI-assisted insights through a focused cross-platform workflow.",
      architecture: [
        "React Native, TypeScript, and Expo provide the cross-platform mobile client.",
        "Firebase supports authentication and persistent application data.",
        "A Flask backend coordinates server-side requests from the mobile client.",
        "Gemini provides the AI-integrated portion of the experience.",
      ],
      engineering: [
        "Coordinating data and authentication across mobile, cloud, and backend layers.",
        "Designing frontend/backend communication for a cross-platform client.",
        "Collaborating on an application whose features span several services.",
      ],
    },
  },
].sort((first, second) => projectOrder.indexOf(first.slug) - projectOrder.indexOf(second.slug));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
