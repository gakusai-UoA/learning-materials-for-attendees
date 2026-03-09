// Part 6 - イベントハンドリング：onClick や onChange
// 入力内容をリアルタイムで State に入れる例
<input type="text" onChange={(e) => setName(e.target.value)} />
