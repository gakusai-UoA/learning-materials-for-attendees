// From: JavaScript と TypeScript の違い - JavaScript の場合
// JavaScript の場合：実行するまでバグに気づけない
function buy(price) {
  return price * 1.1;
}
buy("1,000円"); // NaN (型エラー) が返るが、書いている最中は気づけない
