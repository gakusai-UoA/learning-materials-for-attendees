// From Part-8: Section 3 - 実装：Hono で API を作成する
import { GoogleGenerativeAI } from "@google/generative-ai";

app.post("/ai/chat", async (c) => {
  // 環境変数から安全に API キーを取得 (Cloudflare Workers の Binding)
  const genAI = new GoogleGenerativeAI(c.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-3.0-flash" });

  const { prompt } = await c.req.json();
  const result = await model.generateContent(prompt);

  return c.json({ response: result.response.text() });
});
