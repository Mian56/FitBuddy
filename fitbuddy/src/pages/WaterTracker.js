// src/pages/WaterTracker.js
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card";

export default function WaterTracker() {
    const [cupsDrank, setCupsDrank] = useLocalStorage("cupsDrank", 0);
    const dailyGoal = 8;

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

    return (
        <PageLayout title="Water Tracker">
            <Card>
                <p style={{ fontSize: "18px", marginBottom: "15px" }}>
                    You’ve had <strong>{cupsDrank}</strong> out of {dailyGoal} cups today.
                </p>

                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                    <button
                        onClick={addCup}
                        style={buttonStyle}
                    >
                        Add Cup
                    </button>

                    <button
                        onClick={resetCups}
                        style={{ ...buttonStyle, background: "#ccc", color: "#333" }}
                    >
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
