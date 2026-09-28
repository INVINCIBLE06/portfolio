

export const site = {
  name: "Saurabh Lalit Pande",
  role: "Full Stack Developer",
  location: "Nagpur, Maharashtra, India",
  summary:
    "Full Stack Developer with 3+ years of experience building scalable web applications and backend systems in Node.js, React, and Next.js. Proven track record of improving system performance by up to 30%, designing robust APIs, and delivering end-to-end features in fast-paced startup environments.",
  available: true, // toggles the "Available for work" badge in the hero
  email: "sp832154@gmail.com",
  phone: "+91 84211 68035",
  socials: [
    { label: "GitHub", url: "https://github.com/saurabhpande" },
    { label: "Resume", url: "/resume.pdf" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a full stack developer with three-plus years of experience across ad-tech, healthcare, and travel-booking platforms, working mainly in Node.js, React, and Next.js. I care about designing APIs and backend pipelines that hold up under real load — recent work has cut processing times by up to 30% and improved system reliability across teams I've worked with.",
    "Most recently I built end-to-end features and a browser extension for automated data extraction at an ad-tech startup. Before that, I was a core backend contributor on a healthcare platform, integrating third-party services like Calendly, Eshopbox, and the Credimax payment gateway, and building cross-platform notification systems with Firebase. I hold a Master of Computer Applications from the University of Mysore and a Bachelor of Computer Applications from Nagpur University.",
  ],
};

export type Project = {
  name: string;
  period: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Admin Panel — Infradel Projects",
    period: "Freelance",
    description:
      "A role-based access control (RBAC) admin panel for managing users and internal operations. Built authentication flows including secure password recovery via email, and scalable APIs integrated with the frontend team.",
    stack: ["Node.js", "Express.js", "MongoDB", "React.js"],
  },
  {
    name: "MSY Marine Academy Website",
    period: "Freelance",
    description:
      "A Next.js site with dynamic pages including a Hall Ticket system supporting real-time lookup by phone number and roll number, with PDF download functionality. Deployed on Netlify with a custom domain.",
    stack: ["Next.js"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Appbroda",
    role: "Full Stack Developer",
    period: "08/2025 — 07/2026",
    summary:
      "Built and shipped end-to-end features in a fast-paced ad-tech environment using Next.js and Node.js.",
    highlights: [
      "Developed a browser extension for automated data extraction, reducing manual effort and improving operational efficiency",
      "Designed and implemented scalable REST APIs for ad campaign and asset management workflows",
      "Optimized backend processing pipelines, improving system reliability and performance under load",
      "Collaborated cross-functionally to deliver rapid feature releases with high code quality",
    ],
  },
  {
    company: "MyCLNQ Health",
    role: "Software Development Engineer I",
    period: "07/2024 — 08/2025",
    summary:
      "Core contributor to backend systems serving a scalable healthcare platform.",
    highlights: [
      "Integrated third-party services including Calendly, Eshopbox, and Credimax (payment gateway)",
      "Built a cross-platform notification system (Android & iOS) using Firebase",
      "Designed and implemented cron-based schedulers for automation and background processing",
      "Improved API responsiveness by implementing asynchronous event handling mechanisms",
    ],
  },
  {
    company: "Squad Technology Private Limited",
    role: "Full Stack Developer",
    period: "01/2023 — 06/2024",
    summary:
      "Improved system efficiency and reduced processing time through backend and database optimizations.",
    highlights: [
      "Improved system efficiency by 15% through backend and database optimizations",
      "Reduced booking-to-checkout processing time by 30%, enhancing user experience",
      "Built reusable frontend components, reducing redundancy by 20–25%",
      "Developed APIs and improved workflows for invoicing, email systems, and UI enhancements",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages & Databases",
    items: ["JavaScript (ES6+)", "TypeScript", "Node.js", "MongoDB", "MySQL"],
  },
  { category: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3"] },
  {
    category: "Backend & APIs",
    items: ["Express.js", "REST APIs", "API Design", "Async Processing"],
  },
  {
    category: "Tools & Technologies",
    items: ["GitHub", "Jest", "Sequelize ORM", "Mongoose ODM"],
  },
];
