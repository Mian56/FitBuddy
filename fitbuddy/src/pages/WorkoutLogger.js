// src/pages/WorkoutLogger.js
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function WorkoutLogger() {
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
        <div style={{ padding: "20px" }}>
            <h2>Workout Logger</h2>
            <p>Log your daily workouts to stay consistent.</p>

            {/* Form */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Workout Type (e.g. Running)"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <input
                    type="text"
                    placeholder="Duration (e.g. 30 mins)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <input
                    type="text"
                    placeholder="Calories burned (optional)"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <input
                    type="text"
                    placeholder="Notes (optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <button onClick={addWorkout} style={{ padding: "5px 10px" }}>
                    Add Workout
                </button>
            </div>

            {/* Display list */}
            <ul>
                {workouts.map((workout, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        <strong>{workout.type}</strong> — {workout.duration}
                        <br />
                        <em>Calories:</em> {workout.calories} <br />
                        {workout.notes && <em>Notes:</em>} {workout.notes} <br />
                        <small style={{ color: "#666" }}>{workout.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}
