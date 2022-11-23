import React, { useState } from "react";
import "../css/assessment.css";

export const DecompIndex = () => {
  return (
    <div className="layout-container">
      <Header title={"### Q1. ReactJS Hooks"} />
      <Counter />
      <Header title={"### Q2. Events"} />
      {/* <QuestionTwo /> */}
      <ExplanationRow
        title="click 1"
        text="It's not working as you see. Solution: onClick={() => this.handleClick1()}"
      />
      <ExplanationRow
        title="click 2"
        text="It's not working as you see. Solution: this.handleClick1 = this.handleClick1.bind(this);"
      />
      <ExplanationRow title="click 3" text="It works" />
      <ExplanationRow title="click 4" text="It works" />
    </div>
  );
};

const Header = ({ title }) => {
  return <h1 style={{ marginTop: 30 }}>{title}</h1>;
};

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((curCount) => curCount + 1)}>
        Increment count
      </button>
    </>
  );
};

const ExplanationRow = ({ title, text }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "90%" }}>
      <h3 style={{ flex: 1 }}>{title}</h3>
      <h4 style={{ flex: 4, textAlign: "left" }}>{text}</h4>
    </div>
  );
};

class QuestionTwo extends React.Component {
  constructor() {
    super();
    this.name = "MyComponent";

    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = () => alert(this.name);

  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}
