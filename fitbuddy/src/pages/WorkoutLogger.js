// src/pages/WorkoutLogger.js
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

const WorkoutLogger = () => {
    const [workouts, setWorkouts] = useLocalStorage("workouts", []);
    const [type, setType] = useState("");
    const [duration, setDuration] = useState("");
    const [calories, setCalories] = useState("");
    const [notes, setNotes] = useState("");

    const addWorkout = () => {
        if (!type.trim() || !duration.trim()) return;

        const newWorkout = {
            type,
            duration,
            calories: calories || "N/A",
            notes: notes || "",
            date: new Date().toLocaleString()
        };

        setWorkouts([...workouts, newWorkout]);

        setType("");
        setDuration("");
        setCalories("");
        setNotes("");
    };

    return (
        <PageLayout title="Workout Logger">
            <Card>

                {/* Form */}
                <div style={formContainer}>
                    <input
                        type="text"
                        placeholder="Workout Type (e.g., Running)"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        placeholder="Duration (e.g., 30 mins)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        style={inputStyle}
                    />
                    <input
                        type="number"
                        placeholder="Calories burned (optional)"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        placeholder="Notes (optional)"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        style={inputStyle}
                    />

                    <button onClick={addWorkout} style={addBtnStyle}>
                        Add Workout
                    </button>
                </div>

                {/* Workout List */}
                <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                    {workouts.length === 0 && (
                        <p style={{ opacity: 0.6 }}>No workouts logged yet.</p>
                    )}

                    {workouts.map((workout, index) => (
                        <li
                            key={index}
                            style={{
                                padding: "12px 0",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            <strong style={{ fontSize: "17px" }}>
                                {workout.type}
                            </strong>
                            <div style={{ marginTop: "6px" }}>
                                <span><b>⏱ Duration:</b> {workout.duration}</span><br/>
                                <span><b>🔥 Calories:</b> {workout.calories}</span><br/>
                                {workout.notes && (
                                    <span><b>📝 Notes:</b> {workout.notes}</span>
                                )}
                            </div>


                            <small style={{ color: "#888", display: "block", marginTop: "6px" }}>
                    Logged on {workout.date}
                </small>
            </li>
            ))}
        </ul>

</Card>
</PageLayout>
);
};

export default WorkoutLogger;


// ------------------ Styles ------------------ //

const formContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
};

const inputStyle = {
    padding: "12px",
    fontSize: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
};

const addBtnStyle = {
    padding: "12px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
};
