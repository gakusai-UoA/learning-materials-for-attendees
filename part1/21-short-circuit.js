// Section: 5. 論理演算子 — ショートサーキット評価
// AND: 左が false なら右を評価しない
false && expensiveFunction(); // expensiveFunction は呼ばれない

// OR: 左が true なら右を評価しない
true || expensiveFunction(); // expensiveFunction は呼ばれない

// デフォルト値の設定に使える
const port = process.env.PORT || 3000;
