// Part 6 - useEffect の基本形式
import { useEffect } from "react";

useEffect(
  () => {
    // ① ここに「やりたいこと（副作用）」を書く
    console.log("画面が出た後に実行されたよ！");
  },
  [
    /* ② ここに「いつ実行するか」のルールを書く */
  ],
);
