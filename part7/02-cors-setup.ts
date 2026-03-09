// From Part 7 - Section 1: CORS エラーの解決策
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: "http://localhost:5173", // React アプリのオリジンを許可
    credentials: true,
  }),
);
