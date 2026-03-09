// From: 【解答】 継承とLiteral Types
interface EventItem {
  id: string;
  title: string;
}

// Literal Types を使った状態定義
type PerformanceStatus = "waiting" | "performing" | "finished";

interface StagePerformance extends EventItem {
  startTime: string;
  status: PerformanceStatus;
}

const opening: StagePerformance = {
  id: "stg-01",
  title: "オープニングセレモニー",
  startTime: "10:00",
  status: "performing",
};
