import React, { useRef, useState, useMemo } from 'react';
import { scaleTime, scaleLinear } from '@visx/scale';
import { Brush } from '@visx/brush';
import { Bounds } from '@visx/brush/lib/types';

import { PatternLines } from '@visx/pattern';
import { Group } from '@visx/group';
import { LinearGradient } from '@visx/gradient';
import { max, extent } from 'd3-array';
import AreaChart from './AreaChart';
import { Brush as BaseBrush, BaseBrushState, UpdateBrush } from '@visx/brush';


// Initialize some variables




const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 30;
const PATTERN_ID = 'brush_pattern';
const GRADIENT_ID = 'brush_gradient';
export const accentColor = '#f6acc8';
export const background = '#584153';
export const background2 = '#af8baf';
const selectedBrushStyle = {
  fill: `url(#${PATTERN_ID})`,
  stroke: 'white',
};

// accessors
const getDate = (d) => new Date(d.date);
const getStockValue = (d) => d.close;
const appleStock = [
    { date: '2023-07-01', close: 150.50 },
    { date: '2023-07-02', close: 152.30 },
    { date: '2023-07-03', close: 153.20 },
    // Add more data points as needed...
  ];
  const stock = appleStock.slice(1000);
  
export function BrushChart({
  compact = false,
  width,
  height,
  margin = {
    top: 20,
    left: 50,
    bottom: 20,
    right: 20,
  },
}) {
  const brushRef = useRef(null);
  const [filteredStock, setFilteredStock] = useState(stock);

  const onBrushChange = (domain) => {
    if (!domain) return;
    const { x0, x1, y0, y1 } = domain;
    const stockCopy = stock.filter((s) => {
      const x = getDate(s).getTime();
      const y = getStockValue(s);
      return x > x0 && x < x1 && y > y0 && y < y1;
    });
    setFilteredStock(stockCopy);
  };

  const innerHeight = height - margin.top - margin.bottom;
  const topChartBottomMargin = compact ? chartSeparation / 2 : chartSeparation + 10;
  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation;

  // bounds
  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(topChartHeight, 0);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(bottomChartHeight - brushMargin.top - brushMargin.bottom, 0);

  // scales
  const dateScale = useMemo(() => {
    // Check if filteredStock is not empty or undefined before computing extent
    if (!filteredStock || filteredStock.length === 0) {
      return scaleTime({
        range: [0, xMax],
        domain: [new Date(), new Date()], // Provide default domain if filteredStock is empty
      });
    }

    return scaleTime({
      range: [0, xMax],
      domain: extent(filteredStock, getDate),
    });
  }, [xMax, filteredStock]);
  const stockScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [0, max(filteredStock, getStockValue) || 0],
        nice: true,
      }),
    [yMax, filteredStock],
  );
  const brushDateScale = useMemo(
    () =>
      scaleTime({
        range: [0, xBrushMax],
        domain: extent(stock, getDate),
      }),
    [xBrushMax],
  );
  const brushStockScale = useMemo(
    () =>
      scaleLinear({
        range: [yBrushMax, 0],
        domain: [0, max(stock, getStockValue) || 0],
        nice: true,
      }),
    [yBrushMax],
  );

  const initialBrushPosition = useMemo(
    () => ({
      start: { x: brushDateScale(getDate(stock[50])) },
      end: { x: brushDateScale(getDate(stock[100])) },
    }),
    [brushDateScale],
  );

  // event handlers
  const handleClearClick = () => {
    if (brushRef.current) {
      setFilteredStock(stock);
      brushRef.current.reset();
    }
  };

  const handleResetClick = () => {
    if (brushRef.current) {
      const updater = (prevBrush) => {
        const newExtent = brushRef.current.getExtent(
          initialBrushPosition.start,
          initialBrushPosition.end,
        );

        const newState = {
          ...prevBrush,
          start: { y: newExtent.y0, x: newExtent.x0 },
          end: { y: newExtent.y1, x: newExtent.x1 },
          extent: newExtent,
        };

        return newState;
      };
      brushRef.current.updateBrush(updater);
    }
  };

  return (
    <div>
      <svg width={width} height={height}>
        <LinearGradient id={GRADIENT_ID} from={background} to={background2} rotate={45} />
        <rect x={0} y={0} width={width} height={height} fill={`url(#${GRADIENT_ID})`} rx={14} />
        <AreaChart
          hideBottomAxis={compact}
          data={filteredStock}
          width={width}
          margin={{ ...margin, bottom: topChartBottomMargin }}
          yMax={yMax}
          xScale={dateScale}
          yScale={stockScale}
          gradientColor={background2}
        />
        <AreaChart
          hideBottomAxis
          hideLeftAxis
          data={stock}
          width={width}
          yMax={yBrushMax}
          xScale={brushDateScale}
          yScale={brushStockScale}
          margin={brushMargin}
          top={topChartHeight + topChartBottomMargin + margin.top}
          gradientColor={background2}
        >
          <PatternLines
            id={PATTERN_ID}
            height={8}
            width={8}
            stroke={accentColor}
            strokeWidth={1}
            orientation={['diagonal']}
          />
          <Brush
            xScale={brushDateScale}
            yScale={brushStockScale}
            width={xBrushMax}
            height={yBrushMax}
            margin={brushMargin}
            handleSize={8}
            innerRef={brushRef}
            resizeTriggerAreas={['left', 'right']}
            brushDirection="horizontal"
            initialBrushPosition={initialBrushPosition}
            onChange={onBrushChange}
            onClick={() => setFilteredStock(stock)}
            selectedBoxStyle={selectedBrushStyle}
            useWindowMoveEvents
            renderBrushHandle={(props) => <BrushHandle {...props} />}
          />
        </AreaChart>
      </svg>
      <button onClick={handleClearClick}>Clear</button>&nbsp;
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

// We need to manually offset the handles for them to be rendered at the right position
function BrushHandle({ x, height, isBrushActive }) {
  const pathWidth = 8;
  const pathHeight = 15;
  if (!isBrushActive) {
    return null;
  }
  return (
    <Group left={x + pathWidth / 2} top={(height - pathHeight) / 2}>
      <path
        fill="#f2f2f2"
        d="M -4.5 0.5 L 3.5 0.5 L 3.5 15.5 L -4.5 15.5 L -4.5 0.5 M -1.5 4 L -1.5 12 M 0.5 4 L 0.5 12"
        stroke="#999999"
        strokeWidth="1"
        style={{ cursor: 'ew-resize' }}
      />
    </Group>
  );
}
