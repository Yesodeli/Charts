import React from "react";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryTooltip,
  VictoryPie,
} from 'victory';
import { pieChartStyles } from "./style";

const CustomLabel = (props) => {
  const { datum } = props;
  return (
    <g>
      <VictoryLabel {...props} text={`${datum.y}`} />
      <VictoryTooltip
        {...props}
        x={150}
        y={150}
        orientation="top"
        pointerLength={8}
        cornerRadius={4}
        flyoutWidth={150}
        flyoutHeight={60}
        flyoutStyle={{
          fill: "#FFA726",
          stroke: "#FF9800",
          strokeWidth: 1,
          filter: "url(#dropshadow)",
        }}
      />
    </g>
  );
};

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const PieChart = ({ data }) => {
  const chartWidth = data.length * 100;
  const chartHeight = data.length * 100;

  return (
    <div>
      <VictoryPie
        theme={VictoryTheme.material}
        data={data}
        labelComponent={<CustomLabel />}
        style={pieChartStyles}
      />
    </div>
  );
};

export default PieChart;
