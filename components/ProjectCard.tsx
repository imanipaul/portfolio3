import type { ProjectConfig } from "@/config/site";
import { SkillTag } from "./SkillTag";

export function ProjectCard({ project }: { project: ProjectConfig }) {
  const {
    title,
    description,
    tech,
    emoji,
    link,
    github,
    featured,
    featuredBadge,
  } = project;
  const href = link ?? github ?? "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex gap-4 p-4 rounded-[10px] [border:0.5px_solid_transparent] mb-1 no-underline text-inherit transition-[background,border-color,transform,box-shadow] duration-200 hover:bg-(--bg-hover) hover:border-(--border) hover:-translate-y-0.5 hover:shadow-[0_4px_20px_var(--shadow)]${featured ? " [border-left:2px_solid_var(--accent)] pl-[18px] bg-(--bg-surface) mb-4" : ""}`}
    >
      <div
        className={`shrink-0 rounded-[8px] [border:0.5px_solid_var(--border)] overflow-hidden bg-(--bg-surface) flex items-center justify-center transition-[border-color,background] duration-300${featured ? " w-[100px] h-[68px] text-[22px]" : " w-[80px] h-[56px] text-[14px]"}`}
      >
        {featured ? (
          (emoji ?? "◇")
        ) : (
          <div className="w-8 h-8 rounded-full [border:1.5px_solid_var(--accent-dim)] flex items-center justify-center text-[14px]">
            {emoji ?? "◇"}
          </div>
        )}
      </div>

      <div>
        {featured && featuredBadge && (
          <div className="inline-flex items-center gap-[5px] text-[10px] font-mono text-(--accent) tracking-[0.08em] uppercase [border:0.5px_solid_var(--accent)] px-2 py-[2px] rounded-[4px] mb-[6px]">
            {featuredBadge}
          </div>
        )}

        <div
          className={`font-medium text-foreground mb-1 flex items-center gap-[6px] transition-[color] duration-200 group-hover:text-[var(--accent)]${featured ? " text-[15px]" : " text-[14px]"}`}
        >
          {title}
          <span className="text-[12px] text-(--text-muted) transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-(--accent)">
            ↗
          </span>
        </div>

        <div className="text-[12px] text-(--text-secondary) leading-[1.7] mb-2 transition-[color] duration-300">
          {description}
        </div>

        <div className="flex flex-wrap gap-[6px]">
          {tech.map((t) => (
            <SkillTag key={t} label={t} />
          ))}
        </div>
      </div>
    </a>
  );
}
