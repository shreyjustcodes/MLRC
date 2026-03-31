import Link from "next/link";
import { Section } from "@/components/ui/section";
import { getBlogPosts } from "@/lib/cms";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Section>
      <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">Blog</h1>
      <p className="mt-4 max-w-3xl text-zinc-600">
        Long-form writeups on ML trends, project post-mortems, and practical research summaries.
      </p>

      {posts.length === 0 ? (
        <div className="mt-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-8">
          <h2 className="text-2xl font-bold">Welcome to the MLRC Blog</h2>
          <p className="mt-3 text-zinc-600">
            The publishing infrastructure is live. New articles from the team will appear here soon.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-5">
          {posts.map((post) => (
            <article key={post._id} className="rounded-xl border border-[var(--color-border)] bg-white p-6">
              <h2 className="text-2xl font-bold text-black">{post.title}</h2>
              {post.excerpt ? <p className="mt-2 text-zinc-600">{post.excerpt}</p> : null}
              {post.slug ? (
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-[var(--color-blue)]"
                >
                  Read article
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
