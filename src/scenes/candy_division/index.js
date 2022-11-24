import React, { useState } from "react";
import "../css/assessment.css";

export const CandyIndex = () => {
  const [n, setN] = useState(30);
  const [answers, setAnswers] = useState([]);

  const divive_candy = () => {
    if (n > 0) {
      var _answers = [];
      for (let i = 0; i < n / 2 + 1; i++) {
        // check if we can divide the candy
        if (n % (i + 1) === 0) _answers.push(i);
      }
      _answers.push(n - 1);
      setAnswers(_answers);
    }
  };
  return (
    <div className="layout-container">
      <div>
        <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
        <button onClick={divive_candy}>Divide</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {answers.map((item, index) => {
          return <h4 key={index}>{item},</h4>;
        })}
      </div>
    </div>
  );
};
