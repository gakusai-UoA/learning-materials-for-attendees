// Section 6 - ミニクイズ：どっちが動く？
app.get("/user/:id", (c) => c.text("A"));
app.post("/user/new", (c) => c.text("B"));
app.get("/user/new", (c) => c.text("C"));
