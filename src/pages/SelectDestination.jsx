import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./SelectDestination.css"; // 스타일 추가

function SelectDestination() {
  const navigate = useNavigate();

  // 🚀 임시 정류장 데이터 (나중에 서버에서 받아올 예정)
  const stations = ["Station A", "Station B", "Station C", "Station D", "Station E"];

  return (
    <div className="container">
      <Header />
      <h2>Destination</h2>
      <ul className="station-list">
        {stations.map((station, index) => (
          <li key={index} className="station-item" onClick={() => navigate("/map")}>
            {station}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectDestination;
