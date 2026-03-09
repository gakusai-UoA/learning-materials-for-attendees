// Part 5 - データの操作 (SELECT / INSERT)
import { drizzle } from "drizzle-orm/d1";

app.get("/users", async (c) => {
  // 環境変数から DB 接続を取得
  const db = drizzle(c.env.DB);

  // SELECT * FROM users
  const allUsers = await db.select().from(users).all();

  return c.json(allUsers);
});
