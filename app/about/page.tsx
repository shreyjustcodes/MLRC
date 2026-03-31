import Image from "next/image";
import { Section } from "@/components/ui/section";
import { getTeamMembers } from "@/lib/cms";
import { fallbackTeam } from "@/lib/fallback-content";

export const metadata = {
  title: "About the Team",
};

export default async function AboutPage() {
  const members = await getTeamMembers();
  const team = members.length > 0 ? members : fallbackTeam;

  return (
    <Section>
      <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">About the Team</h1>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600">
        We are a collective of developers, researchers, and visionaries driven by the potential of artificial intelligence.
        At the ML Research Club, we do not just study algorithms; we build the architecture of tomorrow. From foundational
        models to real-world applications, our leadership team is dedicated to fostering a culture of relentless curiosity,
        open-source collaboration, and technical excellence.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <article
            key={member._id}
            className="group soft-shadow overflow-hidden rounded-xl border border-[var(--color-border)] bg-white"
          >
            <div className="relative h-64 bg-zinc-100">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-zinc-200 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Photo
                </div>
              )}
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-black">{member.name}</h2>
              <p className="mt-1 text-sm text-zinc-600">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
