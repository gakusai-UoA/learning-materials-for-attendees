// Section 5 - 核心オブジェクト：`c` (Context)
app.get("/hello", (c) => {
  const data = c.req.json();
  // レスポンスを JSON で返す
  return c.json({ message: "Hello!", data: data });
});
