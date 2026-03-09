// From: 4-8. Filterメソッド (.filter) : 実装
const scores = [50, 90, 40, 80];

// 60点以上だけ合格リストに入れる
const passed = scores.filter((score) => score >= 60);
// [90, 80] だけが残る
