// Section 7 - ステップ 4: API を実装する (src/index.ts)
import { Hono } from "hono";

// 型定義：環境変数に DB があることを教える
type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>(); // 環境変数にDBがあることを、Honoの初期化時に伝える

// 1. ユーザー一覧の取得 (SELECT)
app.get("/users", async (c) => {
  const { results } = await c.env.DB.prepare("SELECT * FROM users").all();
  return c.json(results);
});

// 2. ユーザーの追加 (INSERT)
app.post("/users", async (c) => {
  const { name, email } = await c.req.json();
  await c.env.DB.prepare("INSERT INTO users (name, email) VALUES (?, ?)").bind(name, email).run();
  return c.json({ message: "作成しました" }, 201);
});

export default app;
