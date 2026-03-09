// From: 2-4. 三項演算子 : 実践的な活用
const role = "admin";

// 権限に応じてメッセージを変える
const message = role === "admin" ? "管理者設定へ進む" : "閲覧のみ可能です";

console.log(message);
