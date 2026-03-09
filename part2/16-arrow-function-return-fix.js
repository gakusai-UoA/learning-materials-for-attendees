// From: Q2. 解説 - 正しい書き方
// 正しい書き方 A (returnあり)
const getPrice = (price) => {
  return price * 1.1;
};

// 正しい書き方 B (Implicit Return: 波括弧なし)
const getPrice = (price) => price * 1.1;
