// From: any 型：すべてを許容する「禁じ手」
let value: any = "Shake";

value = 123; // OK (型のエラーが出ないが、どこかで不具合が起きる可能性)
value.push(); // OK (トランスパイルは通る) ... 実際には数値に push はできないので実行時にエラーになる！
