// Section: 5. 論理演算子 — falsy と truthy
if ("hello") console.log("truthy!"); // 表示される
if ("") console.log("truthy!"); // 表示されない（falsy）
if (0) console.log("truthy!"); // 表示されない（falsy）
if (42) console.log("truthy!"); // 表示される
