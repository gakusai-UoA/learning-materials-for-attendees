// From: ジェネリクス - 非効率な例
interface StringRes {
  data: string;
  status: number;
}
interface NumberRes {
  data: number;
  status: number;
}
// ... 型が増えるたびに新しい定義が必要になる (非効率)
