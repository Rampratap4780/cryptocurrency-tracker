import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function LineChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Prices"]]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];

    if (historicalData && historicalData.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([new Date(item[0]).toLocaleDateString().slice(0, -5), item[1]]);
      });
      setData(dataCopy);
    } else {
      setError('No historical data available');
    }
  }, [historicalData]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const options = {
    colors: ['#FF5733'],
    backgroundColor: { fill: 'none' },
    chartArea: {
      backgroundColor: { fill: 'none' }
    },
    hAxis: {
      textStyle: { color: '#FFFFFF' }
    },
    vAxis: {
      textStyle: { color: '#FFFFFF' }
    },
    legend: {
      textStyle: { color: '#FFFFFF' }
    },
    titleTextStyle: {
      color: '#FFFFFF'
    }
  };

  return (
    <Chart
      chartType='LineChart'
      data={data}
      width="100%"
      height="400px"
      legendToggle
      options={options}
    />
  );
}

export default LineChart;
