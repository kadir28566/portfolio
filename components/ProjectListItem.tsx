import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border-b border-border-soft py-6 first:pt-0"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accent">
          {project.name}
        </h3>
        <span className="shrink-0 font-mono text-xs text-ink-faint">
          {project.period.split("·")[0].trim()}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">
        {project.tagline}
      </p>
      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink-faint">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </Link>
  );
}
