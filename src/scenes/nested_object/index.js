import React, { useState, useEffect } from "react";
import "../css/assessment.css";

export const NestedIndex = () => {
  const [json, setJson] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [text, setText] = useState({
    a: 123,
    b: "hero",
    c: [1, 2, 3],
    d: {
      e: 3,
      f: ["abc", "def"],
    },
  });

  useEffect(() => {
    try {
      setJson(JSON.parse(text));
      setIsValid(true);
    } catch (e) {
      console.log("converting error", e);
      setIsValid(false);
    }
  }, [text]);

  const objIncrement = () => {
    for (var key in json) {
      console.log("key", key, json[key]);
    }
  };

  return (
    <div className="layout-container">
      <div>
        <textarea
          cols="60"
          rows="15"
          type={"text"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        disabled={!isValid}
        style={{ backgroundColor: isValid ? "green" : "gray", color: "white" }}
        onClick={objIncrement}
      >
        Convert
      </button>
    </div>
  );
};
