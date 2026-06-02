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
  featured?: boolean;
  featuredBadge?: string;
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
    title: "Software Engineer · Nike PME",
    years: "2024 — 2026",
    metric: "Nike.net order orchestration · B2B wholesale platform",
    description:
      "Authored micro-frontend order management tools for Nike's wholesale B2B platform. Delivered several MFEs end-to-end — including drag-and-drop reordering, coupon validation, Redux Toolkit state management, and sales-rep partner ID flows.",
    tech: ["React", "Redux Toolkit", "MFE", "TypeScript", "Podium EDS"],
    link: "https://www.nike.com",
  },
  {
    title: "Software Engineer · Nike / S23NYC",
    years: "2021 — 2024",
    metric: "SNKRS Web · 10M+ monthly active users",
    description:
      "Built and maintained internal and client-facing web experiences for the SNKRS platform at Nike's New York Studio. Bridged technical implementation with business and creative needs across client and end-user products.",
    tech: ["React", "GraphQL", "TypeScript", "Node", "AWS"],
    link: "https://www.nike.com/launch",
  },
  {
    title: "Web Engineer · WarnerMedia",
    years: "2019 — 2021",
    description:
      "Built client-facing web ad projects at Courageous Studios, WarnerMedia's in house branded content studio. Specialized in responsive, animation-rich React applications.",
    tech: ["React", "Sass", "CSS Animations", "Vanilla JS"],
    link: "https://www.courageousstudios.com/",
  },
];

export const clientWork: ProjectConfig[] = [
  {
    title: "Courageous Showcase 2020",
    description:
      "Showcase website for Courageous Studios' 2020 video lineup — full-bleed video, responsive layout, smooth transitions.",
    tech: ["React.js", "Sass"],
    emoji: "🎬",
    link: "https://imanipaul.github.io/courageous-showcase-copy/",
  },
  {
    title: "John Hancock Hub",
    description:
      "Responsive suite of pages with full-width video, articles, and a custom infographic. Built for scale and accessibility.",
    tech: ["React.js", "CSS Animations", "Infographic"],
    emoji: "💼",
    link: "http://sponsorcontent.cnn.com/interactive/john-hancock/the-game-of-happy/",
  },
  {
    title: "AT&T Forces of Change",
    description:
      "Responsive landing page for the Forces of Change video series, continuously updated as new content launched.",
    tech: ["React.js", "Sass"],
    emoji: "📡",
    link: "https://www.cnn.com/interactive/ATT/ForcesOfChange/",
  },
  {
    title: "HSBC Articles",
    description:
      "Suite of responsive campaign pages with custom image slideshow, parallax header, and embedded video.",
    tech: ["React.js", "Parallax"],
    emoji: "🏦",
    link: "https://www.cnn.com/interactive/HSBC/SecuringTheWorld",
  },
];

export const projects: ProjectConfig[] = [
  {
    title: "Forme Storefront",
    description:
      "A fully designed consumer e-commerce storefront — homepage with featured product hero, filterable product grid, product detail page with size/color selectors, and collection pages. Built to mirror production-grade shopping UX.",
    tech: ["Next.js", "React", "TypeScript", "CSS Modules", "Vercel"],
    emoji: "🛍️",
    link: "#",
    featured: true,
    featuredBadge: "⭐ Featured · Live demo ↗",
  },
  {
    title: "scrobble.stats",
    description:
      "Personal listening habit dashboard built on the Last.fm API. Surfaces top artists, albums, and tracks across five time ranges with a client-side trend chart derived from scrobble history — no backend required.",
    tech: ["React 18", "Chart.js", "Last.fm API", "CSS Custom Props"],
    emoji: "🎵",
    link: "#",
  },
  {
    title: "Speed Type",
    description:
      "Single-player speed typing game with multiple difficulty levels.",
    tech: ["Vanilla JS", "HTML", "CSS"],
    emoji: "⌨️",
    github: "https://imanipaul.github.io/speed-type/",
  },
  {
    title: "Recollect",
    description:
      "Full-stack inventory management app for household essentials.",
    tech: ["React.js", "PostgreSQL", "Rails"],
    emoji: "🏠",
    github: "http://recollect.surge.sh/",
  },
  {
    title: "All Things Music",
    description: "Music search engine built with React and the LastFM API.",
    tech: ["React.js", "AudioDB API"],
    emoji: "🎶",
    github: "https://all-things-music.herokuapp.com/",
  },
];

export const social = {
  github: "https://github.com/imanipaul",
  linkedin: "https://linkedin.com/in/imanipaul",
  email: "mailto:imani.paul1@gmail.com",
};
