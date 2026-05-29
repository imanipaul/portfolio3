export interface ExperienceConfig {
  title: string;
  years: string;
  metric?: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface ProjectConfig {
  title: string;
  description: string;
  tech: string[];
  emoji?: string;
  link?: string;
  github?: string;
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const experience: ExperienceConfig[] = [
  {
    title: "Software Engineer · Nike / S23NYC",
    years: "2021 — 2024",
    metric: "SNKRS Web · 10M+ monthly active users",
    description:
      "Built and maintained web experiences for the SNKRS platform at Nike's New York Studio. Bridged technical implementation with business and creative needs across client and end-user products.",
    tech: ["React", "GraphQL", "Node", "TypeScript", "AWS"],
    link: "#",
  },
  {
    title: "Software Engineer · S23NYC",
    years: "2019 — 2021",
    description:
      "Developed client-facing web projects for brands including AT&T, John Hancock, HSBC, and Courageous Studios. Specialized in responsive, animation-rich React applications.",
    tech: ["React", "Sass", "CSS Animations", "Vanilla JS"],
    link: "#",
  },
];

export const clientWork: ProjectConfig[] = [
  {
    title: "Courageous Showcase 2020",
    description:
      "Showcase website for Courageous Studios' 2020 video lineup — full-bleed video, responsive layout, smooth transitions.",
    tech: ["React.js", "Sass"],
    emoji: "🎬",
    link: "#",
  },
  {
    title: "John Hancock Hub",
    description:
      "Responsive suite of pages including full-width video, articles, and custom infographic. Built for scale and accessibility.",
    tech: ["React.js", "CSS Animations", "Infographic"],
    emoji: "💼",
    link: "#",
  },
  {
    title: "AT&T Forces of Change",
    description:
      "Responsive landing page for the Forces of Change video series. Continuously updated as new content was released.",
    tech: ["React.js", "Sass"],
    emoji: "📡",
    link: "#",
  },
  {
    title: "HSBC Articles",
    description:
      "Suite of responsive pages including two articles and a white paper. Custom image slideshow, parallax header, embedded video.",
    tech: ["React.js", "Parallax"],
    emoji: "🏦",
    link: "#",
  },
];

export const projects: ProjectConfig[] = [
  {
    title: "Speed Type",
    description: "Single-player speed typing game with multiple difficulty levels.",
    tech: ["Vanilla JS", "HTML", "CSS"],
    emoji: "⌨️",
    github: "#",
  },
  {
    title: "Recollect",
    description: "Full-stack inventory management app for household essentials.",
    tech: ["React.js", "PostgreSQL", "Rails"],
    emoji: "🏠",
    github: "#",
  },
  {
    title: "All Things Music",
    description: "Music search engine built with React and the LastFM API.",
    tech: ["React.js", "AudioDB API"],
    emoji: "🎵",
    github: "#",
  },
];

export const social = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  dribbble: "#",
  email: "mailto:imani@example.com",
  resume: "#",
};
