import { type SchemaTypeDefinition } from "sanity";
import projects from "../schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects],
};
