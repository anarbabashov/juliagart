import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createId } from "@paralleldrive/cuid2"

export const users = sqliteTable("users", {
  id: text("id").primaryKey().$default(() => createId()),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: text("created_at").default(() => new Date().toISOString()),
})