import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import "./SearchBus.css"; // 스타일 추가

function SearchBus() {
  const [busNumber, setBusNumber] = useState(""); // useState는 React의 상태관리 Hook임. setBusNumber는 busNumber 값 변경 함수
  const navigate = useNavigate(); // 페이지 이동 함수

  return (
    <div className="container">
      <Header />
      <h2>What’s the number of Bus</h2>
      <input
        type="text"
        placeholder="Enter bus number"
        value={busNumber}
        onChange={(e) => setBusNumber(e.target.value)}
        className="input-field"
      />
      <Button text="Search for Your Bus" onClick={() => navigate("/start")} />
    </div>
  );
}

export default SearchBus;
