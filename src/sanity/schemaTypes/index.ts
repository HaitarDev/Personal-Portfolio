import { type SchemaTypeDefinition } from "sanity";
import projects from "../schemas/projects";
import { muxInput } from "sanity-plugin-mux-input";
import { defineConfig } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects],
};

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [muxInput()],
});
