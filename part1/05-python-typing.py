# Section: 3. データ型 — 型（Type）とは？ Pythonの例
# Python — 型の宣言は不要だが、型は厳格に区別される
age = 21               # int
age = "hello"          # OK（変更できる）
print("age: " + 21)    # ❌ TypeError！ 文字列と数値は足せない
