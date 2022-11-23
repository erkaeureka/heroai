import React, { useCallback, useState } from "react";
import { Layout } from "antd";
import _ from "lodash";
import { colors } from "../constants/colors";
import {
  TimelineOutlined,
  ViewColumnOutlined,
  BugReportOutlined,
  BookOutlined,
  GroupOutlined,
} from "@material-ui/icons";
import { CandyIndex } from "./candy_division";
import { DecompIndex } from "./decomp";
import { LayoutIndex } from "./layout";
import { NestedIndex } from "./nested_object";
import { TrainIndex } from "./train_sorting";
import { LeftSider } from "./LeftSide";
import "./css/assessment.css";

const IconStyle = { color: "#b2bfd5", fontSize: 22 };
const layouts = [
  {
    name: "Candy Division",
    icon: <TimelineOutlined style={IconStyle} />,
    layout: <CandyIndex />,
  },
  {
    name: "Decomp",
    icon: <ViewColumnOutlined style={IconStyle} />,
    layout: <DecompIndex />,
  },
  {
    name: "Layout",
    icon: <BugReportOutlined style={IconStyle} />,
    layout: <LayoutIndex />,
  },
  {
    name: "Nested Object",
    icon: <BookOutlined style={IconStyle} />,
    layout: <NestedIndex />,
  },
  {
    name: "Train sorting",
    icon: <GroupOutlined style={IconStyle} />,
    layout: <TrainIndex />,
  },
];

const ChallengeIndex = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const RightLayout = useCallback(() => {
    if (_.isEmpty(layouts)) return <div>No content</div>;
    else return layouts[selectedIndex].layout;
    // eslint-disable-next-line
  }, [selectedIndex]);

  return (
    <div>
      <Layout
        style={{
          minHeight: "90vh",
          flexDirection: "row",
          margin: 3,
          backgroundColor: colors.web_background,
        }}
      >
        <LeftSider
          layouts={layouts}
          selectedRow={selectedIndex}
          onClickRow={(index) => {
            setSelectedIndex(index);
          }}
        />
        <Layout
          className="layout-container"
          style={{
            margin: 3,
            backgroundColor: colors.web_background,
          }}
        >
          <RightLayout />
        </Layout>
      </Layout>
    </div>
  );
};

export default ChallengeIndex;
