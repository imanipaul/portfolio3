# imanipaul.com

Personal portfolio site for Imani Paul, software engineer based in New York.

**Live site:** [imanipaul.com](https://imanipaul.com)

---

## Stack

|            |                                                 |
| ---------- | ----------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/) (App Router)  |
| Styling    | [Tailwind CSS](https://tailwindcss.com/)        |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Language   | TypeScript                                      |
| Deployment | [Vercel](https://vercel.com/)                   |

---

## Features

- Dark and light mode with persistent theme toggle
- Scroll-triggered fade-up animations and staggered entrance sequences
- Sticky sidebar with active section tracking
- Fully responsive — dedicated mobile hero layout below 768px
- `/resume` route rendering a full-page PDF viewer
- Accessible color contrast across both themes

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
app/
  page.tsx          # Main single-page portfolio
  layout.tsx        # Root layout, metadata, fonts
  resume/
    page.tsx        # /resume PDF viewer route
  icon.svg          # Favicon
public/
  resume.pdf        # Resume file
components/
  Sidebar.tsx
  MobileHero.tsx
  Experience.tsx
  Projects.tsx
  Contact.tsx
```

---

## Inspiration

Layout inspired by [brittanychiang.com](https://brittanychiang.com). Design, content, color palette, and implementation are my own.

---

## License

The code in this repo is open source and available under the [MIT License](LICENSE). The content — writing, project descriptions, and personal information — is not licensed for reuse.

```

```
