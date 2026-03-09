// From: JavaScript と TypeScript の違い - TypeScript の場合
// TypeScript の場合：書いている途中でエディタが怒ってくれる
function safeBuy(price: number) {
  return price * 1.1;
}
safeBuy("1,000円");
//      ^^^^^^^^^
// Argument of type 'string' is not assignable to parameter of type 'number'.
