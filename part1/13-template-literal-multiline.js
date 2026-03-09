// Section: 3. データ型 — テンプレートリテラル：改行と式
// 改行もそのまま書ける（+ で連結する必要がない）
const html = `
  <div>
    <h1>Hello</h1>
    <p>Welcome!</p>
  </div>
`;

// ${} の中には式（計算）も書ける
const price = 1000;
const tax = 0.1;
console.log(`税込: ${price * (1 + tax)}円`); // 税込: 1100円
