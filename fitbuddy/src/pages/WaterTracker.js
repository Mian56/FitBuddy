// src/pages/WaterTracker.js
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function WaterTracker() {
    const [cupsDrank, setCupsDrank] = useLocalStorage("cupsDrank", 0);
    const [dailyGoal, setDailyGoal] = useLocalStorage("waterGoal", 8);
    const [customGoal, setCustomGoal] = useState("");

    // Reset water count if date changed
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

    const applyCustomGoal = () => {
        const value = Number(customGoal);
        if (value > 0 && value <= 20) {
            setDailyGoal(value);
            setCustomGoal("");
        } else {
            alert("Please enter a valid daily goal between 1–20 cups.");
        }
    };

    return (
        <PageLayout title="Water Tracker">
            <Card>

                {/* Daily Goal Selector */}
                <div style={{ marginBottom: "20px" }}>
                    <h3>Daily Water Goal: {dailyGoal} cups</h3>

                    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                        {[6, 8, 10].map(num => (
                            <button
                                key={num}
                                onClick={() => setDailyGoal(num)}
                                style={{
                                    ...goalButtonStyle,
                                    background: dailyGoal === num ? "#4CAF50" : "#ddd",
                                    color: dailyGoal === num ? "white" : "black"
                                }}
                            >
                                {num} cups
                            </button>
                        ))}
                    </div>

                    {/* Custom Goal */}
                    <div style={{ display: "flex", gap: "8px" }}>
                        <input
                            type="number"
                            placeholder="Custom"
                            value={customGoal}
                            onChange={(e) => setCustomGoal(e.target.value)}
                            style={inputStyle}
                        />
                        <button onClick={applyCustomGoal} style={goalButtonStyle}>
                            Set
                        </button>
                    </div>
                </div>

                {/* Main counter */}
                <p style={{ fontSize: "18px", marginBottom: "15px" }}>
                    You’ve had <strong>{cupsDrank}</strong> out of {dailyGoal} cups today.
                </p>

                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                    <button onClick={addCup} style={buttonStyle}>Add Cup</button>
                    <button onClick={resetCups} style={{ ...buttonStyle, background: "#ccc", color: "#333" }}>
                        Reset
                    </button>
                </div>

                {/* Progress Dots */}
                <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap" }}>
                    {Array.from({ length: dailyGoal }).map((_, index) => (
                        <span
                            key={index}
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                margin: "6px",
                                backgroundColor: index < cupsDrank ? "#4CAF50" : "#e0e0e0",
                                transition: "0.25s",
                            }}
                        />
                    ))}
                </div>

            </Card>
        </PageLayout>
    );
}

const buttonStyle = {
    padding: "10px 16px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px"
};

const goalButtonStyle = {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px"
};

const inputStyle = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "80px"
};
