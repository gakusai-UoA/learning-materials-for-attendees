// Part 5 - KV ストレージへのアクセス
app.get("/status", async (c) => {
  // KV からデータを取得
  const kvStore = c.env.KV;
  const maintenanceStatus = await kvStore.get("maintenance_mode");

  return c.json({ maintenance: maintenanceStatus === "true" });
});

app.post("/status", async (c) => {
  // KV にデータを保存
  const kvStore = c.env.KV;
  await kvStore.put("maintenance_mode", "true");
  return c.text("Updated!");
});
