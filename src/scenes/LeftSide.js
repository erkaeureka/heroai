import { Button } from "@material-ui/core";
import { colors } from "../constants/colors";
import React from "react";

export const LeftSider = ({ layouts, onClickRow, selectedRow }) => {
  return (
    <div
      style={{
        display: "flex",
        width: 220,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          height: 4,
          backgroundColor: colors.web_background,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          height: 4,
          backgroundColor: colors.web_background,
        }}
      ></div>
      <RowContainer
        layouts={layouts}
        onClickRow={onClickRow}
        selectedRow={selectedRow}
      />
      <div
        style={{
          display: "flex",
          height: 4,
          backgroundColor: colors.web_background,
        }}
      ></div>
    </div>
  );
};

const RowContainer = ({ layouts, onClickRow, selectedRow }) => {
  return (
    <div
      style={{
        width: 220,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: colors.white,
        border: `1px solid ${colors.black25}`,
        borderRadius: 10,
        paddingBottom: 20,
      }}
    >
      <LeftHeader title={"Assessments"} />
      {layouts.map((item, index) => {
        return (
          <Row
            key={index}
            item={item}
            selectedRow={selectedRow}
            onClickRow={onClickRow}
            index={index}
          />
        );
      })}
    </div>
  );
};
const Row = ({ item, selectedRow, onClickRow, index }) => {
  return (
    <Button
      onClick={() => onClickRow(index)}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 5,
        backgroundColor: selectedRow === index ? colors.black25 : colors.white,
        width: "90%",
      }}
    >
      {item.icon}
      <h3 style={{ fontSize: 14, marginLeft: 10, fontWeight: "bold" }}>
        {item.name}
      </h3>
    </Button>
  );
};

const LeftHeader = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 20,
        flexDirection: "row",
        marginTop: 10,
      }}
    >
      <h4
        style={{
          color: colors.orange,
          fontSize: 11,
          fontFamily: "arial",
          fontWeight: "bolder",
        }}
      >
        {title}
      </h4>
    </div>
  );
};
