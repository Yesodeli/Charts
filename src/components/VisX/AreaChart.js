import React from 'react';
import { AreaClosed, Line, Bar } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import { withTooltip, Tooltip } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';
import { AxisBottom, AxisLeft, AxisRight } from '@visx/axis';
import defaultStyles from './DefaultSyles';

// Set up some constants
const tooltipStyles = {
  background: 'white',
  color: 'black',
  padding: '0.5rem',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

// Accessors for the data
const getDate = (d) => new Date(d.date);
const getStockValue = (d) => d.close;

// Define the AreaChart component
const AreaChart = ({
  data,
  width,
  height,
  margin,
  yMax,
  hideBottomAxis,
  hideLeftAxis,
  gradientColor,
  showTooltip,
  hideTooltip,
  tooltipData,
  tooltipTop,
  tooltipLeft,
}) => {
  // Define bounds
  const xMax = width - margin.left - margin.right;
  const yMaxWithMargin = height - margin.top - margin.bottom;

  // Define scales
  const xScale = scaleTime({
    range: [0, xMax],
    domain: [Math.min(...data.map(getDate)), Math.max(...data.map(getDate))],
  });
  const yScale = scaleLinear({
    range: [yMaxWithMargin, 0],
    domain: [0, yMax],
    nice: true,
  });

  // Bisector for tooltip
  const bisectDate = bisector((d) => new Date(d.date)).left;

  // Tooltip handler
  const handleTooltip = (event) => {
    const { x } = localPoint(event) || { x: 0 };
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    const d = x0 - getDate(d0) > getDate(d1) - x0 ? d1 : d0;
    showTooltip({
      tooltipData: d,
      tooltipLeft: x,
      tooltipTop: yScale(getStockValue(d)),
    });
  };

  return (
    <div>
      <svg width={width} height={height}>
        <LinearGradient id="area-gradient" from={gradientColor} to="#ffffff" />
        <rect x={0} y={0} width={width} height={height} fill="url(#area-gradient)" rx={14} />
        <AreaClosed
          data={data}
          x={(d) => xScale(getDate(d))}
          y={(d) => yScale(getStockValue(d))}
          yScale={yScale}
          strokeWidth={1}
          stroke="transparent"
          fill={gradientColor}
          curve={null}
          defined={(d) => !isNaN(getStockValue(d))}
        />
        <Bar
          x={0}
          y={0}
          width={width}
          height={height}
          fill="transparent"
          rx={14}
          onTouchStart={handleTooltip}
          onTouchMove={handleTooltip}
          onMouseMove={handleTooltip}
          onMouseLeave={() => hideTooltip()}
        />
        {!hideBottomAxis && (
          <AxisBottom
            top={yMaxWithMargin}
            scale={xScale}
            numTicks={width > 520 ? 10 : 5}
            labelFormat={timeFormat('%b %d')}
            stroke={gradientColor}
            tickStroke={gradientColor}
            tickLabelProps={() => ({
              fill: gradientColor,
              fontSize: 11,
              textAnchor: 'middle',
            })}
          />
        )}
        {!hideLeftAxis && (
          <AxisLeft
            scale={yScale}
            numTicks={5}
            tickFormat={(value) => `$${value}`}
            labelProps={{
              fill: gradientColor,
              textAnchor: 'middle',
              fontSize: 11,
              fontFamily: 'Arial',
            }}
            stroke={gradientColor}
            tickStroke={gradientColor}
            tickLabelProps={() => ({
              fill: gradientColor,
              fontSize: 11,
              textAnchor: 'end',
            })}
          />
        )}
        {tooltipData && (
          <g>
            <Line
              from={{ x: tooltipLeft, y: yMaxWithMargin }}
              to={{ x: tooltipLeft, y: tooltipTop }}
              stroke="#ccc"
              strokeWidth={1}
              pointerEvents="none"
              strokeDasharray="5,2"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop}
              r={4}
              fill={gradientColor}
              stroke="white"
              strokeWidth={2}
              pointerEvents="none"
            />
          </g>
        )}
      </svg>
      {tooltipData && (
        <div>
          <Tooltip
            top={tooltipTop - 12}
            left={tooltipLeft + 12}
            style={tooltipStyles}
            key={Math.random()}
          >
            {`$${getStockValue(tooltipData)}`}
          </Tooltip>
          <Tooltip
            top={yMaxWithMargin - 14}
            left={tooltipLeft}
            style={{
              ...defaultStyles,
              minWidth: 72,
              textAlign: 'center',
              transform: 'translateX(-50%)',
            }}
          >
            {timeFormat('%b %d')(getDate(tooltipData))}
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default withTooltip(AreaChart);
