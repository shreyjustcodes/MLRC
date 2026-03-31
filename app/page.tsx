import { Hero } from "@/components/home/hero";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Hero />
      <Section className="bg-[var(--color-bg-soft)]">
        <div className="grid gap-6 rounded-2xl border border-[var(--color-border)] bg-white p-8 sm:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="mt-1 text-zinc-600">Student builders and researchers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Workshops</h3>
            <p className="mt-1 text-zinc-600">Hands-on sessions on core ML fundamentals</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Open Source</h3>
            <p className="mt-1 text-zinc-600">Projects with practical community impact</p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="soft-shadow rounded-2xl border border-[var(--color-border)] bg-white p-8 sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight">Build with us this semester</h2>
          <p className="mt-3 max-w-2xl text-zinc-600">
            From foundational math to production-ready ML systems, the club helps students
            move from curiosity to confidence.
          </p>
          <div className="mt-6">
            <ButtonLink href="/join" variant="accent">
              Explore Recruitment Details
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
