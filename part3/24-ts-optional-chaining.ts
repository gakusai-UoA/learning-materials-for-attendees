// From: Optional Chaining (`?.`)
// もし profile がなくてもクラッシュしない
const age = user.profile?.age;

// 実行結果のイメージ
// user.profile がある場合   -> 20
// user.profile がない場合   -> undefined (エラーにならない！)
