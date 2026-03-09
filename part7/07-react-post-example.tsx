// From Part 7 - Section 3: React 側の実装例 (POST)
const [inputText, setInputText] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault(); // フォーム送信時のページリロードを防ぐ（※）

  await fetch("http://localhost:8787/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: inputText }),
  });

  setInputText(""); // 送信後に入力欄をクリア
  // ※ この後に一覧を再取得する処理を入れると画面が最新になります
};
