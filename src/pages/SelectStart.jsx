import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./SelectStart.css"; // 스타일 추가

function SelectStart() {
  const navigate = useNavigate();
  const stations = ["Station 1", "Station 2", "Station 3", "Station 4", "Station 5"];

  return (
    <div className="container">
      <Header />
      <h2>Start</h2>
      <ul className="station-list">
        {stations.map((station, index) => (
          <li key={index} className="station-item" onClick={() => navigate("/destination")}>
            {station}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectStart;
