import React from "react";
import Header from "../components/Header";
import "./ViewMap.css"; // 스타일 추가

function ViewMap() {
  return (
    <div className="container">
      <Header />
      <h2>Bus Route</h2>
      <div className="map-container">
        {/* 나중에 실제 지도 API를 추가할 자리 */}
        <p>🗺 Map will be displayed here.</p>
      </div>
    </div>
  );
}

export default ViewMap;
