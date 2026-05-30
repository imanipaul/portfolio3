import type { ExperienceConfig } from "@/config/site";
import { SkillTag } from "./SkillTag";

export function ExperienceCard({ experience }: { experience: ExperienceConfig }) {
  const { title, years, metric, description, tech, link } = experience;

  return (
    <a href={link ?? "#"} className="exp-item">
      <div
        style={{
          fontSize: "11px",
          color: "var(--text-muted)",
          fontFamily: "var(--font-dm-mono)",
          minWidth: "90px",
          paddingTop: "3px",
          flexShrink: 0,
          letterSpacing: "0.02em",
        }}
      >
        {years}
      </div>
      <div>
        <div
          className="exp-title"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "var(--text-primary)",
            marginBottom: "5px",
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

        {metric && (
          <div
            className="exp-metric"
            style={{
              fontSize: "12px",
              color: "var(--accent)",
              fontFamily: "var(--font-dm-mono)",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {metric}
          </div>
        )}

        <div
          style={{
            fontSize: "13px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: "10px",
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
