// From: 3-6. なぜアロー関数が好まれるのか？
// 従来の書き方
setTimeout(function () {
  console.log("1秒経過");
}, 1000);

// アロー関数
setTimeout(() => console.log("1秒経過"), 1000);
