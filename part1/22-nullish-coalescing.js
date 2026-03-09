// Section: 5. 論理演算子 — Nullish Coalescing (??)
const count = 0;
console.log(count || 10); // 10（0 は falsy）
console.log(count ?? 10); // 0 （0 は null でも undefined でもない）
