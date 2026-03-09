// Part 5 - 答え（クイズの正解）
import { z } from "zod";

const QuizSchema = z.object({
  id: z.number().int().positive(),
  username: z.string().min(3).max(10),
  role: z.enum(["admin", "user"]),
});

// 1. { id: 10, username: "dev", role: "guest" } → 失敗 (role が admin か user である必要がある)
// 2. { id: -1, username: "alice", role: "admin" } → 失敗 (id が positive である必要がある)
// 3. { id: 5, username: "hi", role: "user" } → 失敗 (username が min(3) である必要がある)
