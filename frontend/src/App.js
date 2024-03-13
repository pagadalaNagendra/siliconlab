import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Video from "./Video";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Video />} />
        <Route exact path="/Video" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
