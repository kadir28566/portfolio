import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.name} — Abdülkadir Yılmaz` : "Proje" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-7xl rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_40px_120px_rgba(15,23,42,0.35)] ring-1 ring-white/10 backdrop-blur-xl sm:p-10">
      <div className="mb-10 space-y-5 border-b border-slate-800 pb-8">
        <Link href="/projects" className="text-sm text-slate-400 transition-colors hover:text-white">
          ← Projeler
        </Link>

        <div className="space-y-4">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            {project.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
            <span>{project.period}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <Section title="Problem">
          <p className="text-slate-300">{project.problem}</p>
        </Section>

        <Section title="Rol">
          <p className="text-slate-300">{project.role}</p>
        </Section>

        <Section title="Yaklaşım">
          <ul className="space-y-3 pl-4 text-[15px] leading-8 text-slate-300">
            {project.approach.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Öne Çıkanlar">
          <ul className="space-y-3 pl-4 text-[15px] leading-8 text-slate-300">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Zorluklar & Çözümler">
          <div className="space-y-5">
            {project.challenges.map((c, i) => (
              <div key={i} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                <p className="font-medium text-white">{c.title}</p>
                <p className="mt-2 text-[15px] leading-8 text-slate-300">{c.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Sonuç">
          <p className="text-slate-300">{project.result}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs text-slate-300 transition-colors hover:border-accent hover:text-white"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </Section>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-wide text-ink-faint">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-dim">
        {children}
      </div>
    </section>
  );
}
