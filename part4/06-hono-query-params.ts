// Section 6 - クエリパラメータ (`c.req.query`)
// /search?q=hono&limit=10
app.get("/search", (c) => {
  const query = c.req.query("q");
  const limit = c.req.query("limit");

  return c.json({ word: query, max: limit });
});
