import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Log from "./pages/Log";
import Progress from "./pages/Progress";
import Goals from "./pages/Goals";
import WaterTracker from "./pages/WaterTracker";
import WorkoutLogger from "./pages/WorkoutLogger";
import FoodLogger from "./pages/FoodLogger";
import "./App.css"; // Add this file for navbar styles




function App() {
    return (
        <Router>
            <nav className="navbar">
                <NavLink to="/" className="nav-item">Dashboard</NavLink>
                <NavLink to="/log" className="nav-item">Log</NavLink>
                <NavLink to="/progress" className="nav-item">Progress</NavLink>
                <NavLink to="/goals" className="nav-item">Goals</NavLink>
                <NavLink to="/water-tracker" className="nav-item">Water</NavLink>
                <NavLink to="/workout-logger" className="nav-item">Workouts</NavLink>
                <NavLink to="/food-logger" className="nav-item">Food</NavLink>

            </nav>

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/log" element={<Log />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/water-tracker" element={<WaterTracker />} />
                <Route path="/workout-logger" element={<WorkoutLogger />} />
                <Route path="/food-logger" element={<FoodLogger />} />

            </Routes>
        </Router>
    );
}

export default App;
