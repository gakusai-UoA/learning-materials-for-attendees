// From: 3-5-2. よくある使われ方 (2) 処理の完了報告
// 読み込みが終わった時に実行してほしい「挨拶」を渡す
const onFinish = (name) => {
  console.log(`${name}さんのデータの読み込みが終わりました！`);
};

// 本来はここで重い処理をする
const dataLoading = (callback) => {
  const userName = "Shake";
  callback(userName); // 終わったので、預かっていた関数（挨拶）を実行
};

dataLoading(onFinish);
