export type Course = {
  code: string;
  title: string;
};

export type CourseGroup = {
  title: string;
  courses: Course[];
};

export const education = {
  institution: "University of California, Santa Barbara",
  degree: "B.S. Computer Science",
  status: "September 2023 – June 2026",
};

export const courseGroups: CourseGroup[] = [
  {
    title: "Software engineering & product",
    courses: [
      { code: "CMPSC 32", title: "Object-Oriented Design" },
      { code: "CMPSC 148", title: "Computer Science Project" },
      { code: "CMPSC 156", title: "Advanced Applications Programming" },
      { code: "CMPSC 162", title: "Programming Languages" },
      { code: "CMPSC 184", title: "Mobile Application Development" },
      { code: "CMPSC 185", title: "Human-Computer Interaction" },
      { code: "CMPSC 189A/B", title: "Senior Computer Project" },
    ],
  },
  {
    title: "Algorithms, AI & mathematics",
    courses: [
      { code: "CMPSC 40", title: "Foundations of Computer Science" },
      { code: "CMPSC 130A", title: "Data Structures and Algorithms I" },
      { code: "CMPSC 130B", title: "Data Structures and Algorithms II" },
      { code: "CMPSC 132", title: "Algorithms Engineering" },
      { code: "CMPSC 138", title: "Automata and Formal Languages" },
      { code: "CMPSC 165A", title: "Artificial Intelligence" },
      { code: "CMPSC 165B", title: "Machine Learning" },
      { code: "MATH 4A", title: "Linear Algebra with Applications" },
      { code: "PSTAT 120A", title: "Probability and Statistics" },
    ],
  },
  {
    title: "Systems & networks",
    courses: [
      { code: "CMPSC 64", title: "Computer Organization" },
      { code: "CMPSC 111", title: "Introduction to Computational Science" },
      { code: "CMPSC 154", title: "Computer Architecture" },
      { code: "CMPSC 170", title: "Operating Systems" },
      { code: "CMPSC 176A", title: "Computer Communication Networks" },
      { code: "CMPSC 176C", title: "Advanced Topics in Internet Computing" },
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    title: "Frameworks & libraries",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Electron",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & platforms",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "AWS", "Linux"],
  },
  {
    title: "Tools & technologies",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Prisma",
      "BullMQ",
      "WebSockets",
      "REST APIs",
      "Jest",
      "Vitest",
      "Playwright",
      "Sentry",
      "CI/CD",
    ],
  },
];

export const spokenLanguages = [
  { name: "English", proficiency: "Bilingual proficiency" },
  { name: "Mandarin Chinese", proficiency: "Bilingual proficiency" },
];
