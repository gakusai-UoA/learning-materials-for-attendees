// Part 5 - 【クイズ】 Zod スキーマを読み解こう
import { z } from "zod";

const QuizSchema = z.object({
  id: z.number().int().positive(),
  username: z.string().min(3).max(10),
  role: z.enum(["admin", "user"]),
});
