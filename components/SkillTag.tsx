export function SkillTag({ label }: { label: string }) {
  return (
    <span className="text-[11px] px-[11px] py-[3px] rounded-[20px] bg-(--accent-tag-bg) text-(--accent) font-mono tracking-[0.02em] transition-[background,color] duration-200 group-hover:bg-(--tag-hover-bg)">
      {label}
    </span>
  );
}
