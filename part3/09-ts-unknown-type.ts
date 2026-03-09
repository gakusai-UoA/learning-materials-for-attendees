// From: 代替案：より安全な unknown 型
let safeValue: unknown = "Shake";

// safeValue.push(); // エラー！「よくわからないものに push はできません」と怒ってくれる

if (typeof safeValue === "string") {
  // ここからは string として扱える（型の絞り込み）
  console.log(safeValue.length);
}
