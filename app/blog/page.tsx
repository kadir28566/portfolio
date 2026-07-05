import { getAllPostsMeta } from "@/lib/posts";
import PostListItem from "@/components/PostListItem";

export const metadata = {
  title: "Blog — Abdülkadir Yılmaz",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        Blog
      </h1>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink-dim">
        Çalışırken öğrendiğim şeylerin notları. Çoğu, bir projede gerçekten
        karşılaştığım bir problemden çıktı.
      </p>

      <div className="mt-10">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="py-6 text-sm text-ink-faint">henüz yazı yok.</p>
        )}
      </div>
    </div>
  );
}
