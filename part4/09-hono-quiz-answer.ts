// Section 6 - ミニクイズ：答え（同じコード）
app.get("/user/:id", (c) => c.text("A"));
app.post("/user/new", (c) => c.text("B"));
app.get("/user/new", (c) => c.text("C"));
