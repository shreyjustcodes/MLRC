import { EventItem, TeamMember } from "@/lib/types";

export const fallbackTeam: TeamMember[] = [
  { _id: "1", name: "Shreyansh Thapak", role: "Club Lead", order: 1 },
  { _id: "2", name: "Anuj Yadav", role: "Technical Lead", order: 2 },
  { _id: "3", name: "Siddarth Sharma", role: "Project Lead", order: 3 },
  { _id: "4", name: "Prince Sanodiya", role: "Event / Operations Lead", order: 4 },
  { _id: "5", name: "Manya Verma", role: "Marketing / Outreach Lead", order: 5 },
  { _id: "6", name: "Mayank Gupta", role: "Design Lead", order: 6 },
];

export const fallbackEvents: EventItem[] = [
  {
    _id: "ideathon-1",
    title: "ML IDEATHON 1.0",
    status: "upcoming",
    startDate: "2026-06-15",
    endDate: "2026-06-16",
    summary:
      "A deep-dive challenge to build models, optimize algorithms, and pitch intelligent solutions. Prize pool details are TBA.",
    format: "2-day event, 6 hours each day",
    registrationUrl:
      process.env.NEXT_PUBLIC_IDEATHON_REGISTER_URL ?? "https://forms.gle/example-mlrc-register",
    highlight: true,
  },
];
