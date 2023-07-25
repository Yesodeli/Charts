import React, { useEffect, useState } from 'react';
import Chartist from 'chartist';


const PieChartComponent = ({ data }) => {
  const [chart, setChart] = useState(null);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    // Function to handle chart updates every 8 seconds
    const updateChart = () => {
      chart?.chart.update();
    };

    // Create the chart on component mount
    const newChart = new Chartist.Pie('#chart', data, {
      donut: true,
      showLabel: false,
    });
    setChart(newChart);

    // Event listener to handle the 'draw' event and set animations for each slice
    newChart.on('draw', (data) => {
      if (data.type === 'slice') {
        const pathLength = data.element._node.getTotalLength();

        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px',
        });

        const animationDefinition = {
          'stroke-dashoffset': {
            id: 'anim' + data.index,
            dur: 1000,
            from: -pathLength + 'px',
            to: '0px',
            easing: Chartist.Svg.Easing.easeOutQuint,
            fill: 'freeze',
          },
        };

        if (data.index !== 0) {
          animationDefinition['stroke-dashoffset'].begin =
            'anim' + (data.index - 1) + '.end';
        }

        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px',
        });

        data.element.animate(animationDefinition, false);
      }
    });

    // Clear the timer when the component unmounts
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    // For the sake of the example, we update the chart every time it's created with a delay of 8 seconds
    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerId = setTimeout(() => {
      chart?.chart.update();
    }, 8000);

    setTimerId(newTimerId); // Store the new timerId in state

    return () => {
      clearTimeout(newTimerId); // Clear the timer when the component unmounts
    };
  }, [chart, timerId]);

  return (
    <div>
      <div id="chart" style={{ height: '50vh' }}></div>
    </div>
  );
};

export default PieChartComponent;
