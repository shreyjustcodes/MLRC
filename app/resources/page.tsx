import { Section } from "@/components/ui/section";
import { resourceCategories } from "@/lib/resources";

export const metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <Section>
      <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">The Study Hub</h1>
      <p className="mt-4 max-w-3xl text-zinc-600">
        Curated, high-quality, and free resources so every student can build strong machine learning fundamentals.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {resourceCategories.map((category) => (
          <article key={category.title} className="rounded-xl border border-[var(--color-border)] bg-white p-6">
            <h2 className="text-xl font-bold">{category.title}</h2>
            <ul className="mt-4 space-y-3">
              {category.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-blue)] underline-offset-2 hover:underline"
                  >
                    {link.label}
                  </a>
                  {link.note ? <p className="mt-1 text-sm text-zinc-500">{link.note}</p> : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
