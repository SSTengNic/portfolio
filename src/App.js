import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./components/HomePageParts/HomePage";
import OPPage from "./components/OtherProjectsPage/OPPage";
import MLProjectsPage from "./components/MLProjectsPage/MLProjectsPage";
import CertificatesPage from "./components/CertificatePage/CertificatePage";
import WebAppPage from "./components/WebAppPage/WebAppPage";

function App() {
    return (
        <Router>
            <Helmet>
                <title>Nicholas Portfolio</title>{" "}
                {/* Set your desired tab title here */}
            </Helmet>
            <Routes>
                <Route path="/portfolio" element={<HomePage />} />
                <Route path="/SchoolProjects" element={<OPPage />} />
                <Route path="/MLProjects" element={<MLProjectsPage />} />
                <Route path="/Certificates" element={<CertificatesPage />} />
                <Route path="/WebappProjects" element={<WebAppPage />} />
            </Routes>
        </Router>
    );
}

export default App;
