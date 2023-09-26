import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import OPPage from "./components/OtherProjectsPage/OPPage";
import MLProjectsPage from "./components/MLProjectsPage/MLProjectsPage";
import CertificatesPage from "./components/CertificatePage/CertificatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/SchoolProjects" element={<OPPage />} />
        <Route path="/MLProjects" element={<MLProjectsPage />} />
        <Route path="/Certificates" element={<CertificatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
