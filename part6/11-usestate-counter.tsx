// Part 6 - useState の書き方
import { useState } from "react";

const Counter = () => {
  // const [今の値, 値を書き換えるための関数] = useState(最初の値);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ！</button>
    </div>
  );
};
