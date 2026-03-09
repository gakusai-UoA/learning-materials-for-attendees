// From Part 7 - Section 2: React 側の実装例 (GET)
import { useState, useEffect } from "react";

const App = () => {
  // ① データを保存する State を作る (初期値は空の配列)
  const [messages, setMessages] = useState([]);

  // ② 画面が表示された時に「1回だけ」データを取りに行く
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch("http://localhost:8787/api");
      const data = await res.json();
      setMessages(data);
    };
    fetchMessages();
  }, []); // ← 空配列 = 「画面が最初に表示された時だけ」実行

  // ③ 取得したデータを画面に表示する
  return (
    <div>
      {messages.map((msg) => (
        <p key={msg.id}>{msg.text}</p>
      ))}
    </div>
  );
};
