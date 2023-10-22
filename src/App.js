import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import Navcard from "./componants/Navcard";
import Prouducts from "./componants/Prouducts";
import Card from "./componants/Card";

function App() {
  return (
    <div className="App">
      <Navcard />
      <Routes>
        <Route path="/" element={<Prouducts />} />
        <Route path="card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
