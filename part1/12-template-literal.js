// Section: 3. データ型 — テンプレートリテラル
const name = "Shake";
const age = 20;

// + で連結（読みにくい…）
const msg1 = name + "さんは" + age + "歳です";
//出力 : "Shakeさんは20歳です"

// テンプレートリテラル（読みやすい！）
const msg2 = `${name}さんは${age}歳です`;
//出力 : "Shakeさんは20歳です"
