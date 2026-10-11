export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  built: string;
  technologies: string[];
  highlights: string[];
  github: string | null;
  website?: string;
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
    website: "https://leaguecomp.vercel.app/",
    repositoryNote: "Private GitHub page - due to Riot developer policies, the source code cannot be publicized as the project is still in review.",
    dates: "August 2026 – Present",
    status: "In progress - due to Riot developer policy, code is under review.",
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
    eyebrow: "Full-stack web application · Practice project",
    description:
      "An actively developed full-stack practice project for small businesses to manage customer data and run targeted email outreach.",
    built:
      "The current build supports business and customer management, email campaign creation and scheduling, audience previews, unsubscribe handling, and delivery logs. BullMQ and Redis queue campaign jobs for a separate worker, while authentication and business-level checks protect customer data. Live email delivery is explicitly configured; development uses a safe simulation. SMS sending and the planned loyalty and referral features are not part of the current build, and the practice project has not officially launched.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase Auth",
      "BullMQ",
      "Redis",
      "Resend",
      "Zod",
      "Sentry",
    ],
    highlights: ["Email campaigns & delivery logs", "Queued campaign processing", "Business-owned customer data"],
    github: "https://github.com/JasonInTheBox/DireConnect",
    website: "https://direconnect.app/",
    dates: "April 2026 – Present",
    status: "In progress",
    details: {
      problem:
        "Small businesses often compete for attention without the advertising budgets or customer-engagement systems available to larger companies. DireConnect explores a direct, business-controlled way to manage customer relationships and run repeat email outreach.",
      architecture: [
        "A Next.js, React, and TypeScript web app provides the business-owner interface for customer and campaign workflows.",
        "An Express REST API handles business, customer, and campaign operations separately from the frontend.",
        "Prisma and PostgreSQL store business, customer, campaign, and delivery data; Supabase Auth handles sign-in, with Zod validating requests.",
        "BullMQ and Redis queue campaign jobs for a separate worker, which uses Resend when live email delivery is enabled.",
        "Deployment separates the web app on Vercel, API on Render, and worker on Railway, with Supabase for managed data and Sentry for error monitoring.",
      ],
      engineering: [
        "Connecting audience previews, scheduled campaigns, background processing, unsubscribe handling, and delivery logs into one workflow.",
        "Keeping customer and campaign records scoped to the owning business across the interface and API.",
        "Separating web, API, and worker processes while keeping live email delivery gated and development safely simulated.",
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
    dates: "January 2025 – March 2026",
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
