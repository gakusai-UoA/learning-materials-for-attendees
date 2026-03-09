// Part 5 - sValidator：最新のバリデーション・ミドルウェア
import { sValidator } from "@hono/standard-validator";

app.post(
  "/register",
  // ハンドラの前に「関所」として sValidator を置く
  sValidator("json", UserSchema),
  async (c) => {
    // ここに来たときは、すでに検証済みのクリーンなデータ！
    const data = c.req.valid("json");
    return c.json({ message: "OK", user: data });
  },
);
