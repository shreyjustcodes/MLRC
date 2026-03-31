import { Section } from "@/components/ui/section";
import { GlowCard } from "@/components/ui/spotlight-card";
import { BookOpen, Cpu, Brain, ArrowRight, GitBranch } from "lucide-react";

export const metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  const cards = [
    {
      title: "Linear Algebra",
      glowColor: "blue" as const,
      icon: BookOpen,
      description: "Matrices, vectors, eigenvalues, and intuition for learning systems.",
      href: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
    },
    {
      title: "CS229 (ML Foundations)",
      glowColor: "green" as const,
      icon: Cpu,
      description: "A free, deep walkthrough of supervised learning and modeling.",
      href: "https://www.youtube.com/playlist?list=PLA89DCFA6ADACE599",
    },
    {
      title: "Neural Networks",
      glowColor: "red" as const,
      icon: Brain,
      description: "Backpropagation, gradients, and practical intuition for modern nets.",
      href: "https://www.deeplearning.ai/courses/deep-learning-specialization/",
    },
    {
      title: "Git / GitHub Basics",
      glowColor: "yellow" as const,
      icon: GitBranch,
      description: "Version control for collaboration, open-source, and project delivery.",
      href: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
    },
    {
      title: "Financial Aid Guides",
      glowColor: "blue" as const,
      icon: BookOpen,
      description: "Steps to apply for support on major learning platforms like Coursera.",
      href: "https://www.coursera.support/s/article/209819033-Financial-Aid-requests",
    },
  ] as const;

  const getAccentClass = (glowColor: "blue" | "green" | "red" | "yellow") => {
    switch (glowColor) {
      case "blue":
        return "text-[var(--color-blue)]";
      case "green":
        return "text-[var(--color-green)]";
      case "red":
        return "text-[var(--color-red)]";
      case "yellow":
        return "text-[var(--color-yellow)]";
    }
  };

  return (
    <Section>
      <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">The Study Hub</h1>
      <p className="mt-4 max-w-3xl text-zinc-600">
        High-quality, free resources so every student can build strong machine learning fundamentals.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <GlowCard
              key={card.title}
              size="md"
              glowColor={card.glowColor}
              className="group bg-white border-[var(--color-border)]"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-bg-soft)] text-[var(--color-text)]">
                  <Icon size={18} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-black">{card.title}</h2>
                  <p className="mt-1 text-sm text-zinc-600">{card.description}</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${getAccentClass(card.glowColor)} hover:underline`}
                >
                  Open Resource
                  <ArrowRight size={16} />
                </a>
              </div>
            </GlowCard>
          );
        })}
      </div>
    </Section>
  );
}
