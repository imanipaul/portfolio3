import type { ProjectConfig } from "@/config/site";
import { SkillTag } from "./SkillTag";

export function ProjectCard({ project }: { project: ProjectConfig }) {
  const { title, description, tech, emoji, link, github } = project;
  const href = link ?? github ?? "#";

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="proj-item">
      <div
        style={{
          width: "80px",
          height: "56px",
          borderRadius: "8px",
          flexShrink: 0,
          border: "0.5px solid var(--border)",
          overflow: "hidden",
          background: "var(--bg-surface)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      </div>

      <div>
        <div
          className="proj-title"
          style={{
            fontSize: "14px",
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

        <div
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginBottom: "8px",
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
