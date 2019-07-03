import React from "react";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

const BarChart = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Range",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: values
      }
    ]
  };

  const maxValue = Math.max(...values);
  const stepSize = maxValue === 0 ? 1 : Math.pow(10, Math.floor(Math.log10(maxValue)));
  console.log(stepSize)
  return (
    <div>
      <h1>Bar Chart</h1>
      <Bar
        data={data}
        options={{
          scales: { yAxes: [{ ticks: { min: 0, stepSize } }] },
          maintainAspectRatio: false,
          aspectRatio: 1.5
        }}
      />
    </div>
  );
};

BarChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  values: PropTypes.arrayOf(PropTypes.number)
};

BarChart.defaultProps = {
  labels: [],
  values: []
};

export default BarChart;
