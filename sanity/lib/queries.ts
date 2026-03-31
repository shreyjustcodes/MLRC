import { groq } from "next-sanity";

export const teamMembersQuery = groq`*[_type == "teamMember"]|order(order asc){
  _id,
  name,
  role,
  order,
  "imageUrl": photo.asset->url
}`;

export const eventsQuery = groq`*[_type == "event"]|order(startDate desc){
  _id,
  title,
  status,
  startDate,
  endDate,
  "summary": pt::text(summary),
  format,
  registrationUrl,
  highlight
}`;

export const blogPostsQuery = groq`*[_type == "blogPost"]|order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`;
