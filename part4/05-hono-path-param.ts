// Section 6 - パスパラメータ (`c.req.param`)
app.get("/users/:username", (c) => {
  const name = c.req.param("username");
  return c.text(`こんにちは、${name}さん！`);
});
