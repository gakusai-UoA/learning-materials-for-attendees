// From: 2-3. 三項演算子 : 構文
const isMember = true;

// 従来の書き方 (行数を使う)
// let fee;
// if (isMember) { fee = 1000; } else { fee = 2000; }

// 三項演算子 (スッキリ！)
const fee = isMember ? 1000 : 2000;
