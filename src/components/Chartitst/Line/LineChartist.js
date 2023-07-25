import React, { useEffect, useRef } from 'react';
import Chartist from 'chartist';

import { LineChart } from 'chartist';

const ChartistComponent = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;
  let seq = 0;
  const delays = 80;
  const durations = 500;
  let timerId;

  useEffect(() => {
    // Create the chart instance when the component mounts
    chartInstance = new Chartist.Line(
      chartRef.current,
      data,
      {
        low: 0
      }
    );

    // Reset the sequence when the chart is created
    chartInstance.on('created', () => {
      seq = 0;
    });


    // Animations for the chart elements
    chartInstance.on('draw', data => {
      seq++;

      if (data.type === 'line') {
        data.element.animate({
          opacity: {
            begin: seq * delays + 1000,
            dur: durations,
            from: 0,
            to: 1
          }
        });
      } else if (data.type === 'label' && data.axis.counterUnits.pos === 'x') {
        data.element.animate({
          y: {
            begin: seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'label' && data.axis.counterUnits.pos === 'y') {
        data.element.animate({
          x: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'point') {
        data.element.animate({
          x1: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          x2: {
            begin: seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        });
      } else if (data.type === 'grid') {
        const pos1Key = `${data.axis.units.pos}1`;
        const pos1Value = data[pos1Key];
        const pos1Animation = {
          begin: seq * delays,
          dur: durations,
          from: pos1Value - 30,
          to: pos1Value,
          easing: 'easeOutQuart'
        };

        const pos2Key = `${data.axis.units.pos}2`;
        const pos2Value = data[pos2Key];
        const pos2Animation = {
          begin: seq * delays,
          dur: durations,
          from: pos2Value - 100,
          to: pos2Value,
          easing: 'easeOutQuart'
        };

        const animations = {
          [data.axis.units.pos + '1']: pos1Animation,
          [data.axis.units.pos + '2']: pos2Animation,
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        };

        data.element.animate(animations);
      }
    });

    // Update the chart every 12 seconds for the example
    chartInstance.on('created', () => {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(chartInstance.update.bind(chartInstance), 12000);
    });

    // Clean up the chart instance when the component unmounts
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      if (chartInstance) {
        chartInstance.detach();
      }
    };
  }, [data]);

  return <div ref={chartRef} />;
};

export default ChartistComponent;
