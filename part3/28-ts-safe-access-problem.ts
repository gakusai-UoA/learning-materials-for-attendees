// From: 理解度チェック：安全なアクセス（問題）
const user = { name: "Shake", settings: null };

const result = user.settings?.theme ?? "default-ui";
