import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-[80px] md:max-lg:mb-[60px] max-md:mb-[52px]">
      <div className="text-[10px] tracking-[0.12em] uppercase text-(--text-secondary) font-mono mb-7 pb-[10px] [border-bottom:0.5px_solid_var(--border)] transition-[color,border-color] duration-300">
        {title}
      </div>
      <div>{children}</div>
    </section>
  );
}
