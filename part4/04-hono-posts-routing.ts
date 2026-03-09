// Section 6 - 基本のパスとメソッド
// GET /posts (記事一覧を取得する)
app.get("/posts", (c) => {
  return c.text("記事一覧です");
});

// POST /posts (新しい記事を作成する)
app.post("/posts", (c) => {
  return c.text("記事を作成しました");
});
