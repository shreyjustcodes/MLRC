import { type SchemaTypeDefinition } from "sanity";
import { blogPostType } from "@/sanity/schemaTypes/blogPost";
import { eventType } from "@/sanity/schemaTypes/event";
import { teamMemberType } from "@/sanity/schemaTypes/teamMember";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMemberType, eventType, blogPostType],
};
