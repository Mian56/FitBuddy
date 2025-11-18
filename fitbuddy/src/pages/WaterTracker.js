// src/pages/WaterTracker.js
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function WaterTracker() {
    const [cupsDrank, setCupsDrank] = useLocalStorage("cupsDrank", 0);
    const dailyGoal = 8;

    // Reset daily water count if the date changed
    useEffect(() => {
        const lastDate = localStorage.getItem("lastWaterDate");
        const today = new Date().toLocaleDateString();

        if (lastDate !== today) {
            setCupsDrank(0);
            localStorage.setItem("lastWaterDate", today);
        }
    }, [setCupsDrank]);

    const addCup = () => {
        if (cupsDrank < dailyGoal) {
            setCupsDrank(cupsDrank + 1);
        }
    };

    const resetCups = () => {
        setCupsDrank(0);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Water Tracker</h2>
            <p>You’ve had <strong>{cupsDrank}</strong> out of {dailyGoal} cups today.</p>

            <button onClick={addCup} style={{ marginRight: "10px" }}>
                Add Cup
            </button>
            <button onClick={resetCups}>Reset</button>

            <div style={{ marginTop: "20px" }}>
                {Array.from({ length: dailyGoal }).map((_, index) => (
                    <span
                        key={index}
                        style={{
                            display: "inline-block",
                            width: "25px",
                            height: "25px",
                            margin: "5px",
                            borderRadius: "50%",
                            backgroundColor: index < cupsDrank ? "#4caf50" : "#ccc",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
