import { defineArrayMember, defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["upcoming", "ongoing", "past"] },
      initialValue: "upcoming",
    }),
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({ name: "endDate", title: "End Date", type: "date" }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({ name: "format", title: "Format", type: "string" }),
    defineField({ name: "registrationUrl", title: "Registration URL", type: "url" }),
    defineField({ name: "highlight", title: "Highlight", type: "boolean", initialValue: false }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
  ],
});
