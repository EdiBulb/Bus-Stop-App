import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./ViewMap.css";

// 버스 아이콘 설정
const busIcon = new L.Icon({
  iconUrl: "/bus-icon.png", // 🚨 public 폴더에 bus-icon.png 파일 추가해야 함!
  iconSize: [40, 40], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40],
});

function ViewMap() {
  const location = useLocation();
  const { startStation, destinationStation } = location.state || {};

  // 🚍 버스 위치 (처음에는 고정된 위치에서 시작)
  const [busPosition, setBusPosition] = useState({ lat: 37.7749, lng: -122.4194 });

  useEffect(() => {
    let index = 0;
    const route = [
      { lat: 37.7749, lng: -122.4194 },
      { lat: 37.7755, lng: -122.4185 },
      { lat: 37.7760, lng: -122.4175 },
      { lat: 37.7770, lng: -122.4165 }, 
    ]; // 🚨 더미 GPS 데이터 (나중에 API와 연결하면 여기에 실제 데이터 적용)

    const interval = setInterval(() => {
      if (index < route.length) {
        setBusPosition(route[index]); // 버스 위치 업데이트
        index++;
      } else {
        clearInterval(interval); // 마지막 지점에 도착하면 애니메이션 정지
      }
    }, 2000); // 2초마다 위치 변경 (애니메이션 효과)

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 정리
  }, []);

  return (
    <div className="container">
      <Header />
      <h2>Bus Route</h2>
      <MapContainer center={busPosition} zoom={15} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={busPosition} icon={busIcon}>
          <p>🚌 Bus is moving...</p>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ViewMap;
