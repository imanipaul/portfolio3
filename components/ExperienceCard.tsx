import type { ExperienceConfig } from "@/config/site";
import { SkillTag } from "./SkillTag";

export function ExperienceCard({
  experience,
}: {
  experience: ExperienceConfig;
}) {
  const { title, years, metric, description, tech, link } = experience;

  return (
    <a
      href={link ?? "#"}
      className="group flex gap-5 p-4 rounded-[10px] [border:0.5px_solid_transparent] mb-1 no-underline text-inherit transition-[background,border-color,transform,box-shadow] duration-200 hover:bg-(--bg-hover) hover:border-(--border) hover:-translate-y-0.5 hover:shadow-[0_4px_20px_var(--shadow)] max-md:flex-col max-md:gap-1"
    >
      <div className="text-[11px] text-(--text-muted) font-mono min-w-[90px] pt-[3px] shrink-0 tracking-[0.02em] max-md:min-w-0">
        {years}
      </div>
      <div>
        <div className="text-[14px] font-medium text-foreground mb-[5px] flex items-center gap-[6px] transition-[color] duration-200 group-hover:text-(--accent)">
          {title}
          <span className="text-[12px] text-(--text-muted) transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-(--accent)">
            ↗
          </span>
        </div>

        {metric && (
          <div className="text-[12px] text-(--accent) font-mono mb-[10px] flex items-center gap-[6px] before:content-['▸'] before:text-[10px]">
            {metric}
          </div>
        )}

        <div className="text-[13px] text-(--text-secondary) leading-[1.7] mb-[10px]">
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
