// From: Interface の継承
// 基本となる型
interface User {
  id: string;
  name: string;
}

// User の中身を全て引き継ぎ、さらに department を追加
interface StaffUser extends User {
  department: string;
  role: "admin" | "member";
}

const myProfile: StaffUser = {
  id: "st-77",
  name: "Shake",
  department: "IT部",
  role: "admin",
};
