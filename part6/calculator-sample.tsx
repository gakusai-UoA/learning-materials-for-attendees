import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const inputNum = (n: string) => setDisplay(display === "0" ? n : display + n);
  const clear = () => setDisplay("0");

  const exec = () => {
    const tokens: (number | "+" | "-")[] = [];
    let current = "";

    for (const ch of display) {
      if (ch === "+" || ch === "-") {
        tokens.push(Number(current));
        tokens.push(ch);
        current = "";
      } else {
        current += ch;
      }
    }
    if (current !== "") {
      tokens.push(Number(current));
    }

    let result = tokens[0] as number;
    for (let i = 1; i < tokens.length; i += 2) {
      const op = tokens[i] as "+" | "-";
      const value = tokens[i + 1] as number;
      if (op === "+") result += value;
      if (op === "-") result -= value;
    }

    setDisplay(String(result));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>My Calculator</h2>
      <div style={{ fontSize: "2em", background: "#eee", padding: "10px" }}>{display}</div>
      <button onClick={clear}>AC</button>
      <div>
        {[1, 2, 3, "+"].map((v) => (
          <button key={v} onClick={() => (v === "+" ? inputNum("+") : inputNum(String(v)))}>
            {v}
          </button>
        ))}
      </div>
      <button onClick={exec}>=</button>
    </div>
  );
}

