// From Part 7 - Section 3: POST で fetch に渡す 3 つの設定
await fetch("http://localhost:8787/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ text: inputText }),
});
