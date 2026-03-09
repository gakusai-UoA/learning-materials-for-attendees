// From Part 7 - Section 2: async / await って何？
const fetchMessages = async () => {
  const res = await fetch("http://localhost:8787/api"); // ← 通信完了まで待つ
  const data = await res.json(); // ← JSON変換が終わるまで待つ
};
