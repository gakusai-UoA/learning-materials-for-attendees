// Part 5 - Drizzle でテーブルを定義する
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// ユーザーテーブルの定義
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  age: integer("age"),
});
