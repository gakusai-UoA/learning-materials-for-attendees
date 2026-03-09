// From: ジェネリクス - 例
// T という「型を受け取るための変数」を用意した定義
interface ApiResponse<T> {
  data: T;
  status: number;
}

// 使用時に T の部分へ具体的な型（string）を流し込む
const textRes: ApiResponse<string> = { data: "success", status: 200 };

// 使用時に T の部分へ別の型（User）を流し込む
const userRes: ApiResponse<User> = {
  data: { id: "1", name: "Alpha", email: "a@example.com" },
  status: 200,
};
