// From Part-8: Section 3 - 実装：Hono で API を作成する
import { GoogleGenAI } from "@google/genai";

app.post("/ai/chat", async (c) => {
  // 環境変数から安全に API キーを取得 (Cloudflare Workers の Binding)
  const genAI = new GoogleGenAI({ apiKey: c.env.GEMINI_API_KEY });

  const { prompt } = await c.req.json();
  const response = await genAI.models.generateContent({
    model: "gemini-3.0-flash",
    contents: prompt,
  });

  return c.json({ response: response.text() });
});
