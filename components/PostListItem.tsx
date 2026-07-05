import Link from "next/link";
import { PostMeta } from "@/lib/posts";

export default function PostListItem({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border-b border-border-soft py-6 first:pt-0"
    >
      <div className="flex items-baseline justify-between gap-4 font-mono text-xs text-ink-faint">
        <span>{post.date}</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">
        {post.description}
      </p>
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs text-ink-faint">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
