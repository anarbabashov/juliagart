import type { Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite", // only 'dialect' is now required
  dbCredentials: {
    url: "./db.sqlite",
  },
} satisfies Config