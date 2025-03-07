import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBus from "./pages/SearchBus";
import SelectStart from "./pages/SelectStart";
import SelectDestination from "./pages/SelectDestination";
import ViewMap from "./pages/ViewMap";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<SearchBus />} />
          <Route path="/start" element={<SelectStart />} />
          <Route path="/destination" element={<SelectDestination />} />
          <Route path="/map" element={<ViewMap />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
