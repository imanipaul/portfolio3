import type { ProjectConfig } from "@/config/site";
import { SkillTag } from "./SkillTag";

export function ProjectCard({ project }: { project: ProjectConfig }) {
  const { title, description, tech, emoji, link, github, featured, featuredBadge } = project;
  const href = link ?? github ?? "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`proj-item${featured ? " featured" : ""}`}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: featured ? "100px" : "80px",
          height: featured ? "68px" : "56px",
          borderRadius: "8px",
          flexShrink: 0,
          border: "0.5px solid var(--border)",
          overflow: "hidden",
          background: "var(--bg-surface)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: featured ? "22px" : "14px",
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        {featured ? (
          emoji ?? "◇"
        ) : (
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1.5px solid var(--accent-dim)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            {emoji ?? "◇"}
          </div>
        )}
      </div>

      <div>
        {/* Featured badge */}
        {featured && featuredBadge && (
          <div className="proj-featured-badge">{featuredBadge}</div>
        )}

        {/* Title */}
        <div
          className="proj-title"
          style={{
            fontSize: featured ? "15px" : "14px",
            fontWeight: 500,
            color: "var(--text-primary)",
            marginBottom: "4px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            transition: "color 0.2s",
          }}
        >
          {title}
          <span
            className="exp-arrow"
            style={{
              fontSize: "12px",
              color: "var(--text-muted)",
              transition: "transform 0.15s",
            }}
          >
            ↗
          </span>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "8px",
            transition: "color 0.3s",
          }}
        >
          {description}
        </div>

        <div className="tags">
          {tech.map((t) => (
            <SkillTag key={t} label={t} />
          ))}
        </div>
      </div>
    </a>
  );
}
