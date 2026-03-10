// Section: 3. データ型 — string の便利メソッド
const text = "  Hello, JavaScript!  ";

// 大文字・小文字変換
console.log("hello".toUpperCase()); // "HELLO"
console.log("HELLO".toLowerCase()); // "hello"

// 前後の空白を除去
console.log(text.trim()); // "Hello, JavaScript!"

// 一部を切り出し（開始位置, 文字数）
console.log("JavaScript".slice(0, 4)); // "Java"

// 文字を置き換え
console.log("I like cats".replace("cats", "dogs"));
// "I like dogs"

// 分割して配列にする
console.log("a,b,c".split(",")); // ["a", "b", "c"]
