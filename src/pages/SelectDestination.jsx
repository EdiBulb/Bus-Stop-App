import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./SelectDestination.css";

function SelectDestination() {
  const navigate = useNavigate();
  const location = useLocation();
  const startStation = location.state?.startStation || "Unknown"; // 선택한 탑승 정류장 정보

  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    const data = ["Station 1", "Station 2", "Station 3", "Station 4", "Station 5"];
    setStations(data);
  };

  // 🚏 하차 정류장 선택 시 다음 페이지로 이동
  const handleSelectDestination = (selectedStation) => {
    navigate("/map", { state: { startStation, destinationStation: selectedStation } });
  };

  return (
    <div className="container">
      <Header />
      <h2>Select Destination</h2>
      <p className="info">You boarded at: <strong>{startStation}</strong></p> {/* 선택한 탑승 정류장 표시 */}
      <ul className="station-list">
        {stations
          .filter(station => station !== startStation) // 🚨 탑승 정류장은 제외
          .map((station, index) => (
            <li key={index} className="station-item" onClick={() => handleSelectDestination(station)}>
              {station}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SelectDestination;
