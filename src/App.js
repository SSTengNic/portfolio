import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import HomePage from "./components/HomePageParts/HomePage";
import OPPage from "./components/OtherProjectsPage/OPPage";
import MLProjectsPage from "./components/MLProjectsPage/MLProjectsPage";
import CertificatesPage from "./components/CertificatePage/CertificatePage";
import WebAppPage from "./components/WebAppPage/WebAppPage";
import InternshipPage from "./components/InternshipPage/InternshipPage";
function ScrollToTopOnMount() {
    let pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Alternatively, you can use:
        // document.documentElement.scrollTop = 0;
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTopOnMount />
            <Helmet>
                <title>Nicholas Portfolio</title>{" "}
                {/* Set your desired tab title here */}
            </Helmet>
            <Routes>
                <Route path="/portfolio" element={<HomePage />} />
                <Route path="/StartupMisc" element={<OPPage />} />
                <Route path="/MLProjects" element={<MLProjectsPage />} />
                <Route path="/Certificates" element={<CertificatesPage />} />
                <Route path="/WebappProjects" element={<WebAppPage />} />
                <Route path="/Internships" element={<InternshipPage />} />
            </Routes>
        </Router>
    );
}

export default App;
