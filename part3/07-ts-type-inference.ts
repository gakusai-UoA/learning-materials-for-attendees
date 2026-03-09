// From: 型推論：賢い TypeScript
const count = 10; // 自動的に number 型として扱われる
count = "10"; // 型推論のおかげで、ここでエラーを出してくれる
