import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Log from "./pages/Log";
import Progress from "./pages/Progress";

function App() {
    return (
        <Router>
            <nav style={{ padding: "10px", display: "flex", gap: "1rem", background: "#F5F8FA" }}>
                <Link to="/">Dashboard</Link>
                <Link to="/log">Log</Link>
                <Link to="/progress">Progress</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/log" element={<Log />} />
                <Route path="/progress" element={<Progress />} />
            </Routes>
        </Router>
    );
}

export default App;
