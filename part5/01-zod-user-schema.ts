// Part 5 - Zod の基本文法 (Zod の基本文法)
import { z } from "zod";

// 「データの形」の定義（スキーマ）
export const UserSchema = z.object({
  name: z.string().min(1, "名前は必須です"), // 1文字以上
  age: z.number().int().min(0).max(120), // 0〜120の整数
  email: z.string().email("形式が不正です"), // メール形式
  tags: z.array(z.string()).optional(), // 文字列の配列、省略OK
});

// スキーマから自動的に TypeScript の型を取り出すことも可能！
type User = z.infer<typeof UserSchema>;
