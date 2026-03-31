import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Join",
};

export default function JoinPage() {
  return (
    <Section>
      <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">Join MLRC</h1>
      <p className="mt-4 max-w-3xl text-zinc-600">
        We are recruiting developers, researchers, designers, and operations contributors who want
        to build real machine learning systems together.
      </p>
      <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-white p-8">
        <h2 className="text-2xl font-bold">What we look for</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-700">
          <li>Strong curiosity and willingness to learn in public.</li>
          <li>Commitment to collaborative project delivery.</li>
          <li>Comfort with open-source tools and technical documentation.</li>
        </ul>
        <div className="mt-6">
          <ButtonLink href="/events" variant="primary">
            Explore Upcoming Initiatives
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
