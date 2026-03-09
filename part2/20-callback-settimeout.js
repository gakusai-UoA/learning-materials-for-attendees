// From: 3-5-1. よくある使われ方 (1) 待機処理
// 「1秒（1000ミリ秒）待ってから、この関数を呼び出して」と託す
const showMessage = () => {
  console.log("1秒経過しました！");
};

setTimeout(showMessage, 1000);
