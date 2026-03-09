-- Part 5 - データベースの初期化 (ワークショップ 0)
-- schema.sql
CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  content TEXT NOT NULL
);
