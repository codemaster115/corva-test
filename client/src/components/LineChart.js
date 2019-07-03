import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const LineChart = ({ labels, values, visibleCount }) => {
  const data = {
    labels:
      labels.length > visibleCount
        ? labels.slice(labels.length - visibleCount, labels.length)
        : labels,
    datasets: [
      {
        label: "value",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data:
          values.length > visibleCount
            ? values.slice(values.length - visibleCount, values.length)
            : values
      }
    ]
  };
  return (
    <div>
      <h1>Line Chart</h1>
      <Line
        data={data}
        options={{
          scales: { xAxes: [{ type: "time", ticks: { stepSize: 20 } }] },
          legend: false,
          maintainAspectRatio: false,
          animation: false
        }}
      />
    </div>
  );
};

LineChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.number),
  values: PropTypes.arrayOf(PropTypes.number),
  visibleCount: PropTypes.number
};

LineChart.defaultProps = {
  labels: [],
  values: [],
  visibleCount: 20
};

export default LineChart;
