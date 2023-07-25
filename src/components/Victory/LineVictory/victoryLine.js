import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  VictoryTooltip,
} from "victory";
import customStyle from "./style"; // Import the custom style

const CustomLabel = (props) => {
  const lastCharacter = props.datum.x.charAt(props.datum.x.length - 1); // Extracting the last character from 'x'

  return (
    <g style={customStyle.g}>
      <VictoryLabel
        {...props}
        text={lastCharacter}
        style={customStyle.label}
      />
      <VictoryTooltip
        {...props}
        x={200}
        y={250}
        orientation="top"
        pointerLength={8}
        cornerRadius={6}
        flyoutWidth={120}
        flyoutHeight={60}
        style={customStyle.tooltip}
      />
    </g>
  );
};

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const ChartComponent = ({ data }) => {
  const chartWidth = data.length * 100;
  const chartHeight = data.length * 100;

  return (
    <div>
      <VictoryChart theme={VictoryTheme.purple} width={chartWidth} height={chartHeight}>
        <VictoryLine data={data} labelComponent={<CustomLabel />} />
      </VictoryChart>
    </div>
  );
};

export default ChartComponent;
