import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getEvents } from "@/lib/cms";
import { fallbackEvents } from "@/lib/fallback-content";
import { GlowCard } from "@/components/ui/spotlight-card";

export const metadata = {
  title: "Events",
};

export default async function EventsPage() {
  const events = await getEvents();
  const data = events.length > 0 ? events : fallbackEvents;

  return (
    <Section>
      <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">Events</h1>
      <p className="mt-4 max-w-3xl text-zinc-600">
        A chronological feed of our activities, workshops, and hack-style challenges.
      </p>

      <div className="mt-10 space-y-6">
        {data.map((event) => (
          <GlowCard
            key={event._id}
            size="md"
            glowColor={event.highlight ? "purple" : event.status === "upcoming" ? "blue" : "green"}
            className="bg-white border-[var(--color-border)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-black">{event.title}</h2>
              <span className="rounded-full bg-[var(--color-bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                {event.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-500">
              {event.startDate ? `Start: ${event.startDate}` : "Date: TBA"}
              {event.endDate ? ` • End: ${event.endDate}` : ""}
            </p>
            {event.format ? <p className="mt-2 text-zinc-600">{event.format}</p> : null}
            <p className="mt-3 text-zinc-700">{event.summary}</p>
            {event.registrationUrl ? (
              <div className="mt-5">
                <ButtonLink href={event.registrationUrl} variant="accent" external>
                  Register Now
                </ButtonLink>
              </div>
            ) : null}
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
