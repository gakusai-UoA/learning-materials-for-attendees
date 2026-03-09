// Section: 6. null と undefined — null はどこからやってくる？
// DOM 操作 — 要素が見つからないと null
const el = document.getElementById("not-exist"); // null

// API レスポンス — 値がないフィールドが null
const user = { name: "Shake", nickname: null };

// React — state の初期値を null にするパターン
const [data, setData] = useState(null);
