import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => [
        rule.required(),
        rule.min(4).error("minimum value must be 4 charachters"),
      ],
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
      validation: (rule) => [
        rule.required(),
        rule.min(4).error("minimum value must be 4 charachters"),
      ],
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "github",
      type: "string",
      title: "Github",
    }),
    defineField({
      name: "startDate",
      type: "date",
      title: "startDate",
    }),
    defineField({
      name: "endDate",
      type: "date",
      title: "endDate",
    }),
    defineField({
      name: "videoPreview",
      type: "file",
      title: "VideoPreview",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
  ],
});
