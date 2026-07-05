import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostsMeta, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: post ? `${post.title} — Abdülkadir Yılmaz` : "Yazı" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-7xl rounded-[32px] border border-white/10 bg-slate-950/90 px-6 py-10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] ring-1 ring-white/10 backdrop-blur-xl sm:px-10 lg:px-12">
      <div className="mb-8 flex flex-col gap-4">
        <Link href="/blog" className="text-sm text-slate-400 transition-colors hover:text-white">
          ← Blog
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.24em] text-slate-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
            {post.title}
          </h1>
          {post.description && (
            <p className="max-w-[80ch] text-base leading-8 text-slate-300">
              {post.description}
            </p>
          )}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className="prose prose-invert max-w-full prose-headings:font-display prose-headings:font-semibold prose-pre:border prose-pre:border-slate-700 prose-pre:bg-slate-900 prose-code:font-mono prose-a:text-accent prose-a:no-underline hover:prose-a:text-accent"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
