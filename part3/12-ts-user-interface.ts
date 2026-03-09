// From: Interfaceの例
interface User {
  id: string;
  name: string;
  email: string;
  // プロパティ名の後ろに ? をつけると「あってもなくても良い（任意）」になります
  age?: number;
}

// OK: 全ての必須項目が揃っている
const staff: User = {
  id: "st-01",
  name: "Taro",
  email: "taro@example.com",
};

// NG: name が欠けているためエラーになる
const visitor: User = {
  id: "v-02",
  email: "visitor@example.com",
};
