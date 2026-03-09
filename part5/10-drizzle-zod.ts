// Part 5 - drizzle-zod：究極の自動化
import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { users } from "./db/schema";

// Drizzle の定義から、Zod スキーマを自動生成！
const UserInsertSchema = createInsertSchema(users);

// もちろん、特定の項目にルールを追加することも可能
const DetailedUserSchema = createInsertSchema(users, {
  email: z.string().email(),
  age: z.number().min(0).max(120),
});
