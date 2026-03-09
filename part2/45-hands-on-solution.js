// From: 6. ハンズオン：ロジックの組み合わせ - 答え（例）

const students = [
  { name: "Aさん", score: 85 },
  { name: "Bさん", score: 40 },
  { name: "Cさん", score: 90 },
];

// 1. filterで合格者(60点以上)だけに絞る
// 2. mapで「名前だけの配列」に変換する
const passedNames = students.filter((s) => s.score >= 60).map((s) => s.name);
console.log(passedNames); // ["Aさん", "Cさん"]
