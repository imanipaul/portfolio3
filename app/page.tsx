import { experience, clientWork, projects, social } from "@/config/site";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeUp } from "@/components/FadeUp";

export default function Home() {
  return (
    <>
      {/* ABOUT */}
      <Section id="about" title="About">
        <div
          className="stagger"
          style={{ fontSize: "14px", lineHeight: 1.85, color: "var(--text-secondary)" }}
        >
          <FadeUp>
            <p style={{ marginBottom: "14px" }}>
              Hi! I&apos;m Imani, a software engineer based in New York. I enjoy
              building things that improve people&apos;s lives — whether that&apos;s for
              an internal client or the end user, I bridge the gap between
              technical challenges and business needs.
            </p>
          </FadeUp>
          <FadeUp>
            <p style={{ marginBottom: "14px" }}>
              Most recently I was part of the{" "}
              <a href="#" style={{ color: "var(--accent)", textDecoration: "none" }}>
                SNKRS Web team at S23NYC
              </a>
              , Nike&apos;s New York Studio, where I built and maintained web
              experiences serving millions of sneaker enthusiasts globally.
            </p>
          </FadeUp>
          <FadeUp>
            <p>
              When I&apos;m not at my computer, I enjoy reading sci-fi novels,
              knitting scarves and blankets for friends and family, and baking
              sweets.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="stagger">
          {experience.map((exp) => (
            <FadeUp key={exp.title}>
              <ExperienceCard experience={exp} />
            </FadeUp>
          ))}
          <FadeUp>
            <a
              href={social.resume}
              className="resume-link"
              style={{
                marginTop: "14px",
                fontSize: "12px",
                color: "var(--accent)",
                fontFamily: "var(--font-dm-mono)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
              }}
            >
              View full résumé ↗
            </a>
          </FadeUp>
        </div>
      </Section>

      {/* CLIENT WORK */}
      <Section id="work" title="Client work">
        <div
          style={{
            fontSize: "10px",
            fontFamily: "var(--font-dm-mono)",
            color: "var(--accent)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            border: "0.5px solid var(--accent-dim)",
            padding: "2px 8px",
            borderRadius: "20px",
            display: "inline-block",
            marginBottom: "12px",
          }}
        >
          Featured
        </div>
        <div className="stagger">
          {clientWork.map((proj) => (
            <FadeUp key={proj.title}>
              <ProjectCard project={proj} />
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* PERSONAL PROJECTS */}
      <Section id="projects" title="Projects">
        <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
          <div
            style={{
              fontSize: "11px",
              padding: "5px 14px",
              borderRadius: "20px",
              border: "0.5px solid var(--border-mid)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-dm-mono)",
              background: "var(--bg-surface)",
            }}
          >
            All
          </div>
          <div
            style={{
              fontSize: "11px",
              padding: "5px 14px",
              borderRadius: "20px",
              border: "0.5px solid var(--border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-dm-mono)",
              cursor: "pointer",
            }}
          >
            Open source
          </div>
        </div>
        <div className="stagger">
          {projects.map((proj) => (
            <FadeUp key={proj.title}>
              <ProjectCard project={proj} />
            </FadeUp>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in touch">
        <div className="stagger">
          <FadeUp>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
                marginBottom: "22px",
                maxWidth: "440px",
              }}
            >
              Whether you have a role in mind, a project to discuss, or just
              want to say hello — my inbox is always open. I&apos;ll get back to you.
            </p>
          </FadeUp>
          <FadeUp>
            <a
              href={social.email}
              className="contact-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "var(--accent)",
                border: "0.5px solid var(--accent)",
                padding: "10px 22px",
                borderRadius: "5px",
                fontFamily: "var(--font-dm-mono)",
                cursor: "pointer",
                transition: "background 0.2s",
                textDecoration: "none",
              }}
            >
              Say Hello{" "}
              <span
                className="contact-arrow"
                style={{ transition: "transform 0.15s", display: "inline-block" }}
              >
                ↗
              </span>
            </a>
          </FadeUp>
          <FadeUp>
            <div
              style={{
                marginTop: "48px",
                fontSize: "11px",
                color: "var(--text-muted)",
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              Designed &amp; developed by Imani Paul · Built with Next.js &amp; Tailwind · © 2026
            </div>
          </FadeUp>
        </div>
      </Section>
    </>
  );
}
