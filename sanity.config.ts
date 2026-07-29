import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { postSchema } from "./src/sanity/schemas/post";
import { authorSchema } from "./src/sanity/schemas/author";

export default defineConfig({
  name: "opsly",
  title: "Opsly",
  projectId: "x88tod9f",
  dataset: "opsly",
  plugins: [structureTool()],
  schema: {
    types: [postSchema, authorSchema],
  },
});
