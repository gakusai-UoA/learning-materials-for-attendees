// Part 5 - Drizzle での設計図 (ワークショップ 1)
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const messages = sqliteTable("messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  content: text("content").notNull(),
});
