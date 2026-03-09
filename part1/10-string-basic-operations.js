// Section: 3. データ型 — string の基本操作
const greeting = "Hello, World!";

// 長さを取得
console.log(greeting.length); // 13

// 特定の位置の文字を取得（0 から数える）
// C言語のchar配列と同じ感覚でOK
console.log(greeting[0]); // "H"
console.log(greeting[7]); // "W"

// 文字列を連結
console.log("Hello" + ", " + "JS"); // "Hello, JS"

// 文字列が含まれているか
console.log(greeting.includes("World")); // true
console.log(greeting.includes("Java")); // false
