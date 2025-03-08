import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./SelectStart.css";

function SelectStart() {
  const navigate = useNavigate();
  const [stations, setStations] = useState([]); // 정류장 목록 초기값을 빈 배열로 설정!

  // 🚀 정류장 데이터를 불러오는 함수 (현재는 더미 데이터)
  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      // 현재는 더미 데이터 (나중에 실제 API 연동 예정)
      const data = ["Station 1", "Station 2", "Station 3", "Station 4", "Station 5"];
      setStations(data);
    } catch (error) {
      console.error("정류장 데이터를 불러오는 중 오류 발생:", error);
    }
  };
  // 🚏 정류장 선택 시, 다음 페이지로 데이터 전달
  const handleSelectStation = (selectedStation) => {
    navigate("/destination", { state: { startStation: selectedStation } });
  };

  return (
    <div className="container">
      <Header />
      <h2>Select Start Station</h2>
      <ul className="station-list">
        {stations.map((station, index) => (
          <li key={index} className="station-item" onClick={() => handleSelectStation(station)}>
            {station}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectStart;
