/**
 * Lets you run `npx sanity [command]` from the project root.
 * https://www.sanity.io/docs/cli
 */
import { defineCliConfig } from "sanity/cli";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "qfalq9hj";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineCliConfig({
  api: { projectId, dataset },
});
