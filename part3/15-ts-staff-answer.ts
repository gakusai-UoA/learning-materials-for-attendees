// From: 【課題 1】実行委員スタッフの管理 - 【解答】
interface Staff {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string; // Optional
  isLeader: boolean;
}

const staff: Staff = {
  id: 101,
  name: "Shake",
  email: "shake@example.com",
  isLeader: true,
  // phoneNumber はなくてもOK
};
