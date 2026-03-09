// From: Interface で「機能（メソッド）」を定義する
interface Staff {
  id: number;
  name: string;
  // 「こんにちは」と挨拶するメソッド（戻り値なし）
  sayHello(): void;
}

const staff: Staff = {
  id: 101,
  name: "Shake",
  sayHello() {
    console.log(`Hi, I'm ${this.name}!`);
  },
};

staff.sayHello(); //呼び出す
