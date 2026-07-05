import { projects } from "@/lib/projects";
import ProjectListItem from "@/components/ProjectListItem";

export const metadata = {
  title: "Projeler — Abdülkadir Yılmaz",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Projeler
      </h1>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-dim">
        Staj boyunca geliştirdiğim uygulamalar ve üzerinde çalışmaya devam
        ettiğim kişisel projeler.
      </p>

      <div className="mt-10">
        {projects.map((project) => (
          <ProjectListItem key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
