// From: 4-9. メソッドチェーン (組み合わせ)
const prices = [100, 600, 400, 800];

const result = prices
  .filter((p) => p <= 500) // まず「500円以下」で絞り込む ([100, 400])
  .map((p) => p * 0.9); // 次に「10%引き」に計算する

console.log(result); // [90, 360]
