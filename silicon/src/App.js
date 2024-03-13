import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Video from "./Video";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
