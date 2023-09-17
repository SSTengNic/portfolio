import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import SchoolProjectsPage from "./components/SchoolProjectsPage";
import MLProjectsPage from "./components/MLProjectsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/SchoolProjects" element={<SchoolProjectsPage />} />
        <Route path="/MLProjects" element={<MLProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
