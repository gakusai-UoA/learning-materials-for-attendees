// Part 6 - 【実践】useEffect を書いてみよう
import { useState, useEffect } from "react";

const TitleApp = () => {
  const [count, setCount] = useState(0);

  // 画面の表示が終わった「後」に実行される
  useEffect(() => {
    document.title = `現在のカウント: ${count}`;
    console.log("タイトルを更新しました！");
  }, [count]); // count が変わった時だけ実行

  return <button onClick={() => setCount(count + 1)}>押した回数: {count}</button>;
};
