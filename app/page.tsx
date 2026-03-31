import { Hero } from "@/components/home/hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Hero />
      <Section className="bg-[var(--color-bg-soft)]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              The Mission
            </h2>
            <p className="mt-4 text-zinc-600">
              We build the ML Research Club around three pillars: Applied Research, Building,
              and Community.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h3 className="text-lg font-bold text-black">Applied Research</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Study the fundamentals, then translate insights into practical experiments and
                shareable knowledge.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h3 className="text-lg font-bold text-black">Building</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Turn ideas into working prototypes: models, optimizations, and real-world
                project delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6">
              <h3 className="text-lg font-bold text-black">Community</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Collaborate openly through workshops, mentorship, and team-based execution.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
