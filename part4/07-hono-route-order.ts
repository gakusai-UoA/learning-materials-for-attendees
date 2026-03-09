// Section 6 - 定義する「順番」がとても大事
// A: パスパラメータ（広い）
app.get("/posts/:id", (c) => c.text("記事詳細"));

// B: 通常のパス（具体的）
app.get("/posts/popular", (c) => c.text("人気記事"));
