// From: 【課題：解答例】汎用的な API レスポンス
interface ApiResponse<T> {
  data: T;
  status: number;
}

const textResponse: ApiResponse<string> = {
  data: "成功しました",
  status: 200,
};

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "Shake" },
  status: 200,
};
