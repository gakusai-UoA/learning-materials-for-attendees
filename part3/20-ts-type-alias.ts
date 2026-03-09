// From: Type Alias (型別名)
// 1. Union Types（共用体型）： 複数の型の「どちらか」
type ID = string | number;

// 2. Literal Types（リテラル型）： 特定の「値」そのものを型にする
// 「この3つの文字列以外は認めない」という強力な制約をかけられます
type Status = "pending" | "active" | "closed";

const userId: ID = "u123"; // OK
const currentStatus: Status = "active"; // OK

// NG! 定義にない文字列を入れようとするとエラーになる
const invalidStatus: Status = "done";
