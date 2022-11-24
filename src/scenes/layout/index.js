import React from "react";
import "../css/assessment.css";

export const LayoutIndex = () => {
  return (
    <div className="layout-container">
      <Header title={"Example Layout"} />
      <ExampleLayout />
      <Header title={"HTML/CSS"} />
      <GridLayout />
      <Header title={"Flexbox"} />
      <FlexboxLayout />
    </div>
  );
};

const Header = ({ title }) => {
  return <h1 style={{ marginTop: 30 }}>{title}</h1>;
};
const GridLayout = () => {
  return (
    <div className="container">
      <div className="col a">A</div>
      <div className="col b">B</div>
      <div className="col c">C</div>
      <div className="col d">D</div>
      <div className="col e">E</div>
    </div>
  );
};
const FlexboxLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 150,
          width: 478,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <LetterCell letter="A" portion={1} />
          <LetterCell letter="B" portion={1} />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <LetterCell letter="C" portion={1} />
          <LetterCell letter="D" portion={3} />
        </div>
        <LetterCell letter="E" portion={1} />
      </div>
    </div>
  );
};

const LetterCell = ({ letter, portion }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: portion,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#444444",
        fontSize: 30,
        color: "white",
        textAlign: "center",
        fontWeight: "normal",
      }}
    >
      <h1
        style={{
          display: "flex",
          fontSize: 30,
          color: "white",
          textAlign: "center",
          fontWeight: "normal",
          marginLeft: 20,
        }}
      >
        {letter}
      </h1>
    </div>
  );
};

export const ExampleLayout = () => {
  return (
    <div className="layout-container">
      <img
        width="478"
        alt="Screen Shot 2022-10-25 at 9 50 19 PM"
        src="https://user-images.githubusercontent.com/30187772/197916162-1c31f901-9597-49b0-8063-803ec150f9b5.png"
      ></img>
    </div>
  );
};
