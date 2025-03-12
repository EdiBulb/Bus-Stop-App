export const fetchStations = async () => {
    // once API provided, add URL here, it is dummy data now, (나중에 팀원이 API를 제공하면 여기에 실제 URL 넣기)
    const response = await fetch("https://api.example.com/stations");
    const data = await response.json();
    return data;
  };
  
  export const fetchBusLocation = async (busId) => {
    // call Bus GPS(버스 GPS 데이터 가져오기)
    const response = await fetch(`https://api.example.com/bus/${busId}/location`);
    const data = await response.json();
    return data;
  };
  