import { BlogPost, EventItem, TeamMember } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { blogPostsQuery, eventsQuery, teamMembersQuery } from "@/sanity/lib/queries";

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    return await client.fetch<TeamMember[]>(teamMembersQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getEvents(): Promise<EventItem[]> {
  try {
    return await client.fetch<EventItem[]>(eventsQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch<BlogPost[]>(blogPostsQuery, {}, { next: { revalidate: 60 } });
  } catch {
    return [];
  }
}
