import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

import { socket } from "./config/socket";
import { getBarChartLabels, getBarChartValues } from "./utils/range";
import * as RANGES from "./constants/range";

import logo from "./logo.svg";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState([]);
  const [threshold, setThreshold] = useState("20");

  useEffect(() => {
    const handleReceivePayload = msg => {
      if (msg.value > Number(threshold)) {
        toast.warn(`${msg.value} is greater than the threshold(${threshold})`);
      }
      setData(v => v.concat(msg));
    };

    socket.on("data", handleReceivePayload);
    return () => {
      socket.off("data", handleReceivePayload);
    };
  }, [data.length, threshold]);

  const handleChangeThreshold = e => {
    e.preventDefault();
    setThreshold(e.target.value);
  };

  const ranges = Object.entries(RANGES).map(([key, value]) => value);

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="threshold">Threshold:</label>
        <input
          type="number"
          id="threshold"
          value={threshold}
          onChange={handleChangeThreshold}
        />
      </header>
      <main className="App-main">
        <BarChart
          labels={getBarChartLabels(ranges)}
          values={getBarChartValues(data, ranges)}
        />
        <LineChart
          visibleCount={30}
          values={data.map(({ value }) => value)}
          labels={data.map(({ timestamp }) => timestamp)}
        />
        <ToastContainer
          closeOnClick
          position={"bottom-right"}
          autoClose={2000}
        />
      </main>
    </div>
  );
}

export default App;
