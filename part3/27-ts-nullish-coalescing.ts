// From: Nullish Coalescing (`??`)
// ?. と ?? を組み合わせた最強の形
const theme = user.settings?.theme ?? "light";

// 1. settings.theme が "dark" なら -> "dark"
// 2. settings がない、または theme がないなら -> "light" (予備が使われる)
