import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createId } from "@paralleldrive/cuid2"

export const photos = sqliteTable("photos", {
  id: text("id").primaryKey().$default(() => createId()),
  userId: text("user_id").notNull(),
  url: text("url").notNull(),
  title: text("title"),
  description: text("description"),
  exif: text("exif", { mode: "json" }),
  createdAt: text("created_at").default(() => new Date().toISOString()),
})
