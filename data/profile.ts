// ============================================================
// PROFILE DATA
// Edit this file to update your personal information.
// Everything here flows through to the Hero, About, Journey,
// Certifications, and Contact sections.
// ============================================================

export const profile = {
  name: "Ridho Yoss Pratama",
  handle: "ridho-yoss-pratama",
  roles: ["Cyber Security", "Linux", "Systems", "Networking"],
  subheadline:
    "Building, securing, and maintaining reliable digital infrastructure.",
  bio: "Saya memiliki ketertarikan pada cybersecurity, Linux systems, network infrastructure, dan system administration. Saya senang memahami bagaimana sebuah sistem bekerja, melakukan troubleshooting, mengamankan infrastructure, dan membangun environment yang reliable.",

  // Personal details — replace the placeholders below.
  location: "Cimahi, Jawa Barat",
  email: "ridhoyosspr16@gmail.com",
  education: "YOUR_EDUCATION",
  focus: "Cyber Security / Linux / Networking",
  currentGoal: "Cyber Security Analyst / System Administrator / Network Specialist",

  // Social links
  social: {
    github: "https://github.com/rycode-me",
    linkedin: "https://www.linkedin.com/in/ridho-yoss-pratama-7036ab380/",
    email: "mailto:ridhoyosspr16@gmail.com",
  },

  // Path to your CV file inside /public. Drop your PDF there.
  cvPath: "/cv/ridho-yoss-pratama-cv.pdf",

  // Path to your profile photo inside /public.
  photoPath: "/profile.jpg",

  // "neofetch"-style identity block shown in the Linux Identity section.
  neofetch: {
    os: "Arch Linux",
    shell: "Bash",
    focus: "Cyber Security",
    network: "MikroTik",
    role: "IT Administrator",
    mindset: "Learn. Build. Secure.",
  },
};

export type JourneyEntry = {
  period: string;
  title: string;
  tag: string;
  description: string;
};

// "My Journey" timeline. Replace with your real learning path,
// projects, or roles as they happen. No entries are invented here.
export const journey: JourneyEntry[] = [
  {
    period: "2026 — Present",
    title: "Cyber Security / IT Infrastructure",
    tag: "Personal Development",
    description: "[progress]",
  },
  {
    period: "2025 — 2026",
    title: "Linux & Networking",
    tag: "Learning / Project",
    description: "[Description]",
  },
];

export type Certification = {
  name: string;
  organization: string;
  year: string;
  credentialUrl?: string;
};

// Optional. Leave the array empty if you have nothing to list yet —
// the section will hide itself automatically.
export const certifications: Certification[] = [
  // {
  //   name: "[Certification Name]",
  //   organization: "[Organization]",
  //   year: "[Year]",
  //   credentialUrl: "https://example.com/credential",
  // },
];
