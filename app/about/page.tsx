import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { getTeamMembers } from "@/lib/cms";
import { fallbackTeam } from "@/lib/fallback-content";
import { GlowCard } from "@/components/ui/spotlight-card";

/** Local headshots in /public — keyed by display name from CMS or fallback. */
const TEAM_PHOTOS: Record<string, string> = {
  "Shreyansh Thapak": "/shreyansh.jpg",
  "Anuj Yadav": "/anuj.jpg",
  "Siddarth Sharma": "/siddarth.jpg",
  "Prince Sanodiya": "/prince.jpg",
  "Manya Verma": "/manya.jpg",
  "Mayank Gupta": "/mayank.jpg",
};

export const metadata = {
  title: "About the Team",
};

export default async function AboutPage() {
  const members = await getTeamMembers();
  const team = members.length > 0 ? members : fallbackTeam;

  return (
    <Section>
      <Container>
        <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
          About the Team
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-600">
          We are a collective of developers, researchers, and visionaries driven by the
          potential of artificial intelligence. At the ML Research Club, we don&apos;t just
          study algorithms; we build the architecture of tomorrow. From foundational
          models to real-world applications, our leadership team is dedicated to
          fostering a culture of relentless curiosity, open-source collaboration, and
          technical excellence.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => {
            const glowColor =
              member.name === "Shreyansh Thapak"
                ? "blue"
                : member.name === "Anuj Yadav" || member.name === "Siddarth Sharma"
                  ? "green"
                  : member.name === "Prince Sanodiya"
                    ? "yellow"
                    : member.name === "Manya Verma" || member.name === "Mayank Gupta"
                      ? "red"
                      : "blue";

            const photoSrc = TEAM_PHOTOS[member.name] ?? member.imageUrl;

            return (
              <GlowCard
                key={member._id}
                glowColor={glowColor}
                size="md"
                className="group bg-white border-[var(--color-border)] p-0"
              >
                <div className="flex h-full flex-col items-center px-6 pb-6 pt-6 text-center">
                  {photoSrc ? (
                    <Image
                      src={photoSrc}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="mx-auto mb-4 h-24 w-24 rounded-full border-2 border-slate-100 object-cover shadow-sm"
                    />
                  ) : (
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-100 bg-zinc-100 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm">
                      Photo
                    </div>
                  )}

                  <h2 className="text-lg font-bold text-black">{member.name}</h2>
                  <p className="mt-1 text-sm text-zinc-600">{member.role}</p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
