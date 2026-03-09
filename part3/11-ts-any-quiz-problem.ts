// From: 理解度チェック：型定義と any（問題）
let price: any = 1000;
price = "無料";

function update(p: number) {
  console.log(p);
}

update(price); // (A)
update("0"); // (B)
