import Link from "next/link";
import StatusLine from "@/components/StatusLine";
import ProjectListItem from "@/components/ProjectListItem";
import PostListItem from "@/components/PostListItem";
import { projects } from "@/lib/projects";
import { getAllPostsMeta } from "@/lib/posts";
import Image from "next/image";
import profilePic from "../f01cd08c-cb82-47f1-975a-9d755a54f9e3.png";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = getAllPostsMeta().slice(0, 3);

  return (
    <div className="space-y-16">
      <section>
        <div className="sm:flex sm:items-center sm:justify-between gap-8">
          <div className="sm:flex-1">
            <StatusLine />
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Junior Software Engineer
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-dim">
              Merhaba, ben Abdülkadir Yılmaz.

              Backend geliştirme alanında kariyerine başlamak isteyen bir yazılım mühendisiyim. Bu siteyi hem geliştirdiğim projeleri sergilemek hem de öğrenme sürecimde edindiğim bilgileri paylaşmak için hazırladım.
            </p>
          </div>

          <div className="mt-6 sm:mt-0 flex-shrink-0">
            <Image
              src={profilePic}
              alt="Profil fotoğrafı"
              width={140}
              height={140}
              className="rounded-full object-cover border-2 border-border"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-[0.26em] text-ink-dim sm:text-base">
              Seçili Projeler
            </h2>
            <p className="mt-1 text-sm text-ink-faint">
              En son çalışmalarımın öne çıkan kısmı.
            </p>
          </div>
          <Link href="/projects" className="text-sm text-ink-dim transition hover:text-ink">
            tümü →
          </Link>
        </div>
        <div>
          {featuredProjects.map((project) => (
            <ProjectListItem key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-[0.26em] text-ink-dim sm:text-base">
              Son Yazılar
            </h2>
            <p className="mt-1 text-sm text-ink-faint">
              Son teknik notlarım ve deneyimlerim.
            </p>
          </div>
          <Link href="/blog" className="text-sm text-ink-dim transition hover:text-ink">
            tümü →
          </Link>
        </div>
        <div>
          {latestPosts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
