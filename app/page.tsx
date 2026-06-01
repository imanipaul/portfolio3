import { experience, clientWork, projects, social } from "@/config/site";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeUp } from "@/components/FadeUp";
import { FadeUpGroup } from "@/components/FadeUpGroup";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ABOUT */}
      <Section id="about" title="About">
        <FadeUpGroup className="text-[14px] leading-[1.85] text-(--text-secondary)">
          <FadeUp>
            <p className="mb-[14px]">
              Hi! I&apos;m Imani, a software engineer based in New York. I've
              spent the last five years building web products at Nike, first as
              part of the{" "}
              <a
                href="https://www.nike.com/launch"
                className="text-(--accent) no-underline"
              >
                SNKRS
              </a>{" "}
              team delivering experiences to millions of sneaker fans globally,
              then leading the frontend development of order management tools
              for Nike&apos;s wholesale B2B platform.
            </p>
          </FadeUp>
          <FadeUp>
            <p className="mb-[14px]">
              I gravitate toward complex, stateful problems: real-time data
              feeds, large-scale state management migrations, micro-frontend
              architecture, design system adoption. But what I care about most
              is the end result, software that works reliably and feels
              considered, whether the person using it is a Nike wholesale sales
              rep or a sneaker enthusiast refreshing a launch page.
            </p>
          </FadeUp>
          <FadeUp>
            <p>
              Outside of work, I&apos;m usually reading a sci-fi novel, knitting
              something for a friend, or testing a new baking recipe.
            </p>
          </FadeUp>
        </FadeUpGroup>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <FadeUpGroup>
          {experience.map((exp) => (
            <FadeUp key={exp.title}>
              <ExperienceCard experience={exp} />
            </FadeUp>
          ))}
          <FadeUp>
            <Link
              href={"/resume.pdf"}
              className="mt-[14px] text-[12px] text-(--accent) font-mono inline-flex items-center gap-[6px] no-underline transition-[gap] duration-150 hover:gap-[10px]"
            >
              View full résumé ↗
            </Link>
          </FadeUp>
        </FadeUpGroup>
      </Section>

      {/* CLIENT WORK */}
      <Section id="work" title="Client work">
        <div className="text-[10px] font-mono text-(--accent) tracking-[0.08em] uppercase [border:0.5px_solid_var(--accent-dim)] px-2 py-[2px] rounded-[20px] inline-block mb-3">
          Featured
        </div>
        <FadeUpGroup>
          {clientWork.map((proj) => (
            <FadeUp key={proj.title}>
              <ProjectCard project={proj} />
            </FadeUp>
          ))}
        </FadeUpGroup>
      </Section>

      {/* PERSONAL PROJECTS */}
      <Section id="projects" title="Projects">
        <FadeUpGroup>
          {projects.map((proj) => (
            <FadeUp key={proj.title}>
              <ProjectCard project={proj} />
            </FadeUp>
          ))}
        </FadeUpGroup>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in touch">
        <FadeUpGroup>
          <FadeUp>
            <p className="text-[14px] leading-[1.85] text-(--text-secondary) mb-[22px] max-w-[440px]">
              Whether you have a role in mind, a project to discuss, or just
              want to say hello — my inbox is always open. I&apos;ll get back to
              you.
            </p>
          </FadeUp>
          <FadeUp>
            <a
              href={social.email}
              className="group inline-flex items-center gap-2 text-[13px] text-(--accent) [border:0.5px_solid_var(--accent)] px-[22px] py-[10px] rounded-[5px] font-mono cursor-pointer transition-[background] duration-200 no-underline hover:bg-(--accent-dim)"
            >
              Say Hello{" "}
              <span className="transition-transform duration-150 inline-block group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                ↗
              </span>
            </a>
          </FadeUp>
          <FadeUp>
            <div className="mt-[48px] text-[11px] text-(--text-muted) font-mono">
              Designed &amp; developed by Imani Paul · Built with Next.js &amp;
              Tailwind · © 2026
            </div>
          </FadeUp>
        </FadeUpGroup>
      </Section>
    </>
  );
}
